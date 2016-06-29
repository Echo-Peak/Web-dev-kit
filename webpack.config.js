var webpack = require('webpack');
var path = require('path');
var fs = require('fs')
var production = false;
var colorize = require('colors');
var enableSourceMaps = false;
var net = require('net');
var minifyJS = ~process.argv.indexOf('-minify') ? true : false;

var port  = 3000;

var io = require('socket.io-client');
var socket = io.connect('http://localhost:'+port, {reconnect: true});

socket.on('connect', function (socket) {
    console.log('weback connected!');
});
socket.on('quit' ,process.exit);
process.on('SIGINT' ,function(){
  socket.emit('exit');
  socket.emit('quit');
  setTimeout(process.exit ,500)
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
      process.exit();
    }
});

module.exports = {
    entry: {
      'main': path.resolve(path.resolve(__dirname ,'render/windows/main/index')),
      'projectCreator': path.resolve(path.resolve(__dirname ,'render/windows/project-creator/index'))
    },
    target:'node',
    output: {
          path:`${__dirname}/render/windows/compiled`,
        filename: '[name].js'
    },
    cache: true,
    watch:true,


    module: {
        loaders: [
           {
               test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'render'),
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
          console.log("\007"+stats.compilation.errors[0].error);


          return
        }
        console.log('press r to reload webpack'.yellow)
        socket.emit('reload');
        socket.emit('webpack-reload');
    });
}

],

externals:{
    electron:'commonjs electron',
    // react:'commonjs react',
    // reactDOM:'commonjs react-dom',
    // ReactRouter:'commonjs react-router',
    // redux:'commonjs redux',

}

}
