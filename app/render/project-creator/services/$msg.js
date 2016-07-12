export default function($mdToast){


  return{
    say(msg){
      let myProps = {
        position:'bottom right'
      }

      console.log(props)
      $mdToast.show(props)
    },
      config(msg ,action, pos , callback){

    let toast = $mdToast.simple()
    .textContent(msg)
    .action(action)
    .position(pos);
    $mdToast.show(toast).then(function(res){
      res === 'ok' ? callback() : null;
    });


  }
  }

}
