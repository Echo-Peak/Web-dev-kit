let path = require('path');
let electron = require('electron');
import loadTemplate from '../services/loadTemplate';

import projectPannelUi from './project-pannel';
import PannelController from './main-controller';
import projectList from './project-list';

console.log('sss')

export let projectPannel = angular.module('project-pannel',[])
//COMPILEd
.directive('projectList',['$compile',projectList])
.controller('PannelController',['$scope',PannelController])
.directive('projectPannelUi',projectPannelUi)
.directive('projectEdit',projectEdit);

function projectEdit(){
  return {
    restric:'E',
    template:loadTemplate('project-edit')
  }
}
