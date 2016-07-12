/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(22);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 10:
/***/ function(module, exports) {

	module.exports = require("electron");

/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _projectDescription = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./project-description\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _projectDescription2 = _interopRequireDefault(_projectDescription);

	var _projectTechnologys = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./project-technologys\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _projectTechnologys2 = _interopRequireDefault(_projectTechnologys);

	var _projectBuildSystem = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./project-build-system\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _projectBuildSystem2 = _interopRequireDefault(_projectBuildSystem);

	var _projectCompletion = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./project-completion\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _projectCompletion2 = _interopRequireDefault(_projectCompletion);

	var _projectController = __webpack_require__(23);

	var _projectController2 = _interopRequireDefault(_projectController);

	var _autoAdjustWidth = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../functional-directives/auto-adjust-width\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _autoAdjustWidth2 = _interopRequireDefault(_autoAdjustWidth);

	var _$msg = __webpack_require__(24);

	var _$msg2 = _interopRequireDefault(_$msg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	angular.module('project-creator', ['ngMaterial', 'ngAria', 'ngAnimate']).directive('projectDescription', _projectDescription2.default).directive('projectTechnologys', _projectTechnologys2.default).directive('projectBuildSystem', _projectBuildSystem2.default).directive('projectCompletion', _projectCompletion2.default).directive('autoAdjustWidth', _autoAdjustWidth2.default).service('$msg', ['$mdToast', _$msg2.default]).controller('ProjectController', ['$scope', '$msg', _projectController2.default]);

	//
	// .controller('mainController' , function($scope){
	//   this.currentDirectory = process.env.INIT_CWD;
	//   this.outputDirectory = process.env.INIT_CWD;
	//   this.techs = [
	//     'Angular 1x',
	//     'Angular 2x',
	//     'React',
	//     'Vue',
	//     'D3',
	//     'React Native',
	//     'High charts',
	//     'JQuery',
	//     'Elm',
	//     'Knockout'
	//   ];
	//   this.buildSystems = [
	//     'gulp',
	//     'webpack',
	//     'nodemon',
	//     'grunt'
	//   ];
	//
	//   this.type = [
	//     'react',
	//     'angular',
	//     'express',
	//     'nodeJS',
	//     'Type Script',
	//     "electron",
	//     "react Native"
	//   ];
	//   let whenDone =(type ,dir)=>{
	//
	//     if(type == 'src'){
	//         $scope.$applyAsync(()=>{
	//       this.currentDirectory =dir[0];
	//     })
	//   }else if(type == 'output'){
	//       $scope.$applyAsync(()=>{
	//     this.outputDirectory =dir[0];
	//     })
	//   }
	//
	//     console.log(dir)
	//   }
	//
	//
	//   this.openDirectory = function(type){
	//     console.log('click')
	//     electron.remote.dialog.showOpenDialog({properties:['openDirectory']} ,whenDone.bind(this,type))
	//   }
	//
	// });

/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _require = __webpack_require__(10);

	var ipcRenderer = _require.ipcRenderer;
	var remote = _require.remote;

	var ProjectController = function () {
	  function ProjectController($scope, $msg) {
	    var _this = this;

	    _classCallCheck(this, ProjectController);

	    //this.Path = this.Path.call(this);
	    var cwd = process.cwd();
	    this.exit = this.exit;
	    this.cwd = cwd;
	    this.name = null;
	    this.autoAdjustWidth = this.autoAdjustWidth;
	    this.fullPath = '';
	    this.$scope = $scope;
	    this.full_dest = cwd;
	    this.$msg = $msg;
	    this.Project = {};
	    this.Tabs = [];
	    //this.$scope.$watch(this.TabIndex , watchTabs)
	    this.next = {
	      current: 1,
	      is: false
	    };
	    window.poop = function () {
	      return _this;
	    };
	    this.form = {

	      models: {
	        type: 'da',
	        authours: ['You']
	      },

	      enums: {
	        type: [{ type: 'client', title: 'Client-side', img: '../../../res/x256/angular.png' }, { type: 'server', title: 'Server-side', img: '../../../res/x256/nodejs.png' }, { type: 'iso', title: 'isomorphic', img: '../../../res/x256/isomorphic.png' }]
	      }
	    };
	    console.log(this.form.enums.type);
	  }

	  _createClass(ProjectController, [{
	    key: 'exit',
	    value: function exit() {
	      ipcRenderer.send('hide-window', 'project-creator');
	      //this.reset()
	    }
	  }, {
	    key: 'browse',
	    value: function browse() {

	      var self = this;
	      var props = {
	        properties: ['openDirectory', 'createDirectory'],
	        defaultPath: this.cwd,
	        buttonLabel: 'WDK'
	      };

	      var done = function done(dir) {
	        self.form.models.source = dir[0];
	      };

	      remote.dialog.showOpenDialog(props, done);
	    }
	  }, {
	    key: 'setProjectType',
	    value: function setProjectType(type) {
	      this.Project.type = type;
	      console.log(this.Project);
	    }
	  }, {
	    key: 'enableNextTab',
	    value: function enableNextTab() {}
	  }, {
	    key: 'nextStep',
	    value: function nextStep(ev) {
	      var self = this;
	      var done = function done() {
	        self.next.current += 1;
	        self.next.is = true;
	        //  self.enableNextTab();
	        // self.$scope.$applyAsync(function(){
	        //   self.next.current += 1;
	        //   self.next.is = true
	        // })
	        console.log(self.next);
	      };
	      this.$msg.config('Step ' + this.next.current + ' completed. ', 'NEXT', 'bottom right', done);
	    }
	  }]);

	  return ProjectController;
	}();

	exports.default = ProjectController;

/***/ },

/***/ 24:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function ($mdToast) {

	  return {
	    say: function say(msg) {
	      var myProps = {
	        position: 'bottom right'
	      };

	      console.log(props);
	      $mdToast.show(props);
	    },
	    config: function config(msg, action, pos, callback) {

	      var toast = $mdToast.simple().textContent(msg).action(action).position(pos);
	      $mdToast.show(toast).then(function (res) {
	        res === 'ok' ? callback() : null;
	      });
	    }
	  };
	};

/***/ }

/******/ });