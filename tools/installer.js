var createInstaller = require('electron-installer-squirrel-windows');

let args = process.argv.slice(2).map(e => e.replace(/"/g,''));
var opts = {
  path:args[0],
  out:args[1],
  name:args[2],
  product_name:args[3],
  authors:args[4],
  description:args[5],
  title:args[6],
  setup_icon:args[7],
  version:args[8] || "1.0"
}

createInstaller(opts, function done (err) {
    console.log('creating electron installer for 'opts.name)
  if(err){
    console.log('ERROR: creating installer',err)
    process.exit()
  }

 })
