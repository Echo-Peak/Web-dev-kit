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

	var _localStorageSetup = __webpack_require__(19);

	var _localStorageSetup2 = _interopRequireDefault(_localStorageSetup);

	var _statefull_store = __webpack_require__(20);

	var _statefull_store2 = _interopRequireDefault(_statefull_store);

	var _prototypeSetup = __webpack_require__(21);

	var _prototypeSetup2 = _interopRequireDefault(_prototypeSetup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function setupEnv() {
	  process.env._windows = process.env.INIT_CWD + '/render/windows';
	  process.env._res = process.env.INIT_CWD + '/res';
	  process.env._compiled = process.env.INIT_CWD + '/render/compiled';
	  process.env._modules = process.env.INIT_CWD + '/render/modules';
	  process.env._main = process.env.INIT_CWD + '/render/windows/main';
	  process.env._projectCreator = process.env.INIT_CWD + '/render/windows/project-creator';
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
	    '$appState': (0, _$appState2.default)(storeInstance)
	  }).controller('mainController', new mainController().controller);
	  return app;
	};

	var _pannel = __webpack_require__(3);

	var _console2 = __webpack_require__(12);

	var _$loadProject = __webpack_require__(14);

	var _$loadProject2 = _interopRequireDefault(_$loadProject);

	var _$projectBuilder = __webpack_require__(15);

	var _$projectBuilder2 = _interopRequireDefault(_$projectBuilder);

	var _$projects = __webpack_require__(16);

	var _$projects2 = _interopRequireDefault(_$projects);

	var _$storage = __webpack_require__(17);

	var _$storage2 = _interopRequireDefault(_$storage);

	var _$appState = __webpack_require__(18);

	var _$appState2 = _interopRequireDefault(_$appState);

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

	var modules = [_pannel.projectPannel.name, _console2._console.name];
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
	exports.projectPannel = undefined;

	var _loadTemplate = __webpack_require__(4);

	var _loadTemplate2 = _interopRequireDefault(_loadTemplate);

	var _projectPannel = __webpack_require__(7);

	var _projectPannel2 = _interopRequireDefault(_projectPannel);

	var _mainController = __webpack_require__(8);

	var _mainController2 = _interopRequireDefault(_mainController);

	var _projectList = __webpack_require__(11);

	var _projectList2 = _interopRequireDefault(_projectList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var path = __webpack_require__(5);
	var electron = __webpack_require__(10);


	console.log('sss');

	var projectPannel = exports.projectPannel = angular.module('project-pannel', [])
	//COMPILEd
	.directive('projectList', ['$compile', _projectList2.default]).controller('PannelController', ['$scope', _mainController2.default]).directive('projectPannelUi', _projectPannel2.default).directive('projectEdit', projectEdit);

	function projectEdit() {
	  return {
	    restric: 'E',
	    template: (0, _loadTemplate2.default)('project-edit')
	  };
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (file) {
	  var getPath = path.resolve(process.env._compiled, file + '.html');

	  try {
	    return fs.readFileSync(getPath, 'utf8', 'r');
	  } catch (e) {

	    return 'ERROR LOADING \'' + file + '\' from ' + getPath;
	  }
	};

	var path = __webpack_require__(5);
	var fs = __webpack_require__(6);

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__filename) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {

	  console.log('ran', __filename);
	  return {
	    restric: 'E',
	    template: (0, _loadTemplate2.default)('pannel') || 'ERROR LOADING'
	  };
	};

	var _loadTemplate = __webpack_require__(4);

	var _loadTemplate2 = _interopRequireDefault(_loadTemplate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var fs = __webpack_require__(6);
	/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _buildProject = __webpack_require__(9);

	var _buildProject2 = _interopRequireDefault(_buildProject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var electron = __webpack_require__(10);

	var PannelController = function () {
	  function PannelController($scope) {
	    _classCallCheck(this, PannelController);

	    this.projects = null;
	    this.$scope = $scope;

	    this.status = false;
	    this.test = null;
	    this.willRender = false;

	    this.willRenderList = this.willRenderList;
	    this.onload.call(this);
	    this.newProject = this.newProject;
	    this.openProject = this.openProject;
	    this.buildProject = _buildProject2.default;
	    this.edit = this.projectEditToggle.call(this);
	  }

	  _createClass(PannelController, [{
	    key: 'projectEditToggle',
	    value: function projectEditToggle() {
	      var self = this;
	      return {
	        on: function on(project, ev) {
	          var target = ev.target.querySelector('project-edit');
	          target.children[0].classList.add('shown');
	          target = null;
	        },
	        off: function off(project, ev) {
	          var target = ev.target.querySelector('project-edit');
	          target.children[0].classList.remove('shown');
	          target = null;
	        }
	      };
	    }
	  }, {
	    key: 'newProject',
	    value: function newProject() {
	      electron.ipcRenderer.send('open-window', 'project-creator');
	    }
	  }, {
	    key: 'openProject',
	    value: function openProject() {}
	  }, {
	    key: 'willRenderList',
	    value: function willRenderList() {
	      return this.willRender;
	    }
	  }, {
	    key: 'onload',
	    value: function onload() {
	      var ls = JSON.parse(localStorage.projectList);
	      var validProjects = {};

	      try {
	        validProjects = ls.filter(function (item) {

	          return item.name && item.files && item.version && item.lastModified;
	        });
	        this.projects = validProjects;

	        validProjects.length && (this.willRender = true);

	        //this.show(validProjects);
	      } catch (e) {
	        console.warn('no projects to display');
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render(fn) {
	      var self = this;
	      this.$scope.$applyAsync(function () {
	        fn.call(self);
	      });
	    }
	  }, {
	    key: 'show',
	    value: function show(projects) {
	      var _this = this;

	      this.render(function () {
	        _this.status = true;

	        _this.projects = projects;
	        console.log(_this.projects);
	      });

	      console.log("broadcasting");
	    }
	  }, {
	    key: 'generateDateFormat',
	    value: function generateDateFormat(lastModifiedDate) {
	      var date = new Date(lastModifiedDate);
	      var gmt = date.toGMTString().split(' ');
	      var weekday = gmt[0].replace(',', '');
	      var day = gmt[1];
	      var month = gmt[2];
	      var time = date.toLocaleTimeString();
	      time = time.match(/\d{1,2}:\d{1,2}/) + ' ' + time.substr(-2, 2);

	      return weekday + ' ' + day + ' ' + time;
	    }
	  }, {
	    key: 'update',
	    value: function update(type, project) {
	      //new or old
	      switch (type) {
	        case 'add':
	          this.add(newProject);break;
	        case 'del':
	          this.del(project);break;
	      }
	    }
	  }, {
	    key: 'loadProject',
	    value: function loadProject(projectName) {
	      console.log(projectName);
	    }
	  }]);

	  return PannelController;
	}();
	// [
	// {"show":false , "name":"Falcon","files":"2","icon":"../../../res/angular.png","build":"Native","version":"0.79","lastModified":1467220345125.1033},
	// {"show":false , "name":"little artic","files":"28","icon":"../../../res/angular.png","build":"Native","version":"0.79","lastModified":1467220345125.1033},
	// {"show":false , "name":"Arcis","files":"12","icon":"../../../res/angular.png","build":"Native","version":"0.79","lastModified":146722034525.1033},
	// {"show":false , "name":"Cosmos","files":"92","icon":"../../../res/angular.png","build":"Native","version":"0.79","lastModified":1467345125.1033},
	// {"show":false , "name":"Oraian","files":"22","icon":"../../../res/angular.png","build":"Native","version":"0.79","lastModified":16722035125.1033}
	// ]


	exports.default = PannelController;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var s = 9;
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("electron");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = projectList;

	var _loadTemplate = __webpack_require__(4);

	var _loadTemplate2 = _interopRequireDefault(_loadTemplate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function projectList($compile) {
	  var styles = 'text-align:center; padding-top:10px;';
	  var defaultTemplate = '<h4 style=\'' + styles + '\'>nothing to show</h4>';
	  var listTemplate = (0, _loadTemplate2.default)('pannel', 'list_item');

	  return {
	    restric: 'E',
	    link: function link(scope, elm, attr) {

	      //   if(scope.Pannel.willRenderList()){
	      //     console.log('yep' ,scope.Pannel.willRenderList() )
	      //   listTemplate = $compile(listTemplate)(scope);
	      //   elm[0].appendChild(listTemplate[0])
	      // }else{
	      //   elm[0].innerHTML = defaultTemplate
	      // }
	    }
	  };
	}
	//["1" ,{"name":"Falcon","files":"2","icon":"../../../res/angular.png","build":"Native","version":"0.79","lastModified":1467220345125.1033}]

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports._console = undefined;

	var _consoleUi = __webpack_require__(13);

	var _consoleUi2 = _interopRequireDefault(_consoleUi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	var _console = exports._console = angular.module('console', []).controller('consoleController', ['$appState', consoleController]).service('$console', $console).directive('consoleMenu', ['$compile', consoleMenu]).directive('consoleUi', _consoleUi2.default);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {

	  return {
	    restric: 'E',
	    template: (0, _loadTemplate2.default)('console', 'index')
	  };
	};

	var _loadTemplate = __webpack_require__(4);

	var _loadTemplate2 = _interopRequireDefault(_loadTemplate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
	    value: function ls() {}
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
	  }, {
	    key: "local_storage",
	    value: function local_storage() {
	      return {
	        get: function get(key) {
	          return JSON.parse(localStorage[key]);
	        },
	        set: function set(key, value) {
	          localStorage[key] = value;
	        },
	        merge: function merge(key, value) {
	          var ls = JSON.parse(localStorage[key]);
	          Array.isArray(ls) && ls.push(value);
	          Object.isObject(js) && (ls[key] = value);
	          localStorage[key] = JSON.stringify(ls);
	        },
	        check: function check(key) {
	          return !!JSON.parse(localStorage[key]) ? true : false;
	        }
	      };
	    }
	  }, {
	    key: "file_system",
	    value: function file_system() {}
	  }, {
	    key: "channel",
	    value: function channel(type) {
	      try {
	        return this[type]();
	      } catch (e) {
	        throw new Error(type + " channel does not exists");
	      }
	    }
	  }]);

	  return storage;
	}();

	exports.default = storage;

/***/ },
/* 18 */
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
/* 19 */
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
/* 20 */
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

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.isObject = function (obj) {

	  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null && !Array.isArray(obj)) {
	    return true;
	  }
	  return false;
	};

/***/ }
/******/ ]);