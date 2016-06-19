import angularBootstrap from './angular-bootstrap';
import localStorageSetup from './local-storage-setup';


class wdk{
  constructor(){
    localStorageSetup();
    this.angularApp = angularBootstrap();

  }

  mountAs(windowName){
    window[windowName] = this
  }

}

export let WDK = new wdk()
