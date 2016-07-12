const fs = require('fs');
const path = require('path');
const CSON = require('cson');
const fsX = require('fs-extra');

let deps = CSON.load('./deps.cson');
const angularDeps = Object.keys(deps.angular);
const otherDeps = Object.keys(deps.other);


let dest = `${process.cwd()}/render/compiled`;
let node_modules = function(currentRootDir) {

  let dirlist = fs.readdirSync(currentRootDir);

    if(~dirlist.indexOf('node_modules') || dirlist.length < 1){
      return currentRootDir
    }

    let parent = currentRootDir.split('\\');
    parent.pop();
    parent = parent.join('\\');

    return node_modules(parent);

}
node_modules = `${node_modules(__dirname)}\\node_modules`;


function destDirlist(){
  fs.readdir(dest ,function(err ,dirlist){
       let withoutExt = dirlist.map(e => e.replace(/\.[a-z]+$/,''));
        angularDeps.forEach(function(filename ,index){

          if(~withoutExt.indexOf(filename)){ return }
          console.log('Compiling -> ' ,filename);
          createStream(deps.angular[filename] ,filename);

        });
        //your deps

        otherDeps.forEach(function(filename){

          if(~withoutExt.indexOf(filename)){ return }
          console.log('Compiling -> ' ,filename);
          createStream(deps.other[filename] ,filename);

        });
  });

}
destDirlist()
//
// fs.readdir(__dirname+'/compiled' ,getDirList);
 let stream;
 let _contents_= '';

function createStream(depPath ,filename){
  stream = fs.createReadStream(`${node_modules}/${depPath}`);
    stream.on('data' ,function(data){
      _contents_ += data.toString()
    });
    stream.on('end' ,function(){
      fs.writeFile(`${dest}/${filename}.js` ,_contents_ ,'utf8'  ,function(err){
        if(err){
          console.log(err)
        }

      });
    });


}
//
//
//
// function firstRun(){
//   angularDeps.forEach(function(file){
//     let depPath = path.resolve(process.cwd() ,deps.angular[file]);
//     createStream(depPath , file);
//   })
//
// }
//
// function getDirList(err, dirlist){
//   let withoutExt = dirlist.map(e => e.replace(/\.[a-z]+$/,''));
//
// if(dirlist.length === 0){
//     firstRun();
//   }else{
//     //ANGULAR DEPS
//     angularDeps.forEach(function(filename ,index){
//
//       if(~withoutExt.indexOf(filename)){return}
//       console.log('Compiling -> ' ,filename);
//       createStream(deps.angular[filename] ,filename);
//
//     });
//     //your deps
//
//     otherDeps.forEach(function(filename){
//
//       if(~withoutExt.indexOf(filename)){ return }
//       console.log('Compiling -> ' ,filename);
//       createStream(deps.other[filename] ,filename);
//
//     });
//
//
//
//
//   }
//
//
//
// }
