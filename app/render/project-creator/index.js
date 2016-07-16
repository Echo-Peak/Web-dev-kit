import projectCreatorController from './controller';
import projectDescription from './description';
import projectTechnologys from './technologys';
import projectBuildSystem from './build-system';
import projectCompletion from './completion';

export let projectCreator = angular.module('project-creator',[])
.controller('projectCreatorController' ,['$scope',projectCreatorController])
.directive('projectDescription' ,projectDescription)
.directive('projectTechnologys' ,projectTechnologys)
.directive('projectBuildSystem' ,projectBuildSystem)
.directive('projectCompletion' ,projectCompletion)
