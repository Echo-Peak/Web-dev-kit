//var electron = require('electron');
import buildProject from './build-project';

export default class PannelController{
  constructor($scope , $state){

    this.projects = [];
    this.$scope = $scope;
    this.$state  = $state;
  }

}
