export default function(){
  if(localStorage.lastProject == '' || localStorage.lastProject == null || !localStorage.lastProject || localStorage.lastProject == void 0){
    localStorage.lastProject = ''
  }
  if(localStorage.projectList == '' || localStorage.projectList == null || !localStorage.projectList || localStorage.projectList == void 0){
    localStorage.projectList = "[]"
  }

}
