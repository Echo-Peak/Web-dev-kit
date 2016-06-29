import consoleUI from './console-ui';

function consoleController($appState){
  let t = this;
  t.button = null;
  $appState.set('console-toggle',true ,true);


  t.updateButton = function(state){


    console.log('foo' ,state ,t.button )
    t.button =  state ? 'Open Console' : 'Close Console';
  }

  t.toggle = function(){
    let oldState = $appState.get('console-toggle');
    $appState.set('console-toggle',!oldState ,true);
    let newState = $appState.get('console-toggle');

    t.updateButton(newState);
  }

  t.options = function(){

  }
  //set up states
t.updateButton( $appState.get('console-toggle'))
}
function $console(){

}
function consoleMenu($compile){
  let options = ['clear' ,'changeFont' ,'enableBeep'];

  let mapOptions = function(){
    return options.map(function(opt){
      var title = opt
      .split(/([A-Z])/)
      .map((e,i ,arr)=> e.length == 1 ? arr[i] = ' '+e : e )
      .join('')
      .toLowerCase();

      return `<md-menu-item><md-button ng-click='console.${opt}()'>${title}</md-button></md-menu-item>`
    });
  }


  let container = `
  <div>
${mapOptions()}
  </div>
  `
  return{
    restric:'E',
    template:container.trim().replace(/,/g,''),
    link:function(scope , elm ,attr){

    }
  }
}
export let _console = angular.module('console',[])
.controller('consoleController', ['$appState',consoleController])
.service('$console',$console)
.directive('consoleMenu',['$compile',consoleMenu])
.directive('consoleUi' ,consoleUI)
