import loadTemplate from '../services/loadTemplate';

export default function projectList($compile , database){
  let styles = 'text-align:center; padding-top:10px;';
  let defaultTemplate = `<h4 style='${styles}'>nothing to show</h4>`;
  let listTemplate  = require('raw!./view/list-item.html');

  console.error('USE SCOPE BROADCAST HERE')

    return{
      restric:'E',
      link:function(scope ,elm ,attr){
      //  listTemplate = $compile(listTemplate)(scope);
      //  elm[0].appendChild(listTemplate[0])

    }
  }
}
