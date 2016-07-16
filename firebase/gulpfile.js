var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sassify = require('gulp-sass');
var concat = require('gulp-concat');
var jadeify = require('gulp-jade');
var path = require('path');
var watch = require('gulp-watch');
let server = require('browser-sync').create();
let webpack = require('webpack');

function consoleBeep(msg){
  process.stdout.write('\007' +msg );
}
function plumberHandler(done){

  return {
    errorHandler:function(err){
      consoleBeep((err.message).yellow);
      done(done);
    }
  }
}


gulp.task('init' ,['scss','jadeify','server' ,'watches']);

gulp.task('injectDeps',injectDeps);
gulp.task('server',_server);
gulp.task('scss',scss);
gulp.task('jadeify',_jadeify);
gulp.task('electron',electron);
gulp.task('watches',watches);



function _server(done){
  server.init({
      server: './built/public',
      port: 7100,
      ui:{
        port:7101
      },

      ui:false,
      notify:false
  });
}


function scss(done){

  return gulp.src(`src/**/*.scss`)
  .pipe(plumber(plumberHandler(done)))
  .pipe(sassify())
  .pipe(concat('styles.css'))
  .pipe(gulp.dest(`built/public`))
  .pipe(server.reload({stream:true}))
}

function _jadeify(done){
    return gulp.src('src/index.jade')
    .pipe(plumber(plumberHandler(done)))
    .pipe(jadeify())
    .pipe(plumber())
    .pipe(gulp.dest('built/public'))
    .pipe(server.reload({stream:true}))
}

function webpackify(done){
    webpackify(require('./webpack.config') ,function(err){
      if(err){
        done();
        console.log('WEBPACK ERROR: '+err);
        return
      }
      console.log('reloading');
      done()
    })
}



function watches(){

  watch('src/index.jade' ,(e) =>{ gulp.start('jadeify') });
  watch('src/**/*.scss' ,(e) =>{ gulp.start('scss') });

 }
