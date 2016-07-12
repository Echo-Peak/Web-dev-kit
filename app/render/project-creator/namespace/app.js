import projectDescription from './project-description';
import projectTechnologys from './project-technologys';
import projectBuildSystem from './project-build-system';
import projectCompletion from './project-completion';
import ProjectController from './project-controller';
import autoAdjustWidth from '../functional-directives/auto-adjust-width';
import $msg from '../services/$msg';

angular.module('project-creator',['ngMaterial','ngAria' ,'ngAnimate'])
.directive('projectDescription' ,projectDescription)
.directive('projectTechnologys' ,projectTechnologys)
.directive('projectBuildSystem' ,projectBuildSystem)
.directive('projectCompletion' ,projectCompletion)
.directive('autoAdjustWidth',autoAdjustWidth)
.service('$msg' ,['$mdToast',$msg])
.controller('ProjectController' ,['$scope','$msg',ProjectController]);

//
// .controller('mainController' , function($scope){
//   this.currentDirectory = process.env.INIT_CWD;
//   this.outputDirectory = process.env.INIT_CWD;
//   this.techs = [
//     'Angular 1x',
//     'Angular 2x',
//     'React',
//     'Vue',
//     'D3',
//     'React Native',
//     'High charts',
//     'JQuery',
//     'Elm',
//     'Knockout'
//   ];
//   this.buildSystems = [
//     'gulp',
//     'webpack',
//     'nodemon',
//     'grunt'
//   ];
//
//   this.type = [
//     'react',
//     'angular',
//     'express',
//     'nodeJS',
//     'Type Script',
//     "electron",
//     "react Native"
//   ];
//   let whenDone =(type ,dir)=>{
//
//     if(type == 'src'){
//         $scope.$applyAsync(()=>{
//       this.currentDirectory =dir[0];
//     })
//   }else if(type == 'output'){
//       $scope.$applyAsync(()=>{
//     this.outputDirectory =dir[0];
//     })
//   }
//
//     console.log(dir)
//   }
//
//
//   this.openDirectory = function(type){
//     console.log('click')
//     electron.remote.dialog.showOpenDialog({properties:['openDirectory']} ,whenDone.bind(this,type))
//   }
//
// });
