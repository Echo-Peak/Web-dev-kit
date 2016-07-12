let {BrowserWindow ,ipcMain} = require('electron');
module.exports = function(socket){
  let x =  new BrowserWindow({
    width:1200,
    height:768,
    show:false,
    center:true,
    title:'Project Creator - create project',
    id:'project-creator'
  });

  x.on('close',function(e){
    e.preventDefault();
    socket.emit('logger' ,`closeing ${x.id}`);
    x.hide();
  });

  return x
}
