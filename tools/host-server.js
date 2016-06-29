var app = require('express')();
var socketIO = require('socket.io');
var http = require('http').Server(app);
var io = socketIO(http);
var child_process = require('child_process');
require('colors');

module.exports = class HostServer{
  constructor(url ,port ,done){
    this.done = done;
    this.port = port;
    this.socket = null;
    this.connect = this.connect;
    this.getSocket = this.getSocket
    let io = socketIO(http);
    io.on('connection' , this.init.bind(this));
    this.listen.call(this);
  }
  init(socket){
    this.socket = socket;
    socket.on('webpack-reload',this.webpack.bind(this));
    socket.on('logger',this.logger.bind(this));
    socket.on('quit',this.quit.bind(this));
    socket.on('exit',this.exit.bind(this));
    socket.on('restart-webpack',this.restartWebpack.bind(this));
    socket.on('restart-electron',this.restartElectron.bind(this));
    process.on('SIGINT' ,this.quit.bind(this));

  }
  webpack(){
    this.socket.emit('reload');
    this.socket.broadcast.emit('reload');
    console.log('reloading')
  }
  logger(msg){
    console.log('MSG: -> ' ,msg)
  }
  listen(){
    http.listen(this.port,e => {
      setTimeout(()=>{
          this.done();
      })

      console.log(`Running @ ${this.port}`.green)
    })

  }
  quit(){
    this.socket.broadcast.emit('quit');
    setTimeout(process.exit ,400);
  }

  exit(){
    this.socket.emit('quit');
    setTimeout(process.exit ,100);
  }
  restartElectron(){
    child_process.exec('electron main/index.js port='+this.port);
  }
  restartWebpack(){
    child_process.exec('start webpack');
  }
  getSocket(){

    return this.socket
  }

}
