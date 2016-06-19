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
var http = require('http').Server(app);
var io = socketIO(http);
var gulpSeries = require('gulp-series');
var path = require('path');
var renderProcess;
var watch = require('gulp-watch');
var mainPort = 3000;
var renderPort = 3550;


  function ioRef(){
    var s;
    let actions = {
      init(socket){
        s = socket;
      },
      get(){
        return s
      }
    }

    return actions
  }
let ref = ioRef();

let o = 0;
function serverSetup(done){
  io.on('connection', function (socket){
    o++;
   console.log('connected');
   ref.init(socket);


   //this is events from webpack & electron!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  socket.on('webpack-reload' ,e =>{
      socket.emit('reload');
      socket.broadcast.emit('reload');
     console.log('reloading')
   });

 socket.on('logger' ,e =>{

    console.log('MSG: -> ' ,e)
  });
  socket.on('on-quit', e => {

    socket.broadcast.emit('quit');
    setTimeout(process.exit ,100);
  });
  socket.on('exit', function(){
    socket.emit('quit');
    setTimeout(process.exit ,100);
  });
  socket.on('restart-electron',function(){
    child_process.exec('electron main/index.js port='+mainPort);
  });

process.on('SIGINT' ,function(){
  console.log('exiting')
  socket.broadcast.emit('quit');
  setTimeout(process.exit ,500);
});

});

http.listen(mainPort, function () {

  console.log('listening on ',mainPort);
});

}



serverSetup()

renderProcess = socketIO.listen(renderPort);



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




//gulp.task('init' ,['create-local-client','electron' ,'final' , 'jadeify']);
gulpSeries.registerTasks({

  'create-local-client':createClient,
  'jadeify':_jadeify,
  'scss':scss,
  'electron':electron,
  'watches':watches
});

gulpSeries.registerSeries('init',['create-local-client' ,'jadeify' ,'scss' ,'electron' ,'watches'])

child_process.execSync('start webpack');


var sock;

function createClient(done){

  renderProcess.on('connection',(sock)=>{
    sock.emit('connect');


  });
  setTimeout(done ,3000);

};

function electron(done){
  child_process.exec('electron main/index.js port='+mainPort);
  done();
}

gulp.task('reload',function(done){
  console.log('reloading')
  //ref.get().emit('reload');
  renderProcess.emit('reload')
  done()
});



gulp.task('restart',function(done){

  ref.get().emit('restart');

  done();
});
function scss(done){
  var stream = gulp.src('render/modules/**/*.scss')
  .pipe(plumber(plumberHandler(done)))
  .pipe(sassify())
  .pipe(concat('styles.css'))
  .pipe(gulp.dest('./compiled'));
stream.on('end' ,function(){
  ref.get().emit('reload');
 renderProcess.emit('reload')
  done()
})

}

function _jadeify(done){

    var stream = gulp.src('render/windows/*.jade')
    .pipe(plumber(plumberHandler(done)))
    .pipe(jadeify())
    .pipe(plumber())
    .pipe(gulp.dest('./compiled'));
  stream.on('end' ,function(){
      ref.get().emit('reload');
      renderProcess.emit('reload') //REMEBER THIS IS SERVER!!!! i am emiting to client "webpack & electron" of these events
    done()
  })
}



function watches(){
  //  gulp.watch('render/modules/**/*.scss' ,['scss' ,'reload'])
  //  gulp.watch('render/windows/*.jade' ,['jadeify' ,'reload']);
  // gulp.watch('./res/**/*' ,['reload']);
  watch('render/modules/**/*.scss' ,s => gulp.start('scss'));
  watch(['render/windows/*.jade' ,'render/modules/**/*.jade'] ,s => gulp.start('jadeify'));
  watch('res/**/*' ,s => gulp.start('reload'));
  watch('main/**/*' ,s => gulp.start('restart'));
}
