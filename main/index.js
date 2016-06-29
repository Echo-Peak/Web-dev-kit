'use strict';
// const WINDOWS = {
//   main:require('./windows/main-window')
// };
const Server = require('./tools/server'); Server.connect(3000);
const electron = require('electron');
const app = electron.app;
const setJumpList = require('./jump-list');
const {BrowserWindow} = electron;
const path = require('path');
app.setName('Web developer Kit(WDK)');
app.setUserTasks(setJumpList);


app.on('ready', function(){
  //WINDOWS.main.loadURL(`./render/windows/main/index.html`);
  var main = new BrowserWindow({
    width:1400,
    height:1000,
    show:true,
    center:true
  });

  main.loadURL(path.resolve(process.cwd() ,'render/windows/main/main.html'));
});

app.on('window-all-closed', function () {

    Server.getSocket().emit('on-quit');
    Server.getSocket().emit('quit');
});

app.on('activate', function(){

});


app.on('before-quit',function(){
 Server.getSocket().emit('on-quit');
  Server.getSocket().emit('quit');
 process.nextTick(app.exit.bind(null ,0))
})
