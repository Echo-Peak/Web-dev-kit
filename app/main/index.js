'use strict';
let WINDOWS = {
  main:require('./windows/main-window'),
  create:function(_server){
    let keys = Object.keys(WINDOWS);
    keys.forEach(function(_window){
      if(_window === 'create'){
        return
      }

    WINDOWS[_window]  = WINDOWS[_window](_server);
    })
  }
};

const Server = require('./tools/server');
Server.connect(3000);
const electron = require('electron');
const app = electron.app;
const setJumpList = require('./jump-list');
const {BrowserWindow} = electron;
const path = require('path');
const ipc  = require('./tools/ipc-server');
process.env._windowDir = path.resolve(process.cwd() ,'render/compiled');

app.setName('Web developer Kit(WDK)');
app.setUserTasks(setJumpList);



app.on('ready', function(){
  WINDOWS.create(Server.getSocket());

  WINDOWS.main.loadURL(process.env._windowDir +'/main.html');
  ipc(WINDOWS , Server.getSocket());


  WINDOWS.main.on('close' , function(){

    Server.getSocket().emit('quit-event');
    Server.getSocket().emit('logger' ,'exiting');

  });


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
