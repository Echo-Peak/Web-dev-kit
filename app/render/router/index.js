let home = {
  url:'/',
  templateUrl:'../ui/view/main.html'
}

let projectCreator = {
  url:'/projectCreator',
  templateUrl:'../ui/view/project-creator.html'
}


export let Router =  angular.module('router',['ui.router'])
.config(['$stateProvider','$urlRouterProvider',function($state ,$url){
  console.log('ran');
  $url.otherwise('/');
  $state
  .state('home',home)
  .state('project-creator',projectCreator)
}])
