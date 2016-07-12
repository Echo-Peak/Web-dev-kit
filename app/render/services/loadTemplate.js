let path = require('path');
let fs = require('fs');

export default function(file){
  let getPath = path.resolve(process.env._compiled,`${file}.html`);

  try{
    return fs.readFileSync(getPath ,'utf8','r');

  }catch(e){

    return `ERROR LOADING '${file}' from ${getPath}`
  }
}
