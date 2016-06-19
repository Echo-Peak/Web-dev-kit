
let path = require('path');
let {BrowserWindow} = require('electron');

var windows = {}
class WindowManager{
  constructor(){
    this.load = this.load
  }
  create(name , show , options , file){
    let filePath = path.resolve('./compiled' ,file);
    windows[name] = new BrowserWindow(options);
    show && windows[name].show();
    windows[name].loadURL(`file:///${filePath}.html`);

  }
  main(){
    let options = {
      width:1400,
      height:1000,
      show:true
    };

    this.create('main',true ,options ,'main');
    windows['main'].webContents.openDevTools();

  }
  load(windowName){
    try{this[windowName]()}catch(e){}

  }
  reload(windowName){

  }

}

module.exports = WindowManager
