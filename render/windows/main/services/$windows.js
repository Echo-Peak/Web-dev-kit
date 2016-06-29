let {BrowserWindow} = require('electron').remote;
let path = require('path');

export default class $windows{

  constructor(){
  //  throw 'THIS DOES NOT DO WHAT I WANT'
    this.windows = {}
    this.open = this.open;
    this.close = this.close;
    this.init.bind(this)()
  }
  open(windowName){

    this.windows[windowName].show();

  }
  close(windowName){
    this.windows[windowName].hide();
  }
  create(name ,options){
    this.windows[name] = new BrowserWindow(options);
    this.windows[name].loadURL(`file:///${process.env._compiled}/${name}.html`);
  }
  get(windowName){
    return this.windows[windowName]
  }
  projectCreator(){
    let options = {
      width:1150,
      height:720,
      show:false,
      center:true,
      title:'Project Creator',
      skipTaskbar:true,
      resizable:false
    };
    this.create('project-creator',options);
  }
  init(){
    this.projectCreator()
  }
}
