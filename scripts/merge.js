const fs = require('fs');
const CSON = require('cson');
let path = require('path');
require('colors');
let packageJSON = fs.readFileSync('./package.json');
packageJSON = JSON.parse(packageJSON.toString());

let buildOptions = CSON.load('./build.cson');




let rootPath = process.cwd();
fs.createReadStream('./package.json')
.pipe(fs.createWriteStream('./package.old.json'));

process.nextTick(function(){
  let merge = Object.assign(packageJSON , buildOptions);

console.log('merged',"package.json".cyan , 'and','build.cson'.cyan);
fs.writeFile('./package.json' ,JSON.stringify(merge ,null ,4))


});
