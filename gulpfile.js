serverCallback();
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sassify = require('gulp-sass');
//let injectDeps = require('./tools/dep-injector')();
var concat = require('gulp-concat');
var net = require('net');
var socketIO = require('socket.io');
var socketIOClient = require('socket.io-client');
var child_process = require('child_process');
var jadeify = require('gulp-jade');
var app = require('express')();
var path = require('path');
var backupService = require('./scripts/backup-service');
var watch = require('gulp-watch');
var hostServer = require('./scripts/host-server');
var Server = new hostServer('localhost' , 3000 ,serverCallback.done); //host server for webpack ,  electron , render process


let client = socketIOClient.connect('http://localhost:'+3000, {reconnect: true});

function serverCallback(){

  var _done;
  serverCallback.done = function(){
    try{ _done() }catch(e){}

  }
  serverCallback.init = function(done){
    _done = done;
  }
}

process.on('SIGINT',function(){
  client.emit('quit-event'); //writes to host-server
  console.log("exiting");
  setTimeout(function(){
    process.exit()
  },100)
})

client.on('command-webpack-reload',function(){
  console.log('Webpack reloading'.red)
});
client.on('command-logger',function(msg){
  console.log(`MSG: ${msg}`.yellow)
});


let backupDest = path.resolve('F:/' ,'website related/app backups/current');
~process.argv.indexOf('-backup') && new backupService(process.argv[process.argv.indexOf('-backup') + 1],backupDest); //intervals calculated in mins
(process.argv.indexOf('-gulp-only') < 0 ) && child_process.execSync('start webpack');

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

gulp.task('init' ,['injectDeps','server' ,'scss','jadeify','electron' ,'watches']);
gulp.task('inject-deps',injectDeps);
gulp.task('server',serverCallback.init);
gulp.task('scss',scss);
gulp.task('jadeify',_jadeify);
gulp.task('electron',electron);
gulp.task('watches',watches);


function injectDeps(){
  child_process.fork('./scripts/update-deps');
}

function electron(done){
  child_process.exec('electron app/main/index.js')
  done();
}

gulp.task('reload',function(done){
  try{
    _enableServer && client.emit('external-reload');
    done()
  }catch(e){
    done()
  }
});



gulp.task('restart',function(done){
    try{
      client.emit('restart-electron');
      done();
    }catch(e){
      done()
    }



});
function scss(done){
  var stream = gulp.src(`app/render/windows/${scss.src}/**/*.scss`)
  .pipe(plumber(plumberHandler(done)))
  .pipe(sassify())
  .pipe(concat('styles.css'))
  .pipe(gulp.dest(`app/render/windows/${scss.src}`));
stream.on('end' ,function(){

      try{
        _enableServer && client.emit('external-reload');
      }catch(e){
        done()
      }
})

}

function _jadeify(done){

    return gulp.src(_jadeify.src || 'app/render/main.jade')
    .pipe(plumber(plumberHandler(done)))
    .pipe(jadeify())
    .pipe(plumber())
    .pipe(gulp.dest(_jadeify.dest || './app/render/compiled'))
    .on('end' ,function(){
    try{
      _enableServer && client.emit('external-reload');
      done();
    }catch(e){
      done()
    }
  })
}




function watches(){
  _jadeify.src = null;
  let jadePaths = [
    'app/render/main.jade',
    'app/render/**/view/*.jade'
  ];

  watch(jadePaths , (e) =>{
    _jadeify.src = path.resolve(e.base ,e.relative);

    switch(e.relative){
      case 'main.jade':{_jadeify.dest = path.resolve(__dirname ,'render/compiled')};break;
      default:{
        let x = e.relative.split('\\');
        _jadeify.dest = path.resolve(__dirname , `render/${x[0]}/view`);
      }
    }
   gulp.start('jadeify');
  });

  watch('app/render/**/view/*.scss' ,(e) =>{ gulp.start('scss') });
  watch('app/res/**/*' ,s => gulp.start('reload'));
  watch('app/main/**/*' ,s => gulp.start('restart'));
 }
