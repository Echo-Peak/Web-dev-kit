let home = {
  url:'/',
  view:{
    '@':{
      template:'nothing'
    }
  }
}


export let Router = angular.module('router',['ui.router'])
.config(['$stateProvider','$urlRouteProvider',function($state ,$url){
  $url.otherwise('/');
  $state
  .state(home);
}])
