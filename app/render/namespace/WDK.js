import angularBootstrap from './angular-bootstrap';
import localStorageSetup from './local-storage-setup';
import Statefull_store from './statefull_store';
import setupPrototypes from './prototype-setup';
let DB = require('node-localdb');

function setupEnv(){
  process.env._res = process.env.INIT_CWD+'/app/res';
  process.env._compiled = process.env.INIT_CWD+'/app/render/compiled';
  process.env.database = process.env.INIT_CWD+'/app/db';

}
class wdk{
  constructor(){
    //localStorageSetup();
    setupEnv();
    this.db = function(){
      let schemas = {}
      return {
        use(databaseName){
        let schemasKeys = Object.keys(schemas);

          if(~schemasKeys.indexOf(databaseName)){
            return schemas[databaseName];
          }else{
            schemas[databaseName] = DB(`${process.env.database}/${databaseName}.json`);
            return schemas[databaseName]
          }
        }
      }
    }


    
    this.states = {
      init:new Statefull_store({cacheLimit:100}),
      get:e => this.states.init
    }
    // this.deps = [
    //   this.db(),
    //   this.states.get()
    // ];

    this.angularApp = angularBootstrap(this.states.get(), this.db()); //non angular dependancys


  }

  mountAs(windowName){
    window[windowName] = this
  }

}

export let WDK = new wdk()
