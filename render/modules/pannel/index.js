let path = require('path');
//let pannelPath =

export let projectPannel = angular.module('project-pannel',[])
//.directive('openProject' ,openProject)
//.directive('newProject' ,newProject)
.directive('projectList',['$compile',projectList])
.controller('projectList_controller' ,projectList_controller);

function projectList($compile){
  let styles = 'text-align:center; padding-top:10px;';
  let defaultTemplate = `<h4 style='${styles}'>nothing to show</h4>`;
  let listTemplate  = `
  <md-list>
    <md-list-item ng-repeat='project in list.Projects track by project.name' class="md-3-line" ng-click='list.loadProject($event ,project.name)'>
        <img ng-src="{{project.icon}}" class="md-avatar" />
      <div class="md-list-item-text" layout="column">
        <h3>{{ project.name}}</h3>
        <h4>{{ project.build }}</h4>
        <p>Version {{ project.version}} , files {{ project.files}}</p>
        <p>{{list.parse(project.lastModified)}}</p>
      </div>
    </md-list-item>
  </md-list>`;

    return{
      restric:'E',
      link:function(scope ,elm ,attr){
        let template;
        if(JSON.parse(localStorage.projectList).length === 0){

          template = $compile(defaultTemplate)(scope)
          elm[0].children[0].appendChild(template[0]);
          elm[0].children[0].classList.add('empty-list');
          console.log(elm[0].children , template)
        }else{
          template = $compile(listTemplate)(scope)
          elm[0].children[0].appendChild(template[0]);
          console.log('compiled')
      }
    }
  }
}
let demo = [
  {name:'Sample Snake' ,
  files:'72',
  icon:'icons/sample.png' ,build:'electron app' ,
  version:'1.0', lastModified:Date.now()},

  {name:'coffe script' ,
  files:'72',
  icon:'icons/sample.png' ,build:'electron app' ,
  version:'1.0', lastModified:Date.now() + 1 + Math.random()*10},

  {name:'angel wheeler' ,
  files:'2',
  icon:'icons/sample.png' ,build:'express' ,
  version:'0.2', lastModified:Date.now() + 1 + Math.random()*10},

  {name:'Falcon' ,
  files:'2',
  icon:'icons/sample.png' ,build:'Native' ,
  version:'0.79', lastModified:Date.now() + 1 + Math.random()*10},

  {name:'Cosmos' ,
  files:'18',
  icon:'icons/sample.png' ,build:'React' ,
  version:'0.5', lastModified:Date.now() + 1 + Math.random()*100},

  {name:'Harry Potter' ,
  files:'18',
  icon:'icons/sample.png' ,build:'Angular & React' ,
  version:'2.3.5', lastModified:Date.now()-125900000000}
]



function projectList_controller(){
  //controller as list

  this.parse = function(lastModifiedDate){
    let date = new Date(lastModifiedDate);
    let gmt = date.toGMTString().split(' ')
    let weekday = gmt[0].replace(',','');
    let day = gmt[1];
    let month = gmt[2];
    let time  = date.toLocaleTimeString();
    time =  time.match(/\d{1,2}:\d{1,2}/) + ' ' + time.substr(-2,2);

    return `${weekday} ${day} ${time}`;
  }

  console.log('f')
  this.Projects = demo;
  this.loadProject = function(e ,name){
    console.log('foo' ,e,name)
  }
}
