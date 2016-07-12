export default class Store{
  constructor(options){
    this.maps = {}
    this.cacheLimit = options.cacheLimit || 100;
  }
  set(key , item ,trackEverything){


     if(!!this.maps[key]){

       if(!trackEverything && this.maps[key]._cache.indexOf(item) >0){
         return
       }
       if(this.maps[key]._cache.length > this.cacheLimit){
         this.maps[key]._cache.pop()
       }
      this.maps[key]._cache.unshift(item)

      this.maps[key].val = this.maps[key]._cache[0];

    }else{
      let obj = Object.create(null);
      obj.val = item;
      obj._cache = [item];
      this.maps[key] =obj
    }




  }
  get(key ,flag){
    if(flag){
      return this.maps[key]._cache
    }else{
      return this.maps[key].val
    }
  }
  clear(key){
    this.maps[key]._cache = [this.maps[key]._cache[0]]
  }
  mappings(){
    return this.maps
  }
}
