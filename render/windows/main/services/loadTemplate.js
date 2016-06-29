let path = require('path');
let fs = require('fs');

export default function(module , file){
  let getPath = path.resolve(process.env._windows,`main/${module}/${file}.html`);

  try{
    return fs.readFileSync(getPath ,'utf8','r');

  }catch(e){

    return `ERROR LOADING '${file}' from ${getPath}`
  }
}
