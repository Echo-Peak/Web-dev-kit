import {projectPannel} from '../pannel';
import {_console} from '../console';
import $loadProject from '../services/$load-project';
import $projectBuilder from '../services/$project-builder';
import $projects from '../services/$projects';
import $storage from '../services/$storage';
import $appState from '../services/$appState';
import {Router} from '../router';
import {projectCreator} from '../project-creator';

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
  Router.name,
  projectCreator.name
];
let thirdParty = [
    'ngAnimate',
    'ngMaterial',
    'ngAria',
    'ui.router'
];

let all = modules.concat(thirdParty);

/*
non-angular arguments passed from {class} wdk
@params {storeInstance} instance of Statefull_store
*/
export default function(storeInstance , database){
  let app = angular.module('WDK',all)
  .service({
    '$loadProject':$loadProject,
    '$projectBuilder':$projectBuilder,
    '$projects':$projects,
    '$storage':$storage(database),
    //'$appState':$appState(storeInstance)
  })
  .controller('mainController' ,new mainController().controller);
  return app
}
