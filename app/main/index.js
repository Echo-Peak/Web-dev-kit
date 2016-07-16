'use strict';

let path =require('path');

const _paths_ = require('./util/paths')();
const Server = require(_paths_.server);
Server.connect(3000);
const electron = require('electron');
const app = electron.app;
const setJumpList = require(_paths_.jumpList);

const ipc  = require(_paths_.ipcServer);
let windowCreator = require(_paths_.windowCreator);


app.setName('Web developer Kit(WDK)');
app.setUserTasks(setJumpList);



app.on('ready', function(){

  let mainWindow = windowCreator.load('main');


//  ipc(WINDOWS , Server.getSocket());

});

Server.getSocket().on('command-quit',function(){
  process.exit(0);
});
Server.getSocket().on('command-restart-electron',function(){
  Server.getSocket().emit('logger' ,'quiting');
  setTimeout(function(){
    process.exit(0);
  },500)

});


app.on('window-all-closed', function (e) {
    //e.preventDefault();
    app.quit()
});

app.on('activate', function(){

});


app.on('before-quit',function(e){//Emitted before the application starts closing its windows
 //  e.preventDefault();
 //  Server.getSocket().emit('restart-electron');
 //  Server.getSocket().emit('logger' ,'before quit');
 //  Server.getSocket().emit('gobble' ,'1');
 //  setTimeout(function(){
 //    process.exit(0);
 //  },1000)
 //
 // process.exit(0);
})
app.on('will-quit',function(e){//Emitted when all windows have been closed and the application will quit.
 //  e.preventDefault();
 //  Server.getSocket().emit('restart-electron');
 //  Server.getSocket().emit('logger' ,'quiting');
 //  Server.getSocket().emit('gobble' ,'2');
 //  //Server.getSocket().emit('quit');
 // //process.nextTick(app.exit.bind(null ,0))
})
