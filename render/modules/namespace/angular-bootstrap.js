import {projectPannel} from '../pannel';
import {_console} from '../console';
import $loadProject from '../services/$load-project';
import $projectBuilder from '../services/$project-builder';
import $projects from '../services/$projects';
import $storage from '../services/$storage';

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
  _console.name
];
let thirdParty = [
    'ngAnimate',
    'ngMaterial',
    'ngAria'
];

let all = modules.concat(thirdParty);
export default function(){
  let app = angular.module('WDK',all)
  .service({
    '$loadProject':$loadProject,
    '$projectBuilder':$projectBuilder,
    '$projects':$projects,
    '$storage':$storage,
  })
  .controller('mainController' ,new mainController().controller);
  return app
}
