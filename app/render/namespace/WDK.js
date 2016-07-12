import angularBootstrap from './angular-bootstrap';
import localStorageSetup from './local-storage-setup';
import Statefull_store from './statefull_store';
import setupPrototypes from './prototype-setup';

function setupEnv(){
  process.env._windows = process.env.INIT_CWD+'/render/windows';
  process.env._res = process.env.INIT_CWD+'/res';
  process.env._compiled = process.env.INIT_CWD+'/render/compiled';
  process.env._modules = process.env.INIT_CWD+'/render/modules';
  process.env._main = process.env.INIT_CWD+'/render/windows/main';
  process.env._projectCreator = process.env.INIT_CWD+'/render/windows/project-creator';

}
class wdk{
  constructor(){
    localStorageSetup();
    setupEnv();

    this.states = {
      init:new Statefull_store({cacheLimit:100}),
      get:e => this.states.init
    }

    this.angularApp = angularBootstrap(this.states.get()); //non angular dependancys


  }

  mountAs(windowName){
    window[windowName] = this
  }

}

export let WDK = new wdk()
