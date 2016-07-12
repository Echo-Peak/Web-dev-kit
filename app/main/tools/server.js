var mainPort  = 3000;
var io = require('socket.io-client');
var app = require('electron').app;
var socket;


var getter = function(){
  return  socket
}
function connectServer(_port){

     socket = io.connect('http://localhost:'+_port, {reconnect: true});
    // socket.on('connect',e => console.log('electron connected'))
    //
    // socket.on('restart',e => {
    //   socket.emit('restart-electron')
    //     app.exit(0);
    // });
    //   socket.on('quit' ,app.quit)
}


module.exports = {
  connect:_port => connectServer(_port),
  getSocket(){
    return getter()
  }
}
