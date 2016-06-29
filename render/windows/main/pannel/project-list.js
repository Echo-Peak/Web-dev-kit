import loadTemplate from '../services/loadTemplate';

export default function projectList($compile){
  let styles = 'text-align:center; padding-top:10px;';
  let defaultTemplate = `<h4 style='${styles}'>nothing to show</h4>`;
  let listTemplate  = loadTemplate('pannel','list_item');

    return{
      restric:'E',
      link:function(scope ,elm ,attr){

        if(scope.Pannel.willRenderList()){
          console.log('yep' ,scope.Pannel.willRenderList() )
        listTemplate = $compile(listTemplate)(scope);
        elm[0].appendChild(listTemplate[0])
      }else{
        elm[0].innerHTML = defaultTemplate
      }
    }
  }
}
//["1" ,{"name":"Falcon","files":"2","icon":"../../../res/angular.png","build":"Native","version":"0.79","lastModified":1467220345125.1033}]
