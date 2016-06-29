export default class storage{
  constructor(){
    this.check = this.check
  }
  ls(){
    JSON.parse()
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
}
