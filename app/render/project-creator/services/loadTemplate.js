let fs = require('fs');
let path = require('path');


export default function(_module , file){
  let getPath = path.resolve(process.cwd() ,`render/windows/project-creator/${_module}/${file}.html`);
  try{
    return fs.readFileSync(getPath)
  }catch(e){
    return `ERROR WITH '${file}' from ${_module}`
  }
}
