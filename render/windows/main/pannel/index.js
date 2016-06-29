let path = require('path');
let electron = require('electron');
import loadTemplate from '../services/loadTemplate';

import projectPannelUi from './project-pannel';
import PannelController from './main-controller';
import projectList from './project-list';

function openProject($appState , $windows){
  return function(scope ,elm ,attr){
    $appState.set('open-project-path',process.env.USERPROFILE ,true)
    let props = {
      properties:['openDirectory'],
      defaultPath:$appState.get('open-project-path')
    }
    let processProject = function(__path){
      $appState.set('open-project-path',__path[0] ,true)
      $windows.open('project-creator');
      console.log($windows)
    }

    elm.on('click',function(){

      electron.remote.dialog.showOpenDialog(props ,processProject)
    });
  }
}

export let projectPannel = angular.module('project-pannel',[])
.directive('openProject',['$appState','$windows',openProject])
//.directive('newProject',['$appState',newProject])
.directive('projectList',['$compile',projectList])
//.controller('projectList_controller' ,['$scope','$storage',projectList_controller])
.controller('PannelController',['$scope',PannelController])
.directive('projectPannelUi',projectPannelUi)
.directive('projectEdit',projectEdit);

function projectEdit(){
  return {
    restric:'E',
    template:loadTemplate('pannel','project_edit')
  }
}
