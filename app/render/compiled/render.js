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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _WDK = __webpack_require__(1);

	_WDK.WDK.mountAs('wdk');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.WDK = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _angularBootstrap = __webpack_require__(2);

	var _angularBootstrap2 = _interopRequireDefault(_angularBootstrap);

	var _localStorageSetup = __webpack_require__(14);

	var _localStorageSetup2 = _interopRequireDefault(_localStorageSetup);

	var _statefull_store = __webpack_require__(15);

	var _statefull_store2 = _interopRequireDefault(_statefull_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function setupEnv() {
	  process.env._windows = process.env.INIT_CWD + '/render/windows';
	  process.env._res = process.env.INIT_CWD + '/res';
	  process.env._compiled = process.env.INIT_CWD + '/compiled';
	  process.env._modules = process.env.INIT_CWD + '/render/modules';
	}

	var wdk = function () {
	  function wdk() {
	    var _this = this;

	    _classCallCheck(this, wdk);

	    (0, _localStorageSetup2.default)();
	    setupEnv();
	    this.states = {
	      init: new _statefull_store2.default({ cacheLimit: 100 }),
	      get: function get(e) {
	        return _this.states.init;
	      }
	    };

	    this.angularApp = (0, _angularBootstrap2.default)(this.states.get()); //non angular dependancys
	  }

	  _createClass(wdk, [{
	    key: 'mountAs',
	    value: function mountAs(windowName) {
	      window[windowName] = this;
	    }
	  }]);

	  return wdk;
	}();

	var WDK = exports.WDK = new wdk();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (storeInstance) {
	  var app = angular.module('WDK', all).service({
	    '$loadProject': _$loadProject2.default,
	    '$projectBuilder': _$projectBuilder2.default,
	    '$projects': _$projects2.default,
	    '$storage': _$storage2.default,
	    '$windows': _$windows2.default,
	    '$appState': (0, _$appState2.default)(storeInstance)
	  }).controller('mainController', new mainController().controller);
	  return app;
	};

	var _pannel = __webpack_require__(3);

	var _console2 = __webpack_require__(6);

	var _$loadProject = __webpack_require__(7);

	var _$loadProject2 = _interopRequireDefault(_$loadProject);

	var _$projectBuilder = __webpack_require__(8);

	var _$projectBuilder2 = _interopRequireDefault(_$projectBuilder);

	var _$projects = __webpack_require__(9);

	var _$projects2 = _interopRequireDefault(_$projects);

	var _$storage = __webpack_require__(10);

	var _$storage2 = _interopRequireDefault(_$storage);

	var _$appState = __webpack_require__(11);

	var _$appState2 = _interopRequireDefault(_$appState);

	var _$windows = __webpack_require__(12);

	var _$windows2 = _interopRequireDefault(_$windows);

	var _projectCreator = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var mainController = function () {
	  function mainController() {
	    _classCallCheck(this, mainController);

	    mainController.state = {};
	  }

	  _createClass(mainController, [{
	    key: 'state',
	    value: function state() {
	      return mainController.state;
	    }
	  }, {
	    key: 'controller',
	    value: function controller($scope) {}
	  }]);

	  return mainController;
	}();

	var modules = [_pannel.projectPannel.name, _console2._console.name, _projectCreator.projectCreator.name];
	var thirdParty = ['ngAnimate', 'ngMaterial', 'ngAria'];

	var all = modules.concat(thirdParty);

	/*
	non-angular arguments passed from {class} wdk
	@params {storeInstance} instance of Statefull_store
	*/

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var path = __webpack_require__(4);
	var electron = __webpack_require__(5);

	function projectDetails() {}

	function openProject($appState, $windows) {
	  return function (scope, elm, attr) {
	    $appState.set('open-project-path', process.env.USERPROFILE, true);
	    var props = {
	      properties: ['openDirectory'],
	      defaultPath: $appState.get('open-project-path')
	    };
	    var processProject = function processProject(__path) {
	      $appState.set('open-project-path', __path[0], true);
	      $windows.open('project-creator');
	      console.log($windows);
	    };

	    elm.on('click', function () {

	      electron.remote.dialog.showOpenDialog(props, processProject);
	    });
	  };
	}
	function newProject($appState) {
	  return function (scope, elm, attr) {};
	}

	var projectPannel = exports.projectPannel = angular.module('project-pannel', []).directive('openProject', ['$appState', '$windows', openProject]).directive('newProject', ['$appState', newProject]).directive('projectList', ['$compile', projectList]).controller('projectList_controller', ['$storage', projectList_controller]);

	function vaildStucture(projectList) {
	  var vaild = void 0;

	  return vaild;
	}

	function projectList($compile) {
	  var styles = 'text-align:center; padding-top:10px;';
	  var defaultTemplate = '<h4 style=\'' + styles + '\'>nothing to show</h4>';
	  var listTemplate = '\n  <md-list>\n    <md-list-item ng-repeat=\'project in list.Projects track by project.name\' class="md-3-line" ng-click=\'list.loadProject($event ,project.name)\'>\n        <img ng-src="{{project.icon}}" class="md-avatar" />\n      <div class="md-list-item-text" layout="column">\n        <h3>{{ project.name}}</h3>\n        <h4>{{ project.build }}</h4>\n        <p>Version {{ project.version}} , files {{ project.files}}</p>\n        <p>{{list.parse(project.lastModified)}}</p>\n      </div>\n    </md-list-item>\n  </md-list>';

	  return {
	    restric: 'E',
	    link: function link(scope, elm, attr) {
	      var template = void 0;
	      if (JSON.parse(localStorage.projectList).length === 0) {

	        template = $compile(defaultTemplate)(scope);
	        elm[0].children[0].appendChild(template[0]);
	        elm[0].children[0].classList.add('empty-list');
	        console.log(elm[0].children, template);
	      } else {
	        template = $compile(listTemplate)(scope);
	        elm[0].children[0].appendChild(template[0]);
	        console.log('compiled');
	      }
	    }
	  };
	}
	var demo = [{ name: 'Sample Snake',
	  files: '72',
	  icon: 'icons/sample.png', build: 'electron app',
	  version: '1.0', lastModified: Date.now() }, { name: 'coffe script',
	  files: '72',
	  icon: 'icons/sample.png', build: 'electron app',
	  version: '1.0', lastModified: Date.now() + 1 + Math.random() * 10 }, { name: 'angel wheeler',
	  files: '2',
	  icon: 'icons/sample.png', build: 'express',
	  version: '0.2', lastModified: Date.now() + 1 + Math.random() * 10 }, { name: 'Falcon',
	  files: '2',
	  icon: 'icons/sample.png', build: 'Native',
	  version: '0.79', lastModified: Date.now() + 1 + Math.random() * 10 }, { name: 'Cosmos',
	  files: '18',
	  icon: 'icons/sample.png', build: 'React',
	  version: '0.5', lastModified: Date.now() + 1 + Math.random() * 100 }, { name: 'Harry Potter',
	  files: '18',
	  icon: 'icons/sample.png', build: 'Angular & React',
	  version: '2.3.5',
	  lastModified: Date.now() - 125900000000 }];

	function projectList_controller($storage) {
	  //controller as list

	  this.parse = function (lastModifiedDate) {
	    var date = new Date(lastModifiedDate);
	    var gmt = date.toGMTString().split(' ');
	    var weekday = gmt[0].replace(',', '');
	    var day = gmt[1];
	    var month = gmt[2];
	    var time = date.toLocaleTimeString();
	    time = time.match(/\d{1,2}:\d{1,2}/) + ' ' + time.substr(-2, 2);

	    return weekday + ' ' + day + ' ' + time;
	  };

	  console.log('f');
	  //this.Projects = demo;
	  this.loadProject = function (e, name) {
	    console.log('foo', e, name);
	  };
	  this.checkLocalStorage = $storage.check('projects');
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("electron");

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function consoleController($appState) {
	  var t = this;
	  t.button = null;
	  $appState.set('console-toggle', true, true);

	  t.updateButton = function (state) {

	    console.log('foo', state, t.button);
	    t.button = state ? 'Open Console' : 'Close Console';
	  };

	  t.toggle = function () {
	    var oldState = $appState.get('console-toggle');
	    $appState.set('console-toggle', !oldState, true);
	    var newState = $appState.get('console-toggle');

	    t.updateButton(newState);
	  };

	  t.options = function () {};
	  //set up states
	  t.updateButton($appState.get('console-toggle'));
	}
	function $console() {}
	function consoleMenu($compile) {
	  var options = ['clear', 'changeFont', 'enableBeep'];

	  var mapOptions = function mapOptions() {
	    return options.map(function (opt) {
	      var title = opt.split(/([A-Z])/).map(function (e, i, arr) {
	        return e.length == 1 ? arr[i] = ' ' + e : e;
	      }).join('').toLowerCase();

	      return '<md-menu-item><md-button ng-click=\'console.' + opt + '()\'>' + title + '</md-button></md-menu-item>';
	    });
	  };

	  var container = '\n  <div>\n' + mapOptions() + '\n  </div>\n  ';
	  return {
	    restric: 'E',
	    template: container.trim().replace(/,/g, ''),
	    link: function link(scope, elm, attr) {}
	  };
	}
	var _console = exports._console = angular.module('console', []).controller('consoleController', ['$appState', consoleController]).service('$console', $console).directive('consoleMenu', ['$compile', consoleMenu]);

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var loadProject = function loadProject() {
	  _classCallCheck(this, loadProject);
	};

	exports.default = loadProject;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var projectBuilder = function projectBuilder() {
	  _classCallCheck(this, projectBuilder);
	};

	exports.default = projectBuilder;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var project = function project() {
	  _classCallCheck(this, project);
	};

	exports.default = project;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var storage = function () {
	  function storage() {
	    _classCallCheck(this, storage);

	    this.check = this.check;
	  }

	  _createClass(storage, [{
	    key: "ls",
	    value: function ls() {
	      JSON.parse();
	    }
	  }, {
	    key: "check",
	    value: function check(LS) {
	      var parse = JSON.parse(localStorage.projectList);
	      return parse.length ? true : false;
	    }
	  }, {
	    key: "projectList",
	    value: function projectList(project) {
	      return {
	        get: JSON.parse(localStorage.projectList),
	        set: JSON.stringify(project)

	      };
	    }
	  }]);

	  return storage;
	}();

	exports.default = storage;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (storeInstance) {

	  var service = function service() {
	    return {
	      get: storeInstance.get.bind(storeInstance),
	      clear: storeInstance.clear.bind(storeInstance),
	      set: storeInstance.set.bind(storeInstance),
	      mappings: storeInstance.mappings.bind(storeInstance)
	    };
	  };
	  return service;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BrowserWindow = __webpack_require__(5).remote.BrowserWindow;

	var path = __webpack_require__(4);

	var $windows = function () {
	  function $windows() {
	    _classCallCheck(this, $windows);

	    //  throw 'THIS DOES NOT DO WHAT I WANT'
	    this.windows = {};
	    this.open = this.open;
	    this.close = this.close;
	    this.init.bind(this)();
	  }

	  _createClass($windows, [{
	    key: 'open',
	    value: function open(windowName) {

	      this.windows[windowName].show();
	    }
	  }, {
	    key: 'close',
	    value: function close(windowName) {
	      this.windows[windowName].hide();
	    }
	  }, {
	    key: 'create',
	    value: function create(name, options) {
	      this.windows[name] = new BrowserWindow(options);
	      this.windows[name].loadURL('file:///' + process.env._compiled + '/' + name + '.html');
	    }
	  }, {
	    key: 'get',
	    value: function get(windowName) {
	      return this.windows[windowName];
	    }
	  }, {
	    key: 'projectCreator',
	    value: function projectCreator() {
	      var options = {
	        width: 1150,
	        height: 720,
	        show: false,
	        center: true,
	        title: 'Project Creator',
	        skipTaskbar: true,
	        resizable: false
	      };
	      this.create('project-creator', options);
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      this.projectCreator();
	    }
	  }]);

	  return $windows;
	}();

	exports.default = $windows;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var projectCreator = exports.projectCreator = angular.module('project-creator', []);

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (localStorage.lastProject == '' || localStorage.lastProject == null || !localStorage.lastProject || localStorage.lastProject == void 0) {
	    localStorage.lastProject = '';
	  }
	  if (localStorage.projectList == '' || localStorage.projectList == null || !localStorage.projectList || localStorage.projectList == void 0) {
	    localStorage.projectList = "[]";
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Store = function () {
	  function Store(options) {
	    _classCallCheck(this, Store);

	    this.maps = {};
	    this.cacheLimit = options.cacheLimit || 100;
	  }

	  _createClass(Store, [{
	    key: "set",
	    value: function set(key, item, trackEverything) {

	      if (!!this.maps[key]) {

	        if (!trackEverything && this.maps[key]._cache.indexOf(item) > 0) {
	          return;
	        }
	        if (this.maps[key]._cache.length > this.cacheLimit) {
	          this.maps[key]._cache.pop();
	        }
	        this.maps[key]._cache.unshift(item);

	        this.maps[key].val = this.maps[key]._cache[0];
	      } else {
	        var obj = Object.create(null);
	        obj.val = item;
	        obj._cache = [item];
	        this.maps[key] = obj;
	      }
	    }
	  }, {
	    key: "get",
	    value: function get(key, flag) {
	      if (flag) {
	        return this.maps[key]._cache;
	      } else {
	        return this.maps[key].val;
	      }
	    }
	  }, {
	    key: "clear",
	    value: function clear(key) {
	      this.maps[key]._cache = [this.maps[key]._cache[0]];
	    }
	  }, {
	    key: "mappings",
	    value: function mappings() {
	      return this.maps;
	    }
	  }]);

	  return Store;
	}();

	exports.default = Store;

/***/ }
/******/ ]);