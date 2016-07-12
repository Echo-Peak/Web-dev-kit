require('colors');
let fsExtra = require('fs-extra');
module.exports = class Backup{
  constructor(interval ,dest){
    console.log("Backup service started!".green);
    this.interval = interval;
    let callback = function(){
      console.log('Backup completed'.green);
    }
    this.work = ()=>{
      this.copyTo(dest ,callback)
    }
    let millisecs = (interval * 60) * 1000;
    let minimumTime = 2;
    if(interval < minimumTime){
      throw new Error('interval cant be less than the minimum of 2 mins');
    }

    this.clock = setInterval(this.work ,millisecs)
  }
  copyTo(dest ,callback){
    let date = new Date().toString();
    let dateData = date.split(' ');
    let month = dateData[1];
    let day = dateData[2];
    let year = dateData[3];
    let time = new Date().toLocaleTimeString().replace(/:/g,'.');

    let dateFormat = `${month} ${day} ${year} - ${time}`;
    fsExtra.copy(process.cwd() , `${dest}\\WDK - ${dateFormat}` ,function(err){
      console.log('starting backup'.yellow);
      if(err){
        console.log(err);
        return
      }
      callback()
    })
  }
}
