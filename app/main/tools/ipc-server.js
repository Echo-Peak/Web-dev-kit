let electron = require('electron');
let ipcMain = electron.ipcMain;


module.exports = function(_windows ,socket){
ipcMain.on('open-window',function(sender ,msg){
  socket.emit('logger' ,'opening')
  _windows[msg].show();
});
ipcMain.on('close-window',function(sender ,msg){
  socket.emit('logger' ,'closing')
  _windows[msg].close();
});

ipcMain.on('minimized-window',function(sender ,msg){
  socket.emit('logger' ,'minimizeing')
  _windows[msg].minimize();
});

ipcMain.on('hide-window',function(sender ,msg){
  socket.emit('logger' ,'hidding')
  _windows[msg].hide();
});
}
