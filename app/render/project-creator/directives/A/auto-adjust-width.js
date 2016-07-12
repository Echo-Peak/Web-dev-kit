export default function(){
  return function(scope ,elm ,attr){
    scope.$on('input-name-change',function(){
      console.log('wow')
    });
  }
}
