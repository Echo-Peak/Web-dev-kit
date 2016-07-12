let path = require('path');
let child_process = require('child_process');
let platform = process.platform;


function install_win32(){
child_process.exec('npm ')
}
function install_darwin(){
  console.log("darwin installer not impleted yet");
}
function install_linux(){
  console.log("linux installer not impleted yet");
}


//currently support win32
switch(process.platform){
  case 'win32':install_win32();break;
  case 'darwin':install_darwin();break;
  case 'linux':install_linux();break;

}
