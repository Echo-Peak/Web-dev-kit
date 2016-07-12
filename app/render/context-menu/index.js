let electron  = require('electron');
const remote = electron.remote;
import {contextMenuOptions} from './menu';
let {Menu , MenuItem} = electron.remote;

const menu = new Menu()
const menuItem = new MenuItem(contextMenuOptions);
menu.append(menuItem);


window.addEventListener('contextmenu' ,function(e){
  e.preventDefault();
  menu.popup(remote.getCurrentWindow())
},false);
