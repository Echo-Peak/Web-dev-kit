var webpack = require('webpack');
var path = require('path');
var fs = require('fs')
var production = false;
var colorize = require('colors');
var enableSourceMaps = false;
var net = require('net');

const Server = require('./scripts/client-server');
Server.connect(3000);
let socket = Server.getSocket();


var minifyJS = ~process.argv.indexOf('-minify') ? true : false;


socket.on('connect', function (socket) {
    console.log('weback connected!');
});

socket.on('command-quit' ,function(){
  console.log("quiting");
  process.exit();
});
socket.on('command-webpack-restart' ,function(){
  process.exit();
});


var stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding( 'utf8' );

stdin.on('data', function ( key) {
  if ( key === '\u0072' ) { // leter r
     socket.emit('restart-webpack');
     setTimeout(process.exit,200);
   }
   if ( key === '\u0003' ) { // leter ctrl + c
        socket.emit('quit-event');
        setTimeout(process.exit ,100)

    }
});

module.exports = {
    entry: {
      'main': path.resolve(__dirname ,'app/render/index.js')
    },
    target:'node',
    output: {
          path:`${__dirname}/app/render/compiled`,
        filename: '[name].js'
    },
    cache: true,
    watch:true,


    module: {
        loaders: [
           {
               test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'app/render'),
               loader: 'babel',
               query:{
                   presets:['stage-0' ,'es2015'],
                   plugins:['transform-es2015-modules-commonjs','transform-decorators-legacy']
               }
          }
      ]

    },
resolve: {
        extensions: ['.js','.jsx',''],
        modulesDirectories: ['node_modules']
    },
node:{
  setImmediate:'empty',
  fileSystem:'empty'
},
plugins: [
    function(){
    this.plugin("done", function(stats){
        if (stats.compilation.errors && stats.compilation.errors.length){
          //prevent gulp > task > INIT from clearing console if theres a error here
          process.env.blockConsole = true;
          //console BEEP
          socket.emit('logger' ,'WEBPACK ERROR');
          console.log("\007"+stats.compilation.errors[0].error);


          return
        }
        console.log('press r to reload webpack'.yellow)
        socket.emit('webpack-reload');
    });
}

],

externals:{
    electron:'commonjs electron'


}

}
