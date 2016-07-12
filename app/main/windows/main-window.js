let {BrowserWindow} = require('electron');
module.exports = function(){
  return new BrowserWindow({
    width:1400,
    height:1000,
    show:true,
    center:true,
    title:'Web Dev Kit (WDK)'
  })
}
