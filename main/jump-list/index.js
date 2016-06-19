var path = require('path')
let jumpListFactory = function(program ,args , title , desciption ,iconPath , iconIndex){
  return {
    program,
    arguments:args,
    title,
    desciption,
    iconPath,
    iconIndex
  }
}

let iconPath = path.resolve(__dirname,'compiled/icons');

let newProject = jumpListFactory(process.execPath , 'new' , 'New Project' ,'opens project pannel' ,iconPath+'/sample.png' ,1);
let quickApp = jumpListFactory(process.execPath , 'quick' , 'start quick app' ,'opens a basic project' ,iconPath+'/sample.png' ,1);

module.exports =  [newProject ,quickApp];
