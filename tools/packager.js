var net = require('net');
var child_process = require('child_process');

console.log('Connected')


var clients =[];
net.createServer(function(socket){
  console.log('client connected' ,clients.length)
clients.push(socket);

  socket.on('data',function(data){
    var data = data.toString();
    console.log(data)

    if(data == 'kill'){
      process.exit(0)
    }
    if(data == 'restart'){


      setTimeout(function(){

      clients.forEach((sock)=>{
        sock.destroy();
        clients.length  = 0;
      });
      child_process.exec('gulp init -child' ,function(){
        //process.exit(0)
      })
      })

      //process.exit(0)
    }
    clients.forEach((sock)=>{
      sock.write(data)
    })
  });

  socket.on('error',function(){
    clients.forEach((sock)=>{
      sock.destroy();
    });
  });

}).listen(3555);
