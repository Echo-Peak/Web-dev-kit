//this is a bridge to statefull_store.js
//this allows acces to store from anywhere inside angular
export default function(storeInstance){

  let service = function(){
      return {
      get:storeInstance.get.bind(storeInstance),
      clear:storeInstance.clear.bind(storeInstance),
      set:storeInstance.set.bind(storeInstance),
      mappings:storeInstance.mappings.bind(storeInstance)
    }
  }
return service
}
