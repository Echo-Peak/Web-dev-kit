import loadTemplate from '../services/loadTemplate';
export default function(){
  return {
    restric:'E',
    template:loadTemplate('views' ,'project_build_system')
  }
}
