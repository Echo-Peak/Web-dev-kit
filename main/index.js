'use strict';

var windowManager = require('./windows');
var net = require('net');
const electron = require('electron');
const app = electron.app;
const ipcMain = electron.ipcMain;
var child_process = require('child_process');
var setJumpList = require('./jump-list');
var mainPort  = 3000;

var io = require('socket.io-client');
var socket = io.connect('http://localhost:'+mainPort, {reconnect: true});
socket.on('connect',function(sock){
  console.log('electron connected')

});
socket.on('restart',e => {
  socket.emit('restart-electron')
    app.exit(0);
});

socket.on('quit' ,app.quit)


let window = new windowManager();

app.setName('Web developer Kit(WDK)');
app.setUserTasks(setJumpList);

app.on('ready', function(){
  window.load('main')
});

app.on('window-all-closed', function () {

  if (process.platform !== 'darwin') {

  }
  //  app.quit();
    socket.emit('on-quit')
      socket.emit('quit')
});

app.on('activate', function(){

});


app.on('before-quit',function(){
 socket.emit('on-quit')
  socket.emit('quit')
 process.nextTick(app.exit.bind(null ,0))
})
