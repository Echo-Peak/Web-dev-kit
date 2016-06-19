function consoleController(){
  let t = this;
  t.State = false;
  t.button = null;
  t.updateButton = function(state){
    console.log('foo' ,state ,t.button )
    t.button =  state ? 'Open Console' : 'Close Console';
  }

  t.toggle = function(){
    t.State  = !t.State;
    t.updateButton(t.State);
  }

  t.options = function(){

  }
  //set up states
t.updateButton(false)
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
.controller('consoleController', consoleController)
.service('$console',$console)
.directive('consoleMenu',['$compile',consoleMenu])
