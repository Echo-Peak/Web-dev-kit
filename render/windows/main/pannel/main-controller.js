
export default class PannelController{
  constructor($scope){

    this.projects = null;
    this.$scope = $scope;

    this.status = false;
    this.test = null;
    this.willRender = false;
    this.willRenderList = this.willRenderList;
    this.onload.call(this);
  }
  willRenderList(){
    return this.willRender
  }
  onload(){
    let ls = JSON.parse(localStorage.projectList);
    let validProjects = {};

    try{
        validProjects  = ls.filter(function(item){

        return (item.name &&
        item.files &&
        item.version &&
        item.lastModified
      );
      });
      this.projects = validProjects;

      validProjects.length && (this.willRender = true);

    //this.show(validProjects);
  }catch(e){
    console.warn('no projects to display');
  }

  }
  render(fn){
    let self = this
    this.$scope.$applyAsync(function(){fn.call(self)})
  }
  show(projects){
  this.render(()=>{
    this.status = true;

    this.projects = projects;
    console.log(this.projects)
  })

    console.log("broadcasting");

  }
  generateDateFormat(lastModifiedDate){
    let date = new Date(lastModifiedDate);
    let gmt = date.toGMTString().split(' ')
    let weekday = gmt[0].replace(',','');
    let day = gmt[1];
    let month = gmt[2];
    let time  = date.toLocaleTimeString();
    time =  time.match(/\d{1,2}:\d{1,2}/) + ' ' + time.substr(-2,2);

    return `${weekday} ${day} ${time}`;
  }
  update(type ,project){ //new or old
    switch(type){
      case 'add':this.add(newProject);break;
      case 'del':this.del(project);break;
    }
  }
  loadProject(projectName){
    console.log(projectName);
  }
}
