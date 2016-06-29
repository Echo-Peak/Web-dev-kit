serverCallback();
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sassify = require('gulp-sass');
var concat = require('gulp-concat');
var net = require('net');
var socketIO = require('socket.io');
var child_process = require('child_process');
var jadeify = require('gulp-jade');
var fs = require('fs');
var app = require('express')();
var $templateCache = require('gulp-angular-templatecache');
var gulpSeries = require('gulp-series');
var path = require('path');
var backupService = require('./tools/backupService');
var watch = require('gulp-watch');
var hostServer = require('./tools/host-server');
var Server = new hostServer('localhost' , 3000 ,serverCallback.done); //host server for webpack ,  electron , render process


function serverCallback(){

  var _done;
  serverCallback.done = function(){
    _done();
  }
  serverCallback.init = function(done){
    _done = done;
  }
}

//must use - in argv
let backupDest = path.resolve('F:/' ,'website related/app backups/current');
~process.argv.indexOf('-backup') && new backupService(process.argv[process.argv.indexOf('-backup') + 1],backupDest); //intervals calculated in mins

var _enableServer = true;
~process.argv.indexOf('-no-server') && (_enableServer = false);




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



gulpSeries.registerTasks({
  'server':serverCallback.init,
  'jadeify':_jadeify,
  'scss':scss,
  'electron':electron,
  'watches':watches

});

gulpSeries.registerSeries('init',['server' ,'electron' ,'watches']);

(process.argv.indexOf('-gulp-only') < 0 ) && child_process.execSync('start webpack');



function electron(done){
  child_process.exec('electron main/index.js port=' + 3000);
  done();
}

gulp.task('reload',function(done){
  console.log('reloading');
  Server.getSocket().emit('reload');
  done()
});



gulp.task('restart',function(done){

    Server.getSocket().emit('restart');

  done();
});
function scss(done){
  var stream = gulp.src(`render/windows/${scss.src}/**/*.scss`)
  .pipe(plumber(plumberHandler(done)))
  .pipe(sassify())
  .pipe(concat('styles.css'))
  .pipe(gulp.dest(`render/windows/${scss.src}`));
stream.on('end' ,function(){
      _enableServer && Server.getSocket().emit('reload');

  done()
})

}

function _jadeify(done){

//use require extentions
    var stream = gulp.src(_jadeify.src)
    .pipe(plumber(plumberHandler(done)))
    .pipe(jadeify())
    .pipe(plumber())
    .pipe(gulp.dest(_jadeify.dest));
  stream.on('end' ,function(){
    _enableServer && Server.getSocket().emit('reload');

    done()
  })
}




function watches(){
  _jadeify.src = null;
  let jadePaths = [
    'render/windows/project-creator/project-creator.jade',
    'render/windows/project-creator/**/*.jade',
    'render/windows/main/main.jade',
    'render/windows/main/**/*.jade'
  ];
  let scssPaths = [
    'render/windows/project-creator/**/*.scss',
    'render/windows/main/**/*.scss',
  ];

  watch(jadePaths , (e) =>{
    _jadeify.src = path.resolve(e.base ,e.relative);
    _jadeify.dest = path.resolve(e.base ,e.relative).replace(/\w+\.jade$/,'');
    gulp.start('jadeify');
  });

  watch('render/windows/**/**/*.scss' ,(e) =>{
      switch(e.relative.match(/[a-z0-9\-]+/i)[0]){
        case 'main':scss.src = 'main';break;
        case 'project-creator':scss.src = 'project-creator';break;
      }
      gulp.start('scss');
  });

  watch('res/**/*' ,s => gulp.start('reload'));
  watch('main/**/*' ,s => gulp.start('restart'));
 }
