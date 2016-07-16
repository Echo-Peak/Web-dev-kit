var fs = require('fs');
let child_process = require('child_process');

let rules = {
  rules:{
    '.read':false,
    '.write':false
  }
}
let RC = {
  projects:{
    wdk:'web-dev-kit'
  }
}
let setup = {
  public: "public",
  ignore: [
    "firebase.json",
    "**/.*",
    "**/node_modules/**"
  ],
  database: {
    "rules": "database.rules.json"
  },
  hosting: {
    "public": "public",
    rewrites: [
      {
        source: "**",
        destination: "/index.html"
      }
    ]
  }
}
function error(msg){
  console.log(msg)
}

fs.writeFile(`./firebase/built/firebase.json`,JSON.stringify(setup) ,e => e !== null ? error(e) : null)
fs.writeFile(`./firebase/built/.firebaserc`,JSON.stringify(RC) ,e => e !== null ? error(e) : null)
fs.writeFile(`./firebase/built/database.rules.json`,JSON.stringify(rules) ,e => e !== null ? error(e) : null)

process.nextTick(function(){
  child_process.exec(`cmd  /c "cd /d firebase/built && firebase deploy"` ,function(err){
    if(err){
      console.log(err);
      return
    }
    console.log('executed succsesfully')
  })
});
