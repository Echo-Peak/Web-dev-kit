var electron = require('electron');
import buildProject from './build-project';



export default class PannelController{
  constructor($scope){

    this.projects = null;
    this.$scope = $scope;

    this.status = false;
    this.test = null;
    this.willRender = false;

    this.willRenderList = this.willRenderList;
    this.onload.call(this);
    this.newProject = this.newProject;
    this.openProject = this.openProject;
    this.buildProject = buildProject;
    this.edit = this.projectEditToggle.call(this);

  }
  projectEditToggle(){
    let self = this;
    return {
      on(project ,ev){
        let target = ev.target.querySelector('project-edit');
        target.children[0].classList.add('shown');
        target = null;
      },
      off(project ,ev){
        let target = ev.target.querySelector('project-edit');
        target.children[0].classList.remove('shown');
        target = null;
      }
    }
  }
  newProject(){
    electron.ipcRenderer.send('open-window', 'project-creator');

  }
  openProject(){

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
// [
// {"show":false , "name":"Falcon","files":"2","icon":"../../../res/angular.png","build":"Native","version":"0.79","lastModified":1467220345125.1033},
// {"show":false , "name":"little artic","files":"28","icon":"../../../res/angular.png","build":"Native","version":"0.79","lastModified":1467220345125.1033},
// {"show":false , "name":"Arcis","files":"12","icon":"../../../res/angular.png","build":"Native","version":"0.79","lastModified":146722034525.1033},
// {"show":false , "name":"Cosmos","files":"92","icon":"../../../res/angular.png","build":"Native","version":"0.79","lastModified":1467345125.1033},
// {"show":false , "name":"Oraian","files":"22","icon":"../../../res/angular.png","build":"Native","version":"0.79","lastModified":16722035125.1033}
// ]
