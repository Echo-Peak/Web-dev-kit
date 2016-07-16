let {ipcRenderer , remote} = require('electron');
export default class ProjectController{
  constructor($scope){
    //this.Path = this.Path.call(this);
    let cwd = process.cwd();
    this.exit = this.exit;
    this.cwd = cwd;
    this.name = null;
    this.autoAdjustWidth = this.autoAdjustWidth;
    this.fullPath = '';
    this.$scope = $scope;
    this.full_dest = cwd;
  //  this.$msg = $msg;
    this.Project = {};
    this.Tabs = [];
    //this.$scope.$watch(this.TabIndex , watchTabs)
    this.next = {
      current:1,
      is:false
    }
    this.step = function(step , data){
      console.log('its steped' ,step , data)
    }
    this.enums = {
      type:[
      {type:'client' ,title:'Client-side' , img:'../../../app/res/x256/angular.png'},
      {type:'server' ,title:'Server-side' , img:'../../../app/res/x256/nodejs.png'},
      {type:'iso' ,title:'isomorphic' , img:'../../../app/res/x256/isomorphic.png'}
    ]
    }
  this.form = {

      models:{
        type:'da',
        authours:['You'],
      },

      enums:{
        type:[
      // {type:'client' ,title:'Client-side' , img:'../../../app/res/x256/angular.png'},
      // {type:'server' ,title:'Server-side' , img:'../../../app/res/x256/nodejs.png'},
      // {type:'iso' ,title:'isomorphic' , img:'../../../app/res/x256/isomorphic.png'}
      ]
      }
    }
    console.log(this.form.enums.type)

  }
  exit(){
    ipcRenderer.send('hide-window' ,'project-creator');
    //this.reset()
  }

  browse(){

    let self = this;
    let props = {
      properties:['openDirectory' ,'createDirectory'],
      defaultPath:this.cwd,
      buttonLabel:'WDK'
    }

    let done = function(dir){
      self.form.models.source = dir[0]
    }


    remote.dialog.showOpenDialog(props, done);
  }
  setProjectType(type){
    this.Project.type = type;
    console.log(this.Project)
  }
  enableNextTab(){

  }
  nextStep(ev){
    let self = this;
    let done = function(){
      self.next.current += 1;
        self.next.is = true
    //  self.enableNextTab();
      // self.$scope.$applyAsync(function(){
      //   self.next.current += 1;
      //   self.next.is = true
      // })
      console.log(self.next);
    }
    this.$msg.config(`Step ${this.next.current} completed. ` ,'NEXT' ,'bottom right' ,done);
  }

}
