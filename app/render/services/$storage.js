export default class storage{
  constructor(){
    this.check = this.check
  }
  ls(){

  }
  check(LS){
    let parse = JSON.parse(localStorage.projectList);
    return parse.length ? true : false;
  }
  projectList(project){
    return {
      get:JSON.parse(localStorage.projectList),
      set:JSON.stringify(project)

    }
  }
  local_storage(){
    return{
      get(key){
        return JSON.parse(localStorage[key]);
      },
      set(key , value){
        localStorage[key] = value;
      },
    merge(key ,value){
      let ls = JSON.parse(localStorage[key]);
      Array.isArray(ls) && ls.push(value);
      Object.isObject(js) && (ls[key] = value);
      localStorage[key] = JSON.stringify(ls);

    },
    check(key){
      return !!JSON.parse(localStorage[key]) ? true : false;
    }
  }
}
  file_system(){

  }
  channel(type){
    try{
      return this[type]();
    }catch(e){
      throw new Error(`${type} channel does not exists`)
    }

  }
}
