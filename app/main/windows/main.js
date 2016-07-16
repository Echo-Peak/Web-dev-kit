let {BrowserWindow} = require('electron');
let _paths_ = require('../util/paths')();
const Server = require(_paths_.server);

module.exports =  function(){
let x = new BrowserWindow({
    width:1400,
    height:1000,
    show:true,
    center:true,
    title:'Web Dev Kit (WDK)'
  });

  x.on('close' , function(){

    Server.getSocket().emit('quit-event');
    Server.getSocket().emit('logger' ,'exiting');

  });

  return x
}
