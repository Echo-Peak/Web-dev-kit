let fs = require('fs');
import loadTemplate from '../services/loadTemplate';

export default function(){

  console.log('ran' ,__filename)
  return{
    restric:'E',
    template:loadTemplate('pannel') || 'ERROR LOADING'
  }
}
