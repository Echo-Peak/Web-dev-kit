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
  //  this.connect = this.connect;
    this.getSocket = this.getSocket
    let io = socketIO(http);
    io.on('connection' , this.init.bind(this));
    this.listen.call(this);

  }
  init(socket){
    this.socket = socket;

    socket.on('logger',function(msg){
      socket.emit('command-logger' ,msg);
      socket.broadcast.emit('command-logger' ,msg);
    });

    socket.on('restart-electron',function(){
      socket.emit('command-restart-electron');
      socket.broadcast.emit('command-restart-electron');
      let x;
      clearTimeout(x);

      x = setTimeout(function(){
        console.log('ELECTRON HAS BEEN RESTARTED')
        child_process.exec('electron app/main/index.js');
      },1000);

    });


    socket.on('webpack-restart',e => {
      socket.emit('command-webpack-restart');
      socket.broadcast.emit('command-webpack-restart');
      setTimeout(function(){
        child_process.exec('start webpack');
      },1000)
    });

    socket.on('webpack-reload',e => {
      console.log("webpack RELOADING".green);
      socket.emit('command-reload');
      socket.broadcast.emit('command-reload');
    });

    socket.on('external-reload',e => {
      console.log("external RELOADING".green);
      socket.emit('command-reload');
      socket.broadcast.emit('command-reload');
    });

    socket.on('quit-event',e => {
      socket.emit('command-quit');
      socket.broadcast.emit('command-quit');
      setTimeout(process.exit ,1000);
    });

  }
  listen(){
    http.listen(this.port,e => {
      setTimeout(()=>{
          this.done();
      })

      console.log(`Running @ ${this.port}`.green)
    })

  }

  getSocket(){

    return this.socket
  }

}
