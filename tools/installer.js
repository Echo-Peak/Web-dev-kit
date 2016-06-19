var createInstaller = require('electron-installer-squirrel-windows')
var opts = {
  path:'./some app i created',
  out:'./OUT',
  name:'someapp',
  product_name:'FOOBAR',
  authors:'red snake studios',
  description:'this is not bad',
  title:'floops',
  setup_icon:'./error32px.ico',
  version:'1.18'
}
createInstaller(opts, function done (err) { })
