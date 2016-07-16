var webpack = require('webpack');
var path = require('path');


module.exports = {
    entry: {
      'bundle': path.resolve(__dirname ,'src/entry.js')
    },
    output: {
          path:`${__dirname}/built/public`,
        filename: '[name].js'
    },
    cache: true,
    watch:true,


    module: {
        loaders: [
           {
               test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
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

    });
}

]


}
