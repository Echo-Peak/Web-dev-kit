
export default function(){
  return {
    restric:'E',
    template:require('raw!./view/description.html'),
    link(scope , elm ,attr){
      // let inputs = Array.apply(0,elm[0].querySelectorAll('input'))
      // .reduce((start , item)=>{
      //   start[item.name] = item;
      //   return start
      // } ,{});
      // let path = scope.Project.destination;
      //
      //
      //
      // inputs.name.addEventListener('keyup' ,function(){
      //   inputs.name.value = inputs.name.value.replace(/[^a-z0-9\-_ ]+/gi,'');
      //
      //
      // });
      //
      // inputs.destination.addEventListener('keyup',
      //  e => (inputs.destination.value = inputs.destination.value.replace(/[^a-z0-9\-_ \\]+/gi,'')));
      //
      // inputs.destination.onfocus = function(){
      //   inputs.destination.value = '';
      //   inputs.destination.value = `${path}\\${inputs.name.value}`;
      // }
      // inputs.destination.onblur = function(){
      //   inputs.destination.value = '';
      // }

    }
  }
}
