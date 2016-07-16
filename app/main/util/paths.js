const path = require('path');

module.exports = function(){
  let cwd = process.cwd();
  let res = e => path.resolve(e);

  let _paths_ = {
    windows:{
      main:res(`${cwd}/app/render/compiled/main.html`)
    },
    resource:res(`${cwd}/app/res`),
    jumpList:res(`${cwd}/app/main/jump-list`),
    windowCreator:res(`${cwd}/app/main/util/window-creator`),
    server:res(`${cwd}/scripts/client-server`),
    ipcServer:res(`${cwd}/app/main/util/ipc-server`),
    storage:null
  }
  return _paths_


}
