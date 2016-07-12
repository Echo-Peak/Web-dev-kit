import {projectPannel} from '../pannel';
import {_console} from '../console';
import $loadProject from '../services/$load-project';
import $projectBuilder from '../services/$project-builder';
import $projects from '../services/$projects';
import $storage from '../services/$storage';
import $appState from '../services/$appState';

class mainController{
  constructor(){
    mainController.state = {}
  }
  state(){
    return mainController.state
  }
  controller($scope){

  }
}
let modules = [
  projectPannel.name,
  _console.name,
];
let thirdParty = [
    'ngAnimate',
    'ngMaterial',
    'ngAria'
];

let all = modules.concat(thirdParty);

/*
non-angular arguments passed from {class} wdk
@params {storeInstance} instance of Statefull_store
*/
export default function(storeInstance){
  let app = angular.module('WDK',all)
  .service({
    '$loadProject':$loadProject,
    '$projectBuilder':$projectBuilder,
    '$projects':$projects,
    '$storage':$storage,
    '$appState':$appState(storeInstance)
  })
  .controller('mainController' ,new mainController().controller);
  return app
}
