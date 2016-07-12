const child_process = require('child_process');
require('colors');
let path = require('path');
console.log('runing packager'.green);

let platform = process.platform;
let arch = process.arch;
let appname = 'Web Dev Kit - alpha'
let src = path.resolve(`./app`);
let dest = path.resolve(`./dist`);


let packagerCLI = `electron-packager "${src}" "${appname}" --platform=${platform} --arch=${arch}`;

switch(platform){
  case 'win32':{
    child_process.exec(`cmd /c "cd /d ${dest} && ${packagerCLI}"` ,function(err ,m){
      if(err){
        console.log(`${err}`.red);
        return
      }
      console.log('Build successful!!'.green)
  });
  }break;
  //case 'darwin':terminal = 'cmd';break;
//  case 'linux':terminal = 'cmd';break;
}
