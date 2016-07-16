let _paths_ = require('./paths')();
const Server = require(_paths_.server);


let windows = {}
let keys = Object.keys(_paths_.windows);

function createWindow(filename){
  if(~keys.indexOf(filename)){

    return require(`../windows/${filename}`)().loadURL(_paths_.windows[filename]);

  }else{
    Server.getSocket().emit('logger' ,`Cant create window '${filename}'`);
    return false
  }
}

module.exports = {
  load(filename){
    windows[filename] = createWindow(filename);
    return windows[filename];
  },
  get(windowName){
    return windows[windowName];
  }
}
