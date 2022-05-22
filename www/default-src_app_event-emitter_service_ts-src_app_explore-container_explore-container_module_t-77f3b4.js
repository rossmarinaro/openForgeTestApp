(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_event-emitter_service_ts-src_app_explore-container_explore-container_module_t-77f3b4"],{

/***/ 9868:
/*!******************************************!*\
  !*** ./src/app/event-emitter.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventEmitterService": () => (/* binding */ EventEmitterService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 7225);



let EventEmitterService = class EventEmitterService {
    constructor() {
        this.invokeRenderUserInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.users = [];
    }
    //------------------ select user from input
    selectUser(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let searchBarContent = _utils__WEBPACK_IMPORTED_MODULE_0__.getElementById('search-user').value;
            if (searchBarContent !== null)
                searchBarContent = user.login;
            this.getUser(user);
        });
    }
    //-------------------------- get user
    getUser(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            console.log('user: ', user);
            return this.invokeRenderUserInfo.emit(user !== null ?
                user : _utils__WEBPACK_IMPORTED_MODULE_0__.getElementById('search-user').value);
        });
    }
};
EventEmitterService.ctorParameters = () => [];
EventEmitterService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], EventEmitterService);



/***/ }),

/***/ 4762:
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponent": () => (/* binding */ ExploreContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _explore_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component.html?ngResource */ 959);
/* harmony import */ var _explore_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-container.component.scss?ngResource */ 1509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ExploreContainerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-explore-container',
        template: _explore_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_explore_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExploreContainerComponent);



/***/ }),

/***/ 581:
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponentModule": () => (/* binding */ ExploreContainerComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component */ 4762);






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ 6625:
/*!**************************!*\
  !*** ./src/app/users.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchUsers": () => (/* binding */ fetchUsers)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var octokit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! octokit */ 2135);
/* USERS */


function fetchUsers(users) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
        //get user accounts
        const octokit = new octokit__WEBPACK_IMPORTED_MODULE_1__.Octokit(), accounts = yield octokit.request('GET /users', {});
        console.log(accounts.headers.link); //rel=next 
        accounts.data.map((account) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield octokit.request(`GET /users/${account.login}`, { username: 'USERNAME' });
            //push account to users array
            users.push({
                id: account.id,
                public_repos: user.data.public_repos,
                login: account.login,
                avatar_url: account.avatar_url,
                html_url: account.html_url,
                repos_url: account.repos_url
            });
        }));
        return false;
    });
}


/***/ }),

/***/ 7225:
/*!**************************!*\
  !*** ./src/app/utils.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getElementById": () => (/* binding */ getElementById),
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
//-------------------------- quick helpers
function getElementById(element) {
    return document.getElementById(element);
}
function createElement(type, element) {
    return document.createElement(element);
}


/***/ }),

/***/ 1175:
/*!******************************************************!*\
  !*** ./node_modules/@octokit/app/dist-node/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 3752)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var core = __webpack_require__(/*! @octokit/core */ 1719);

var authApp = __webpack_require__(/*! @octokit/auth-app */ 4111);

var oauthApp = __webpack_require__(/*! @octokit/oauth-app */ 1225);

var authUnauthenticated = __webpack_require__(/*! @octokit/auth-unauthenticated */ 8901);

var webhooks$1 = __webpack_require__(/*! @octokit/webhooks */ 2313);

var pluginPaginateRest = __webpack_require__(/*! @octokit/plugin-paginate-rest */ 7215);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _asyncIterator(iterable) {
  var method;

  if (typeof Symbol !== "undefined") {
    if (Symbol.asyncIterator) method = iterable[Symbol.asyncIterator];
    if (method == null && Symbol.iterator) method = iterable[Symbol.iterator];
  }

  if (method == null) method = iterable["@@asyncIterator"];
  if (method == null) method = iterable["@@iterator"];
  if (method == null) throw new TypeError("Object is not async iterable");
  return method.call(iterable);
}

function _AwaitValue(value) {
  this.wrapped = value;
}

function _AsyncGenerator(gen) {
  var front, back;

  function send(key, arg) {
    return new Promise(function (resolve, reject) {
      var request = {
        key: key,
        arg: arg,
        resolve: resolve,
        reject: reject,
        next: null
      };

      if (back) {
        back = back.next = request;
      } else {
        front = back = request;
        resume(key, arg);
      }
    });
  }

  function resume(key, arg) {
    try {
      var result = gen[key](arg);
      var value = result.value;
      var wrappedAwait = value instanceof _AwaitValue;
      Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) {
        if (wrappedAwait) {
          resume(key === "return" ? "return" : "next", arg);
          return;
        }

        settle(result.done ? "return" : "normal", arg);
      }, function (err) {
        resume("throw", err);
      });
    } catch (err) {
      settle("throw", err);
    }
  }

  function settle(type, value) {
    switch (type) {
      case "return":
        front.resolve({
          value: value,
          done: true
        });
        break;

      case "throw":
        front.reject(value);
        break;

      default:
        front.resolve({
          value: value,
          done: false
        });
        break;
    }

    front = front.next;

    if (front) {
      resume(front.key, front.arg);
    } else {
      back = null;
    }
  }

  this._invoke = send;

  if (typeof gen.return !== "function") {
    this.return = undefined;
  }
}

_AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () {
  return this;
};

_AsyncGenerator.prototype.next = function (arg) {
  return this._invoke("next", arg);
};

_AsyncGenerator.prototype.throw = function (arg) {
  return this._invoke("throw", arg);
};

_AsyncGenerator.prototype.return = function (arg) {
  return this._invoke("return", arg);
};

function _wrapAsyncGenerator(fn) {
  return function () {
    return new _AsyncGenerator(fn.apply(this, arguments));
  };
}

function _awaitAsyncGenerator(value) {
  return new _AwaitValue(value);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

const VERSION = "12.0.5";

function webhooks(appOctokit, options // Explict return type for better debugability and performance,
// see https://github.com/octokit/app.js/pull/201
) {
  return new webhooks$1.Webhooks({
    secret: options.secret,
    transform: function () {
      var _ref = _asyncToGenerator(function* (event) {
        if (!("installation" in event.payload) || typeof event.payload.installation !== "object") {
          const octokit = new appOctokit.constructor({
            authStrategy: authUnauthenticated.createUnauthenticatedAuth,
            auth: {
              reason: `"installation" key missing in webhook event payload`
            }
          });
          return _objectSpread2(_objectSpread2({}, event), {}, {
            octokit: octokit
          });
        }

        const installationId = event.payload.installation.id;
        const octokit = yield appOctokit.auth({
          type: "installation",
          installationId,

          factory(auth) {
            return new auth.octokit.constructor(_objectSpread2(_objectSpread2({}, auth.octokitOptions), {}, {
              authStrategy: authApp.createAppAuth
            }, {
              auth: _objectSpread2(_objectSpread2({}, auth), {}, {
                installationId
              })
            }));
          }

        });
        return _objectSpread2(_objectSpread2({}, event), {}, {
          octokit: octokit
        });
      });

      return function transform(_x) {
        return _ref.apply(this, arguments);
      };
    }()
  });
}

function getInstallationOctokit(_x2, _x3) {
  return _getInstallationOctokit.apply(this, arguments);
}

function _getInstallationOctokit() {
  _getInstallationOctokit = _asyncToGenerator(function* (app, installationId) {
    return app.octokit.auth({
      type: "installation",
      installationId: installationId,

      factory(auth) {
        const options = _objectSpread2(_objectSpread2({}, auth.octokitOptions), {}, {
          authStrategy: authApp.createAppAuth
        }, {
          auth: _objectSpread2(_objectSpread2({}, auth), {}, {
            installationId: installationId
          })
        });

        return new auth.octokit.constructor(options);
      }

    });
  });
  return _getInstallationOctokit.apply(this, arguments);
}

function eachInstallationFactory(app) {
  return Object.assign(eachInstallation.bind(null, app), {
    iterator: eachInstallationIterator.bind(null, app)
  });
}

function eachInstallation(_x4, _x5) {
  return _eachInstallation.apply(this, arguments);
}

function _eachInstallation() {
  _eachInstallation = _asyncToGenerator(function* (app, callback) {
    const i = eachInstallationIterator(app)[Symbol.asyncIterator]();
    let result = yield i.next();

    while (!result.done) {
      yield callback(result.value);
      result = yield i.next();
    }
  });
  return _eachInstallation.apply(this, arguments);
}

function eachInstallationIterator(app) {
  return {
    [Symbol.asyncIterator]() {
      return _wrapAsyncGenerator(function* () {
        const iterator = pluginPaginateRest.composePaginateRest.iterator(app.octokit, "GET /app/installations");
        var _iteratorAbruptCompletion = false;
        var _didIteratorError = false;

        var _iteratorError;

        try {
          for (var _iterator = _asyncIterator(iterator), _step; _iteratorAbruptCompletion = !(_step = yield _awaitAsyncGenerator(_iterator.next())).done; _iteratorAbruptCompletion = false) {
            const {
              data: installations
            } = _step.value;

            for (const installation of installations) {
              const installationOctokit = yield _awaitAsyncGenerator(getInstallationOctokit(app, installation.id));
              yield {
                octokit: installationOctokit,
                installation
              };
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (_iteratorAbruptCompletion && _iterator.return != null) {
              yield _awaitAsyncGenerator(_iterator.return());
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      })();
    }

  };
}

function eachRepositoryFactory(app) {
  return Object.assign(eachRepository.bind(null, app), {
    iterator: eachRepositoryIterator.bind(null, app)
  });
}

function eachRepository(_x6, _x7, _x8) {
  return _eachRepository.apply(this, arguments);
}

function _eachRepository() {
  _eachRepository = _asyncToGenerator(function* (app, queryOrCallback, callback) {
    const i = eachRepositoryIterator(app, callback ? queryOrCallback : undefined)[Symbol.asyncIterator]();
    let result = yield i.next();

    while (!result.done) {
      if (callback) {
        yield callback(result.value);
      } else {
        yield queryOrCallback(result.value);
      }

      result = yield i.next();
    }
  });
  return _eachRepository.apply(this, arguments);
}

function singleInstallationIterator(app, installationId) {
  return {
    [Symbol.asyncIterator]() {
      return _wrapAsyncGenerator(function* () {
        yield {
          octokit: yield _awaitAsyncGenerator(app.getInstallationOctokit(installationId))
        };
      })();
    }

  };
}

function eachRepositoryIterator(app, query) {
  return {
    [Symbol.asyncIterator]() {
      return _wrapAsyncGenerator(function* () {
        const iterator = query ? singleInstallationIterator(app, query.installationId) : app.eachInstallation.iterator();
        var _iteratorAbruptCompletion = false;
        var _didIteratorError = false;

        var _iteratorError;

        try {
          for (var _iterator = _asyncIterator(iterator), _step; _iteratorAbruptCompletion = !(_step = yield _awaitAsyncGenerator(_iterator.next())).done; _iteratorAbruptCompletion = false) {
            const {
              octokit
            } = _step.value;
            const repositoriesIterator = pluginPaginateRest.composePaginateRest.iterator(octokit, "GET /installation/repositories");
            var _iteratorAbruptCompletion2 = false;
            var _didIteratorError2 = false;

            var _iteratorError2;

            try {
              for (var _iterator2 = _asyncIterator(repositoriesIterator), _step2; _iteratorAbruptCompletion2 = !(_step2 = yield _awaitAsyncGenerator(_iterator2.next())).done; _iteratorAbruptCompletion2 = false) {
                const {
                  data: repositories
                } = _step2.value;

                for (const repository of repositories) {
                  yield {
                    octokit: octokit,
                    repository
                  };
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (_iteratorAbruptCompletion2 && _iterator2.return != null) {
                  yield _awaitAsyncGenerator(_iterator2.return());
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (_iteratorAbruptCompletion && _iterator.return != null) {
              yield _awaitAsyncGenerator(_iterator.return());
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      })();
    }

  };
}

function onUnhandledRequestDefault(request, response) {
  response.writeHead(404, {
    "content-type": "application/json"
  });
  response.end(JSON.stringify({
    error: `Unknown route: ${request.method} ${request.url}`
  }));
}

function noop() {}

function createNodeMiddleware(app, options = {}) {
  const log = Object.assign({
    debug: noop,
    info: noop,
    warn: console.warn.bind(console),
    error: console.error.bind(console)
  }, options.log);

  const optionsWithDefaults = _objectSpread2(_objectSpread2({
    onUnhandledRequest: onUnhandledRequestDefault,
    pathPrefix: "/api/github"
  }, options), {}, {
    log
  });

  const webhooksMiddleware = webhooks$1.createNodeMiddleware(app.webhooks, {
    path: optionsWithDefaults.pathPrefix + "/webhooks",
    log,
    onUnhandledRequest: optionsWithDefaults.onUnhandledRequest
  });
  const oauthMiddleware = oauthApp.createNodeMiddleware(app.oauth, {
    pathPrefix: optionsWithDefaults.pathPrefix + "/oauth",
    onUnhandledRequest: optionsWithDefaults.onUnhandledRequest
  });
  return middleware.bind(null, optionsWithDefaults, {
    webhooksMiddleware,
    oauthMiddleware
  });
}

function middleware(_x9, _x10, _x11, _x12, _x13) {
  return _middleware.apply(this, arguments);
}

function _middleware() {
  _middleware = _asyncToGenerator(function* (options, {
    webhooksMiddleware,
    oauthMiddleware
  }, request, response, next) {
    const {
      pathname
    } = new URL(request.url, "http://localhost");

    if (pathname === `${options.pathPrefix}/webhooks`) {
      return webhooksMiddleware(request, response, next);
    }

    if (pathname.startsWith(`${options.pathPrefix}/oauth/`)) {
      return oauthMiddleware(request, response, next);
    }

    const isExpressMiddleware = typeof next === "function";

    if (isExpressMiddleware) {
      // @ts-ignore `next` must be a function as we check two lines above
      return next();
    }

    return options.onUnhandledRequest(request, response);
  });
  return _middleware.apply(this, arguments);
}

class App {
  constructor(options) {
    const Octokit = options.Octokit || core.Octokit;
    const authOptions = Object.assign({
      appId: options.appId,
      privateKey: options.privateKey
    }, options.oauth ? {
      clientId: options.oauth.clientId,
      clientSecret: options.oauth.clientSecret
    } : {});
    this.octokit = new Octokit({
      authStrategy: authApp.createAppAuth,
      auth: authOptions,
      log: options.log
    });
    this.log = Object.assign({
      debug: () => {},
      info: () => {},
      warn: console.warn.bind(console),
      error: console.error.bind(console)
    }, options.log); // set app.webhooks depending on whether "webhooks" option has been passed

    if (options.webhooks) {
      // @ts-expect-error TODO: figure this out
      this.webhooks = webhooks(this.octokit, options.webhooks);
    } else {
      Object.defineProperty(this, "webhooks", {
        get() {
          throw new Error("[@octokit/app] webhooks option not set");
        }

      });
    } // set app.oauth depending on whether "oauth" option has been passed


    if (options.oauth) {
      this.oauth = new oauthApp.OAuthApp(_objectSpread2(_objectSpread2({}, options.oauth), {}, {
        clientType: "github-app",
        Octokit
      }));
    } else {
      Object.defineProperty(this, "oauth", {
        get() {
          throw new Error("[@octokit/app] oauth.clientId / oauth.clientSecret options are not set");
        }

      });
    }

    this.getInstallationOctokit = getInstallationOctokit.bind(null, this);
    this.eachInstallation = eachInstallationFactory(this);
    this.eachRepository = eachRepositoryFactory(this);
  }

  static defaults(defaults) {
    const AppWithDefaults = class extends this {
      constructor(...args) {
        super(_objectSpread2(_objectSpread2({}, defaults), args[0]));
      }

    };
    return AppWithDefaults;
  }

}

App.VERSION = VERSION;
exports.App = App;
exports.createNodeMiddleware = createNodeMiddleware;

/***/ }),

/***/ 4111:
/*!**********************************************************!*\
  !*** ./node_modules/@octokit/auth-app/dist-web/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOAuthUserAuth": () => (/* reexport safe */ _octokit_auth_oauth_user__WEBPACK_IMPORTED_MODULE_2__.createOAuthUserAuth),
/* harmony export */   "createAppAuth": () => (/* binding */ createAppAuth)
/* harmony export */ });
/* harmony import */ var C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var universal_user_agent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal-user-agent */ 4282);
/* harmony import */ var _octokit_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @octokit/request */ 7544);
/* harmony import */ var _octokit_auth_oauth_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @octokit/auth-oauth-app */ 9630);
/* harmony import */ var deprecation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! deprecation */ 2460);
/* harmony import */ var universal_github_app_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal-github-app-jwt */ 9028);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lru-cache */ 7266);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _octokit_auth_oauth_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @octokit/auth-oauth-user */ 9213);










function getAppAuthentication(_x) {
  return _getAppAuthentication.apply(this, arguments);
} // https://github.com/isaacs/node-lru-cache#readme


function _getAppAuthentication() {
  _getAppAuthentication = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
    appId,
    privateKey,
    timeDifference
  }) {
    try {
      const appAuthentication = yield (0,universal_github_app_jwt__WEBPACK_IMPORTED_MODULE_3__.githubAppJwt)({
        id: +appId,
        privateKey,
        now: timeDifference && Math.floor(Date.now() / 1000) + timeDifference
      });
      return {
        type: "app",
        token: appAuthentication.token,
        appId: appAuthentication.appId,
        expiresAt: new Date(appAuthentication.expiration * 1000).toISOString()
      };
    } catch (error) {
      if (privateKey === "-----BEGIN RSA PRIVATE KEY-----") {
        throw new Error("The 'privateKey` option contains only the first line '-----BEGIN RSA PRIVATE KEY-----'. If you are setting it using a `.env` file, make sure it is set on a single line with newlines replaced by '\n'");
      } else {
        throw error;
      }
    }
  });
  return _getAppAuthentication.apply(this, arguments);
}

function getCache() {
  return new (lru_cache__WEBPACK_IMPORTED_MODULE_1___default())({
    // cache max. 15000 tokens, that will use less than 10mb memory
    max: 15000,
    // Cache for 1 minute less than GitHub expiry
    maxAge: 1000 * 60 * 59
  });
}

function get(_x2, _x3) {
  return _get.apply(this, arguments);
}

function _get() {
  _get = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (cache, options) {
    const cacheKey = optionsToCacheKey(options);
    const result = yield cache.get(cacheKey);

    if (!result) {
      return;
    }

    const [token, createdAt, expiresAt, repositorySelection, permissionsString, singleFileName] = result.split("|");
    const permissions = options.permissions || permissionsString.split(/,/).reduce((permissions, string) => {
      if (/!$/.test(string)) {
        permissions[string.slice(0, -1)] = "write";
      } else {
        permissions[string] = "read";
      }

      return permissions;
    }, {});
    return {
      token,
      createdAt,
      expiresAt,
      permissions,
      repositoryIds: options.repositoryIds,
      repositoryNames: options.repositoryNames,
      singleFileName,
      repositorySelection: repositorySelection
    };
  });
  return _get.apply(this, arguments);
}

function set(_x4, _x5, _x6) {
  return _set.apply(this, arguments);
}

function _set() {
  _set = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (cache, options, data) {
    const key = optionsToCacheKey(options);
    const permissionsString = options.permissions ? "" : Object.keys(data.permissions).map(name => `${name}${data.permissions[name] === "write" ? "!" : ""}`).join(",");
    const value = [data.token, data.createdAt, data.expiresAt, data.repositorySelection, permissionsString, data.singleFileName].join("|");
    yield cache.set(key, value);
  });
  return _set.apply(this, arguments);
}

function optionsToCacheKey({
  installationId,
  permissions = {},
  repositoryIds = [],
  repositoryNames = []
}) {
  const permissionsString = Object.keys(permissions).sort().map(name => permissions[name] === "read" ? name : `${name}!`).join(",");
  const repositoryIdsString = repositoryIds.sort().join(",");
  const repositoryNamesString = repositoryNames.join(",");
  return [installationId, repositoryIdsString, repositoryNamesString, permissionsString].filter(Boolean).join("|");
}

function toTokenAuthentication({
  installationId,
  token,
  createdAt,
  expiresAt,
  repositorySelection,
  permissions,
  repositoryIds,
  repositoryNames,
  singleFileName
}) {
  return Object.assign({
    type: "token",
    tokenType: "installation",
    token,
    installationId,
    permissions,
    createdAt,
    expiresAt,
    repositorySelection
  }, repositoryIds ? {
    repositoryIds
  } : null, repositoryNames ? {
    repositoryNames
  } : null, singleFileName ? {
    singleFileName
  } : null);
}

function getInstallationAuthentication(_x7, _x8, _x9) {
  return _getInstallationAuthentication.apply(this, arguments);
}

function _getInstallationAuthentication() {
  _getInstallationAuthentication = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (state, options, customRequest) {
    const installationId = Number(options.installationId || state.installationId);

    if (!installationId) {
      throw new Error("[@octokit/auth-app] installationId option is required for installation authentication.");
    }

    if (options.factory) {
      const {
        type,
        factory,
        oauthApp,
        ...factoryAuthOptions
      } = { ...state,
        ...options
      }; // @ts-expect-error if `options.factory` is set, the return type for `auth()` should be `Promise<ReturnType<options.factory>>`

      return factory(factoryAuthOptions);
    }

    const optionsWithInstallationTokenFromState = Object.assign({
      installationId
    }, options);

    if (!options.refresh) {
      const result = yield get(state.cache, optionsWithInstallationTokenFromState);

      if (result) {
        const {
          token,
          createdAt,
          expiresAt,
          permissions,
          repositoryIds,
          repositoryNames,
          singleFileName,
          repositorySelection
        } = result;
        return toTokenAuthentication({
          installationId,
          token,
          createdAt,
          expiresAt,
          permissions,
          repositorySelection,
          repositoryIds,
          repositoryNames,
          singleFileName
        });
      }
    }

    const appAuthentication = yield getAppAuthentication(state);
    const request = customRequest || state.request;
    const {
      data: {
        token,
        expires_at: expiresAt,
        repositories,
        permissions: permissionsOptional,
        repository_selection: repositorySelectionOptional,
        single_file: singleFileName
      }
    } = yield request("POST /app/installations/{installation_id}/access_tokens", {
      installation_id: installationId,
      repository_ids: options.repositoryIds,
      repositories: options.repositoryNames,
      permissions: options.permissions,
      mediaType: {
        previews: ["machine-man"]
      },
      headers: {
        authorization: `bearer ${appAuthentication.token}`
      }
    });
    /* istanbul ignore next - permissions are optional per OpenAPI spec, but we think that is incorrect */

    const permissions = permissionsOptional || {};
    /* istanbul ignore next - repositorySelection are optional per OpenAPI spec, but we think that is incorrect */

    const repositorySelection = repositorySelectionOptional || "all";
    const repositoryIds = repositories ? repositories.map(r => r.id) : void 0;
    const repositoryNames = repositories ? repositories.map(repo => repo.name) : void 0;
    const createdAt = new Date().toISOString();
    yield set(state.cache, optionsWithInstallationTokenFromState, {
      token,
      createdAt,
      expiresAt,
      repositorySelection,
      permissions,
      repositoryIds,
      repositoryNames,
      singleFileName
    });
    return toTokenAuthentication({
      installationId,
      token,
      createdAt,
      expiresAt,
      repositorySelection,
      permissions,
      repositoryIds,
      repositoryNames,
      singleFileName
    });
  });
  return _getInstallationAuthentication.apply(this, arguments);
}

function auth(_x10, _x11) {
  return _auth.apply(this, arguments);
}

function _auth() {
  _auth = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (state, authOptions) {
    switch (authOptions.type) {
      case "app":
        return getAppAuthentication(state);
      // @ts-expect-error "oauth" is not supperted in types

      case "oauth":
        state.log.warn( // @ts-expect-error `log.warn()` expects string
        new deprecation__WEBPACK_IMPORTED_MODULE_4__.Deprecation(`[@octokit/auth-app] {type: "oauth"} is deprecated. Use {type: "oauth-app"} instead`));

      case "oauth-app":
        return state.oauthApp({
          type: "oauth-app"
        });

      case "installation":
        return getInstallationAuthentication(state, { ...authOptions,
          type: "installation"
        });

      case "oauth-user":
        // @ts-expect-error TODO: infer correct auth options type based on type. authOptions should be typed as "WebFlowAuthOptions | OAuthAppDeviceFlowAuthOptions | GitHubAppDeviceFlowAuthOptions"
        return state.oauthApp(authOptions);

      default:
        // @ts-expect-error type is "never" at this point
        throw new Error(`Invalid auth type: ${authOptions.type}`);
    }
  });
  return _auth.apply(this, arguments);
}

const PATHS = ["/app", "/app/hook/config", "/app/hook/deliveries", "/app/hook/deliveries/{delivery_id}", "/app/hook/deliveries/{delivery_id}/attempts", "/app/installations", "/app/installations/{installation_id}", "/app/installations/{installation_id}/access_tokens", "/app/installations/{installation_id}/suspended", "/marketplace_listing/accounts/{account_id}", "/marketplace_listing/plan", "/marketplace_listing/plans", "/marketplace_listing/plans/{plan_id}/accounts", "/marketplace_listing/stubbed/accounts/{account_id}", "/marketplace_listing/stubbed/plan", "/marketplace_listing/stubbed/plans", "/marketplace_listing/stubbed/plans/{plan_id}/accounts", "/orgs/{org}/installation", "/repos/{owner}/{repo}/installation", "/users/{username}/installation"]; // CREDIT: Simon Grondin (https://github.com/SGrondin)
// https://github.com/octokit/plugin-throttling.js/blob/45c5d7f13b8af448a9dbca468d9c9150a73b3948/lib/route-matcher.js

function routeMatcher(paths) {
  // EXAMPLE. For the following paths:

  /* [
      "/orgs/{org}/invitations",
      "/repos/{owner}/{repo}/collaborators/{username}"
  ] */
  const regexes = paths.map(p => p.split("/").map(c => c.startsWith("{") ? "(?:.+?)" : c).join("/")); // 'regexes' would contain:

  /* [
      '/orgs/(?:.+?)/invitations',
      '/repos/(?:.+?)/(?:.+?)/collaborators/(?:.+?)'
  ] */

  const regex = `^(?:${regexes.map(r => `(?:${r})`).join("|")})[^/]*$`; // 'regex' would contain:

  /*
    ^(?:(?:\/orgs\/(?:.+?)\/invitations)|(?:\/repos\/(?:.+?)\/(?:.+?)\/collaborators\/(?:.+?)))[^\/]*$
       It may look scary, but paste it into https://www.debuggex.com/
    and it will make a lot more sense!
  */

  return new RegExp(regex, "i");
}

const REGEX = routeMatcher(PATHS);

function requiresAppAuth(url) {
  return !!url && REGEX.test(url);
}

const FIVE_SECONDS_IN_MS = 5 * 1000;

function isNotTimeSkewError(error) {
  return !(error.message.match(/'Expiration time' claim \('exp'\) must be a numeric value representing the future time at which the assertion expires/) || error.message.match(/'Issued at' claim \('iat'\) must be an Integer representing the time that the assertion was issued/));
}

function hook(_x12, _x13, _x14, _x15) {
  return _hook.apply(this, arguments);
}
/**
 * Newly created tokens might not be accessible immediately after creation.
 * In case of a 401 response, we retry with an exponential delay until more
 * than five seconds pass since the creation of the token.
 *
 * @see https://github.com/octokit/auth-app.js/issues/65
 */


function _hook() {
  _hook = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (state, request, route, parameters) {
    const endpoint = request.endpoint.merge(route, parameters);
    const url = endpoint.url; // Do not intercept request to retrieve a new token

    if (/\/login\/oauth\/access_token$/.test(url)) {
      return request(endpoint);
    }

    if (requiresAppAuth(url.replace(request.endpoint.DEFAULTS.baseUrl, ""))) {
      const {
        token
      } = yield getAppAuthentication(state);
      endpoint.headers.authorization = `bearer ${token}`;
      let response;

      try {
        response = yield request(endpoint);
      } catch (error) {
        // If there's an issue with the expiration, regenerate the token and try again.
        // Otherwise rethrow the error for upstream handling.
        if (isNotTimeSkewError(error)) {
          throw error;
        } // If the date header is missing, we can't correct the system time skew.
        // Throw the error to be handled upstream.


        if (typeof error.response.headers.date === "undefined") {
          throw error;
        }

        const diff = Math.floor((Date.parse(error.response.headers.date) - Date.parse(new Date().toString())) / 1000);
        state.log.warn(error.message);
        state.log.warn(`[@octokit/auth-app] GitHub API time and system time are different by ${diff} seconds. Retrying request with the difference accounted for.`);
        const {
          token
        } = yield getAppAuthentication({ ...state,
          timeDifference: diff
        });
        endpoint.headers.authorization = `bearer ${token}`;
        return request(endpoint);
      }

      return response;
    }

    if ((0,_octokit_auth_oauth_user__WEBPACK_IMPORTED_MODULE_2__.requiresBasicAuth)(url)) {
      const authentication = yield state.oauthApp({
        type: "oauth-app"
      });
      endpoint.headers.authorization = authentication.headers.authorization;
      return request(endpoint);
    }

    const {
      token,
      createdAt
    } = yield getInstallationAuthentication(state, // @ts-expect-error TBD
    {}, request);
    endpoint.headers.authorization = `token ${token}`;
    return sendRequestWithRetries(state, request, endpoint, createdAt);
  });
  return _hook.apply(this, arguments);
}

function sendRequestWithRetries(_x16, _x17, _x18, _x19) {
  return _sendRequestWithRetries.apply(this, arguments);
}

function _sendRequestWithRetries() {
  _sendRequestWithRetries = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (state, request, options, createdAt, retries = 0) {
    const timeSinceTokenCreationInMs = +new Date() - +new Date(createdAt);

    try {
      return yield request(options);
    } catch (error) {
      if (error.status !== 401) {
        throw error;
      }

      if (timeSinceTokenCreationInMs >= FIVE_SECONDS_IN_MS) {
        if (retries > 0) {
          error.message = `After ${retries} retries within ${timeSinceTokenCreationInMs / 1000}s of creating the installation access token, the response remains 401. At this point, the cause may be an authentication problem or a system outage. Please check https://www.githubstatus.com for status information`;
        }

        throw error;
      }

      ++retries;
      const awaitTime = retries * 1000;
      state.log.warn(`[@octokit/auth-app] Retrying after 401 response to account for token replication delay (retry: ${retries}, wait: ${awaitTime / 1000}s)`);
      yield new Promise(resolve => setTimeout(resolve, awaitTime));
      return sendRequestWithRetries(state, request, options, createdAt, retries);
    }
  });
  return _sendRequestWithRetries.apply(this, arguments);
}

const VERSION = "3.6.1";

function createAppAuth(options) {
  if (!options.appId) {
    throw new Error("[@octokit/auth-app] appId option is required");
  }

  if (!options.privateKey) {
    throw new Error("[@octokit/auth-app] privateKey option is required");
  }

  if ("installationId" in options && !options.installationId) {
    throw new Error("[@octokit/auth-app] installationId is set to a falsy value");
  }

  const log = Object.assign({
    warn: console.warn.bind(console)
  }, options.log);
  const request$1 = options.request || _octokit_request__WEBPACK_IMPORTED_MODULE_5__.request.defaults({
    headers: {
      "user-agent": `octokit-auth-app.js/${VERSION} ${(0,universal_user_agent__WEBPACK_IMPORTED_MODULE_6__.getUserAgent)()}`
    }
  });
  const state = Object.assign({
    request: request$1,
    cache: getCache()
  }, options, options.installationId ? {
    installationId: Number(options.installationId)
  } : {}, {
    log,
    oauthApp: (0,_octokit_auth_oauth_app__WEBPACK_IMPORTED_MODULE_7__.createOAuthAppAuth)({
      clientType: "github-app",
      clientId: options.clientId || "",
      clientSecret: options.clientSecret || "",
      request: request$1
    })
  }); // @ts-expect-error not worth the extra code to appease TS

  return Object.assign(auth.bind(null, state), {
    hook: hook.bind(null, state)
  });
}



/***/ }),

/***/ 9630:
/*!****************************************************************!*\
  !*** ./node_modules/@octokit/auth-oauth-app/dist-web/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOAuthUserAuth": () => (/* reexport safe */ _octokit_auth_oauth_user__WEBPACK_IMPORTED_MODULE_2__.createOAuthUserAuth),
/* harmony export */   "createOAuthAppAuth": () => (/* binding */ createOAuthAppAuth)
/* harmony export */ });
/* harmony import */ var C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var universal_user_agent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal-user-agent */ 4282);
/* harmony import */ var _octokit_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @octokit/request */ 7544);
/* harmony import */ var btoa_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! btoa-lite */ 8263);
/* harmony import */ var btoa_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(btoa_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _octokit_auth_oauth_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @octokit/auth-oauth-user */ 9213);







function auth(_x, _x2) {
  return _auth.apply(this, arguments);
}

function _auth() {
  _auth = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (state, authOptions) {
    if (authOptions.type === "oauth-app") {
      return {
        type: "oauth-app",
        clientId: state.clientId,
        clientSecret: state.clientSecret,
        clientType: state.clientType,
        headers: {
          authorization: `basic ${btoa_lite__WEBPACK_IMPORTED_MODULE_1___default()(`${state.clientId}:${state.clientSecret}`)}`
        }
      };
    }

    if ("factory" in authOptions) {
      const {
        type,
        ...options
      } = { ...authOptions,
        ...state
      }; // @ts-expect-error TODO: `option` cannot be never, is this a bug?

      return authOptions.factory(options);
    }

    const common = {
      clientId: state.clientId,
      clientSecret: state.clientSecret,
      request: state.request,
      ...authOptions
    }; // TS: Look what you made me do

    const userAuth = state.clientType === "oauth-app" ? yield (0,_octokit_auth_oauth_user__WEBPACK_IMPORTED_MODULE_2__.createOAuthUserAuth)({ ...common,
      clientType: state.clientType
    }) : yield (0,_octokit_auth_oauth_user__WEBPACK_IMPORTED_MODULE_2__.createOAuthUserAuth)({ ...common,
      clientType: state.clientType
    });
    return userAuth();
  });
  return _auth.apply(this, arguments);
}

function hook(_x3, _x4, _x5, _x6) {
  return _hook.apply(this, arguments);
}

function _hook() {
  _hook = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (state, request, route, parameters) {
    let endpoint = request.endpoint.merge(route, parameters); // Do not intercept OAuth Web/Device flow request

    if (/\/login\/(oauth\/access_token|device\/code)$/.test(endpoint.url)) {
      return request(endpoint);
    }

    if (state.clientType === "github-app" && !(0,_octokit_auth_oauth_user__WEBPACK_IMPORTED_MODULE_2__.requiresBasicAuth)(endpoint.url)) {
      throw new Error(`[@octokit/auth-oauth-app] GitHub Apps cannot use their client ID/secret for basic authentication for endpoints other than "/applications/{client_id}/**". "${endpoint.method} ${endpoint.url}" is not supported.`);
    }

    const credentials = btoa_lite__WEBPACK_IMPORTED_MODULE_1___default()(`${state.clientId}:${state.clientSecret}`);
    endpoint.headers.authorization = `basic ${credentials}`;

    try {
      return yield request(endpoint);
    } catch (error) {
      /* istanbul ignore if */
      if (error.status !== 401) throw error;
      error.message = `[@octokit/auth-oauth-app] "${endpoint.method} ${endpoint.url}" does not support clientId/clientSecret basic authentication.`;
      throw error;
    }
  });
  return _hook.apply(this, arguments);
}

const VERSION = "4.3.1";

function createOAuthAppAuth(options) {
  const state = Object.assign({
    request: _octokit_request__WEBPACK_IMPORTED_MODULE_3__.request.defaults({
      headers: {
        "user-agent": `octokit-auth-oauth-app.js/${VERSION} ${(0,universal_user_agent__WEBPACK_IMPORTED_MODULE_4__.getUserAgent)()}`
      }
    }),
    clientType: "oauth-app"
  }, options); // @ts-expect-error not worth the extra code to appease TS

  return Object.assign(auth.bind(null, state), {
    hook: hook.bind(null, state)
  });
}



/***/ }),

/***/ 4349:
/*!*******************************************************************!*\
  !*** ./node_modules/@octokit/auth-oauth-device/dist-web/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOAuthDeviceAuth": () => (/* binding */ createOAuthDeviceAuth)
/* harmony export */ });
/* harmony import */ var C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var universal_user_agent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal-user-agent */ 4282);
/* harmony import */ var _octokit_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @octokit/request */ 7544);
/* harmony import */ var _octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @octokit/oauth-methods */ 7199);





function getOAuthAccessToken(_x, _x2) {
  return _getOAuthAccessToken.apply(this, arguments);
}

function _getOAuthAccessToken() {
  _getOAuthAccessToken = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (state, options) {
    const cachedAuthentication = getCachedAuthentication(state, options.auth);
    if (cachedAuthentication) return cachedAuthentication; // Step 1: Request device and user codes
    // https://docs.github.com/en/developers/apps/authorizing-oauth-apps#step-1-app-requests-the-device-and-user-verification-codes-from-github

    const {
      data: verification
    } = yield (0,_octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_1__.createDeviceCode)({
      clientType: state.clientType,
      clientId: state.clientId,
      request: options.request || state.request,
      // @ts-expect-error the extra code to make TS happy is not worth it
      scopes: options.auth.scopes || state.scopes
    }); // Step 2: User must enter the user code on https://github.com/login/device
    // See https://docs.github.com/en/developers/apps/authorizing-oauth-apps#step-2-prompt-the-user-to-enter-the-user-code-in-a-browser

    yield state.onVerification(verification); // Step 3: Exchange device code for access token
    // See https://docs.github.com/en/developers/apps/authorizing-oauth-apps#step-3-app-polls-github-to-check-if-the-user-authorized-the-device

    const authentication = yield waitForAccessToken(options.request || state.request, state.clientId, state.clientType, verification);
    state.authentication = authentication;
    return authentication;
  });
  return _getOAuthAccessToken.apply(this, arguments);
}

function getCachedAuthentication(state, auth) {
  if (auth.refresh === true) return false;
  if (!state.authentication) return false;

  if (state.clientType === "github-app") {
    return state.authentication;
  }

  const authentication = state.authentication;
  const newScope = ("scopes" in auth && auth.scopes || state.scopes).join(" ");
  const currentScope = authentication.scopes.join(" ");
  return newScope === currentScope ? authentication : false;
}

function wait(_x3) {
  return _wait.apply(this, arguments);
}

function _wait() {
  _wait = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (seconds) {
    yield new Promise(resolve => setTimeout(resolve, seconds * 1000));
  });
  return _wait.apply(this, arguments);
}

function waitForAccessToken(_x4, _x5, _x6, _x7) {
  return _waitForAccessToken.apply(this, arguments);
}

function _waitForAccessToken() {
  _waitForAccessToken = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (request, clientId, clientType, verification) {
    try {
      const options = {
        clientId,
        request,
        code: verification.device_code
      }; // WHY TYPESCRIPT WHY ARE YOU DOING THIS TO ME

      const {
        authentication
      } = clientType === "oauth-app" ? yield (0,_octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_1__.exchangeDeviceCode)({ ...options,
        clientType: "oauth-app"
      }) : yield (0,_octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_1__.exchangeDeviceCode)({ ...options,
        clientType: "github-app"
      });
      return {
        type: "token",
        tokenType: "oauth",
        ...authentication
      };
    } catch (error) {
      // istanbul ignore if
      if (!error.response) throw error;
      const errorType = error.response.data.error;

      if (errorType === "authorization_pending") {
        yield wait(verification.interval);
        return waitForAccessToken(request, clientId, clientType, verification);
      }

      if (errorType === "slow_down") {
        yield wait(verification.interval + 5);
        return waitForAccessToken(request, clientId, clientType, verification);
      }

      throw error;
    }
  });
  return _waitForAccessToken.apply(this, arguments);
}

function auth(_x8, _x9) {
  return _auth.apply(this, arguments);
}

function _auth() {
  _auth = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (state, authOptions) {
    return getOAuthAccessToken(state, {
      auth: authOptions
    });
  });
  return _auth.apply(this, arguments);
}

function hook(_x10, _x11, _x12, _x13) {
  return _hook.apply(this, arguments);
}

function _hook() {
  _hook = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (state, request, route, parameters) {
    let endpoint = request.endpoint.merge(route, parameters); // Do not intercept request to retrieve codes or token

    if (/\/login\/(oauth\/access_token|device\/code)$/.test(endpoint.url)) {
      return request(endpoint);
    }

    const {
      token
    } = yield getOAuthAccessToken(state, {
      request,
      auth: {
        type: "oauth"
      }
    });
    endpoint.headers.authorization = `token ${token}`;
    return request(endpoint);
  });
  return _hook.apply(this, arguments);
}

const VERSION = "3.1.2";

function createOAuthDeviceAuth(options) {
  const requestWithDefaults = options.request || _octokit_request__WEBPACK_IMPORTED_MODULE_2__.request.defaults({
    headers: {
      "user-agent": `octokit-auth-oauth-device.js/${VERSION} ${(0,universal_user_agent__WEBPACK_IMPORTED_MODULE_3__.getUserAgent)()}`
    }
  });
  const {
    request: request$1 = requestWithDefaults,
    ...otherOptions
  } = options;
  const state = options.clientType === "github-app" ? { ...otherOptions,
    clientType: "github-app",
    request: request$1
  } : { ...otherOptions,
    clientType: "oauth-app",
    request: request$1,
    scopes: options.scopes || []
  };

  if (!options.clientId) {
    throw new Error('[@octokit/auth-oauth-device] "clientId" option must be set (https://github.com/octokit/auth-oauth-device.js#usage)');
  }

  if (!options.onVerification) {
    throw new Error('[@octokit/auth-oauth-device] "onVerification" option must be a function (https://github.com/octokit/auth-oauth-device.js#usage)');
  } // @ts-ignore too much for tsc / ts-jest ¯\_(ツ)_/¯


  return Object.assign(auth.bind(null, state), {
    hook: hook.bind(null, state)
  });
}



/***/ }),

/***/ 9213:
/*!*****************************************************************!*\
  !*** ./node_modules/@octokit/auth-oauth-user/dist-web/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOAuthUserAuth": () => (/* binding */ createOAuthUserAuth),
/* harmony export */   "requiresBasicAuth": () => (/* binding */ requiresBasicAuth)
/* harmony export */ });
/* harmony import */ var C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var universal_user_agent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal-user-agent */ 4282);
/* harmony import */ var _octokit_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @octokit/request */ 7544);
/* harmony import */ var _octokit_auth_oauth_device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @octokit/auth-oauth-device */ 4349);
/* harmony import */ var _octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @octokit/oauth-methods */ 7199);
/* harmony import */ var btoa_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! btoa-lite */ 8263);
/* harmony import */ var btoa_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(btoa_lite__WEBPACK_IMPORTED_MODULE_1__);






const VERSION = "1.3.0"; // @ts-nocheck there is only place for one of us in this file. And it's not you, TS

function getAuthentication(_x) {
  return _getAuthentication.apply(this, arguments);
}

function _getAuthentication() {
  _getAuthentication = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (state) {
    // handle code exchange form OAuth Web Flow
    if ("code" in state.strategyOptions) {
      const {
        authentication
      } = yield (0,_octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_2__.exchangeWebFlowCode)({
        clientId: state.clientId,
        clientSecret: state.clientSecret,
        clientType: state.clientType,
        ...state.strategyOptions,
        request: state.request
      });
      return {
        type: "token",
        tokenType: "oauth",
        ...authentication
      };
    } // handle OAuth device flow


    if ("onVerification" in state.strategyOptions) {
      const deviceAuth = (0,_octokit_auth_oauth_device__WEBPACK_IMPORTED_MODULE_3__.createOAuthDeviceAuth)({
        clientType: state.clientType,
        clientId: state.clientId,
        ...state.strategyOptions,
        request: state.request
      });
      const authentication = yield deviceAuth({
        type: "oauth"
      });
      return {
        clientSecret: state.clientSecret,
        ...authentication
      };
    } // use existing authentication


    if ("token" in state.strategyOptions) {
      return {
        type: "token",
        tokenType: "oauth",
        clientId: state.clientId,
        clientSecret: state.clientSecret,
        clientType: state.clientType,
        ...state.strategyOptions
      };
    }

    throw new Error("[@octokit/auth-oauth-user] Invalid strategy options");
  });
  return _getAuthentication.apply(this, arguments);
}

function auth(_x2) {
  return _auth.apply(this, arguments);
}
/**
 * The following endpoints require an OAuth App to authenticate using its client_id and client_secret.
 *
 * - [`POST /applications/{client_id}/token`](https://docs.github.com/en/rest/reference/apps#check-a-token) - Check a token
 * - [`PATCH /applications/{client_id}/token`](https://docs.github.com/en/rest/reference/apps#reset-a-token) - Reset a token
 * - [`POST /applications/{client_id}/token/scoped`](https://docs.github.com/en/rest/reference/apps#create-a-scoped-access-token) - Create a scoped access token
 * - [`DELETE /applications/{client_id}/token`](https://docs.github.com/en/rest/reference/apps#delete-an-app-token) - Delete an app token
 * - [`DELETE /applications/{client_id}/grant`](https://docs.github.com/en/rest/reference/apps#delete-an-app-authorization) - Delete an app authorization
 *
 * deprecated:
 *
 * - [`GET /applications/{client_id}/tokens/{access_token}`](https://docs.github.com/en/rest/reference/apps#check-an-authorization) - Check an authorization
 * - [`POST /applications/{client_id}/tokens/{access_token}`](https://docs.github.com/en/rest/reference/apps#reset-an-authorization) - Reset an authorization
 * - [`DELETE /applications/{client_id}/tokens/{access_token}`](https://docs.github.com/en/rest/reference/apps#revoke-an-authorization-for-an-application) - Revoke an authorization for an application
 * - [`DELETE /applications/{client_id}/grants/{access_token}`](https://docs.github.com/en/rest/reference/apps#revoke-a-grant-for-an-application) - Revoke a grant for an application
 */


function _auth() {
  _auth = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (state, options = {}) {
    if (!state.authentication) {
      // This is what TS makes us do ¯\_(ツ)_/¯
      state.authentication = state.clientType === "oauth-app" ? yield getAuthentication(state) : yield getAuthentication(state);
    }

    if (state.authentication.invalid) {
      throw new Error("[@octokit/auth-oauth-user] Token is invalid");
    }

    const currentAuthentication = state.authentication; // (auto) refresh for user-to-server tokens

    if ("expiresAt" in currentAuthentication) {
      if (options.type === "refresh" || new Date(currentAuthentication.expiresAt) < new Date()) {
        const {
          authentication
        } = yield (0,_octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_2__.refreshToken)({
          clientType: "github-app",
          clientId: state.clientId,
          clientSecret: state.clientSecret,
          refreshToken: currentAuthentication.refreshToken,
          request: state.request
        });
        state.authentication = {
          tokenType: "oauth",
          type: "token",
          ...authentication
        };
      }
    } // throw error for invalid refresh call


    if (options.type === "refresh") {
      if (state.clientType === "oauth-app") {
        throw new Error("[@octokit/auth-oauth-user] OAuth Apps do not support expiring tokens");
      }

      if (!currentAuthentication.hasOwnProperty("expiresAt")) {
        throw new Error("[@octokit/auth-oauth-user] Refresh token missing");
      }
    } // check or reset token


    if (options.type === "check" || options.type === "reset") {
      const method = options.type === "check" ? _octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_2__.checkToken : _octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_2__.resetToken;

      try {
        const {
          authentication
        } = yield method({
          // @ts-expect-error making TS happy would require unnecessary code so no
          clientType: state.clientType,
          clientId: state.clientId,
          clientSecret: state.clientSecret,
          token: state.authentication.token,
          request: state.request
        });
        state.authentication = {
          tokenType: "oauth",
          type: "token",
          // @ts-expect-error TBD
          ...authentication
        };
        return state.authentication;
      } catch (error) {
        // istanbul ignore else
        if (error.status === 404) {
          error.message = "[@octokit/auth-oauth-user] Token is invalid"; // @ts-expect-error TBD

          state.authentication.invalid = true;
        }

        throw error;
      }
    } // invalidate


    if (options.type === "delete" || options.type === "deleteAuthorization") {
      const method = options.type === "delete" ? _octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_2__.deleteToken : _octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_2__.deleteAuthorization;

      try {
        yield method({
          // @ts-expect-error making TS happy would require unnecessary code so no
          clientType: state.clientType,
          clientId: state.clientId,
          clientSecret: state.clientSecret,
          token: state.authentication.token,
          request: state.request
        });
      } catch (error) {
        // istanbul ignore if
        if (error.status !== 404) throw error;
      }

      state.authentication.invalid = true;
      return state.authentication;
    }

    return state.authentication;
  });
  return _auth.apply(this, arguments);
}

const ROUTES_REQUIRING_BASIC_AUTH = /\/applications\/[^/]+\/(token|grant)s?/;

function requiresBasicAuth(url) {
  return url && ROUTES_REQUIRING_BASIC_AUTH.test(url);
}

function hook(_x3, _x4, _x5) {
  return _hook.apply(this, arguments);
}

function _hook() {
  _hook = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (state, request, route, parameters = {}) {
    const endpoint = request.endpoint.merge(route, parameters); // Do not intercept OAuth Web/Device flow request

    if (/\/login\/(oauth\/access_token|device\/code)$/.test(endpoint.url)) {
      return request(endpoint);
    }

    if (requiresBasicAuth(endpoint.url)) {
      const credentials = btoa_lite__WEBPACK_IMPORTED_MODULE_1___default()(`${state.clientId}:${state.clientSecret}`);
      endpoint.headers.authorization = `basic ${credentials}`;
      return request(endpoint);
    } // TS makes us do this ¯\_(ツ)_/¯


    const {
      token
    } = state.clientType === "oauth-app" ? yield auth({ ...state,
      request
    }) : yield auth({ ...state,
      request
    });
    endpoint.headers.authorization = "token " + token;
    return request(endpoint);
  });
  return _hook.apply(this, arguments);
}

function createOAuthUserAuth({
  clientId,
  clientSecret,
  clientType = "oauth-app",
  request: request$1 = _octokit_request__WEBPACK_IMPORTED_MODULE_4__.request.defaults({
    headers: {
      "user-agent": `octokit-auth-oauth-app.js/${VERSION} ${(0,universal_user_agent__WEBPACK_IMPORTED_MODULE_5__.getUserAgent)()}`
    }
  }),
  ...strategyOptions
}) {
  const state = Object.assign({
    clientType,
    clientId,
    clientSecret,
    strategyOptions,
    request: request$1
  }); // @ts-expect-error not worth the extra code needed to appease TS

  return Object.assign(auth.bind(null, state), {
    // @ts-expect-error not worth the extra code needed to appease TS
    hook: hook.bind(null, state)
  });
}

createOAuthUserAuth.VERSION = VERSION;


/***/ }),

/***/ 369:
/*!************************************************************!*\
  !*** ./node_modules/@octokit/auth-token/dist-web/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTokenAuth": () => (/* binding */ createTokenAuth)
/* harmony export */ });
/* harmony import */ var C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);

const REGEX_IS_INSTALLATION_LEGACY = /^v1\./;
const REGEX_IS_INSTALLATION = /^ghs_/;
const REGEX_IS_USER_TO_SERVER = /^ghu_/;

function auth(_x) {
  return _auth.apply(this, arguments);
}
/**
 * Prefix token for usage in the Authorization header
 *
 * @param token OAuth token or JSON Web Token
 */


function _auth() {
  _auth = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (token) {
    const isApp = token.split(/\./).length === 3;
    const isInstallation = REGEX_IS_INSTALLATION_LEGACY.test(token) || REGEX_IS_INSTALLATION.test(token);
    const isUserToServer = REGEX_IS_USER_TO_SERVER.test(token);
    const tokenType = isApp ? "app" : isInstallation ? "installation" : isUserToServer ? "user-to-server" : "oauth";
    return {
      type: "token",
      token: token,
      tokenType
    };
  });
  return _auth.apply(this, arguments);
}

function withAuthorizationPrefix(token) {
  if (token.split(/\./).length === 3) {
    return `bearer ${token}`;
  }

  return `token ${token}`;
}

function hook(_x2, _x3, _x4, _x5) {
  return _hook.apply(this, arguments);
}

function _hook() {
  _hook = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (token, request, route, parameters) {
    const endpoint = request.endpoint.merge(route, parameters);
    endpoint.headers.authorization = withAuthorizationPrefix(token);
    return request(endpoint);
  });
  return _hook.apply(this, arguments);
}

const createTokenAuth = function createTokenAuth(token) {
  if (!token) {
    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  }

  if (typeof token !== "string") {
    throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
  }

  token = token.replace(/^(token|bearer) +/i, "");
  return Object.assign(auth.bind(null, token), {
    hook: hook.bind(null, token)
  });
};



/***/ }),

/***/ 8901:
/*!**********************************************************************!*\
  !*** ./node_modules/@octokit/auth-unauthenticated/dist-web/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUnauthenticatedAuth": () => (/* binding */ createUnauthenticatedAuth)
/* harmony export */ });
/* harmony import */ var C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);


function auth(_x) {
  return _auth.apply(this, arguments);
}

function _auth() {
  _auth = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (reason) {
    return {
      type: "unauthenticated",
      reason
    };
  });
  return _auth.apply(this, arguments);
}

function isRateLimitError(error) {
  if (error.status !== 403) {
    return false;
  }
  /* istanbul ignore if */


  if (!error.response) {
    return false;
  }

  return error.response.headers["x-ratelimit-remaining"] === "0";
}

const REGEX_ABUSE_LIMIT_MESSAGE = /\babuse\b/i;

function isAbuseLimitError(error) {
  if (error.status !== 403) {
    return false;
  }

  return REGEX_ABUSE_LIMIT_MESSAGE.test(error.message);
}

function hook(_x2, _x3, _x4, _x5) {
  return _hook.apply(this, arguments);
}

function _hook() {
  _hook = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (reason, request, route, parameters) {
    const endpoint = request.endpoint.merge(route, parameters);
    return request(endpoint).catch(error => {
      if (error.status === 404) {
        error.message = `Not found. May be due to lack of authentication. Reason: ${reason}`;
        throw error;
      }

      if (isRateLimitError(error)) {
        error.message = `API rate limit exceeded. This maybe caused by the lack of authentication. Reason: ${reason}`;
        throw error;
      }

      if (isAbuseLimitError(error)) {
        error.message = `You have triggered an abuse detection mechanism. This maybe caused by the lack of authentication. Reason: ${reason}`;
        throw error;
      }

      if (error.status === 401) {
        error.message = `Unauthorized. "${endpoint.method} ${endpoint.url}" failed most likely due to lack of authentication. Reason: ${reason}`;
        throw error;
      }

      if (error.status >= 400 && error.status < 500) {
        error.message = error.message.replace(/\.?$/, `. May be caused by lack of authentication (${reason}).`);
      }

      throw error;
    });
  });
  return _hook.apply(this, arguments);
}

const createUnauthenticatedAuth = function createUnauthenticatedAuth(options) {
  if (!options || !options.reason) {
    throw new Error("[@octokit/auth-unauthenticated] No reason passed to createUnauthenticatedAuth");
  }

  return Object.assign(auth.bind(null, options.reason), {
    hook: hook.bind(null, options.reason)
  });
};



/***/ }),

/***/ 1719:
/*!******************************************************!*\
  !*** ./node_modules/@octokit/core/dist-web/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Octokit": () => (/* binding */ Octokit)
/* harmony export */ });
/* harmony import */ var C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var universal_user_agent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal-user-agent */ 4282);
/* harmony import */ var before_after_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! before-after-hook */ 6197);
/* harmony import */ var before_after_hook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(before_after_hook__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _octokit_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @octokit/request */ 7544);
/* harmony import */ var _octokit_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @octokit/graphql */ 5278);
/* harmony import */ var _octokit_auth_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @octokit/auth-token */ 369);






const VERSION = "3.6.0";

class Octokit {
  constructor(options = {}) {
    const hook = new before_after_hook__WEBPACK_IMPORTED_MODULE_1__.Collection();
    const requestDefaults = {
      baseUrl: _octokit_request__WEBPACK_IMPORTED_MODULE_2__.request.endpoint.DEFAULTS.baseUrl,
      headers: {},
      request: Object.assign({}, options.request, {
        // @ts-ignore internal usage only, no need to type
        hook: hook.bind(null, "request")
      }),
      mediaType: {
        previews: [],
        format: ""
      }
    }; // prepend default user agent with `options.userAgent` if set

    requestDefaults.headers["user-agent"] = [options.userAgent, `octokit-core.js/${VERSION} ${(0,universal_user_agent__WEBPACK_IMPORTED_MODULE_3__.getUserAgent)()}`].filter(Boolean).join(" ");

    if (options.baseUrl) {
      requestDefaults.baseUrl = options.baseUrl;
    }

    if (options.previews) {
      requestDefaults.mediaType.previews = options.previews;
    }

    if (options.timeZone) {
      requestDefaults.headers["time-zone"] = options.timeZone;
    }

    this.request = _octokit_request__WEBPACK_IMPORTED_MODULE_2__.request.defaults(requestDefaults);
    this.graphql = (0,_octokit_graphql__WEBPACK_IMPORTED_MODULE_4__.withCustomRequest)(this.request).defaults(requestDefaults);
    this.log = Object.assign({
      debug: () => {},
      info: () => {},
      warn: console.warn.bind(console),
      error: console.error.bind(console)
    }, options.log);
    this.hook = hook; // (1) If neither `options.authStrategy` nor `options.auth` are set, the `octokit` instance
    //     is unauthenticated. The `this.auth()` method is a no-op and no request hook is registered.
    // (2) If only `options.auth` is set, use the default token authentication strategy.
    // (3) If `options.authStrategy` is set then use it and pass in `options.auth`. Always pass own request as many strategies accept a custom request instance.
    // TODO: type `options.auth` based on `options.authStrategy`.

    if (!options.authStrategy) {
      if (!options.auth) {
        // (1)
        this.auth = /*#__PURE__*/(0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          return {
            type: "unauthenticated"
          };
        });
      } else {
        // (2)
        const auth = (0,_octokit_auth_token__WEBPACK_IMPORTED_MODULE_5__.createTokenAuth)(options.auth); // @ts-ignore  ¯\_(ツ)_/¯

        hook.wrap("request", auth.hook);
        this.auth = auth;
      }
    } else {
      const {
        authStrategy,
        ...otherOptions
      } = options;
      const auth = authStrategy(Object.assign({
        request: this.request,
        log: this.log,
        // we pass the current octokit instance as well as its constructor options
        // to allow for authentication strategies that return a new octokit instance
        // that shares the same internal state as the current one. The original
        // requirement for this was the "event-octokit" authentication strategy
        // of https://github.com/probot/octokit-auth-probot.
        octokit: this,
        octokitOptions: otherOptions
      }, options.auth)); // @ts-ignore  ¯\_(ツ)_/¯

      hook.wrap("request", auth.hook);
      this.auth = auth;
    } // apply plugins
    // https://stackoverflow.com/a/16345172


    const classConstructor = this.constructor;
    classConstructor.plugins.forEach(plugin => {
      Object.assign(this, plugin(this, options));
    });
  }

  static defaults(defaults) {
    const OctokitWithDefaults = class extends this {
      constructor(...args) {
        const options = args[0] || {};

        if (typeof defaults === "function") {
          super(defaults(options));
          return;
        }

        super(Object.assign({}, defaults, options, options.userAgent && defaults.userAgent ? {
          userAgent: `${options.userAgent} ${defaults.userAgent}`
        } : null));
      }

    };
    return OctokitWithDefaults;
  }
  /**
   * Attach a plugin (or many) to your Octokit instance.
   *
   * @example
   * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
   */


  static plugin(...newPlugins) {
    var _a;

    const currentPlugins = this.plugins;
    const NewOctokit = (_a = class extends this {}, _a.plugins = currentPlugins.concat(newPlugins.filter(plugin => !currentPlugins.includes(plugin))), _a);
    return NewOctokit;
  }

}

Octokit.VERSION = VERSION;
Octokit.plugins = [];


/***/ }),

/***/ 9047:
/*!**********************************************************!*\
  !*** ./node_modules/@octokit/endpoint/dist-web/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "endpoint": () => (/* binding */ endpoint)
/* harmony export */ });
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-plain-object */ 5007);
/* harmony import */ var universal_user_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-user-agent */ 4282);



function lowercaseKeys(object) {
    if (!object) {
        return {};
    }
    return Object.keys(object).reduce((newObj, key) => {
        newObj[key.toLowerCase()] = object[key];
        return newObj;
    }, {});
}

function mergeDeep(defaults, options) {
    const result = Object.assign({}, defaults);
    Object.keys(options).forEach((key) => {
        if ((0,is_plain_object__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(options[key])) {
            if (!(key in defaults))
                Object.assign(result, { [key]: options[key] });
            else
                result[key] = mergeDeep(defaults[key], options[key]);
        }
        else {
            Object.assign(result, { [key]: options[key] });
        }
    });
    return result;
}

function removeUndefinedProperties(obj) {
    for (const key in obj) {
        if (obj[key] === undefined) {
            delete obj[key];
        }
    }
    return obj;
}

function merge(defaults, route, options) {
    if (typeof route === "string") {
        let [method, url] = route.split(" ");
        options = Object.assign(url ? { method, url } : { url: method }, options);
    }
    else {
        options = Object.assign({}, route);
    }
    // lowercase header names before merging with defaults to avoid duplicates
    options.headers = lowercaseKeys(options.headers);
    // remove properties with undefined values before merging
    removeUndefinedProperties(options);
    removeUndefinedProperties(options.headers);
    const mergedOptions = mergeDeep(defaults || {}, options);
    // mediaType.previews arrays are merged, instead of overwritten
    if (defaults && defaults.mediaType.previews.length) {
        mergedOptions.mediaType.previews = defaults.mediaType.previews
            .filter((preview) => !mergedOptions.mediaType.previews.includes(preview))
            .concat(mergedOptions.mediaType.previews);
    }
    mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map((preview) => preview.replace(/-preview/, ""));
    return mergedOptions;
}

function addQueryParameters(url, parameters) {
    const separator = /\?/.test(url) ? "&" : "?";
    const names = Object.keys(parameters);
    if (names.length === 0) {
        return url;
    }
    return (url +
        separator +
        names
            .map((name) => {
            if (name === "q") {
                return ("q=" + parameters.q.split("+").map(encodeURIComponent).join("+"));
            }
            return `${name}=${encodeURIComponent(parameters[name])}`;
        })
            .join("&"));
}

const urlVariableRegex = /\{[^}]+\}/g;
function removeNonChars(variableName) {
    return variableName.replace(/^\W+|\W+$/g, "").split(/,/);
}
function extractUrlVariableNames(url) {
    const matches = url.match(urlVariableRegex);
    if (!matches) {
        return [];
    }
    return matches.map(removeNonChars).reduce((a, b) => a.concat(b), []);
}

function omit(object, keysToOmit) {
    return Object.keys(object)
        .filter((option) => !keysToOmit.includes(option))
        .reduce((obj, key) => {
        obj[key] = object[key];
        return obj;
    }, {});
}

// Based on https://github.com/bramstein/url-template, licensed under BSD
// TODO: create separate package.
//
// Copyright (c) 2012-2014, Bram Stein
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//  1. Redistributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in the
//     documentation and/or other materials provided with the distribution.
//  3. The name of the author may not be used to endorse or promote products
//     derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
// EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
/* istanbul ignore file */
function encodeReserved(str) {
    return str
        .split(/(%[0-9A-Fa-f]{2})/g)
        .map(function (part) {
        if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
        }
        return part;
    })
        .join("");
}
function encodeUnreserved(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
}
function encodeValue(operator, value, key) {
    value =
        operator === "+" || operator === "#"
            ? encodeReserved(value)
            : encodeUnreserved(value);
    if (key) {
        return encodeUnreserved(key) + "=" + value;
    }
    else {
        return value;
    }
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function isKeyOperator(operator) {
    return operator === ";" || operator === "&" || operator === "?";
}
function getValues(context, operator, key, modifier) {
    var value = context[key], result = [];
    if (isDefined(value) && value !== "") {
        if (typeof value === "string" ||
            typeof value === "number" ||
            typeof value === "boolean") {
            value = value.toString();
            if (modifier && modifier !== "*") {
                value = value.substring(0, parseInt(modifier, 10));
            }
            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
        }
        else {
            if (modifier === "*") {
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
                    });
                }
                else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            result.push(encodeValue(operator, value[k], k));
                        }
                    });
                }
            }
            else {
                const tmp = [];
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        tmp.push(encodeValue(operator, value));
                    });
                }
                else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            tmp.push(encodeUnreserved(k));
                            tmp.push(encodeValue(operator, value[k].toString()));
                        }
                    });
                }
                if (isKeyOperator(operator)) {
                    result.push(encodeUnreserved(key) + "=" + tmp.join(","));
                }
                else if (tmp.length !== 0) {
                    result.push(tmp.join(","));
                }
            }
        }
    }
    else {
        if (operator === ";") {
            if (isDefined(value)) {
                result.push(encodeUnreserved(key));
            }
        }
        else if (value === "" && (operator === "&" || operator === "?")) {
            result.push(encodeUnreserved(key) + "=");
        }
        else if (value === "") {
            result.push("");
        }
    }
    return result;
}
function parseUrl(template) {
    return {
        expand: expand.bind(null, template),
    };
}
function expand(template, context) {
    var operators = ["+", "#", ".", "/", ";", "?", "&"];
    return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
        if (expression) {
            let operator = "";
            const values = [];
            if (operators.indexOf(expression.charAt(0)) !== -1) {
                operator = expression.charAt(0);
                expression = expression.substr(1);
            }
            expression.split(/,/g).forEach(function (variable) {
                var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
                values.push(getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
            });
            if (operator && operator !== "+") {
                var separator = ",";
                if (operator === "?") {
                    separator = "&";
                }
                else if (operator !== "#") {
                    separator = operator;
                }
                return (values.length !== 0 ? operator : "") + values.join(separator);
            }
            else {
                return values.join(",");
            }
        }
        else {
            return encodeReserved(literal);
        }
    });
}

function parse(options) {
    // https://fetch.spec.whatwg.org/#methods
    let method = options.method.toUpperCase();
    // replace :varname with {varname} to make it RFC 6570 compatible
    let url = (options.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
    let headers = Object.assign({}, options.headers);
    let body;
    let parameters = omit(options, [
        "method",
        "baseUrl",
        "url",
        "headers",
        "request",
        "mediaType",
    ]);
    // extract variable names from URL to calculate remaining variables later
    const urlVariableNames = extractUrlVariableNames(url);
    url = parseUrl(url).expand(parameters);
    if (!/^http/.test(url)) {
        url = options.baseUrl + url;
    }
    const omittedParameters = Object.keys(options)
        .filter((option) => urlVariableNames.includes(option))
        .concat("baseUrl");
    const remainingParameters = omit(parameters, omittedParameters);
    const isBinaryRequest = /application\/octet-stream/i.test(headers.accept);
    if (!isBinaryRequest) {
        if (options.mediaType.format) {
            // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
            headers.accept = headers.accept
                .split(/,/)
                .map((preview) => preview.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${options.mediaType.format}`))
                .join(",");
        }
        if (options.mediaType.previews.length) {
            const previewsFromAcceptHeader = headers.accept.match(/[\w-]+(?=-preview)/g) || [];
            headers.accept = previewsFromAcceptHeader
                .concat(options.mediaType.previews)
                .map((preview) => {
                const format = options.mediaType.format
                    ? `.${options.mediaType.format}`
                    : "+json";
                return `application/vnd.github.${preview}-preview${format}`;
            })
                .join(",");
        }
    }
    // for GET/HEAD requests, set URL query parameters from remaining parameters
    // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters
    if (["GET", "HEAD"].includes(method)) {
        url = addQueryParameters(url, remainingParameters);
    }
    else {
        if ("data" in remainingParameters) {
            body = remainingParameters.data;
        }
        else {
            if (Object.keys(remainingParameters).length) {
                body = remainingParameters;
            }
            else {
                headers["content-length"] = 0;
            }
        }
    }
    // default content-type for JSON if body is set
    if (!headers["content-type"] && typeof body !== "undefined") {
        headers["content-type"] = "application/json; charset=utf-8";
    }
    // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
    // fetch does not allow to set `content-length` header, but we can set body to an empty string
    if (["PATCH", "PUT"].includes(method) && typeof body === "undefined") {
        body = "";
    }
    // Only return body/request keys if present
    return Object.assign({ method, url, headers }, typeof body !== "undefined" ? { body } : null, options.request ? { request: options.request } : null);
}

function endpointWithDefaults(defaults, route, options) {
    return parse(merge(defaults, route, options));
}

function withDefaults(oldDefaults, newDefaults) {
    const DEFAULTS = merge(oldDefaults, newDefaults);
    const endpoint = endpointWithDefaults.bind(null, DEFAULTS);
    return Object.assign(endpoint, {
        DEFAULTS,
        defaults: withDefaults.bind(null, DEFAULTS),
        merge: merge.bind(null, DEFAULTS),
        parse,
    });
}

const VERSION = "6.0.12";

const userAgent = `octokit-endpoint.js/${VERSION} ${(0,universal_user_agent__WEBPACK_IMPORTED_MODULE_1__.getUserAgent)()}`;
// DEFAULTS has all properties set that EndpointOptions has, except url.
// So we use RequestParameters and add method as additional required property.
const DEFAULTS = {
    method: "GET",
    baseUrl: "https://api.github.com",
    headers: {
        accept: "application/vnd.github.v3+json",
        "user-agent": userAgent,
    },
    mediaType: {
        format: "",
        previews: [],
    },
};

const endpoint = withDefaults(null, DEFAULTS);




/***/ }),

/***/ 5278:
/*!*********************************************************!*\
  !*** ./node_modules/@octokit/graphql/dist-web/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphqlResponseError": () => (/* binding */ GraphqlResponseError),
/* harmony export */   "graphql": () => (/* binding */ graphql$1),
/* harmony export */   "withCustomRequest": () => (/* binding */ withCustomRequest)
/* harmony export */ });
/* harmony import */ var _octokit_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @octokit/request */ 7544);
/* harmony import */ var universal_user_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-user-agent */ 4282);



const VERSION = "4.8.0";

function _buildMessageForResponseErrors(data) {
    return (`Request failed due to following response errors:\n` +
        data.errors.map((e) => ` - ${e.message}`).join("\n"));
}
class GraphqlResponseError extends Error {
    constructor(request, headers, response) {
        super(_buildMessageForResponseErrors(response));
        this.request = request;
        this.headers = headers;
        this.response = response;
        this.name = "GraphqlResponseError";
        // Expose the errors and response data in their shorthand properties.
        this.errors = response.errors;
        this.data = response.data;
        // Maintains proper stack trace (only available on V8)
        /* istanbul ignore next */
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

const NON_VARIABLE_OPTIONS = [
    "method",
    "baseUrl",
    "url",
    "headers",
    "request",
    "query",
    "mediaType",
];
const FORBIDDEN_VARIABLE_OPTIONS = ["query", "method", "url"];
const GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/;
function graphql(request, query, options) {
    if (options) {
        if (typeof query === "string" && "query" in options) {
            return Promise.reject(new Error(`[@octokit/graphql] "query" cannot be used as variable name`));
        }
        for (const key in options) {
            if (!FORBIDDEN_VARIABLE_OPTIONS.includes(key))
                continue;
            return Promise.reject(new Error(`[@octokit/graphql] "${key}" cannot be used as variable name`));
        }
    }
    const parsedOptions = typeof query === "string" ? Object.assign({ query }, options) : query;
    const requestOptions = Object.keys(parsedOptions).reduce((result, key) => {
        if (NON_VARIABLE_OPTIONS.includes(key)) {
            result[key] = parsedOptions[key];
            return result;
        }
        if (!result.variables) {
            result.variables = {};
        }
        result.variables[key] = parsedOptions[key];
        return result;
    }, {});
    // workaround for GitHub Enterprise baseUrl set with /api/v3 suffix
    // https://github.com/octokit/auth-app.js/issues/111#issuecomment-657610451
    const baseUrl = parsedOptions.baseUrl || request.endpoint.DEFAULTS.baseUrl;
    if (GHES_V3_SUFFIX_REGEX.test(baseUrl)) {
        requestOptions.url = baseUrl.replace(GHES_V3_SUFFIX_REGEX, "/api/graphql");
    }
    return request(requestOptions).then((response) => {
        if (response.data.errors) {
            const headers = {};
            for (const key of Object.keys(response.headers)) {
                headers[key] = response.headers[key];
            }
            throw new GraphqlResponseError(requestOptions, headers, response.data);
        }
        return response.data.data;
    });
}

function withDefaults(request$1, newDefaults) {
    const newRequest = request$1.defaults(newDefaults);
    const newApi = (query, options) => {
        return graphql(newRequest, query, options);
    };
    return Object.assign(newApi, {
        defaults: withDefaults.bind(null, newRequest),
        endpoint: _octokit_request__WEBPACK_IMPORTED_MODULE_0__.request.endpoint,
    });
}

const graphql$1 = withDefaults(_octokit_request__WEBPACK_IMPORTED_MODULE_0__.request, {
    headers: {
        "user-agent": `octokit-graphql.js/${VERSION} ${(0,universal_user_agent__WEBPACK_IMPORTED_MODULE_1__.getUserAgent)()}`,
    },
    method: "POST",
    url: "/graphql",
});
function withCustomRequest(customRequest) {
    return withDefaults(customRequest, {
        method: "POST",
        url: "/graphql",
    });
}




/***/ }),

/***/ 1225:
/*!************************************************************!*\
  !*** ./node_modules/@octokit/oauth-app/dist-node/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 3752)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var OAuthAppAuth = __webpack_require__(/*! @octokit/auth-oauth-app */ 9630);

var core = __webpack_require__(/*! @octokit/core */ 1719);

var universalUserAgent = __webpack_require__(/*! universal-user-agent */ 4282);

var authOauthUser = __webpack_require__(/*! @octokit/auth-oauth-user */ 9213);

var OAuthMethods = __webpack_require__(/*! @octokit/oauth-methods */ 7199);

var authUnauthenticated = __webpack_require__(/*! @octokit/auth-unauthenticated */ 8901);

var fromEntries = _interopDefault(__webpack_require__(/*! fromentries */ 3234));

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

const VERSION = "3.6.2";

function addEventHandler(state, eventName, eventHandler) {
  if (Array.isArray(eventName)) {
    for (const singleEventName of eventName) {
      addEventHandler(state, singleEventName, eventHandler);
    }

    return;
  }

  if (!state.eventHandlers[eventName]) {
    state.eventHandlers[eventName] = [];
  }

  state.eventHandlers[eventName].push(eventHandler);
}

const OAuthAppOctokit = core.Octokit.defaults({
  userAgent: `octokit-oauth-app.js/${VERSION} ${universalUserAgent.getUserAgent()}`
});

function emitEvent(_x, _x2) {
  return _emitEvent.apply(this, arguments);
}

function _emitEvent() {
  _emitEvent = _asyncToGenerator(function* (state, context) {
    const {
      name,
      action
    } = context;

    if (state.eventHandlers[`${name}.${action}`]) {
      for (const eventHandler of state.eventHandlers[`${name}.${action}`]) {
        yield eventHandler(context);
      }
    }

    if (state.eventHandlers[name]) {
      for (const eventHandler of state.eventHandlers[name]) {
        yield eventHandler(context);
      }
    }
  });
  return _emitEvent.apply(this, arguments);
}

function getUserOctokitWithState(_x3, _x4) {
  return _getUserOctokitWithState.apply(this, arguments);
}

function _getUserOctokitWithState() {
  _getUserOctokitWithState = _asyncToGenerator(function* (state, options) {
    return state.octokit.auth(_objectSpread2(_objectSpread2({
      type: "oauth-user"
    }, options), {}, {
      factory(options) {
        return _asyncToGenerator(function* () {
          const octokit = new state.Octokit({
            authStrategy: authOauthUser.createOAuthUserAuth,
            auth: options
          });
          const authentication = yield octokit.auth({
            type: "get"
          });
          yield emitEvent(state, {
            name: "token",
            action: "created",
            token: authentication.token,
            scopes: authentication.scopes,
            authentication,
            octokit
          });
          return octokit;
        })();
      }

    }));
  });
  return _getUserOctokitWithState.apply(this, arguments);
}

function getWebFlowAuthorizationUrlWithState(state, options) {
  const optionsWithDefaults = _objectSpread2(_objectSpread2({
    clientId: state.clientId,
    request: state.octokit.request
  }, options), {}, {
    allowSignup: options.allowSignup || state.allowSignup,
    scopes: options.scopes || state.defaultScopes
  });

  return OAuthMethods.getWebFlowAuthorizationUrl(_objectSpread2({
    clientType: state.clientType
  }, optionsWithDefaults));
}

function createTokenWithState(_x5, _x6) {
  return _createTokenWithState.apply(this, arguments);
}

function _createTokenWithState() {
  _createTokenWithState = _asyncToGenerator(function* (state, options) {
    const authentication = yield state.octokit.auth(_objectSpread2({
      type: "oauth-user"
    }, options));
    yield emitEvent(state, {
      name: "token",
      action: "created",
      token: authentication.token,
      scopes: authentication.scopes,
      authentication,
      octokit: new state.Octokit({
        authStrategy: OAuthAppAuth.createOAuthUserAuth,
        auth: {
          clientType: state.clientType,
          clientId: state.clientId,
          clientSecret: state.clientSecret,
          token: authentication.token,
          scopes: authentication.scopes,
          refreshToken: authentication.refreshToken,
          expiresAt: authentication.expiresAt,
          refreshTokenExpiresAt: authentication.refreshTokenExpiresAt
        }
      })
    });
    return {
      authentication
    };
  });
  return _createTokenWithState.apply(this, arguments);
}

function checkTokenWithState(_x7, _x8) {
  return _checkTokenWithState.apply(this, arguments);
}

function _checkTokenWithState() {
  _checkTokenWithState = _asyncToGenerator(function* (state, options) {
    const result = yield OAuthMethods.checkToken(_objectSpread2({
      // @ts-expect-error not worth the extra code to appease TS
      clientType: state.clientType,
      clientId: state.clientId,
      clientSecret: state.clientSecret,
      request: state.octokit.request
    }, options));
    Object.assign(result.authentication, {
      type: "token",
      tokenType: "oauth"
    });
    return result;
  });
  return _checkTokenWithState.apply(this, arguments);
}

function resetTokenWithState(_x9, _x10) {
  return _resetTokenWithState.apply(this, arguments);
}

function _resetTokenWithState() {
  _resetTokenWithState = _asyncToGenerator(function* (state, options) {
    const optionsWithDefaults = _objectSpread2({
      clientId: state.clientId,
      clientSecret: state.clientSecret,
      request: state.octokit.request
    }, options);

    if (state.clientType === "oauth-app") {
      const response = yield OAuthMethods.resetToken(_objectSpread2({
        clientType: "oauth-app"
      }, optionsWithDefaults));
      const authentication = Object.assign(response.authentication, {
        type: "token",
        tokenType: "oauth"
      });
      yield emitEvent(state, {
        name: "token",
        action: "reset",
        token: response.authentication.token,
        scopes: response.authentication.scopes || undefined,
        authentication: authentication,
        octokit: new state.Octokit({
          authStrategy: authOauthUser.createOAuthUserAuth,
          auth: {
            clientType: state.clientType,
            clientId: state.clientId,
            clientSecret: state.clientSecret,
            token: response.authentication.token,
            scopes: response.authentication.scopes
          }
        })
      });
      return _objectSpread2(_objectSpread2({}, response), {}, {
        authentication
      });
    }

    const response = yield OAuthMethods.resetToken(_objectSpread2({
      clientType: "github-app"
    }, optionsWithDefaults));
    const authentication = Object.assign(response.authentication, {
      type: "token",
      tokenType: "oauth"
    });
    yield emitEvent(state, {
      name: "token",
      action: "reset",
      token: response.authentication.token,
      authentication: authentication,
      octokit: new state.Octokit({
        authStrategy: authOauthUser.createOAuthUserAuth,
        auth: {
          clientType: state.clientType,
          clientId: state.clientId,
          clientSecret: state.clientSecret,
          token: response.authentication.token
        }
      })
    });
    return _objectSpread2(_objectSpread2({}, response), {}, {
      authentication
    });
  });
  return _resetTokenWithState.apply(this, arguments);
}

function refreshTokenWithState(_x11, _x12) {
  return _refreshTokenWithState.apply(this, arguments);
}

function _refreshTokenWithState() {
  _refreshTokenWithState = _asyncToGenerator(function* (state, options) {
    if (state.clientType === "oauth-app") {
      throw new Error("[@octokit/oauth-app] app.refreshToken() is not supported for OAuth Apps");
    }

    const response = yield OAuthMethods.refreshToken({
      clientType: "github-app",
      clientId: state.clientId,
      clientSecret: state.clientSecret,
      request: state.octokit.request,
      refreshToken: options.refreshToken
    });
    const authentication = Object.assign(response.authentication, {
      type: "token",
      tokenType: "oauth"
    });
    yield emitEvent(state, {
      name: "token",
      action: "refreshed",
      token: response.authentication.token,
      authentication: authentication,
      octokit: new state.Octokit({
        authStrategy: authOauthUser.createOAuthUserAuth,
        auth: {
          clientType: state.clientType,
          clientId: state.clientId,
          clientSecret: state.clientSecret,
          token: response.authentication.token
        }
      })
    });
    return _objectSpread2(_objectSpread2({}, response), {}, {
      authentication
    });
  });
  return _refreshTokenWithState.apply(this, arguments);
}

function scopeTokenWithState(_x13, _x14) {
  return _scopeTokenWithState.apply(this, arguments);
}

function _scopeTokenWithState() {
  _scopeTokenWithState = _asyncToGenerator(function* (state, options) {
    if (state.clientType === "oauth-app") {
      throw new Error("[@octokit/oauth-app] app.scopeToken() is not supported for OAuth Apps");
    }

    const response = yield OAuthMethods.scopeToken(_objectSpread2({
      clientType: "github-app",
      clientId: state.clientId,
      clientSecret: state.clientSecret,
      request: state.octokit.request
    }, options));
    const authentication = Object.assign(response.authentication, {
      type: "token",
      tokenType: "oauth"
    });
    yield emitEvent(state, {
      name: "token",
      action: "scoped",
      token: response.authentication.token,
      authentication: authentication,
      octokit: new state.Octokit({
        authStrategy: authOauthUser.createOAuthUserAuth,
        auth: {
          clientType: state.clientType,
          clientId: state.clientId,
          clientSecret: state.clientSecret,
          token: response.authentication.token
        }
      })
    });
    return _objectSpread2(_objectSpread2({}, response), {}, {
      authentication
    });
  });
  return _scopeTokenWithState.apply(this, arguments);
}

function deleteTokenWithState(_x15, _x16) {
  return _deleteTokenWithState.apply(this, arguments);
}

function _deleteTokenWithState() {
  _deleteTokenWithState = _asyncToGenerator(function* (state, options) {
    const optionsWithDefaults = _objectSpread2({
      clientId: state.clientId,
      clientSecret: state.clientSecret,
      request: state.octokit.request
    }, options);

    const response = state.clientType === "oauth-app" ? yield OAuthMethods.deleteToken(_objectSpread2({
      clientType: "oauth-app"
    }, optionsWithDefaults)) : // istanbul ignore next
    yield OAuthMethods.deleteToken(_objectSpread2({
      clientType: "github-app"
    }, optionsWithDefaults));
    yield emitEvent(state, {
      name: "token",
      action: "deleted",
      token: options.token,
      octokit: new state.Octokit({
        authStrategy: authUnauthenticated.createUnauthenticatedAuth,
        auth: {
          reason: `Handling "token.deleted" event. The access for the token has been revoked.`
        }
      })
    });
    return response;
  });
  return _deleteTokenWithState.apply(this, arguments);
}

function deleteAuthorizationWithState(_x17, _x18) {
  return _deleteAuthorizationWithState.apply(this, arguments);
}

function _deleteAuthorizationWithState() {
  _deleteAuthorizationWithState = _asyncToGenerator(function* (state, options) {
    const optionsWithDefaults = _objectSpread2({
      clientId: state.clientId,
      clientSecret: state.clientSecret,
      request: state.octokit.request
    }, options);

    const response = state.clientType === "oauth-app" ? yield OAuthMethods.deleteAuthorization(_objectSpread2({
      clientType: "oauth-app"
    }, optionsWithDefaults)) : // istanbul ignore next
    yield OAuthMethods.deleteAuthorization(_objectSpread2({
      clientType: "github-app"
    }, optionsWithDefaults));
    yield emitEvent(state, {
      name: "token",
      action: "deleted",
      token: options.token,
      octokit: new state.Octokit({
        authStrategy: authUnauthenticated.createUnauthenticatedAuth,
        auth: {
          reason: `Handling "token.deleted" event. The access for the token has been revoked.`
        }
      })
    });
    yield emitEvent(state, {
      name: "authorization",
      action: "deleted",
      token: options.token,
      octokit: new state.Octokit({
        authStrategy: authUnauthenticated.createUnauthenticatedAuth,
        auth: {
          reason: `Handling "authorization.deleted" event. The access for the app has been revoked.`
        }
      })
    });
    return response;
  });
  return _deleteAuthorizationWithState.apply(this, arguments);
}

function parseRequest(request) {
  const {
    method,
    url,
    headers
  } = request;

  function text() {
    return _text.apply(this, arguments);
  }

  function _text() {
    _text = _asyncToGenerator(function* () {
      const text = yield new Promise((resolve, reject) => {
        let bodyChunks = [];
        request.on("error", reject).on("data", chunk => bodyChunks.push(chunk)).on("end", () => resolve(Buffer.concat(bodyChunks).toString()));
      });
      return text;
    });
    return _text.apply(this, arguments);
  }

  return {
    method,
    url,
    headers,
    text
  };
}

function sendResponse(octokitResponse, response) {
  response.writeHead(octokitResponse.status, octokitResponse.headers);
  response.end(octokitResponse.text);
}

function onUnhandledRequestDefault(request) {
  return {
    status: 404,
    headers: {
      "content-type": "application/json"
    },
    text: JSON.stringify({
      error: `Unknown route: ${request.method} ${request.url}`
    })
  };
}

function handleRequest(_x19, _x20, _x21) {
  return _handleRequest.apply(this, arguments);
}

function _handleRequest() {
  _handleRequest = _asyncToGenerator(function* (app, {
    pathPrefix = "/api/github/oauth"
  }, request) {
    if (request.method === "OPTIONS") {
      return {
        status: 200,
        headers: {
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "*",
          "access-control-allow-headers": "Content-Type, User-Agent, Authorization"
        }
      };
    } // request.url may include ?query parameters which we don't want for `route`
    // hence the workaround using new URL()


    const {
      pathname
    } = new URL(request.url, "http://localhost");
    const route = [request.method, pathname].join(" ");
    const routes = {
      getLogin: `GET ${pathPrefix}/login`,
      getCallback: `GET ${pathPrefix}/callback`,
      createToken: `POST ${pathPrefix}/token`,
      getToken: `GET ${pathPrefix}/token`,
      patchToken: `PATCH ${pathPrefix}/token`,
      patchRefreshToken: `PATCH ${pathPrefix}/refresh-token`,
      scopeToken: `POST ${pathPrefix}/token/scoped`,
      deleteToken: `DELETE ${pathPrefix}/token`,
      deleteGrant: `DELETE ${pathPrefix}/grant`
    }; // handle unknown routes

    if (!Object.values(routes).includes(route)) {
      return null;
    }

    let json;

    try {
      const text = yield request.text();
      json = text ? JSON.parse(text) : {};
    } catch (error) {
      return {
        status: 400,
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*"
        },
        text: JSON.stringify({
          error: "[@octokit/oauth-app] request error"
        })
      };
    }

    const {
      searchParams
    } = new URL(request.url, "http://localhost");
    const query = fromEntries(searchParams);
    const headers = request.headers;

    try {
      var _headers$authorizatio6;

      if (route === routes.getLogin) {
        const {
          url
        } = app.getWebFlowAuthorizationUrl({
          state: query.state,
          scopes: query.scopes ? query.scopes.split(",") : undefined,
          allowSignup: query.allowSignup !== "false",
          redirectUrl: query.redirectUrl
        });
        return {
          status: 302,
          headers: {
            location: url
          }
        };
      }

      if (route === routes.getCallback) {
        if (query.error) {
          throw new Error(`[@octokit/oauth-app] ${query.error} ${query.error_description}`);
        }

        if (!query.state || !query.code) {
          throw new Error('[@octokit/oauth-app] Both "code" & "state" parameters are required');
        }

        const {
          authentication: {
            token
          }
        } = yield app.createToken({
          state: query.state,
          code: query.code
        });
        return {
          status: 200,
          headers: {
            "content-type": "text/html"
          },
          text: `<h1>Token created successfull</h1>
    
<p>Your token is: <strong>${token}</strong>. Copy it now as it cannot be shown again.</p>`
        };
      }

      if (route === routes.createToken) {
        const {
          state: oauthState,
          code,
          redirectUrl
        } = json;

        if (!oauthState || !code) {
          throw new Error('[@octokit/oauth-app] Both "code" & "state" parameters are required');
        }

        const result = yield app.createToken({
          state: oauthState,
          code,
          redirectUrl
        }); // @ts-ignore

        delete result.authentication.clientSecret;
        return {
          status: 201,
          headers: {
            "content-type": "application/json",
            "access-control-allow-origin": "*"
          },
          text: JSON.stringify(result)
        };
      }

      if (route === routes.getToken) {
        var _headers$authorizatio;

        const token = (_headers$authorizatio = headers.authorization) === null || _headers$authorizatio === void 0 ? void 0 : _headers$authorizatio.substr("token ".length);

        if (!token) {
          throw new Error('[@octokit/oauth-app] "Authorization" header is required');
        }

        const result = yield app.checkToken({
          token
        }); // @ts-ignore

        delete result.authentication.clientSecret;
        return {
          status: 200,
          headers: {
            "content-type": "application/json",
            "access-control-allow-origin": "*"
          },
          text: JSON.stringify(result)
        };
      }

      if (route === routes.patchToken) {
        var _headers$authorizatio2;

        const token = (_headers$authorizatio2 = headers.authorization) === null || _headers$authorizatio2 === void 0 ? void 0 : _headers$authorizatio2.substr("token ".length);

        if (!token) {
          throw new Error('[@octokit/oauth-app] "Authorization" header is required');
        }

        const result = yield app.resetToken({
          token
        }); // @ts-ignore

        delete result.authentication.clientSecret;
        return {
          status: 200,
          headers: {
            "content-type": "application/json",
            "access-control-allow-origin": "*"
          },
          text: JSON.stringify(result)
        };
      }

      if (route === routes.patchRefreshToken) {
        var _headers$authorizatio3;

        const token = (_headers$authorizatio3 = headers.authorization) === null || _headers$authorizatio3 === void 0 ? void 0 : _headers$authorizatio3.substr("token ".length);

        if (!token) {
          throw new Error('[@octokit/oauth-app] "Authorization" header is required');
        }

        const {
          refreshToken
        } = json;

        if (!refreshToken) {
          throw new Error("[@octokit/oauth-app] refreshToken must be sent in request body");
        }

        const result = yield app.refreshToken({
          refreshToken
        }); // @ts-ignore

        delete result.authentication.clientSecret;
        return {
          status: 200,
          headers: {
            "content-type": "application/json",
            "access-control-allow-origin": "*"
          },
          text: JSON.stringify(result)
        };
      }

      if (route === routes.scopeToken) {
        var _headers$authorizatio4;

        const token = (_headers$authorizatio4 = headers.authorization) === null || _headers$authorizatio4 === void 0 ? void 0 : _headers$authorizatio4.substr("token ".length);

        if (!token) {
          throw new Error('[@octokit/oauth-app] "Authorization" header is required');
        }

        const result = yield app.scopeToken(_objectSpread2({
          token
        }, json)); // @ts-ignore

        delete result.authentication.clientSecret;
        return {
          status: 200,
          headers: {
            "content-type": "application/json",
            "access-control-allow-origin": "*"
          },
          text: JSON.stringify(result)
        };
      }

      if (route === routes.deleteToken) {
        var _headers$authorizatio5;

        const token = (_headers$authorizatio5 = headers.authorization) === null || _headers$authorizatio5 === void 0 ? void 0 : _headers$authorizatio5.substr("token ".length);

        if (!token) {
          throw new Error('[@octokit/oauth-app] "Authorization" header is required');
        }

        yield app.deleteToken({
          token
        });
        return {
          status: 204,
          headers: {
            "access-control-allow-origin": "*"
          }
        };
      } // route === routes.deleteGrant


      const token = (_headers$authorizatio6 = headers.authorization) === null || _headers$authorizatio6 === void 0 ? void 0 : _headers$authorizatio6.substr("token ".length);

      if (!token) {
        throw new Error('[@octokit/oauth-app] "Authorization" header is required');
      }

      yield app.deleteAuthorization({
        token
      });
      return {
        status: 204,
        headers: {
          "access-control-allow-origin": "*"
        }
      };
    } catch (error) {
      return {
        status: 400,
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*"
        },
        text: JSON.stringify({
          error: error.message
        })
      };
    }
  });
  return _handleRequest.apply(this, arguments);
}

function onUnhandledRequestDefaultNode(request, response) {
  const octokitRequest = parseRequest(request);
  const octokitResponse = onUnhandledRequestDefault(octokitRequest);
  sendResponse(octokitResponse, response);
}

function createNodeMiddleware(app, {
  pathPrefix,
  onUnhandledRequest = onUnhandledRequestDefaultNode
} = {}) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (request, response, next) {
      const octokitRequest = parseRequest(request);
      const octokitResponse = yield handleRequest(app, {
        pathPrefix
      }, octokitRequest);

      if (octokitResponse) {
        sendResponse(octokitResponse, response);
      } else if (typeof next === "function") {
        next();
      } else {
        onUnhandledRequest(request, response);
      }
    });

    return function (_x22, _x23, _x24) {
      return _ref.apply(this, arguments);
    };
  }();
}

function parseRequest$1(request) {
  // @ts-ignore Worker environment supports fromEntries/entries.
  const headers = Object.fromEntries(request.headers.entries());
  return {
    method: request.method,
    url: request.url,
    headers,
    text: () => request.text()
  };
}

function sendResponse$1(octokitResponse) {
  return new Response(octokitResponse.text, {
    status: octokitResponse.status,
    headers: octokitResponse.headers
  });
}

function onUnhandledRequestDefaultCloudflare(_x25) {
  return _onUnhandledRequestDefaultCloudflare.apply(this, arguments);
}

function _onUnhandledRequestDefaultCloudflare() {
  _onUnhandledRequestDefaultCloudflare = _asyncToGenerator(function* (request) {
    const octokitRequest = parseRequest$1(request);
    const octokitResponse = onUnhandledRequestDefault(octokitRequest);
    return sendResponse$1(octokitResponse);
  });
  return _onUnhandledRequestDefaultCloudflare.apply(this, arguments);
}

function createCloudflareHandler(app, {
  pathPrefix,
  onUnhandledRequest = onUnhandledRequestDefaultCloudflare
} = {}) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (request) {
      const octokitRequest = parseRequest$1(request);
      const octokitResponse = yield handleRequest(app, {
        pathPrefix
      }, octokitRequest);
      return octokitResponse ? sendResponse$1(octokitResponse) : yield onUnhandledRequest(request);
    });

    return function (_x26) {
      return _ref2.apply(this, arguments);
    };
  }();
}

function parseRequest$2(request) {
  const {
    method
  } = request.requestContext.http;
  let url = request.rawPath;
  const {
    stage
  } = request.requestContext;
  if (url.startsWith("/" + stage)) url = url.substring(stage.length + 1);
  if (request.rawQueryString) url += "?" + request.rawQueryString;
  const headers = request.headers;

  const text = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* () {
      return request.body || "";
    });

    return function text() {
      return _ref3.apply(this, arguments);
    };
  }();

  return {
    method,
    url,
    headers,
    text
  };
}

function sendResponse$2(octokitResponse) {
  return {
    statusCode: octokitResponse.status,
    headers: octokitResponse.headers,
    body: octokitResponse.text
  };
}

function onUnhandledRequestDefaultAWSAPIGatewayV2(_x27) {
  return _onUnhandledRequestDefaultAWSAPIGatewayV.apply(this, arguments);
}

function _onUnhandledRequestDefaultAWSAPIGatewayV() {
  _onUnhandledRequestDefaultAWSAPIGatewayV = _asyncToGenerator(function* (event) {
    const request = parseRequest$2(event);
    const response = onUnhandledRequestDefault(request);
    return sendResponse$2(response);
  });
  return _onUnhandledRequestDefaultAWSAPIGatewayV.apply(this, arguments);
}

function createAWSLambdaAPIGatewayV2Handler(app, {
  pathPrefix,
  onUnhandledRequest = onUnhandledRequestDefaultAWSAPIGatewayV2
} = {}) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(function* (event) {
      const request = parseRequest$2(event);
      const response = yield handleRequest(app, {
        pathPrefix
      }, request);
      return response ? sendResponse$2(response) : onUnhandledRequest(event);
    });

    return function (_x28) {
      return _ref4.apply(this, arguments);
    };
  }();
}

class OAuthApp {
  constructor(options) {
    const Octokit = options.Octokit || OAuthAppOctokit;
    this.type = options.clientType || "oauth-app";
    const octokit = new Octokit({
      authStrategy: OAuthAppAuth.createOAuthAppAuth,
      auth: {
        clientType: this.type,
        clientId: options.clientId,
        clientSecret: options.clientSecret
      }
    });
    const state = {
      clientType: this.type,
      clientId: options.clientId,
      clientSecret: options.clientSecret,
      // @ts-expect-error defaultScopes not permitted for GitHub Apps
      defaultScopes: options.defaultScopes || [],
      allowSignup: options.allowSignup,
      baseUrl: options.baseUrl,
      log: options.log,
      Octokit,
      octokit,
      eventHandlers: {}
    };
    this.on = addEventHandler.bind(null, state); // @ts-expect-error TODO: figure this out

    this.octokit = octokit;
    this.getUserOctokit = getUserOctokitWithState.bind(null, state);
    this.getWebFlowAuthorizationUrl = getWebFlowAuthorizationUrlWithState.bind(null, state);
    this.createToken = createTokenWithState.bind(null, state);
    this.checkToken = checkTokenWithState.bind(null, state);
    this.resetToken = resetTokenWithState.bind(null, state);
    this.refreshToken = refreshTokenWithState.bind(null, state);
    this.scopeToken = scopeTokenWithState.bind(null, state);
    this.deleteToken = deleteTokenWithState.bind(null, state);
    this.deleteAuthorization = deleteAuthorizationWithState.bind(null, state);
  }

  static defaults(defaults) {
    const OAuthAppWithDefaults = class extends this {
      constructor(...args) {
        super(_objectSpread2(_objectSpread2({}, defaults), args[0]));
      }

    };
    return OAuthAppWithDefaults;
  }

}

OAuthApp.VERSION = VERSION;
exports.OAuthApp = OAuthApp;
exports.createAWSLambdaAPIGatewayV2Handler = createAWSLambdaAPIGatewayV2Handler;
exports.createCloudflareHandler = createCloudflareHandler;
exports.createNodeMiddleware = createNodeMiddleware;

/***/ }),

/***/ 7936:
/*!*************************************************************************!*\
  !*** ./node_modules/@octokit/oauth-authorization-url/dist-web/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oauthAuthorizationUrl": () => (/* binding */ oauthAuthorizationUrl)
/* harmony export */ });
function oauthAuthorizationUrl(options) {
    const clientType = options.clientType || "oauth-app";
    const baseUrl = options.baseUrl || "https://github.com";
    const result = {
        clientType,
        allowSignup: options.allowSignup === false ? false : true,
        clientId: options.clientId,
        login: options.login || null,
        redirectUrl: options.redirectUrl || null,
        state: options.state || Math.random().toString(36).substr(2),
        url: "",
    };
    if (clientType === "oauth-app") {
        const scopes = "scopes" in options ? options.scopes : [];
        result.scopes =
            typeof scopes === "string"
                ? scopes.split(/[,\s]+/).filter(Boolean)
                : scopes;
    }
    result.url = urlBuilderAuthorize(`${baseUrl}/login/oauth/authorize`, result);
    return result;
}
function urlBuilderAuthorize(base, options) {
    const map = {
        allowSignup: "allow_signup",
        clientId: "client_id",
        login: "login",
        redirectUrl: "redirect_uri",
        scopes: "scope",
        state: "state",
    };
    let url = base;
    Object.keys(map)
        // Filter out keys that are null and remove the url key
        .filter((k) => options[k] !== null)
        // Filter out empty scopes array
        .filter((k) => {
        if (k !== "scopes")
            return true;
        if (options.clientType === "github-app")
            return false;
        return !Array.isArray(options[k]) || options[k].length > 0;
    })
        // Map Array with the proper URL parameter names and change the value to a string using template strings
        // @ts-ignore
        .map((key) => [map[key], `${options[key]}`])
        // Finally, build the URL
        .forEach(([key, value], index) => {
        url += index === 0 ? `?` : "&";
        url += `${key}=${encodeURIComponent(value)}`;
    });
    return url;
}




/***/ }),

/***/ 7199:
/*!****************************************************************!*\
  !*** ./node_modules/@octokit/oauth-methods/dist-node/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 3752)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var oauthAuthorizationUrl = __webpack_require__(/*! @octokit/oauth-authorization-url */ 7936);

var request = __webpack_require__(/*! @octokit/request */ 7544);

var requestError = __webpack_require__(/*! @octokit/request-error */ 1847);

var btoa = _interopDefault(__webpack_require__(/*! btoa-lite */ 8263));

const VERSION = "1.2.6";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function requestToOAuthBaseUrl(request) {
  const endpointDefaults = request.endpoint.DEFAULTS;
  return /^https:\/\/(api\.)?github\.com$/.test(endpointDefaults.baseUrl) ? "https://github.com" : endpointDefaults.baseUrl.replace("/api/v3", "");
}

function oauthRequest(_x, _x2, _x3) {
  return _oauthRequest.apply(this, arguments);
}

function _oauthRequest() {
  _oauthRequest = _asyncToGenerator(function* (request, route, parameters) {
    const withOAuthParameters = _objectSpread2({
      baseUrl: requestToOAuthBaseUrl(request),
      headers: {
        accept: "application/json"
      }
    }, parameters);

    const response = yield request(route, withOAuthParameters);

    if ("error" in response.data) {
      const error = new requestError.RequestError(`${response.data.error_description} (${response.data.error}, ${response.data.error_uri})`, 400, {
        request: request.endpoint.merge(route, withOAuthParameters),
        headers: response.headers
      }); // @ts-ignore add custom response property until https://github.com/octokit/request-error.js/issues/169 is resolved

      error.response = response;
      throw error;
    }

    return response;
  });
  return _oauthRequest.apply(this, arguments);
}

const _excluded = ["request"];

function getWebFlowAuthorizationUrl(_ref) {
  let {
    request: request$1 = request.request
  } = _ref,
      options = _objectWithoutProperties(_ref, _excluded);

  const baseUrl = requestToOAuthBaseUrl(request$1); // @ts-expect-error TypeScript wants `clientType` to be set explicitly ¯\_(ツ)_/¯

  return oauthAuthorizationUrl.oauthAuthorizationUrl(_objectSpread2(_objectSpread2({}, options), {}, {
    baseUrl
  }));
}

function exchangeWebFlowCode(_x4) {
  return _exchangeWebFlowCode.apply(this, arguments);
}

function _exchangeWebFlowCode() {
  _exchangeWebFlowCode = _asyncToGenerator(function* (options) {
    const request$1 = options.request ||
    /* istanbul ignore next: we always pass a custom request in tests */
    request.request;
    const response = yield oauthRequest(request$1, "POST /login/oauth/access_token", {
      client_id: options.clientId,
      client_secret: options.clientSecret,
      code: options.code,
      redirect_uri: options.redirectUrl
    });
    const authentication = {
      clientType: options.clientType,
      clientId: options.clientId,
      clientSecret: options.clientSecret,
      token: response.data.access_token,
      scopes: response.data.scope.split(/\s+/).filter(Boolean)
    };

    if (options.clientType === "github-app") {
      if ("refresh_token" in response.data) {
        const apiTimeInMs = new Date(response.headers.date).getTime();
        authentication.refreshToken = response.data.refresh_token, authentication.expiresAt = toTimestamp(apiTimeInMs, response.data.expires_in), authentication.refreshTokenExpiresAt = toTimestamp(apiTimeInMs, response.data.refresh_token_expires_in);
      }

      delete authentication.scopes;
    }

    return _objectSpread2(_objectSpread2({}, response), {}, {
      authentication
    });
  });
  return _exchangeWebFlowCode.apply(this, arguments);
}

function toTimestamp(apiTimeInMs, expirationInSeconds) {
  return new Date(apiTimeInMs + expirationInSeconds * 1000).toISOString();
}

function createDeviceCode(_x5) {
  return _createDeviceCode.apply(this, arguments);
}

function _createDeviceCode() {
  _createDeviceCode = _asyncToGenerator(function* (options) {
    const request$1 = options.request ||
    /* istanbul ignore next: we always pass a custom request in tests */
    request.request;
    const parameters = {
      client_id: options.clientId
    };

    if ("scopes" in options && Array.isArray(options.scopes)) {
      parameters.scope = options.scopes.join(" ");
    }

    return oauthRequest(request$1, "POST /login/device/code", parameters);
  });
  return _createDeviceCode.apply(this, arguments);
}

function exchangeDeviceCode(_x6) {
  return _exchangeDeviceCode.apply(this, arguments);
}

function _exchangeDeviceCode() {
  _exchangeDeviceCode = _asyncToGenerator(function* (options) {
    const request$1 = options.request ||
    /* istanbul ignore next: we always pass a custom request in tests */
    request.request;
    const response = yield oauthRequest(request$1, "POST /login/oauth/access_token", {
      client_id: options.clientId,
      device_code: options.code,
      grant_type: "urn:ietf:params:oauth:grant-type:device_code"
    });
    const authentication = {
      clientType: options.clientType,
      clientId: options.clientId,
      token: response.data.access_token,
      scopes: response.data.scope.split(/\s+/).filter(Boolean)
    };

    if ("clientSecret" in options) {
      authentication.clientSecret = options.clientSecret;
    }

    if (options.clientType === "github-app") {
      if ("refresh_token" in response.data) {
        const apiTimeInMs = new Date(response.headers.date).getTime();
        authentication.refreshToken = response.data.refresh_token, authentication.expiresAt = toTimestamp$1(apiTimeInMs, response.data.expires_in), authentication.refreshTokenExpiresAt = toTimestamp$1(apiTimeInMs, response.data.refresh_token_expires_in);
      }

      delete authentication.scopes;
    }

    return _objectSpread2(_objectSpread2({}, response), {}, {
      authentication
    });
  });
  return _exchangeDeviceCode.apply(this, arguments);
}

function toTimestamp$1(apiTimeInMs, expirationInSeconds) {
  return new Date(apiTimeInMs + expirationInSeconds * 1000).toISOString();
}

function checkToken(_x7) {
  return _checkToken.apply(this, arguments);
}

function _checkToken() {
  _checkToken = _asyncToGenerator(function* (options) {
    const request$1 = options.request ||
    /* istanbul ignore next: we always pass a custom request in tests */
    request.request;
    const response = yield request$1("POST /applications/{client_id}/token", {
      headers: {
        authorization: `basic ${btoa(`${options.clientId}:${options.clientSecret}`)}`
      },
      client_id: options.clientId,
      access_token: options.token
    });
    const authentication = {
      clientType: options.clientType,
      clientId: options.clientId,
      clientSecret: options.clientSecret,
      token: options.token,
      scopes: response.data.scopes
    };
    if (response.data.expires_at) authentication.expiresAt = response.data.expires_at;

    if (options.clientType === "github-app") {
      delete authentication.scopes;
    }

    return _objectSpread2(_objectSpread2({}, response), {}, {
      authentication
    });
  });
  return _checkToken.apply(this, arguments);
}

function refreshToken(_x8) {
  return _refreshToken.apply(this, arguments);
}

function _refreshToken() {
  _refreshToken = _asyncToGenerator(function* (options) {
    const request$1 = options.request ||
    /* istanbul ignore next: we always pass a custom request in tests */
    request.request;
    const response = yield oauthRequest(request$1, "POST /login/oauth/access_token", {
      client_id: options.clientId,
      client_secret: options.clientSecret,
      grant_type: "refresh_token",
      refresh_token: options.refreshToken
    });
    const apiTimeInMs = new Date(response.headers.date).getTime();
    const authentication = {
      clientType: "github-app",
      clientId: options.clientId,
      clientSecret: options.clientSecret,
      token: response.data.access_token,
      refreshToken: response.data.refresh_token,
      expiresAt: toTimestamp$2(apiTimeInMs, response.data.expires_in),
      refreshTokenExpiresAt: toTimestamp$2(apiTimeInMs, response.data.refresh_token_expires_in)
    };
    return _objectSpread2(_objectSpread2({}, response), {}, {
      authentication
    });
  });
  return _refreshToken.apply(this, arguments);
}

function toTimestamp$2(apiTimeInMs, expirationInSeconds) {
  return new Date(apiTimeInMs + expirationInSeconds * 1000).toISOString();
}

const _excluded$1 = ["request", "clientType", "clientId", "clientSecret", "token"];

function scopeToken(_x9) {
  return _scopeToken.apply(this, arguments);
}

function _scopeToken() {
  _scopeToken = _asyncToGenerator(function* (options) {
    const {
      request: request$1,
      clientType,
      clientId,
      clientSecret,
      token
    } = options,
          requestOptions = _objectWithoutProperties(options, _excluded$1);

    const response = yield (request$1 ||
    /* istanbul ignore next: we always pass a custom request in tests */
    request.request)("POST /applications/{client_id}/token/scoped", _objectSpread2({
      headers: {
        authorization: `basic ${btoa(`${clientId}:${clientSecret}`)}`
      },
      client_id: clientId,
      access_token: token
    }, requestOptions));
    const authentication = Object.assign({
      clientType,
      clientId,
      clientSecret,
      token: response.data.token
    }, response.data.expires_at ? {
      expiresAt: response.data.expires_at
    } : {});
    return _objectSpread2(_objectSpread2({}, response), {}, {
      authentication
    });
  });
  return _scopeToken.apply(this, arguments);
}

function resetToken(_x10) {
  return _resetToken.apply(this, arguments);
}

function _resetToken() {
  _resetToken = _asyncToGenerator(function* (options) {
    const request$1 = options.request ||
    /* istanbul ignore next: we always pass a custom request in tests */
    request.request;
    const auth = btoa(`${options.clientId}:${options.clientSecret}`);
    const response = yield request$1("PATCH /applications/{client_id}/token", {
      headers: {
        authorization: `basic ${auth}`
      },
      client_id: options.clientId,
      access_token: options.token
    });
    const authentication = {
      clientType: options.clientType,
      clientId: options.clientId,
      clientSecret: options.clientSecret,
      token: response.data.token,
      scopes: response.data.scopes
    };
    if (response.data.expires_at) authentication.expiresAt = response.data.expires_at;

    if (options.clientType === "github-app") {
      delete authentication.scopes;
    }

    return _objectSpread2(_objectSpread2({}, response), {}, {
      authentication
    });
  });
  return _resetToken.apply(this, arguments);
}

function deleteToken(_x11) {
  return _deleteToken.apply(this, arguments);
}

function _deleteToken() {
  _deleteToken = _asyncToGenerator(function* (options) {
    const request$1 = options.request ||
    /* istanbul ignore next: we always pass a custom request in tests */
    request.request;
    const auth = btoa(`${options.clientId}:${options.clientSecret}`);
    return request$1("DELETE /applications/{client_id}/token", {
      headers: {
        authorization: `basic ${auth}`
      },
      client_id: options.clientId,
      access_token: options.token
    });
  });
  return _deleteToken.apply(this, arguments);
}

function deleteAuthorization(_x12) {
  return _deleteAuthorization.apply(this, arguments);
}

function _deleteAuthorization() {
  _deleteAuthorization = _asyncToGenerator(function* (options) {
    const request$1 = options.request ||
    /* istanbul ignore next: we always pass a custom request in tests */
    request.request;
    const auth = btoa(`${options.clientId}:${options.clientSecret}`);
    return request$1("DELETE /applications/{client_id}/grant", {
      headers: {
        authorization: `basic ${auth}`
      },
      client_id: options.clientId,
      access_token: options.token
    });
  });
  return _deleteAuthorization.apply(this, arguments);
}

exports.VERSION = VERSION;
exports.checkToken = checkToken;
exports.createDeviceCode = createDeviceCode;
exports.deleteAuthorization = deleteAuthorization;
exports.deleteToken = deleteToken;
exports.exchangeDeviceCode = exchangeDeviceCode;
exports.exchangeWebFlowCode = exchangeWebFlowCode;
exports.getWebFlowAuthorizationUrl = getWebFlowAuthorizationUrl;
exports.refreshToken = refreshToken;
exports.resetToken = resetToken;
exports.scopeToken = scopeToken;

/***/ }),

/***/ 7215:
/*!**********************************************************************!*\
  !*** ./node_modules/@octokit/plugin-paginate-rest/dist-web/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "composePaginateRest": () => (/* binding */ composePaginateRest),
/* harmony export */   "isPaginatingEndpoint": () => (/* binding */ isPaginatingEndpoint),
/* harmony export */   "paginateRest": () => (/* binding */ paginateRest),
/* harmony export */   "paginatingEndpoints": () => (/* binding */ paginatingEndpoints)
/* harmony export */ });
/* harmony import */ var C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);

const VERSION = "2.17.0";
/**
 * Some “list” response that can be paginated have a different response structure
 *
 * They have a `total_count` key in the response (search also has `incomplete_results`,
 * /installation/repositories also has `repository_selection`), as well as a key with
 * the list of the items which name varies from endpoint to endpoint.
 *
 * Octokit normalizes these responses so that paginated results are always returned following
 * the same structure. One challenge is that if the list response has only one page, no Link
 * header is provided, so this header alone is not sufficient to check wether a response is
 * paginated or not.
 *
 * We check if a "total_count" key is present in the response data, but also make sure that
 * a "url" property is not, as the "Get the combined status for a specific ref" endpoint would
 * otherwise match: https://developer.github.com/v3/repos/statuses/#get-the-combined-status-for-a-specific-ref
 */

function normalizePaginatedListResponse(response) {
  // endpoints can respond with 204 if repository is empty
  if (!response.data) {
    return { ...response,
      data: []
    };
  }

  const responseNeedsNormalization = "total_count" in response.data && !("url" in response.data);
  if (!responseNeedsNormalization) return response; // keep the additional properties intact as there is currently no other way
  // to retrieve the same information.

  const incompleteResults = response.data.incomplete_results;
  const repositorySelection = response.data.repository_selection;
  const totalCount = response.data.total_count;
  delete response.data.incomplete_results;
  delete response.data.repository_selection;
  delete response.data.total_count;
  const namespaceKey = Object.keys(response.data)[0];
  const data = response.data[namespaceKey];
  response.data = data;

  if (typeof incompleteResults !== "undefined") {
    response.data.incomplete_results = incompleteResults;
  }

  if (typeof repositorySelection !== "undefined") {
    response.data.repository_selection = repositorySelection;
  }

  response.data.total_count = totalCount;
  return response;
}

function iterator(octokit, route, parameters) {
  const options = typeof route === "function" ? route.endpoint(parameters) : octokit.request.endpoint(route, parameters);
  const requestMethod = typeof route === "function" ? route : octokit.request;
  const method = options.method;
  const headers = options.headers;
  let url = options.url;
  return {
    [Symbol.asyncIterator]: () => ({
      next() {
        return (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          if (!url) return {
            done: true
          };

          try {
            const response = yield requestMethod({
              method,
              url,
              headers
            });
            const normalizedResponse = normalizePaginatedListResponse(response); // `response.headers.link` format:
            // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
            // sets `url` to undefined if "next" URL is not present or `link` header is not set

            url = ((normalizedResponse.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) || [])[1];
            return {
              value: normalizedResponse
            };
          } catch (error) {
            if (error.status !== 409) throw error;
            url = "";
            return {
              value: {
                status: 200,
                headers: {},
                data: []
              }
            };
          }
        })();
      }

    })
  };
}

function paginate(octokit, route, parameters, mapFn) {
  if (typeof parameters === "function") {
    mapFn = parameters;
    parameters = undefined;
  }

  return gather(octokit, [], iterator(octokit, route, parameters)[Symbol.asyncIterator](), mapFn);
}

function gather(octokit, results, iterator, mapFn) {
  return iterator.next().then(result => {
    if (result.done) {
      return results;
    }

    let earlyExit = false;

    function done() {
      earlyExit = true;
    }

    results = results.concat(mapFn ? mapFn(result.value, done) : result.value.data);

    if (earlyExit) {
      return results;
    }

    return gather(octokit, results, iterator, mapFn);
  });
}

const composePaginateRest = Object.assign(paginate, {
  iterator
});
const paginatingEndpoints = ["GET /app/hook/deliveries", "GET /app/installations", "GET /applications/grants", "GET /authorizations", "GET /enterprises/{enterprise}/actions/permissions/organizations", "GET /enterprises/{enterprise}/actions/runner-groups", "GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations", "GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners", "GET /enterprises/{enterprise}/actions/runners", "GET /enterprises/{enterprise}/actions/runners/downloads", "GET /events", "GET /gists", "GET /gists/public", "GET /gists/starred", "GET /gists/{gist_id}/comments", "GET /gists/{gist_id}/commits", "GET /gists/{gist_id}/forks", "GET /installation/repositories", "GET /issues", "GET /marketplace_listing/plans", "GET /marketplace_listing/plans/{plan_id}/accounts", "GET /marketplace_listing/stubbed/plans", "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts", "GET /networks/{owner}/{repo}/events", "GET /notifications", "GET /organizations", "GET /orgs/{org}/actions/permissions/repositories", "GET /orgs/{org}/actions/runner-groups", "GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories", "GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners", "GET /orgs/{org}/actions/runners", "GET /orgs/{org}/actions/runners/downloads", "GET /orgs/{org}/actions/secrets", "GET /orgs/{org}/actions/secrets/{secret_name}/repositories", "GET /orgs/{org}/blocks", "GET /orgs/{org}/credential-authorizations", "GET /orgs/{org}/events", "GET /orgs/{org}/failed_invitations", "GET /orgs/{org}/hooks", "GET /orgs/{org}/hooks/{hook_id}/deliveries", "GET /orgs/{org}/installations", "GET /orgs/{org}/invitations", "GET /orgs/{org}/invitations/{invitation_id}/teams", "GET /orgs/{org}/issues", "GET /orgs/{org}/members", "GET /orgs/{org}/migrations", "GET /orgs/{org}/migrations/{migration_id}/repositories", "GET /orgs/{org}/outside_collaborators", "GET /orgs/{org}/packages", "GET /orgs/{org}/projects", "GET /orgs/{org}/public_members", "GET /orgs/{org}/repos", "GET /orgs/{org}/secret-scanning/alerts", "GET /orgs/{org}/team-sync/groups", "GET /orgs/{org}/teams", "GET /orgs/{org}/teams/{team_slug}/discussions", "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", "GET /orgs/{org}/teams/{team_slug}/invitations", "GET /orgs/{org}/teams/{team_slug}/members", "GET /orgs/{org}/teams/{team_slug}/projects", "GET /orgs/{org}/teams/{team_slug}/repos", "GET /orgs/{org}/teams/{team_slug}/team-sync/group-mappings", "GET /orgs/{org}/teams/{team_slug}/teams", "GET /projects/columns/{column_id}/cards", "GET /projects/{project_id}/collaborators", "GET /projects/{project_id}/columns", "GET /repos/{owner}/{repo}/actions/artifacts", "GET /repos/{owner}/{repo}/actions/runners", "GET /repos/{owner}/{repo}/actions/runners/downloads", "GET /repos/{owner}/{repo}/actions/runs", "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts", "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs", "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs", "GET /repos/{owner}/{repo}/actions/secrets", "GET /repos/{owner}/{repo}/actions/workflows", "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs", "GET /repos/{owner}/{repo}/assignees", "GET /repos/{owner}/{repo}/autolinks", "GET /repos/{owner}/{repo}/branches", "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations", "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs", "GET /repos/{owner}/{repo}/code-scanning/alerts", "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", "GET /repos/{owner}/{repo}/code-scanning/analyses", "GET /repos/{owner}/{repo}/collaborators", "GET /repos/{owner}/{repo}/comments", "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions", "GET /repos/{owner}/{repo}/commits", "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head", "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments", "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls", "GET /repos/{owner}/{repo}/commits/{ref}/check-runs", "GET /repos/{owner}/{repo}/commits/{ref}/check-suites", "GET /repos/{owner}/{repo}/commits/{ref}/statuses", "GET /repos/{owner}/{repo}/contributors", "GET /repos/{owner}/{repo}/deployments", "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses", "GET /repos/{owner}/{repo}/events", "GET /repos/{owner}/{repo}/forks", "GET /repos/{owner}/{repo}/git/matching-refs/{ref}", "GET /repos/{owner}/{repo}/hooks", "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries", "GET /repos/{owner}/{repo}/invitations", "GET /repos/{owner}/{repo}/issues", "GET /repos/{owner}/{repo}/issues/comments", "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", "GET /repos/{owner}/{repo}/issues/events", "GET /repos/{owner}/{repo}/issues/{issue_number}/comments", "GET /repos/{owner}/{repo}/issues/{issue_number}/events", "GET /repos/{owner}/{repo}/issues/{issue_number}/labels", "GET /repos/{owner}/{repo}/issues/{issue_number}/reactions", "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline", "GET /repos/{owner}/{repo}/keys", "GET /repos/{owner}/{repo}/labels", "GET /repos/{owner}/{repo}/milestones", "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels", "GET /repos/{owner}/{repo}/notifications", "GET /repos/{owner}/{repo}/pages/builds", "GET /repos/{owner}/{repo}/projects", "GET /repos/{owner}/{repo}/pulls", "GET /repos/{owner}/{repo}/pulls/comments", "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments", "GET /repos/{owner}/{repo}/pulls/{pull_number}/commits", "GET /repos/{owner}/{repo}/pulls/{pull_number}/files", "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews", "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments", "GET /repos/{owner}/{repo}/releases", "GET /repos/{owner}/{repo}/releases/{release_id}/assets", "GET /repos/{owner}/{repo}/secret-scanning/alerts", "GET /repos/{owner}/{repo}/stargazers", "GET /repos/{owner}/{repo}/subscribers", "GET /repos/{owner}/{repo}/tags", "GET /repos/{owner}/{repo}/teams", "GET /repositories", "GET /repositories/{repository_id}/environments/{environment_name}/secrets", "GET /scim/v2/enterprises/{enterprise}/Groups", "GET /scim/v2/enterprises/{enterprise}/Users", "GET /scim/v2/organizations/{org}/Users", "GET /search/code", "GET /search/commits", "GET /search/issues", "GET /search/labels", "GET /search/repositories", "GET /search/topics", "GET /search/users", "GET /teams/{team_id}/discussions", "GET /teams/{team_id}/discussions/{discussion_number}/comments", "GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions", "GET /teams/{team_id}/discussions/{discussion_number}/reactions", "GET /teams/{team_id}/invitations", "GET /teams/{team_id}/members", "GET /teams/{team_id}/projects", "GET /teams/{team_id}/repos", "GET /teams/{team_id}/team-sync/group-mappings", "GET /teams/{team_id}/teams", "GET /user/blocks", "GET /user/emails", "GET /user/followers", "GET /user/following", "GET /user/gpg_keys", "GET /user/installations", "GET /user/installations/{installation_id}/repositories", "GET /user/issues", "GET /user/keys", "GET /user/marketplace_purchases", "GET /user/marketplace_purchases/stubbed", "GET /user/memberships/orgs", "GET /user/migrations", "GET /user/migrations/{migration_id}/repositories", "GET /user/orgs", "GET /user/packages", "GET /user/public_emails", "GET /user/repos", "GET /user/repository_invitations", "GET /user/starred", "GET /user/subscriptions", "GET /user/teams", "GET /users", "GET /users/{username}/events", "GET /users/{username}/events/orgs/{org}", "GET /users/{username}/events/public", "GET /users/{username}/followers", "GET /users/{username}/following", "GET /users/{username}/gists", "GET /users/{username}/gpg_keys", "GET /users/{username}/keys", "GET /users/{username}/orgs", "GET /users/{username}/packages", "GET /users/{username}/projects", "GET /users/{username}/received_events", "GET /users/{username}/received_events/public", "GET /users/{username}/repos", "GET /users/{username}/starred", "GET /users/{username}/subscriptions"];

function isPaginatingEndpoint(arg) {
  if (typeof arg === "string") {
    return paginatingEndpoints.includes(arg);
  } else {
    return false;
  }
}
/**
 * @param octokit Octokit instance
 * @param options Options passed to Octokit constructor
 */


function paginateRest(octokit) {
  return {
    paginate: Object.assign(paginate.bind(null, octokit), {
      iterator: iterator.bind(null, octokit)
    })
  };
}

paginateRest.VERSION = VERSION;


/***/ }),

/***/ 1878:
/*!******************************************************************************!*\
  !*** ./node_modules/@octokit/plugin-rest-endpoint-methods/dist-web/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "legacyRestEndpointMethods": () => (/* binding */ legacyRestEndpointMethods),
/* harmony export */   "restEndpointMethods": () => (/* binding */ restEndpointMethods)
/* harmony export */ });
const Endpoints = {
    actions: {
        addSelectedRepoToOrgSecret: [
            "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}",
        ],
        approveWorkflowRun: [
            "POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve",
        ],
        cancelWorkflowRun: [
            "POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel",
        ],
        createOrUpdateEnvironmentSecret: [
            "PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}",
        ],
        createOrUpdateOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}"],
        createOrUpdateRepoSecret: [
            "PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}",
        ],
        createRegistrationTokenForOrg: [
            "POST /orgs/{org}/actions/runners/registration-token",
        ],
        createRegistrationTokenForRepo: [
            "POST /repos/{owner}/{repo}/actions/runners/registration-token",
        ],
        createRemoveTokenForOrg: ["POST /orgs/{org}/actions/runners/remove-token"],
        createRemoveTokenForRepo: [
            "POST /repos/{owner}/{repo}/actions/runners/remove-token",
        ],
        createWorkflowDispatch: [
            "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches",
        ],
        deleteArtifact: [
            "DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}",
        ],
        deleteEnvironmentSecret: [
            "DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}",
        ],
        deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"],
        deleteRepoSecret: [
            "DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}",
        ],
        deleteSelfHostedRunnerFromOrg: [
            "DELETE /orgs/{org}/actions/runners/{runner_id}",
        ],
        deleteSelfHostedRunnerFromRepo: [
            "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}",
        ],
        deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"],
        deleteWorkflowRunLogs: [
            "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs",
        ],
        disableSelectedRepositoryGithubActionsOrganization: [
            "DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}",
        ],
        disableWorkflow: [
            "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable",
        ],
        downloadArtifact: [
            "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}",
        ],
        downloadJobLogsForWorkflowRun: [
            "GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs",
        ],
        downloadWorkflowRunAttemptLogs: [
            "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs",
        ],
        downloadWorkflowRunLogs: [
            "GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs",
        ],
        enableSelectedRepositoryGithubActionsOrganization: [
            "PUT /orgs/{org}/actions/permissions/repositories/{repository_id}",
        ],
        enableWorkflow: [
            "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable",
        ],
        getAllowedActionsOrganization: [
            "GET /orgs/{org}/actions/permissions/selected-actions",
        ],
        getAllowedActionsRepository: [
            "GET /repos/{owner}/{repo}/actions/permissions/selected-actions",
        ],
        getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
        getEnvironmentPublicKey: [
            "GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key",
        ],
        getEnvironmentSecret: [
            "GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}",
        ],
        getGithubActionsPermissionsOrganization: [
            "GET /orgs/{org}/actions/permissions",
        ],
        getGithubActionsPermissionsRepository: [
            "GET /repos/{owner}/{repo}/actions/permissions",
        ],
        getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],
        getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"],
        getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"],
        getPendingDeploymentsForRun: [
            "GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments",
        ],
        getRepoPermissions: [
            "GET /repos/{owner}/{repo}/actions/permissions",
            {},
            { renamed: ["actions", "getGithubActionsPermissionsRepository"] },
        ],
        getRepoPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"],
        getRepoSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
        getReviewsForRun: [
            "GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals",
        ],
        getSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}"],
        getSelfHostedRunnerForRepo: [
            "GET /repos/{owner}/{repo}/actions/runners/{runner_id}",
        ],
        getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],
        getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],
        getWorkflowRunAttempt: [
            "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}",
        ],
        getWorkflowRunUsage: [
            "GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing",
        ],
        getWorkflowUsage: [
            "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing",
        ],
        listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"],
        listEnvironmentSecrets: [
            "GET /repositories/{repository_id}/environments/{environment_name}/secrets",
        ],
        listJobsForWorkflowRun: [
            "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs",
        ],
        listJobsForWorkflowRunAttempt: [
            "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs",
        ],
        listOrgSecrets: ["GET /orgs/{org}/actions/secrets"],
        listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"],
        listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"],
        listRunnerApplicationsForOrg: ["GET /orgs/{org}/actions/runners/downloads"],
        listRunnerApplicationsForRepo: [
            "GET /repos/{owner}/{repo}/actions/runners/downloads",
        ],
        listSelectedReposForOrgSecret: [
            "GET /orgs/{org}/actions/secrets/{secret_name}/repositories",
        ],
        listSelectedRepositoriesEnabledGithubActionsOrganization: [
            "GET /orgs/{org}/actions/permissions/repositories",
        ],
        listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"],
        listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"],
        listWorkflowRunArtifacts: [
            "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts",
        ],
        listWorkflowRuns: [
            "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs",
        ],
        listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"],
        removeSelectedRepoFromOrgSecret: [
            "DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}",
        ],
        reviewPendingDeploymentsForRun: [
            "POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments",
        ],
        setAllowedActionsOrganization: [
            "PUT /orgs/{org}/actions/permissions/selected-actions",
        ],
        setAllowedActionsRepository: [
            "PUT /repos/{owner}/{repo}/actions/permissions/selected-actions",
        ],
        setGithubActionsPermissionsOrganization: [
            "PUT /orgs/{org}/actions/permissions",
        ],
        setGithubActionsPermissionsRepository: [
            "PUT /repos/{owner}/{repo}/actions/permissions",
        ],
        setSelectedReposForOrgSecret: [
            "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories",
        ],
        setSelectedRepositoriesEnabledGithubActionsOrganization: [
            "PUT /orgs/{org}/actions/permissions/repositories",
        ],
    },
    activity: {
        checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"],
        deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"],
        deleteThreadSubscription: [
            "DELETE /notifications/threads/{thread_id}/subscription",
        ],
        getFeeds: ["GET /feeds"],
        getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"],
        getThread: ["GET /notifications/threads/{thread_id}"],
        getThreadSubscriptionForAuthenticatedUser: [
            "GET /notifications/threads/{thread_id}/subscription",
        ],
        listEventsForAuthenticatedUser: ["GET /users/{username}/events"],
        listNotificationsForAuthenticatedUser: ["GET /notifications"],
        listOrgEventsForAuthenticatedUser: [
            "GET /users/{username}/events/orgs/{org}",
        ],
        listPublicEvents: ["GET /events"],
        listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"],
        listPublicEventsForUser: ["GET /users/{username}/events/public"],
        listPublicOrgEvents: ["GET /orgs/{org}/events"],
        listReceivedEventsForUser: ["GET /users/{username}/received_events"],
        listReceivedPublicEventsForUser: [
            "GET /users/{username}/received_events/public",
        ],
        listRepoEvents: ["GET /repos/{owner}/{repo}/events"],
        listRepoNotificationsForAuthenticatedUser: [
            "GET /repos/{owner}/{repo}/notifications",
        ],
        listReposStarredByAuthenticatedUser: ["GET /user/starred"],
        listReposStarredByUser: ["GET /users/{username}/starred"],
        listReposWatchedByUser: ["GET /users/{username}/subscriptions"],
        listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"],
        listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"],
        listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"],
        markNotificationsAsRead: ["PUT /notifications"],
        markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"],
        markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"],
        setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"],
        setThreadSubscription: [
            "PUT /notifications/threads/{thread_id}/subscription",
        ],
        starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"],
        unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"],
    },
    apps: {
        addRepoToInstallation: [
            "PUT /user/installations/{installation_id}/repositories/{repository_id}",
            {},
            { renamed: ["apps", "addRepoToInstallationForAuthenticatedUser"] },
        ],
        addRepoToInstallationForAuthenticatedUser: [
            "PUT /user/installations/{installation_id}/repositories/{repository_id}",
        ],
        checkToken: ["POST /applications/{client_id}/token"],
        createContentAttachment: [
            "POST /content_references/{content_reference_id}/attachments",
            { mediaType: { previews: ["corsair"] } },
        ],
        createContentAttachmentForRepo: [
            "POST /repos/{owner}/{repo}/content_references/{content_reference_id}/attachments",
            { mediaType: { previews: ["corsair"] } },
        ],
        createFromManifest: ["POST /app-manifests/{code}/conversions"],
        createInstallationAccessToken: [
            "POST /app/installations/{installation_id}/access_tokens",
        ],
        deleteAuthorization: ["DELETE /applications/{client_id}/grant"],
        deleteInstallation: ["DELETE /app/installations/{installation_id}"],
        deleteToken: ["DELETE /applications/{client_id}/token"],
        getAuthenticated: ["GET /app"],
        getBySlug: ["GET /apps/{app_slug}"],
        getInstallation: ["GET /app/installations/{installation_id}"],
        getOrgInstallation: ["GET /orgs/{org}/installation"],
        getRepoInstallation: ["GET /repos/{owner}/{repo}/installation"],
        getSubscriptionPlanForAccount: [
            "GET /marketplace_listing/accounts/{account_id}",
        ],
        getSubscriptionPlanForAccountStubbed: [
            "GET /marketplace_listing/stubbed/accounts/{account_id}",
        ],
        getUserInstallation: ["GET /users/{username}/installation"],
        getWebhookConfigForApp: ["GET /app/hook/config"],
        getWebhookDelivery: ["GET /app/hook/deliveries/{delivery_id}"],
        listAccountsForPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts"],
        listAccountsForPlanStubbed: [
            "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts",
        ],
        listInstallationReposForAuthenticatedUser: [
            "GET /user/installations/{installation_id}/repositories",
        ],
        listInstallations: ["GET /app/installations"],
        listInstallationsForAuthenticatedUser: ["GET /user/installations"],
        listPlans: ["GET /marketplace_listing/plans"],
        listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"],
        listReposAccessibleToInstallation: ["GET /installation/repositories"],
        listSubscriptionsForAuthenticatedUser: ["GET /user/marketplace_purchases"],
        listSubscriptionsForAuthenticatedUserStubbed: [
            "GET /user/marketplace_purchases/stubbed",
        ],
        listWebhookDeliveries: ["GET /app/hook/deliveries"],
        redeliverWebhookDelivery: [
            "POST /app/hook/deliveries/{delivery_id}/attempts",
        ],
        removeRepoFromInstallation: [
            "DELETE /user/installations/{installation_id}/repositories/{repository_id}",
            {},
            { renamed: ["apps", "removeRepoFromInstallationForAuthenticatedUser"] },
        ],
        removeRepoFromInstallationForAuthenticatedUser: [
            "DELETE /user/installations/{installation_id}/repositories/{repository_id}",
        ],
        resetToken: ["PATCH /applications/{client_id}/token"],
        revokeInstallationAccessToken: ["DELETE /installation/token"],
        scopeToken: ["POST /applications/{client_id}/token/scoped"],
        suspendInstallation: ["PUT /app/installations/{installation_id}/suspended"],
        unsuspendInstallation: [
            "DELETE /app/installations/{installation_id}/suspended",
        ],
        updateWebhookConfigForApp: ["PATCH /app/hook/config"],
    },
    billing: {
        getGithubActionsBillingOrg: ["GET /orgs/{org}/settings/billing/actions"],
        getGithubActionsBillingUser: [
            "GET /users/{username}/settings/billing/actions",
        ],
        getGithubPackagesBillingOrg: ["GET /orgs/{org}/settings/billing/packages"],
        getGithubPackagesBillingUser: [
            "GET /users/{username}/settings/billing/packages",
        ],
        getSharedStorageBillingOrg: [
            "GET /orgs/{org}/settings/billing/shared-storage",
        ],
        getSharedStorageBillingUser: [
            "GET /users/{username}/settings/billing/shared-storage",
        ],
    },
    checks: {
        create: ["POST /repos/{owner}/{repo}/check-runs"],
        createSuite: ["POST /repos/{owner}/{repo}/check-suites"],
        get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"],
        getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"],
        listAnnotations: [
            "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations",
        ],
        listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"],
        listForSuite: [
            "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs",
        ],
        listSuitesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"],
        rerequestRun: [
            "POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest",
        ],
        rerequestSuite: [
            "POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest",
        ],
        setSuitesPreferences: [
            "PATCH /repos/{owner}/{repo}/check-suites/preferences",
        ],
        update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"],
    },
    codeScanning: {
        deleteAnalysis: [
            "DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}",
        ],
        getAlert: [
            "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
            {},
            { renamedParameters: { alert_id: "alert_number" } },
        ],
        getAnalysis: [
            "GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}",
        ],
        getSarif: ["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"],
        listAlertInstances: [
            "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",
        ],
        listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"],
        listAlertsInstances: [
            "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",
            {},
            { renamed: ["codeScanning", "listAlertInstances"] },
        ],
        listRecentAnalyses: ["GET /repos/{owner}/{repo}/code-scanning/analyses"],
        updateAlert: [
            "PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
        ],
        uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"],
    },
    codesOfConduct: {
        getAllCodesOfConduct: ["GET /codes_of_conduct"],
        getConductCode: ["GET /codes_of_conduct/{key}"],
    },
    emojis: { get: ["GET /emojis"] },
    enterpriseAdmin: {
        disableSelectedOrganizationGithubActionsEnterprise: [
            "DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}",
        ],
        enableSelectedOrganizationGithubActionsEnterprise: [
            "PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}",
        ],
        getAllowedActionsEnterprise: [
            "GET /enterprises/{enterprise}/actions/permissions/selected-actions",
        ],
        getGithubActionsPermissionsEnterprise: [
            "GET /enterprises/{enterprise}/actions/permissions",
        ],
        listSelectedOrganizationsEnabledGithubActionsEnterprise: [
            "GET /enterprises/{enterprise}/actions/permissions/organizations",
        ],
        setAllowedActionsEnterprise: [
            "PUT /enterprises/{enterprise}/actions/permissions/selected-actions",
        ],
        setGithubActionsPermissionsEnterprise: [
            "PUT /enterprises/{enterprise}/actions/permissions",
        ],
        setSelectedOrganizationsEnabledGithubActionsEnterprise: [
            "PUT /enterprises/{enterprise}/actions/permissions/organizations",
        ],
    },
    gists: {
        checkIsStarred: ["GET /gists/{gist_id}/star"],
        create: ["POST /gists"],
        createComment: ["POST /gists/{gist_id}/comments"],
        delete: ["DELETE /gists/{gist_id}"],
        deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"],
        fork: ["POST /gists/{gist_id}/forks"],
        get: ["GET /gists/{gist_id}"],
        getComment: ["GET /gists/{gist_id}/comments/{comment_id}"],
        getRevision: ["GET /gists/{gist_id}/{sha}"],
        list: ["GET /gists"],
        listComments: ["GET /gists/{gist_id}/comments"],
        listCommits: ["GET /gists/{gist_id}/commits"],
        listForUser: ["GET /users/{username}/gists"],
        listForks: ["GET /gists/{gist_id}/forks"],
        listPublic: ["GET /gists/public"],
        listStarred: ["GET /gists/starred"],
        star: ["PUT /gists/{gist_id}/star"],
        unstar: ["DELETE /gists/{gist_id}/star"],
        update: ["PATCH /gists/{gist_id}"],
        updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"],
    },
    git: {
        createBlob: ["POST /repos/{owner}/{repo}/git/blobs"],
        createCommit: ["POST /repos/{owner}/{repo}/git/commits"],
        createRef: ["POST /repos/{owner}/{repo}/git/refs"],
        createTag: ["POST /repos/{owner}/{repo}/git/tags"],
        createTree: ["POST /repos/{owner}/{repo}/git/trees"],
        deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],
        getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],
        getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],
        getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"],
        getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],
        getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],
        listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],
        updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"],
    },
    gitignore: {
        getAllTemplates: ["GET /gitignore/templates"],
        getTemplate: ["GET /gitignore/templates/{name}"],
    },
    interactions: {
        getRestrictionsForAuthenticatedUser: ["GET /user/interaction-limits"],
        getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits"],
        getRestrictionsForRepo: ["GET /repos/{owner}/{repo}/interaction-limits"],
        getRestrictionsForYourPublicRepos: [
            "GET /user/interaction-limits",
            {},
            { renamed: ["interactions", "getRestrictionsForAuthenticatedUser"] },
        ],
        removeRestrictionsForAuthenticatedUser: ["DELETE /user/interaction-limits"],
        removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits"],
        removeRestrictionsForRepo: [
            "DELETE /repos/{owner}/{repo}/interaction-limits",
        ],
        removeRestrictionsForYourPublicRepos: [
            "DELETE /user/interaction-limits",
            {},
            { renamed: ["interactions", "removeRestrictionsForAuthenticatedUser"] },
        ],
        setRestrictionsForAuthenticatedUser: ["PUT /user/interaction-limits"],
        setRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits"],
        setRestrictionsForRepo: ["PUT /repos/{owner}/{repo}/interaction-limits"],
        setRestrictionsForYourPublicRepos: [
            "PUT /user/interaction-limits",
            {},
            { renamed: ["interactions", "setRestrictionsForAuthenticatedUser"] },
        ],
    },
    issues: {
        addAssignees: [
            "POST /repos/{owner}/{repo}/issues/{issue_number}/assignees",
        ],
        addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],
        checkUserCanBeAssigned: ["GET /repos/{owner}/{repo}/assignees/{assignee}"],
        create: ["POST /repos/{owner}/{repo}/issues"],
        createComment: [
            "POST /repos/{owner}/{repo}/issues/{issue_number}/comments",
        ],
        createLabel: ["POST /repos/{owner}/{repo}/labels"],
        createMilestone: ["POST /repos/{owner}/{repo}/milestones"],
        deleteComment: [
            "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}",
        ],
        deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"],
        deleteMilestone: [
            "DELETE /repos/{owner}/{repo}/milestones/{milestone_number}",
        ],
        get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"],
        getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],
        getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"],
        getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"],
        getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],
        list: ["GET /issues"],
        listAssignees: ["GET /repos/{owner}/{repo}/assignees"],
        listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],
        listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"],
        listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],
        listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"],
        listEventsForTimeline: [
            "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline",
        ],
        listForAuthenticatedUser: ["GET /user/issues"],
        listForOrg: ["GET /orgs/{org}/issues"],
        listForRepo: ["GET /repos/{owner}/{repo}/issues"],
        listLabelsForMilestone: [
            "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels",
        ],
        listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"],
        listLabelsOnIssue: [
            "GET /repos/{owner}/{repo}/issues/{issue_number}/labels",
        ],
        listMilestones: ["GET /repos/{owner}/{repo}/milestones"],
        lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],
        removeAllLabels: [
            "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels",
        ],
        removeAssignees: [
            "DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees",
        ],
        removeLabel: [
            "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}",
        ],
        setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],
        unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],
        update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],
        updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],
        updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"],
        updateMilestone: [
            "PATCH /repos/{owner}/{repo}/milestones/{milestone_number}",
        ],
    },
    licenses: {
        get: ["GET /licenses/{license}"],
        getAllCommonlyUsed: ["GET /licenses"],
        getForRepo: ["GET /repos/{owner}/{repo}/license"],
    },
    markdown: {
        render: ["POST /markdown"],
        renderRaw: [
            "POST /markdown/raw",
            { headers: { "content-type": "text/plain; charset=utf-8" } },
        ],
    },
    meta: {
        get: ["GET /meta"],
        getOctocat: ["GET /octocat"],
        getZen: ["GET /zen"],
        root: ["GET /"],
    },
    migrations: {
        cancelImport: ["DELETE /repos/{owner}/{repo}/import"],
        deleteArchiveForAuthenticatedUser: [
            "DELETE /user/migrations/{migration_id}/archive",
        ],
        deleteArchiveForOrg: [
            "DELETE /orgs/{org}/migrations/{migration_id}/archive",
        ],
        downloadArchiveForOrg: [
            "GET /orgs/{org}/migrations/{migration_id}/archive",
        ],
        getArchiveForAuthenticatedUser: [
            "GET /user/migrations/{migration_id}/archive",
        ],
        getCommitAuthors: ["GET /repos/{owner}/{repo}/import/authors"],
        getImportStatus: ["GET /repos/{owner}/{repo}/import"],
        getLargeFiles: ["GET /repos/{owner}/{repo}/import/large_files"],
        getStatusForAuthenticatedUser: ["GET /user/migrations/{migration_id}"],
        getStatusForOrg: ["GET /orgs/{org}/migrations/{migration_id}"],
        listForAuthenticatedUser: ["GET /user/migrations"],
        listForOrg: ["GET /orgs/{org}/migrations"],
        listReposForAuthenticatedUser: [
            "GET /user/migrations/{migration_id}/repositories",
        ],
        listReposForOrg: ["GET /orgs/{org}/migrations/{migration_id}/repositories"],
        listReposForUser: [
            "GET /user/migrations/{migration_id}/repositories",
            {},
            { renamed: ["migrations", "listReposForAuthenticatedUser"] },
        ],
        mapCommitAuthor: ["PATCH /repos/{owner}/{repo}/import/authors/{author_id}"],
        setLfsPreference: ["PATCH /repos/{owner}/{repo}/import/lfs"],
        startForAuthenticatedUser: ["POST /user/migrations"],
        startForOrg: ["POST /orgs/{org}/migrations"],
        startImport: ["PUT /repos/{owner}/{repo}/import"],
        unlockRepoForAuthenticatedUser: [
            "DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock",
        ],
        unlockRepoForOrg: [
            "DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock",
        ],
        updateImport: ["PATCH /repos/{owner}/{repo}/import"],
    },
    orgs: {
        blockUser: ["PUT /orgs/{org}/blocks/{username}"],
        cancelInvitation: ["DELETE /orgs/{org}/invitations/{invitation_id}"],
        checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"],
        checkMembershipForUser: ["GET /orgs/{org}/members/{username}"],
        checkPublicMembershipForUser: ["GET /orgs/{org}/public_members/{username}"],
        convertMemberToOutsideCollaborator: [
            "PUT /orgs/{org}/outside_collaborators/{username}",
        ],
        createInvitation: ["POST /orgs/{org}/invitations"],
        createWebhook: ["POST /orgs/{org}/hooks"],
        deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"],
        get: ["GET /orgs/{org}"],
        getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"],
        getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"],
        getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"],
        getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"],
        getWebhookDelivery: [
            "GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}",
        ],
        list: ["GET /organizations"],
        listAppInstallations: ["GET /orgs/{org}/installations"],
        listBlockedUsers: ["GET /orgs/{org}/blocks"],
        listFailedInvitations: ["GET /orgs/{org}/failed_invitations"],
        listForAuthenticatedUser: ["GET /user/orgs"],
        listForUser: ["GET /users/{username}/orgs"],
        listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"],
        listMembers: ["GET /orgs/{org}/members"],
        listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"],
        listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
        listPendingInvitations: ["GET /orgs/{org}/invitations"],
        listPublicMembers: ["GET /orgs/{org}/public_members"],
        listWebhookDeliveries: ["GET /orgs/{org}/hooks/{hook_id}/deliveries"],
        listWebhooks: ["GET /orgs/{org}/hooks"],
        pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"],
        redeliverWebhookDelivery: [
            "POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts",
        ],
        removeMember: ["DELETE /orgs/{org}/members/{username}"],
        removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"],
        removeOutsideCollaborator: [
            "DELETE /orgs/{org}/outside_collaborators/{username}",
        ],
        removePublicMembershipForAuthenticatedUser: [
            "DELETE /orgs/{org}/public_members/{username}",
        ],
        setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"],
        setPublicMembershipForAuthenticatedUser: [
            "PUT /orgs/{org}/public_members/{username}",
        ],
        unblockUser: ["DELETE /orgs/{org}/blocks/{username}"],
        update: ["PATCH /orgs/{org}"],
        updateMembershipForAuthenticatedUser: [
            "PATCH /user/memberships/orgs/{org}",
        ],
        updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"],
        updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"],
    },
    packages: {
        deletePackageForAuthenticatedUser: [
            "DELETE /user/packages/{package_type}/{package_name}",
        ],
        deletePackageForOrg: [
            "DELETE /orgs/{org}/packages/{package_type}/{package_name}",
        ],
        deletePackageForUser: [
            "DELETE /users/{username}/packages/{package_type}/{package_name}",
        ],
        deletePackageVersionForAuthenticatedUser: [
            "DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}",
        ],
        deletePackageVersionForOrg: [
            "DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}",
        ],
        deletePackageVersionForUser: [
            "DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}",
        ],
        getAllPackageVersionsForAPackageOwnedByAnOrg: [
            "GET /orgs/{org}/packages/{package_type}/{package_name}/versions",
            {},
            { renamed: ["packages", "getAllPackageVersionsForPackageOwnedByOrg"] },
        ],
        getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: [
            "GET /user/packages/{package_type}/{package_name}/versions",
            {},
            {
                renamed: [
                    "packages",
                    "getAllPackageVersionsForPackageOwnedByAuthenticatedUser",
                ],
            },
        ],
        getAllPackageVersionsForPackageOwnedByAuthenticatedUser: [
            "GET /user/packages/{package_type}/{package_name}/versions",
        ],
        getAllPackageVersionsForPackageOwnedByOrg: [
            "GET /orgs/{org}/packages/{package_type}/{package_name}/versions",
        ],
        getAllPackageVersionsForPackageOwnedByUser: [
            "GET /users/{username}/packages/{package_type}/{package_name}/versions",
        ],
        getPackageForAuthenticatedUser: [
            "GET /user/packages/{package_type}/{package_name}",
        ],
        getPackageForOrganization: [
            "GET /orgs/{org}/packages/{package_type}/{package_name}",
        ],
        getPackageForUser: [
            "GET /users/{username}/packages/{package_type}/{package_name}",
        ],
        getPackageVersionForAuthenticatedUser: [
            "GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}",
        ],
        getPackageVersionForOrganization: [
            "GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}",
        ],
        getPackageVersionForUser: [
            "GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}",
        ],
        listPackagesForAuthenticatedUser: ["GET /user/packages"],
        listPackagesForOrganization: ["GET /orgs/{org}/packages"],
        listPackagesForUser: ["GET /users/{username}/packages"],
        restorePackageForAuthenticatedUser: [
            "POST /user/packages/{package_type}/{package_name}/restore{?token}",
        ],
        restorePackageForOrg: [
            "POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}",
        ],
        restorePackageForUser: [
            "POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}",
        ],
        restorePackageVersionForAuthenticatedUser: [
            "POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore",
        ],
        restorePackageVersionForOrg: [
            "POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore",
        ],
        restorePackageVersionForUser: [
            "POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore",
        ],
    },
    projects: {
        addCollaborator: ["PUT /projects/{project_id}/collaborators/{username}"],
        createCard: ["POST /projects/columns/{column_id}/cards"],
        createColumn: ["POST /projects/{project_id}/columns"],
        createForAuthenticatedUser: ["POST /user/projects"],
        createForOrg: ["POST /orgs/{org}/projects"],
        createForRepo: ["POST /repos/{owner}/{repo}/projects"],
        delete: ["DELETE /projects/{project_id}"],
        deleteCard: ["DELETE /projects/columns/cards/{card_id}"],
        deleteColumn: ["DELETE /projects/columns/{column_id}"],
        get: ["GET /projects/{project_id}"],
        getCard: ["GET /projects/columns/cards/{card_id}"],
        getColumn: ["GET /projects/columns/{column_id}"],
        getPermissionForUser: [
            "GET /projects/{project_id}/collaborators/{username}/permission",
        ],
        listCards: ["GET /projects/columns/{column_id}/cards"],
        listCollaborators: ["GET /projects/{project_id}/collaborators"],
        listColumns: ["GET /projects/{project_id}/columns"],
        listForOrg: ["GET /orgs/{org}/projects"],
        listForRepo: ["GET /repos/{owner}/{repo}/projects"],
        listForUser: ["GET /users/{username}/projects"],
        moveCard: ["POST /projects/columns/cards/{card_id}/moves"],
        moveColumn: ["POST /projects/columns/{column_id}/moves"],
        removeCollaborator: [
            "DELETE /projects/{project_id}/collaborators/{username}",
        ],
        update: ["PATCH /projects/{project_id}"],
        updateCard: ["PATCH /projects/columns/cards/{card_id}"],
        updateColumn: ["PATCH /projects/columns/{column_id}"],
    },
    pulls: {
        checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
        create: ["POST /repos/{owner}/{repo}/pulls"],
        createReplyForReviewComment: [
            "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies",
        ],
        createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
        createReviewComment: [
            "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments",
        ],
        deletePendingReview: [
            "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
        ],
        deleteReviewComment: [
            "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}",
        ],
        dismissReview: [
            "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals",
        ],
        get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"],
        getReview: [
            "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
        ],
        getReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
        list: ["GET /repos/{owner}/{repo}/pulls"],
        listCommentsForReview: [
            "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments",
        ],
        listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],
        listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],
        listRequestedReviewers: [
            "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
        ],
        listReviewComments: [
            "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments",
        ],
        listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"],
        listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
        merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
        removeRequestedReviewers: [
            "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
        ],
        requestReviewers: [
            "POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
        ],
        submitReview: [
            "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events",
        ],
        update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],
        updateBranch: [
            "PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch",
        ],
        updateReview: [
            "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
        ],
        updateReviewComment: [
            "PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}",
        ],
    },
    rateLimit: { get: ["GET /rate_limit"] },
    reactions: {
        createForCommitComment: [
            "POST /repos/{owner}/{repo}/comments/{comment_id}/reactions",
        ],
        createForIssue: [
            "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions",
        ],
        createForIssueComment: [
            "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
        ],
        createForPullRequestReviewComment: [
            "POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
        ],
        createForRelease: [
            "POST /repos/{owner}/{repo}/releases/{release_id}/reactions",
        ],
        createForTeamDiscussionCommentInOrg: [
            "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
        ],
        createForTeamDiscussionInOrg: [
            "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
        ],
        deleteForCommitComment: [
            "DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}",
        ],
        deleteForIssue: [
            "DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}",
        ],
        deleteForIssueComment: [
            "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}",
        ],
        deleteForPullRequestComment: [
            "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}",
        ],
        deleteForTeamDiscussion: [
            "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}",
        ],
        deleteForTeamDiscussionComment: [
            "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}",
        ],
        listForCommitComment: [
            "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions",
        ],
        listForIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions"],
        listForIssueComment: [
            "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
        ],
        listForPullRequestReviewComment: [
            "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
        ],
        listForTeamDiscussionCommentInOrg: [
            "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
        ],
        listForTeamDiscussionInOrg: [
            "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
        ],
    },
    repos: {
        acceptInvitation: [
            "PATCH /user/repository_invitations/{invitation_id}",
            {},
            { renamed: ["repos", "acceptInvitationForAuthenticatedUser"] },
        ],
        acceptInvitationForAuthenticatedUser: [
            "PATCH /user/repository_invitations/{invitation_id}",
        ],
        addAppAccessRestrictions: [
            "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
            {},
            { mapToData: "apps" },
        ],
        addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"],
        addStatusCheckContexts: [
            "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
            {},
            { mapToData: "contexts" },
        ],
        addTeamAccessRestrictions: [
            "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
            {},
            { mapToData: "teams" },
        ],
        addUserAccessRestrictions: [
            "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
            {},
            { mapToData: "users" },
        ],
        checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"],
        checkVulnerabilityAlerts: [
            "GET /repos/{owner}/{repo}/vulnerability-alerts",
        ],
        compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
        compareCommitsWithBasehead: [
            "GET /repos/{owner}/{repo}/compare/{basehead}",
        ],
        createAutolink: ["POST /repos/{owner}/{repo}/autolinks"],
        createCommitComment: [
            "POST /repos/{owner}/{repo}/commits/{commit_sha}/comments",
        ],
        createCommitSignatureProtection: [
            "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
        ],
        createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
        createDeployKey: ["POST /repos/{owner}/{repo}/keys"],
        createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
        createDeploymentStatus: [
            "POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
        ],
        createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
        createForAuthenticatedUser: ["POST /user/repos"],
        createFork: ["POST /repos/{owner}/{repo}/forks"],
        createInOrg: ["POST /orgs/{org}/repos"],
        createOrUpdateEnvironment: [
            "PUT /repos/{owner}/{repo}/environments/{environment_name}",
        ],
        createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"],
        createPagesSite: ["POST /repos/{owner}/{repo}/pages"],
        createRelease: ["POST /repos/{owner}/{repo}/releases"],
        createUsingTemplate: [
            "POST /repos/{template_owner}/{template_repo}/generate",
        ],
        createWebhook: ["POST /repos/{owner}/{repo}/hooks"],
        declineInvitation: [
            "DELETE /user/repository_invitations/{invitation_id}",
            {},
            { renamed: ["repos", "declineInvitationForAuthenticatedUser"] },
        ],
        declineInvitationForAuthenticatedUser: [
            "DELETE /user/repository_invitations/{invitation_id}",
        ],
        delete: ["DELETE /repos/{owner}/{repo}"],
        deleteAccessRestrictions: [
            "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions",
        ],
        deleteAdminBranchProtection: [
            "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
        ],
        deleteAnEnvironment: [
            "DELETE /repos/{owner}/{repo}/environments/{environment_name}",
        ],
        deleteAutolink: ["DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}"],
        deleteBranchProtection: [
            "DELETE /repos/{owner}/{repo}/branches/{branch}/protection",
        ],
        deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],
        deleteCommitSignatureProtection: [
            "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
        ],
        deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
        deleteDeployment: [
            "DELETE /repos/{owner}/{repo}/deployments/{deployment_id}",
        ],
        deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
        deleteInvitation: [
            "DELETE /repos/{owner}/{repo}/invitations/{invitation_id}",
        ],
        deletePagesSite: ["DELETE /repos/{owner}/{repo}/pages"],
        deletePullRequestReviewProtection: [
            "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
        ],
        deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
        deleteReleaseAsset: [
            "DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}",
        ],
        deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
        disableAutomatedSecurityFixes: [
            "DELETE /repos/{owner}/{repo}/automated-security-fixes",
        ],
        disableLfsForRepo: ["DELETE /repos/{owner}/{repo}/lfs"],
        disableVulnerabilityAlerts: [
            "DELETE /repos/{owner}/{repo}/vulnerability-alerts",
        ],
        downloadArchive: [
            "GET /repos/{owner}/{repo}/zipball/{ref}",
            {},
            { renamed: ["repos", "downloadZipballArchive"] },
        ],
        downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"],
        downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"],
        enableAutomatedSecurityFixes: [
            "PUT /repos/{owner}/{repo}/automated-security-fixes",
        ],
        enableLfsForRepo: ["PUT /repos/{owner}/{repo}/lfs"],
        enableVulnerabilityAlerts: [
            "PUT /repos/{owner}/{repo}/vulnerability-alerts",
        ],
        generateReleaseNotes: [
            "POST /repos/{owner}/{repo}/releases/generate-notes",
        ],
        get: ["GET /repos/{owner}/{repo}"],
        getAccessRestrictions: [
            "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions",
        ],
        getAdminBranchProtection: [
            "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
        ],
        getAllEnvironments: ["GET /repos/{owner}/{repo}/environments"],
        getAllStatusCheckContexts: [
            "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
        ],
        getAllTopics: [
            "GET /repos/{owner}/{repo}/topics",
            { mediaType: { previews: ["mercy"] } },
        ],
        getAppsWithAccessToProtectedBranch: [
            "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
        ],
        getAutolink: ["GET /repos/{owner}/{repo}/autolinks/{autolink_id}"],
        getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"],
        getBranchProtection: [
            "GET /repos/{owner}/{repo}/branches/{branch}/protection",
        ],
        getClones: ["GET /repos/{owner}/{repo}/traffic/clones"],
        getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"],
        getCollaboratorPermissionLevel: [
            "GET /repos/{owner}/{repo}/collaborators/{username}/permission",
        ],
        getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"],
        getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"],
        getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"],
        getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"],
        getCommitSignatureProtection: [
            "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
        ],
        getCommunityProfileMetrics: ["GET /repos/{owner}/{repo}/community/profile"],
        getContent: ["GET /repos/{owner}/{repo}/contents/{path}"],
        getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
        getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
        getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],
        getDeploymentStatus: [
            "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}",
        ],
        getEnvironment: [
            "GET /repos/{owner}/{repo}/environments/{environment_name}",
        ],
        getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"],
        getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"],
        getPages: ["GET /repos/{owner}/{repo}/pages"],
        getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],
        getPagesHealthCheck: ["GET /repos/{owner}/{repo}/pages/health"],
        getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"],
        getPullRequestReviewProtection: [
            "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
        ],
        getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"],
        getReadme: ["GET /repos/{owner}/{repo}/readme"],
        getReadmeInDirectory: ["GET /repos/{owner}/{repo}/readme/{dir}"],
        getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"],
        getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],
        getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"],
        getStatusChecksProtection: [
            "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
        ],
        getTeamsWithAccessToProtectedBranch: [
            "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
        ],
        getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"],
        getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"],
        getUsersWithAccessToProtectedBranch: [
            "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
        ],
        getViews: ["GET /repos/{owner}/{repo}/traffic/views"],
        getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"],
        getWebhookConfigForRepo: [
            "GET /repos/{owner}/{repo}/hooks/{hook_id}/config",
        ],
        getWebhookDelivery: [
            "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}",
        ],
        listAutolinks: ["GET /repos/{owner}/{repo}/autolinks"],
        listBranches: ["GET /repos/{owner}/{repo}/branches"],
        listBranchesForHeadCommit: [
            "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head",
        ],
        listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"],
        listCommentsForCommit: [
            "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments",
        ],
        listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"],
        listCommitStatusesForRef: [
            "GET /repos/{owner}/{repo}/commits/{ref}/statuses",
        ],
        listCommits: ["GET /repos/{owner}/{repo}/commits"],
        listContributors: ["GET /repos/{owner}/{repo}/contributors"],
        listDeployKeys: ["GET /repos/{owner}/{repo}/keys"],
        listDeploymentStatuses: [
            "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
        ],
        listDeployments: ["GET /repos/{owner}/{repo}/deployments"],
        listForAuthenticatedUser: ["GET /user/repos"],
        listForOrg: ["GET /orgs/{org}/repos"],
        listForUser: ["GET /users/{username}/repos"],
        listForks: ["GET /repos/{owner}/{repo}/forks"],
        listInvitations: ["GET /repos/{owner}/{repo}/invitations"],
        listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"],
        listLanguages: ["GET /repos/{owner}/{repo}/languages"],
        listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"],
        listPublic: ["GET /repositories"],
        listPullRequestsAssociatedWithCommit: [
            "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls",
        ],
        listReleaseAssets: [
            "GET /repos/{owner}/{repo}/releases/{release_id}/assets",
        ],
        listReleases: ["GET /repos/{owner}/{repo}/releases"],
        listTags: ["GET /repos/{owner}/{repo}/tags"],
        listTeams: ["GET /repos/{owner}/{repo}/teams"],
        listWebhookDeliveries: [
            "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries",
        ],
        listWebhooks: ["GET /repos/{owner}/{repo}/hooks"],
        merge: ["POST /repos/{owner}/{repo}/merges"],
        mergeUpstream: ["POST /repos/{owner}/{repo}/merge-upstream"],
        pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
        redeliverWebhookDelivery: [
            "POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts",
        ],
        removeAppAccessRestrictions: [
            "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
            {},
            { mapToData: "apps" },
        ],
        removeCollaborator: [
            "DELETE /repos/{owner}/{repo}/collaborators/{username}",
        ],
        removeStatusCheckContexts: [
            "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
            {},
            { mapToData: "contexts" },
        ],
        removeStatusCheckProtection: [
            "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
        ],
        removeTeamAccessRestrictions: [
            "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
            {},
            { mapToData: "teams" },
        ],
        removeUserAccessRestrictions: [
            "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
            {},
            { mapToData: "users" },
        ],
        renameBranch: ["POST /repos/{owner}/{repo}/branches/{branch}/rename"],
        replaceAllTopics: [
            "PUT /repos/{owner}/{repo}/topics",
            { mediaType: { previews: ["mercy"] } },
        ],
        requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"],
        setAdminBranchProtection: [
            "POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
        ],
        setAppAccessRestrictions: [
            "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
            {},
            { mapToData: "apps" },
        ],
        setStatusCheckContexts: [
            "PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
            {},
            { mapToData: "contexts" },
        ],
        setTeamAccessRestrictions: [
            "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
            {},
            { mapToData: "teams" },
        ],
        setUserAccessRestrictions: [
            "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
            {},
            { mapToData: "users" },
        ],
        testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],
        transfer: ["POST /repos/{owner}/{repo}/transfer"],
        update: ["PATCH /repos/{owner}/{repo}"],
        updateBranchProtection: [
            "PUT /repos/{owner}/{repo}/branches/{branch}/protection",
        ],
        updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],
        updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"],
        updateInvitation: [
            "PATCH /repos/{owner}/{repo}/invitations/{invitation_id}",
        ],
        updatePullRequestReviewProtection: [
            "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
        ],
        updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"],
        updateReleaseAsset: [
            "PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}",
        ],
        updateStatusCheckPotection: [
            "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
            {},
            { renamed: ["repos", "updateStatusCheckProtection"] },
        ],
        updateStatusCheckProtection: [
            "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
        ],
        updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],
        updateWebhookConfigForRepo: [
            "PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config",
        ],
        uploadReleaseAsset: [
            "POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",
            { baseUrl: "https://uploads.github.com" },
        ],
    },
    search: {
        code: ["GET /search/code"],
        commits: ["GET /search/commits"],
        issuesAndPullRequests: ["GET /search/issues"],
        labels: ["GET /search/labels"],
        repos: ["GET /search/repositories"],
        topics: ["GET /search/topics", { mediaType: { previews: ["mercy"] } }],
        users: ["GET /search/users"],
    },
    secretScanning: {
        getAlert: [
            "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}",
        ],
        listAlertsForOrg: ["GET /orgs/{org}/secret-scanning/alerts"],
        listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"],
        updateAlert: [
            "PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}",
        ],
    },
    teams: {
        addOrUpdateMembershipForUserInOrg: [
            "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}",
        ],
        addOrUpdateProjectPermissionsInOrg: [
            "PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}",
        ],
        addOrUpdateRepoPermissionsInOrg: [
            "PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
        ],
        checkPermissionsForProjectInOrg: [
            "GET /orgs/{org}/teams/{team_slug}/projects/{project_id}",
        ],
        checkPermissionsForRepoInOrg: [
            "GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
        ],
        create: ["POST /orgs/{org}/teams"],
        createDiscussionCommentInOrg: [
            "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
        ],
        createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"],
        deleteDiscussionCommentInOrg: [
            "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
        ],
        deleteDiscussionInOrg: [
            "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
        ],
        deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
        getByName: ["GET /orgs/{org}/teams/{team_slug}"],
        getDiscussionCommentInOrg: [
            "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
        ],
        getDiscussionInOrg: [
            "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
        ],
        getMembershipForUserInOrg: [
            "GET /orgs/{org}/teams/{team_slug}/memberships/{username}",
        ],
        list: ["GET /orgs/{org}/teams"],
        listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
        listDiscussionCommentsInOrg: [
            "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
        ],
        listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
        listForAuthenticatedUser: ["GET /user/teams"],
        listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
        listPendingInvitationsInOrg: [
            "GET /orgs/{org}/teams/{team_slug}/invitations",
        ],
        listProjectsInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects"],
        listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
        removeMembershipForUserInOrg: [
            "DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}",
        ],
        removeProjectInOrg: [
            "DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}",
        ],
        removeRepoInOrg: [
            "DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
        ],
        updateDiscussionCommentInOrg: [
            "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
        ],
        updateDiscussionInOrg: [
            "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
        ],
        updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"],
    },
    users: {
        addEmailForAuthenticated: [
            "POST /user/emails",
            {},
            { renamed: ["users", "addEmailForAuthenticatedUser"] },
        ],
        addEmailForAuthenticatedUser: ["POST /user/emails"],
        block: ["PUT /user/blocks/{username}"],
        checkBlocked: ["GET /user/blocks/{username}"],
        checkFollowingForUser: ["GET /users/{username}/following/{target_user}"],
        checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"],
        createGpgKeyForAuthenticated: [
            "POST /user/gpg_keys",
            {},
            { renamed: ["users", "createGpgKeyForAuthenticatedUser"] },
        ],
        createGpgKeyForAuthenticatedUser: ["POST /user/gpg_keys"],
        createPublicSshKeyForAuthenticated: [
            "POST /user/keys",
            {},
            { renamed: ["users", "createPublicSshKeyForAuthenticatedUser"] },
        ],
        createPublicSshKeyForAuthenticatedUser: ["POST /user/keys"],
        deleteEmailForAuthenticated: [
            "DELETE /user/emails",
            {},
            { renamed: ["users", "deleteEmailForAuthenticatedUser"] },
        ],
        deleteEmailForAuthenticatedUser: ["DELETE /user/emails"],
        deleteGpgKeyForAuthenticated: [
            "DELETE /user/gpg_keys/{gpg_key_id}",
            {},
            { renamed: ["users", "deleteGpgKeyForAuthenticatedUser"] },
        ],
        deleteGpgKeyForAuthenticatedUser: ["DELETE /user/gpg_keys/{gpg_key_id}"],
        deletePublicSshKeyForAuthenticated: [
            "DELETE /user/keys/{key_id}",
            {},
            { renamed: ["users", "deletePublicSshKeyForAuthenticatedUser"] },
        ],
        deletePublicSshKeyForAuthenticatedUser: ["DELETE /user/keys/{key_id}"],
        follow: ["PUT /user/following/{username}"],
        getAuthenticated: ["GET /user"],
        getByUsername: ["GET /users/{username}"],
        getContextForUser: ["GET /users/{username}/hovercard"],
        getGpgKeyForAuthenticated: [
            "GET /user/gpg_keys/{gpg_key_id}",
            {},
            { renamed: ["users", "getGpgKeyForAuthenticatedUser"] },
        ],
        getGpgKeyForAuthenticatedUser: ["GET /user/gpg_keys/{gpg_key_id}"],
        getPublicSshKeyForAuthenticated: [
            "GET /user/keys/{key_id}",
            {},
            { renamed: ["users", "getPublicSshKeyForAuthenticatedUser"] },
        ],
        getPublicSshKeyForAuthenticatedUser: ["GET /user/keys/{key_id}"],
        list: ["GET /users"],
        listBlockedByAuthenticated: [
            "GET /user/blocks",
            {},
            { renamed: ["users", "listBlockedByAuthenticatedUser"] },
        ],
        listBlockedByAuthenticatedUser: ["GET /user/blocks"],
        listEmailsForAuthenticated: [
            "GET /user/emails",
            {},
            { renamed: ["users", "listEmailsForAuthenticatedUser"] },
        ],
        listEmailsForAuthenticatedUser: ["GET /user/emails"],
        listFollowedByAuthenticated: [
            "GET /user/following",
            {},
            { renamed: ["users", "listFollowedByAuthenticatedUser"] },
        ],
        listFollowedByAuthenticatedUser: ["GET /user/following"],
        listFollowersForAuthenticatedUser: ["GET /user/followers"],
        listFollowersForUser: ["GET /users/{username}/followers"],
        listFollowingForUser: ["GET /users/{username}/following"],
        listGpgKeysForAuthenticated: [
            "GET /user/gpg_keys",
            {},
            { renamed: ["users", "listGpgKeysForAuthenticatedUser"] },
        ],
        listGpgKeysForAuthenticatedUser: ["GET /user/gpg_keys"],
        listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
        listPublicEmailsForAuthenticated: [
            "GET /user/public_emails",
            {},
            { renamed: ["users", "listPublicEmailsForAuthenticatedUser"] },
        ],
        listPublicEmailsForAuthenticatedUser: ["GET /user/public_emails"],
        listPublicKeysForUser: ["GET /users/{username}/keys"],
        listPublicSshKeysForAuthenticated: [
            "GET /user/keys",
            {},
            { renamed: ["users", "listPublicSshKeysForAuthenticatedUser"] },
        ],
        listPublicSshKeysForAuthenticatedUser: ["GET /user/keys"],
        setPrimaryEmailVisibilityForAuthenticated: [
            "PATCH /user/email/visibility",
            {},
            { renamed: ["users", "setPrimaryEmailVisibilityForAuthenticatedUser"] },
        ],
        setPrimaryEmailVisibilityForAuthenticatedUser: [
            "PATCH /user/email/visibility",
        ],
        unblock: ["DELETE /user/blocks/{username}"],
        unfollow: ["DELETE /user/following/{username}"],
        updateAuthenticated: ["PATCH /user"],
    },
};

const VERSION = "5.13.0";

function endpointsToMethods(octokit, endpointsMap) {
    const newMethods = {};
    for (const [scope, endpoints] of Object.entries(endpointsMap)) {
        for (const [methodName, endpoint] of Object.entries(endpoints)) {
            const [route, defaults, decorations] = endpoint;
            const [method, url] = route.split(/ /);
            const endpointDefaults = Object.assign({ method, url }, defaults);
            if (!newMethods[scope]) {
                newMethods[scope] = {};
            }
            const scopeMethods = newMethods[scope];
            if (decorations) {
                scopeMethods[methodName] = decorate(octokit, scope, methodName, endpointDefaults, decorations);
                continue;
            }
            scopeMethods[methodName] = octokit.request.defaults(endpointDefaults);
        }
    }
    return newMethods;
}
function decorate(octokit, scope, methodName, defaults, decorations) {
    const requestWithDefaults = octokit.request.defaults(defaults);
    /* istanbul ignore next */
    function withDecorations(...args) {
        // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
        let options = requestWithDefaults.endpoint.merge(...args);
        // There are currently no other decorations than `.mapToData`
        if (decorations.mapToData) {
            options = Object.assign({}, options, {
                data: options[decorations.mapToData],
                [decorations.mapToData]: undefined,
            });
            return requestWithDefaults(options);
        }
        if (decorations.renamed) {
            const [newScope, newMethodName] = decorations.renamed;
            octokit.log.warn(`octokit.${scope}.${methodName}() has been renamed to octokit.${newScope}.${newMethodName}()`);
        }
        if (decorations.deprecated) {
            octokit.log.warn(decorations.deprecated);
        }
        if (decorations.renamedParameters) {
            // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
            const options = requestWithDefaults.endpoint.merge(...args);
            for (const [name, alias] of Object.entries(decorations.renamedParameters)) {
                if (name in options) {
                    octokit.log.warn(`"${name}" parameter is deprecated for "octokit.${scope}.${methodName}()". Use "${alias}" instead`);
                    if (!(alias in options)) {
                        options[alias] = options[name];
                    }
                    delete options[name];
                }
            }
            return requestWithDefaults(options);
        }
        // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
        return requestWithDefaults(...args);
    }
    return Object.assign(withDecorations, requestWithDefaults);
}

function restEndpointMethods(octokit) {
    const api = endpointsToMethods(octokit, Endpoints);
    return {
        rest: api,
    };
}
restEndpointMethods.VERSION = VERSION;
function legacyRestEndpointMethods(octokit) {
    const api = endpointsToMethods(octokit, Endpoints);
    return {
        ...api,
        rest: api,
    };
}
legacyRestEndpointMethods.VERSION = VERSION;




/***/ }),

/***/ 9780:
/*!**************************************************************!*\
  !*** ./node_modules/@octokit/plugin-retry/dist-web/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERSION": () => (/* binding */ VERSION),
/* harmony export */   "retry": () => (/* binding */ retry)
/* harmony export */ });
/* harmony import */ var C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var bottleneck_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bottleneck/light */ 9618);
/* harmony import */ var bottleneck_light__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bottleneck_light__WEBPACK_IMPORTED_MODULE_1__);

 // @ts-ignore

function errorRequest(_x, _x2, _x3, _x4) {
  return _errorRequest.apply(this, arguments);
} // @ts-ignore
// @ts-ignore


function _errorRequest() {
  _errorRequest = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (octokit, state, error, options) {
    if (!error.request || !error.request.request) {
      // address https://github.com/octokit/plugin-retry.js/issues/8
      throw error;
    } // retry all >= 400 && not doNotRetry


    if (error.status >= 400 && !state.doNotRetry.includes(error.status)) {
      const retries = options.request.retries != null ? options.request.retries : state.retries;
      const retryAfter = Math.pow((options.request.retryCount || 0) + 1, 2);
      throw octokit.retry.retryRequest(error, retries, retryAfter);
    } // Maybe eventually there will be more cases here


    throw error;
  });
  return _errorRequest.apply(this, arguments);
}

function wrapRequest(_x5, _x6, _x7) {
  return _wrapRequest.apply(this, arguments);
}

function _wrapRequest() {
  _wrapRequest = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (state, request, options) {
    const limiter = new (bottleneck_light__WEBPACK_IMPORTED_MODULE_1___default())(); // @ts-ignore

    limiter.on("failed", function (error, info) {
      const maxRetries = ~~error.request.request.retries;
      const after = ~~error.request.request.retryAfter;
      options.request.retryCount = info.retryCount + 1;

      if (maxRetries > info.retryCount) {
        // Returning a number instructs the limiter to retry
        // the request after that number of milliseconds have passed
        return after * state.retryAfterBaseValue;
      }
    });
    return limiter.schedule(request, options);
  });
  return _wrapRequest.apply(this, arguments);
}

const VERSION = "3.0.9";

function retry(octokit, octokitOptions) {
  const state = Object.assign({
    enabled: true,
    retryAfterBaseValue: 1000,
    doNotRetry: [400, 401, 403, 404, 422],
    retries: 3
  }, octokitOptions.retry);

  if (state.enabled) {
    octokit.hook.error("request", errorRequest.bind(null, octokit, state));
    octokit.hook.wrap("request", wrapRequest.bind(null, state));
  }

  return {
    retry: {
      retryRequest: (error, retries, retryAfter) => {
        error.request.request = Object.assign({}, error.request.request, {
          retries: retries,
          retryAfter: retryAfter
        });
        return error;
      }
    }
  };
}

retry.VERSION = VERSION;


/***/ }),

/***/ 1847:
/*!***************************************************************!*\
  !*** ./node_modules/@octokit/request-error/dist-web/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestError": () => (/* binding */ RequestError)
/* harmony export */ });
/* harmony import */ var deprecation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deprecation */ 2460);
/* harmony import */ var once__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! once */ 5185);
/* harmony import */ var once__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(once__WEBPACK_IMPORTED_MODULE_0__);



const logOnceCode = once__WEBPACK_IMPORTED_MODULE_0___default()((deprecation) => console.warn(deprecation));
const logOnceHeaders = once__WEBPACK_IMPORTED_MODULE_0___default()((deprecation) => console.warn(deprecation));
/**
 * Error with extra properties to help with debugging
 */
class RequestError extends Error {
    constructor(message, statusCode, options) {
        super(message);
        // Maintains proper stack trace (only available on V8)
        /* istanbul ignore next */
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        this.name = "HttpError";
        this.status = statusCode;
        let headers;
        if ("headers" in options && typeof options.headers !== "undefined") {
            headers = options.headers;
        }
        if ("response" in options) {
            this.response = options.response;
            headers = options.response.headers;
        }
        // redact request credentials without mutating original request options
        const requestCopy = Object.assign({}, options.request);
        if (options.request.headers.authorization) {
            requestCopy.headers = Object.assign({}, options.request.headers, {
                authorization: options.request.headers.authorization.replace(/ .*$/, " [REDACTED]"),
            });
        }
        requestCopy.url = requestCopy.url
            // client_id & client_secret can be passed as URL query parameters to increase rate limit
            // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
            .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]")
            // OAuth tokens can be passed as URL query parameters, although it is not recommended
            // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
            .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
        this.request = requestCopy;
        // deprecations
        Object.defineProperty(this, "code", {
            get() {
                logOnceCode(new deprecation__WEBPACK_IMPORTED_MODULE_1__.Deprecation("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
                return statusCode;
            },
        });
        Object.defineProperty(this, "headers", {
            get() {
                logOnceHeaders(new deprecation__WEBPACK_IMPORTED_MODULE_1__.Deprecation("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`."));
                return headers || {};
            },
        });
    }
}




/***/ }),

/***/ 7544:
/*!*********************************************************!*\
  !*** ./node_modules/@octokit/request/dist-web/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "request": () => (/* binding */ request)
/* harmony export */ });
/* harmony import */ var C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _octokit_endpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @octokit/endpoint */ 9047);
/* harmony import */ var universal_user_agent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal-user-agent */ 4282);
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-plain-object */ 2399);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-fetch */ 3677);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _octokit_request_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @octokit/request-error */ 1847);






const VERSION = "5.6.3";

function getBufferResponse(response) {
  return response.arrayBuffer();
}

function fetchWrapper(requestOptions) {
  const log = requestOptions.request && requestOptions.request.log ? requestOptions.request.log : console;

  if ((0,is_plain_object__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(requestOptions.body) || Array.isArray(requestOptions.body)) {
    requestOptions.body = JSON.stringify(requestOptions.body);
  }

  let headers = {};
  let status;
  let url;
  const fetch = requestOptions.request && requestOptions.request.fetch || (node_fetch__WEBPACK_IMPORTED_MODULE_2___default());
  return fetch(requestOptions.url, Object.assign({
    method: requestOptions.method,
    body: requestOptions.body,
    headers: requestOptions.headers,
    redirect: requestOptions.redirect
  }, // `requestOptions.request.agent` type is incompatible
  // see https://github.com/octokit/types.ts/pull/264
  requestOptions.request)).then( /*#__PURE__*/function () {
    var _ref = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
      url = response.url;
      status = response.status;

      for (const keyAndValue of response.headers) {
        headers[keyAndValue[0]] = keyAndValue[1];
      }

      if ("deprecation" in headers) {
        const matches = headers.link && headers.link.match(/<([^>]+)>; rel="deprecation"/);
        const deprecationLink = matches && matches.pop();
        log.warn(`[@octokit/request] "${requestOptions.method} ${requestOptions.url}" is deprecated. It is scheduled to be removed on ${headers.sunset}${deprecationLink ? `. See ${deprecationLink}` : ""}`);
      }

      if (status === 204 || status === 205) {
        return;
      } // GitHub API returns 200 for HEAD requests


      if (requestOptions.method === "HEAD") {
        if (status < 400) {
          return;
        }

        throw new _octokit_request_error__WEBPACK_IMPORTED_MODULE_3__.RequestError(response.statusText, status, {
          response: {
            url,
            status,
            headers,
            data: undefined
          },
          request: requestOptions
        });
      }

      if (status === 304) {
        throw new _octokit_request_error__WEBPACK_IMPORTED_MODULE_3__.RequestError("Not modified", status, {
          response: {
            url,
            status,
            headers,
            data: yield getResponseData(response)
          },
          request: requestOptions
        });
      }

      if (status >= 400) {
        const data = yield getResponseData(response);
        const error = new _octokit_request_error__WEBPACK_IMPORTED_MODULE_3__.RequestError(toErrorMessage(data), status, {
          response: {
            url,
            status,
            headers,
            data
          },
          request: requestOptions
        });
        throw error;
      }

      return getResponseData(response);
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }()).then(data => {
    return {
      status,
      url,
      headers,
      data
    };
  }).catch(error => {
    if (error instanceof _octokit_request_error__WEBPACK_IMPORTED_MODULE_3__.RequestError) throw error;
    throw new _octokit_request_error__WEBPACK_IMPORTED_MODULE_3__.RequestError(error.message, 500, {
      request: requestOptions
    });
  });
}

function getResponseData(_x2) {
  return _getResponseData.apply(this, arguments);
}

function _getResponseData() {
  _getResponseData = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
    const contentType = response.headers.get("content-type");

    if (/application\/json/.test(contentType)) {
      return response.json();
    }

    if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
      return response.text();
    }

    return getBufferResponse(response);
  });
  return _getResponseData.apply(this, arguments);
}

function toErrorMessage(data) {
  if (typeof data === "string") return data; // istanbul ignore else - just in case

  if ("message" in data) {
    if (Array.isArray(data.errors)) {
      return `${data.message}: ${data.errors.map(JSON.stringify).join(", ")}`;
    }

    return data.message;
  } // istanbul ignore next - just in case


  return `Unknown error: ${JSON.stringify(data)}`;
}

function withDefaults(oldEndpoint, newDefaults) {
  const endpoint = oldEndpoint.defaults(newDefaults);

  const newApi = function (route, parameters) {
    const endpointOptions = endpoint.merge(route, parameters);

    if (!endpointOptions.request || !endpointOptions.request.hook) {
      return fetchWrapper(endpoint.parse(endpointOptions));
    }

    const request = (route, parameters) => {
      return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)));
    };

    Object.assign(request, {
      endpoint,
      defaults: withDefaults.bind(null, endpoint)
    });
    return endpointOptions.request.hook(request, endpointOptions);
  };

  return Object.assign(newApi, {
    endpoint,
    defaults: withDefaults.bind(null, endpoint)
  });
}

const request = withDefaults(_octokit_endpoint__WEBPACK_IMPORTED_MODULE_4__.endpoint, {
  headers: {
    "user-agent": `octokit-request.js/${VERSION} ${(0,universal_user_agent__WEBPACK_IMPORTED_MODULE_5__.getUserAgent)()}`
  }
});


/***/ }),

/***/ 8871:
/*!******************************************************************!*\
  !*** ./node_modules/@octokit/webhooks-methods/dist-web/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sign": () => (/* binding */ sign),
/* harmony export */   "verify": () => (/* binding */ verify)
/* harmony export */ });
/* harmony import */ var C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);

const enc = new TextEncoder();

function sign(_x, _x2) {
  return _sign.apply(this, arguments);
}

function _sign() {
  _sign = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (secret, data) {
    const signature = yield crypto.subtle.sign("HMAC", yield importKey(secret), enc.encode(data));
    return UInt8ArrayToHex(signature);
  });
  return _sign.apply(this, arguments);
}

function verify(_x3, _x4, _x5) {
  return _verify.apply(this, arguments);
}

function _verify() {
  _verify = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (secret, data, signature) {
    return yield crypto.subtle.verify("HMAC", yield importKey(secret), hexToUInt8Array(signature), enc.encode(data));
  });
  return _verify.apply(this, arguments);
}

function hexToUInt8Array(string) {
  // convert string to pairs of 2 characters
  const pairs = string.match(/[\dA-F]{2}/gi); // convert the octets to integers

  const integers = pairs.map(function (s) {
    return parseInt(s, 16);
  });
  return new Uint8Array(integers);
}

function UInt8ArrayToHex(signature) {
  return Array.prototype.map.call(new Uint8Array(signature), x => x.toString(16).padStart(2, "0")).join("");
}

function importKey(_x6) {
  return _importKey.apply(this, arguments);
}

function _importKey() {
  _importKey = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (secret) {
    return crypto.subtle.importKey("raw", // raw format of the key - should be Uint8Array
    enc.encode(secret), {
      // algorithm details
      name: "HMAC",
      hash: {
        name: "SHA-256"
      }
    }, false, // export = false
    ["sign", "verify"] // what this key can do
    );
  });
  return _importKey.apply(this, arguments);
}



/***/ }),

/***/ 2313:
/*!**********************************************************!*\
  !*** ./node_modules/@octokit/webhooks/dist-web/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Webhooks": () => (/* binding */ Webhooks),
/* harmony export */   "createEventHandler": () => (/* binding */ createEventHandler),
/* harmony export */   "createNodeMiddleware": () => (/* binding */ createNodeMiddleware),
/* harmony export */   "emitterEventNames": () => (/* binding */ emitterEventNames)
/* harmony export */ });
/* harmony import */ var C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var aggregate_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aggregate-error */ 2615);
/* harmony import */ var aggregate_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aggregate_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _octokit_webhooks_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @octokit/webhooks-methods */ 8871);




const createLogger = logger => ({
  debug: () => {},
  info: () => {},
  warn: console.warn.bind(console),
  error: console.error.bind(console),
  ...logger
}); // THIS FILE IS GENERATED - DO NOT EDIT DIRECTLY
// make edits in scripts/generate-types.ts


const emitterEventNames = ["branch_protection_rule", "branch_protection_rule.created", "branch_protection_rule.deleted", "branch_protection_rule.edited", "check_run", "check_run.completed", "check_run.created", "check_run.requested_action", "check_run.rerequested", "check_suite", "check_suite.completed", "check_suite.requested", "check_suite.rerequested", "code_scanning_alert", "code_scanning_alert.appeared_in_branch", "code_scanning_alert.closed_by_user", "code_scanning_alert.created", "code_scanning_alert.fixed", "code_scanning_alert.reopened", "code_scanning_alert.reopened_by_user", "commit_comment", "commit_comment.created", "create", "delete", "deploy_key", "deploy_key.created", "deploy_key.deleted", "deployment", "deployment.created", "deployment_status", "deployment_status.created", "discussion", "discussion.answered", "discussion.category_changed", "discussion.created", "discussion.deleted", "discussion.edited", "discussion.labeled", "discussion.locked", "discussion.pinned", "discussion.transferred", "discussion.unanswered", "discussion.unlabeled", "discussion.unlocked", "discussion.unpinned", "discussion_comment", "discussion_comment.created", "discussion_comment.deleted", "discussion_comment.edited", "fork", "github_app_authorization", "github_app_authorization.revoked", "gollum", "installation", "installation.created", "installation.deleted", "installation.new_permissions_accepted", "installation.suspend", "installation.unsuspend", "installation_repositories", "installation_repositories.added", "installation_repositories.removed", "issue_comment", "issue_comment.created", "issue_comment.deleted", "issue_comment.edited", "issues", "issues.assigned", "issues.closed", "issues.deleted", "issues.demilestoned", "issues.edited", "issues.labeled", "issues.locked", "issues.milestoned", "issues.opened", "issues.pinned", "issues.reopened", "issues.transferred", "issues.unassigned", "issues.unlabeled", "issues.unlocked", "issues.unpinned", "label", "label.created", "label.deleted", "label.edited", "marketplace_purchase", "marketplace_purchase.cancelled", "marketplace_purchase.changed", "marketplace_purchase.pending_change", "marketplace_purchase.pending_change_cancelled", "marketplace_purchase.purchased", "member", "member.added", "member.edited", "member.removed", "membership", "membership.added", "membership.removed", "meta", "meta.deleted", "milestone", "milestone.closed", "milestone.created", "milestone.deleted", "milestone.edited", "milestone.opened", "org_block", "org_block.blocked", "org_block.unblocked", "organization", "organization.deleted", "organization.member_added", "organization.member_invited", "organization.member_removed", "organization.renamed", "package", "package.published", "package.updated", "page_build", "ping", "project", "project.closed", "project.created", "project.deleted", "project.edited", "project.reopened", "project_card", "project_card.converted", "project_card.created", "project_card.deleted", "project_card.edited", "project_card.moved", "project_column", "project_column.created", "project_column.deleted", "project_column.edited", "project_column.moved", "public", "pull_request", "pull_request.assigned", "pull_request.auto_merge_disabled", "pull_request.auto_merge_enabled", "pull_request.closed", "pull_request.converted_to_draft", "pull_request.edited", "pull_request.labeled", "pull_request.locked", "pull_request.opened", "pull_request.ready_for_review", "pull_request.reopened", "pull_request.review_request_removed", "pull_request.review_requested", "pull_request.synchronize", "pull_request.unassigned", "pull_request.unlabeled", "pull_request.unlocked", "pull_request_review", "pull_request_review.dismissed", "pull_request_review.edited", "pull_request_review.submitted", "pull_request_review_comment", "pull_request_review_comment.created", "pull_request_review_comment.deleted", "pull_request_review_comment.edited", "pull_request_review_thread", "pull_request_review_thread.resolved", "pull_request_review_thread.unresolved", "push", "release", "release.created", "release.deleted", "release.edited", "release.prereleased", "release.published", "release.released", "release.unpublished", "repository", "repository.archived", "repository.created", "repository.deleted", "repository.edited", "repository.privatized", "repository.publicized", "repository.renamed", "repository.transferred", "repository.unarchived", "repository_dispatch", "repository_import", "repository_vulnerability_alert", "repository_vulnerability_alert.create", "repository_vulnerability_alert.dismiss", "repository_vulnerability_alert.reopen", "repository_vulnerability_alert.resolve", "secret_scanning_alert", "secret_scanning_alert.created", "secret_scanning_alert.reopened", "secret_scanning_alert.resolved", "security_advisory", "security_advisory.performed", "security_advisory.published", "security_advisory.updated", "security_advisory.withdrawn", "sponsorship", "sponsorship.cancelled", "sponsorship.created", "sponsorship.edited", "sponsorship.pending_cancellation", "sponsorship.pending_tier_change", "sponsorship.tier_changed", "star", "star.created", "star.deleted", "status", "team", "team.added_to_repository", "team.created", "team.deleted", "team.edited", "team.removed_from_repository", "team_add", "watch", "watch.started", "workflow_dispatch", "workflow_job", "workflow_job.completed", "workflow_job.in_progress", "workflow_job.queued", "workflow_run", "workflow_run.completed", "workflow_run.requested"];

function handleEventHandlers(state, webhookName, handler) {
  if (!state.hooks[webhookName]) {
    state.hooks[webhookName] = [];
  }

  state.hooks[webhookName].push(handler);
}

function receiverOn(state, webhookNameOrNames, handler) {
  if (Array.isArray(webhookNameOrNames)) {
    webhookNameOrNames.forEach(webhookName => receiverOn(state, webhookName, handler));
    return;
  }

  if (["*", "error"].includes(webhookNameOrNames)) {
    const webhookName = webhookNameOrNames === "*" ? "any" : webhookNameOrNames;
    const message = `Using the "${webhookNameOrNames}" event with the regular Webhooks.on() function is not supported. Please use the Webhooks.on${webhookName.charAt(0).toUpperCase() + webhookName.slice(1)}() method instead`;
    throw new Error(message);
  }

  if (!emitterEventNames.includes(webhookNameOrNames)) {
    state.log.warn(`"${webhookNameOrNames}" is not a known webhook name (https://developer.github.com/v3/activity/events/types/)`);
  }

  handleEventHandlers(state, webhookNameOrNames, handler);
}

function receiverOnAny(state, handler) {
  handleEventHandlers(state, "*", handler);
}

function receiverOnError(state, handler) {
  handleEventHandlers(state, "error", handler);
} // Errors thrown or rejected Promises in "error" event handlers are not handled
// as they are in the webhook event handlers. If errors occur, we log a
// "Fatal: Error occurred" message to stdout


function wrapErrorHandler(handler, error) {
  let returnValue;

  try {
    returnValue = handler(error);
  } catch (error) {
    console.log('FATAL: Error occurred in "error" event handler');
    console.log(error);
  }

  if (returnValue && returnValue.catch) {
    returnValue.catch(error => {
      console.log('FATAL: Error occurred in "error" event handler');
      console.log(error);
    });
  }
} // @ts-ignore to address #245


function getHooks(state, eventPayloadAction, eventName) {
  const hooks = [state.hooks[eventName], state.hooks["*"]];

  if (eventPayloadAction) {
    hooks.unshift(state.hooks[`${eventName}.${eventPayloadAction}`]);
  }

  return [].concat(...hooks.filter(Boolean));
} // main handler function


function receiverHandle(state, event) {
  const errorHandlers = state.hooks.error || [];

  if (event instanceof Error) {
    const error = Object.assign(new (aggregate_error__WEBPACK_IMPORTED_MODULE_1___default())([event]), {
      event,
      errors: [event]
    });
    errorHandlers.forEach(handler => wrapErrorHandler(handler, error));
    return Promise.reject(error);
  }

  if (!event || !event.name) {
    throw new (aggregate_error__WEBPACK_IMPORTED_MODULE_1___default())(["Event name not passed"]);
  }

  if (!event.payload) {
    throw new (aggregate_error__WEBPACK_IMPORTED_MODULE_1___default())(["Event payload not passed"]);
  } // flatten arrays of event listeners and remove undefined values


  const hooks = getHooks(state, "action" in event.payload ? event.payload.action : null, event.name);

  if (hooks.length === 0) {
    return Promise.resolve();
  }

  const errors = [];
  const promises = hooks.map(handler => {
    let promise = Promise.resolve(event);

    if (state.transform) {
      promise = promise.then(state.transform);
    }

    return promise.then(event => {
      return handler(event);
    }).catch(error => errors.push(Object.assign(error, {
      event
    })));
  });
  return Promise.all(promises).then(() => {
    if (errors.length === 0) {
      return;
    }

    const error = new (aggregate_error__WEBPACK_IMPORTED_MODULE_1___default())(errors);
    Object.assign(error, {
      event,
      errors
    });
    errorHandlers.forEach(handler => wrapErrorHandler(handler, error));
    throw error;
  });
}

function removeListener(state, webhookNameOrNames, handler) {
  if (Array.isArray(webhookNameOrNames)) {
    webhookNameOrNames.forEach(webhookName => removeListener(state, webhookName, handler));
    return;
  }

  if (!state.hooks[webhookNameOrNames]) {
    return;
  } // remove last hook that has been added, that way
  // it behaves the same as removeListener


  for (let i = state.hooks[webhookNameOrNames].length - 1; i >= 0; i--) {
    if (state.hooks[webhookNameOrNames][i] === handler) {
      state.hooks[webhookNameOrNames].splice(i, 1);
      return;
    }
  }
}

function createEventHandler(options) {
  const state = {
    hooks: {},
    log: createLogger(options && options.log)
  };

  if (options && options.transform) {
    state.transform = options.transform;
  }

  return {
    on: receiverOn.bind(null, state),
    onAny: receiverOnAny.bind(null, state),
    onError: receiverOnError.bind(null, state),
    removeListener: removeListener.bind(null, state),
    receive: receiverHandle.bind(null, state)
  };
}
/**
 * GitHub sends its JSON with an indentation of 2 spaces and a line break at the end
 */


function toNormalizedJsonString(payload) {
  const payloadString = JSON.stringify(payload);
  return payloadString.replace(/[^\\]\\u[\da-f]{4}/g, s => {
    return s.substr(0, 3) + s.substr(3).toUpperCase();
  });
}

function sign(_x, _x2) {
  return _sign.apply(this, arguments);
}

function _sign() {
  _sign = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (secret, payload) {
    return (0,_octokit_webhooks_methods__WEBPACK_IMPORTED_MODULE_2__.sign)(secret, typeof payload === "string" ? payload : toNormalizedJsonString(payload));
  });
  return _sign.apply(this, arguments);
}

function verify(_x3, _x4, _x5) {
  return _verify.apply(this, arguments);
}

function _verify() {
  _verify = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (secret, payload, signature) {
    return (0,_octokit_webhooks_methods__WEBPACK_IMPORTED_MODULE_2__.verify)(secret, typeof payload === "string" ? payload : toNormalizedJsonString(payload), signature);
  });
  return _verify.apply(this, arguments);
}

function verifyAndReceive(_x6, _x7) {
  return _verifyAndReceive.apply(this, arguments);
}

function _verifyAndReceive() {
  _verifyAndReceive = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (state, event) {
    // verify will validate that the secret is not undefined
    const matchesSignature = yield (0,_octokit_webhooks_methods__WEBPACK_IMPORTED_MODULE_2__.verify)(state.secret, typeof event.payload === "object" ? toNormalizedJsonString(event.payload) : event.payload, event.signature);

    if (!matchesSignature) {
      const error = new Error("[@octokit/webhooks] signature does not match event payload and secret");
      return state.eventHandler.receive(Object.assign(error, {
        event,
        status: 400
      }));
    }

    return state.eventHandler.receive({
      id: event.id,
      name: event.name,
      payload: typeof event.payload === "string" ? JSON.parse(event.payload) : event.payload
    });
  });
  return _verifyAndReceive.apply(this, arguments);
}

const WEBHOOK_HEADERS = ["x-github-event", "x-hub-signature-256", "x-github-delivery"]; // https://docs.github.com/en/developers/webhooks-and-events/webhook-events-and-payloads#delivery-headers

function getMissingHeaders(request) {
  return WEBHOOK_HEADERS.filter(header => !(header in request.headers));
} // @ts-ignore to address #245


function getPayload(request) {
  // If request.body already exists we can stop here
  // See https://github.com/octokit/webhooks.js/pull/23
  if (request.body) return Promise.resolve(request.body);
  return new Promise((resolve, reject) => {
    let data = "";
    request.setEncoding("utf8"); // istanbul ignore next

    request.on("error", error => reject(new (aggregate_error__WEBPACK_IMPORTED_MODULE_1___default())([error])));
    request.on("data", chunk => data += chunk);
    request.on("end", () => {
      try {
        resolve(JSON.parse(data));
      } catch (error) {
        error.message = "Invalid JSON";
        error.status = 400;
        reject(new (aggregate_error__WEBPACK_IMPORTED_MODULE_1___default())([error]));
      }
    });
  });
}

function middleware(_x8, _x9, _x10, _x11, _x12) {
  return _middleware.apply(this, arguments);
}

function _middleware() {
  _middleware = (0,C_project_data_projects_ionic_openForgeTestApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (webhooks, options, request, response, next) {
    let pathname;

    try {
      pathname = new URL(request.url, "http://localhost").pathname;
    } catch (error) {
      response.writeHead(422, {
        "content-type": "application/json"
      });
      response.end(JSON.stringify({
        error: `Request URL could not be parsed: ${request.url}`
      }));
      return;
    }

    const isUnknownRoute = request.method !== "POST" || pathname !== options.path;
    const isExpressMiddleware = typeof next === "function";

    if (isUnknownRoute) {
      if (isExpressMiddleware) {
        return next();
      } else {
        return options.onUnhandledRequest(request, response);
      }
    }

    const missingHeaders = getMissingHeaders(request).join(", ");

    if (missingHeaders) {
      response.writeHead(400, {
        "content-type": "application/json"
      });
      response.end(JSON.stringify({
        error: `Required headers missing: ${missingHeaders}`
      }));
      return;
    }

    const eventName = request.headers["x-github-event"];
    const signatureSHA256 = request.headers["x-hub-signature-256"];
    const id = request.headers["x-github-delivery"];
    options.log.debug(`${eventName} event received (id: ${id})`); // GitHub will abort the request if it does not receive a response within 10s
    // See https://github.com/octokit/webhooks.js/issues/185

    let didTimeout = false;
    const timeout = setTimeout(() => {
      didTimeout = true;
      response.statusCode = 202;
      response.end("still processing\n");
    }, 9000).unref();

    try {
      const payload = yield getPayload(request);
      yield webhooks.verifyAndReceive({
        id: id,
        name: eventName,
        payload: payload,
        signature: signatureSHA256
      });
      clearTimeout(timeout);
      if (didTimeout) return;
      response.end("ok\n");
    } catch (error) {
      clearTimeout(timeout);
      if (didTimeout) return;
      const statusCode = Array.from(error)[0].status;
      response.statusCode = typeof statusCode !== "undefined" ? statusCode : 500;
      response.end(String(error));
    }
  });
  return _middleware.apply(this, arguments);
}

function onUnhandledRequestDefault(request, response) {
  response.writeHead(404, {
    "content-type": "application/json"
  });
  response.end(JSON.stringify({
    error: `Unknown route: ${request.method} ${request.url}`
  }));
}

function createNodeMiddleware(webhooks, {
  path = "/api/github/webhooks",
  onUnhandledRequest = onUnhandledRequestDefault,
  log = createLogger()
} = {}) {
  return middleware.bind(null, webhooks, {
    path,
    onUnhandledRequest,
    log
  });
} // U holds the return value of `transform` function in Options


class Webhooks {
  constructor(options) {
    if (!options || !options.secret) {
      throw new Error("[@octokit/webhooks] options.secret required");
    }

    const state = {
      eventHandler: createEventHandler(options),
      secret: options.secret,
      hooks: {},
      log: createLogger(options.log)
    };
    this.sign = sign.bind(null, options.secret);
    this.verify = verify.bind(null, options.secret);
    this.on = state.eventHandler.on;
    this.onAny = state.eventHandler.onAny;
    this.onError = state.eventHandler.onError;
    this.removeListener = state.eventHandler.removeListener;
    this.receive = state.eventHandler.receive;
    this.verifyAndReceive = verifyAndReceive.bind(null, state);
  }

}



/***/ }),

/***/ 2615:
/*!***********************************************!*\
  !*** ./node_modules/aggregate-error/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const indentString = __webpack_require__(/*! indent-string */ 3156);
const cleanStack = __webpack_require__(/*! clean-stack */ 1334);

const cleanInternalStack = stack => stack.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, '');

class AggregateError extends Error {
	constructor(errors) {
		if (!Array.isArray(errors)) {
			throw new TypeError(`Expected input to be an Array, got ${typeof errors}`);
		}

		errors = [...errors].map(error => {
			if (error instanceof Error) {
				return error;
			}

			if (error !== null && typeof error === 'object') {
				// Handle plain error objects with message property and/or possibly other metadata
				return Object.assign(new Error(error.message), error);
			}

			return new Error(error);
		});

		let message = errors
			.map(error => {
				// The `stack` property is not standardized, so we can't assume it exists
				return typeof error.stack === 'string' ? cleanInternalStack(cleanStack(error.stack)) : String(error);
			})
			.join('\n');
		message = '\n' + indentString(message, 4);
		super(message);

		this.name = 'AggregateError';

		Object.defineProperty(this, '_errors', {value: errors});
	}

	* [Symbol.iterator]() {
		for (const error of this._errors) {
			yield error;
		}
	}
}

module.exports = AggregateError;


/***/ }),

/***/ 6197:
/*!*************************************************!*\
  !*** ./node_modules/before-after-hook/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var register = __webpack_require__(/*! ./lib/register */ 6442)
var addHook = __webpack_require__(/*! ./lib/add */ 5488)
var removeHook = __webpack_require__(/*! ./lib/remove */ 4731)

// bind with array of arguments: https://stackoverflow.com/a/21792913
var bind = Function.bind
var bindable = bind.bind(bind)

function bindApi (hook, state, name) {
  var removeHookRef = bindable(removeHook, null).apply(null, name ? [state, name] : [state])
  hook.api = { remove: removeHookRef }
  hook.remove = removeHookRef

  ;['before', 'error', 'after', 'wrap'].forEach(function (kind) {
    var args = name ? [state, kind, name] : [state, kind]
    hook[kind] = hook.api[kind] = bindable(addHook, null).apply(null, args)
  })
}

function HookSingular () {
  var singularHookName = 'h'
  var singularHookState = {
    registry: {}
  }
  var singularHook = register.bind(null, singularHookState, singularHookName)
  bindApi(singularHook, singularHookState, singularHookName)
  return singularHook
}

function HookCollection () {
  var state = {
    registry: {}
  }

  var hook = register.bind(null, state)
  bindApi(hook, state)

  return hook
}

var collectionHookDeprecationMessageDisplayed = false
function Hook () {
  if (!collectionHookDeprecationMessageDisplayed) {
    console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4')
    collectionHookDeprecationMessageDisplayed = true
  }
  return HookCollection()
}

Hook.Singular = HookSingular.bind()
Hook.Collection = HookCollection.bind()

module.exports = Hook
// expose constructors as a named property for TypeScript
module.exports.Hook = Hook
module.exports.Singular = Hook.Singular
module.exports.Collection = Hook.Collection


/***/ }),

/***/ 5488:
/*!***************************************************!*\
  !*** ./node_modules/before-after-hook/lib/add.js ***!
  \***************************************************/
/***/ ((module) => {

module.exports = addHook;

function addHook(state, kind, name, hook) {
  var orig = hook;
  if (!state.registry[name]) {
    state.registry[name] = [];
  }

  if (kind === "before") {
    hook = function (method, options) {
      return Promise.resolve()
        .then(orig.bind(null, options))
        .then(method.bind(null, options));
    };
  }

  if (kind === "after") {
    hook = function (method, options) {
      var result;
      return Promise.resolve()
        .then(method.bind(null, options))
        .then(function (result_) {
          result = result_;
          return orig(result, options);
        })
        .then(function () {
          return result;
        });
    };
  }

  if (kind === "error") {
    hook = function (method, options) {
      return Promise.resolve()
        .then(method.bind(null, options))
        .catch(function (error) {
          return orig(error, options);
        });
    };
  }

  state.registry[name].push({
    hook: hook,
    orig: orig,
  });
}


/***/ }),

/***/ 6442:
/*!********************************************************!*\
  !*** ./node_modules/before-after-hook/lib/register.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = register;

function register(state, name, method, options) {
  if (typeof method !== "function") {
    throw new Error("method for before hook must be a function");
  }

  if (!options) {
    options = {};
  }

  if (Array.isArray(name)) {
    return name.reverse().reduce(function (callback, name) {
      return register.bind(null, state, name, callback, options);
    }, method)();
  }

  return Promise.resolve().then(function () {
    if (!state.registry[name]) {
      return method(options);
    }

    return state.registry[name].reduce(function (method, registered) {
      return registered.hook.bind(null, method, options);
    }, method)();
  });
}


/***/ }),

/***/ 4731:
/*!******************************************************!*\
  !*** ./node_modules/before-after-hook/lib/remove.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = removeHook;

function removeHook(state, name, method) {
  if (!state.registry[name]) {
    return;
  }

  var index = state.registry[name]
    .map(function (registered) {
      return registered.orig;
    })
    .indexOf(method);

  if (index === -1) {
    return;
  }

  state.registry[name].splice(index, 1);
}


/***/ }),

/***/ 9618:
/*!******************************************!*\
  !*** ./node_modules/bottleneck/light.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 3752)["default"]);

/**
  * This file contains the Bottleneck library (MIT), compiled to ES2017, and without Clustering support.
  * https://github.com/SGrondin/bottleneck
  */
(function (global, factory) {
   true ? module.exports = factory() : 0;
})(this, function () {
  'use strict';

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getCjsExportFromNamespace(n) {
    return n && n['default'] || n;
  }

  var load = function (received, defaults, onto = {}) {
    var k, ref, v;

    for (k in defaults) {
      v = defaults[k];
      onto[k] = (ref = received[k]) != null ? ref : v;
    }

    return onto;
  };

  var overwrite = function (received, defaults, onto = {}) {
    var k, v;

    for (k in received) {
      v = received[k];

      if (defaults[k] !== void 0) {
        onto[k] = v;
      }
    }

    return onto;
  };

  var parser = {
    load: load,
    overwrite: overwrite
  };
  var DLList;
  DLList = class DLList {
    constructor(incr, decr) {
      this.incr = incr;
      this.decr = decr;
      this._first = null;
      this._last = null;
      this.length = 0;
    }

    push(value) {
      var node;
      this.length++;

      if (typeof this.incr === "function") {
        this.incr();
      }

      node = {
        value,
        prev: this._last,
        next: null
      };

      if (this._last != null) {
        this._last.next = node;
        this._last = node;
      } else {
        this._first = this._last = node;
      }

      return void 0;
    }

    shift() {
      var value;

      if (this._first == null) {
        return;
      } else {
        this.length--;

        if (typeof this.decr === "function") {
          this.decr();
        }
      }

      value = this._first.value;

      if ((this._first = this._first.next) != null) {
        this._first.prev = null;
      } else {
        this._last = null;
      }

      return value;
    }

    first() {
      if (this._first != null) {
        return this._first.value;
      }
    }

    getArray() {
      var node, ref, results;
      node = this._first;
      results = [];

      while (node != null) {
        results.push((ref = node, node = node.next, ref.value));
      }

      return results;
    }

    forEachShift(cb) {
      var node;
      node = this.shift();

      while (node != null) {
        cb(node), node = this.shift();
      }

      return void 0;
    }

    debug() {
      var node, ref, ref1, ref2, results;
      node = this._first;
      results = [];

      while (node != null) {
        results.push((ref = node, node = node.next, {
          value: ref.value,
          prev: (ref1 = ref.prev) != null ? ref1.value : void 0,
          next: (ref2 = ref.next) != null ? ref2.value : void 0
        }));
      }

      return results;
    }

  };
  var DLList_1 = DLList;
  var Events;
  Events = class Events {
    constructor(instance) {
      this.instance = instance;
      this._events = {};

      if (this.instance.on != null || this.instance.once != null || this.instance.removeAllListeners != null) {
        throw new Error("An Emitter already exists for this object");
      }

      this.instance.on = (name, cb) => {
        return this._addListener(name, "many", cb);
      };

      this.instance.once = (name, cb) => {
        return this._addListener(name, "once", cb);
      };

      this.instance.removeAllListeners = (name = null) => {
        if (name != null) {
          return delete this._events[name];
        } else {
          return this._events = {};
        }
      };
    }

    _addListener(name, status, cb) {
      var base;

      if ((base = this._events)[name] == null) {
        base[name] = [];
      }

      this._events[name].push({
        cb,
        status
      });

      return this.instance;
    }

    listenerCount(name) {
      if (this._events[name] != null) {
        return this._events[name].length;
      } else {
        return 0;
      }
    }

    trigger(name, ...args) {
      var _this = this;

      return _asyncToGenerator(function* () {
        var e, promises;

        try {
          if (name !== "debug") {
            _this.trigger("debug", `Event triggered: ${name}`, args);
          }

          if (_this._events[name] == null) {
            return;
          }

          _this._events[name] = _this._events[name].filter(function (listener) {
            return listener.status !== "none";
          });
          promises = _this._events[name].map( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator(function* (listener) {
              var e, returned;

              if (listener.status === "none") {
                return;
              }

              if (listener.status === "once") {
                listener.status = "none";
              }

              try {
                returned = typeof listener.cb === "function" ? listener.cb(...args) : void 0;

                if (typeof (returned != null ? returned.then : void 0) === "function") {
                  return yield returned;
                } else {
                  return returned;
                }
              } catch (error) {
                e = error;
                {
                  _this.trigger("error", e);
                }
                return null;
              }
            });

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
          return (yield Promise.all(promises)).find(function (x) {
            return x != null;
          });
        } catch (error) {
          e = error;
          {
            _this.trigger("error", e);
          }
          return null;
        }
      })();
    }

  };
  var Events_1 = Events;
  var DLList$1, Events$1, Queues;
  DLList$1 = DLList_1;
  Events$1 = Events_1;
  Queues = class Queues {
    constructor(num_priorities) {
      var i;
      this.Events = new Events$1(this);
      this._length = 0;

      this._lists = function () {
        var j, ref, results;
        results = [];

        for (i = j = 1, ref = num_priorities; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
          results.push(new DLList$1(() => {
            return this.incr();
          }, () => {
            return this.decr();
          }));
        }

        return results;
      }.call(this);
    }

    incr() {
      if (this._length++ === 0) {
        return this.Events.trigger("leftzero");
      }
    }

    decr() {
      if (--this._length === 0) {
        return this.Events.trigger("zero");
      }
    }

    push(job) {
      return this._lists[job.options.priority].push(job);
    }

    queued(priority) {
      if (priority != null) {
        return this._lists[priority].length;
      } else {
        return this._length;
      }
    }

    shiftAll(fn) {
      return this._lists.forEach(function (list) {
        return list.forEachShift(fn);
      });
    }

    getFirst(arr = this._lists) {
      var j, len, list;

      for (j = 0, len = arr.length; j < len; j++) {
        list = arr[j];

        if (list.length > 0) {
          return list;
        }
      }

      return [];
    }

    shiftLastFrom(priority) {
      return this.getFirst(this._lists.slice(priority).reverse()).shift();
    }

  };
  var Queues_1 = Queues;
  var BottleneckError;
  BottleneckError = class BottleneckError extends Error {};
  var BottleneckError_1 = BottleneckError;
  var BottleneckError$1, DEFAULT_PRIORITY, Job, NUM_PRIORITIES, parser$1;
  NUM_PRIORITIES = 10;
  DEFAULT_PRIORITY = 5;
  parser$1 = parser;
  BottleneckError$1 = BottleneckError_1;
  Job = class Job {
    constructor(task, args, options, jobDefaults, rejectOnDrop, Events, _states, Promise) {
      this.task = task;
      this.args = args;
      this.rejectOnDrop = rejectOnDrop;
      this.Events = Events;
      this._states = _states;
      this.Promise = Promise;
      this.options = parser$1.load(options, jobDefaults);
      this.options.priority = this._sanitizePriority(this.options.priority);

      if (this.options.id === jobDefaults.id) {
        this.options.id = `${this.options.id}-${this._randomIndex()}`;
      }

      this.promise = new this.Promise((_resolve, _reject) => {
        this._resolve = _resolve;
        this._reject = _reject;
      });
      this.retryCount = 0;
    }

    _sanitizePriority(priority) {
      var sProperty;
      sProperty = ~~priority !== priority ? DEFAULT_PRIORITY : priority;

      if (sProperty < 0) {
        return 0;
      } else if (sProperty > NUM_PRIORITIES - 1) {
        return NUM_PRIORITIES - 1;
      } else {
        return sProperty;
      }
    }

    _randomIndex() {
      return Math.random().toString(36).slice(2);
    }

    doDrop({
      error,
      message = "This job has been dropped by Bottleneck"
    } = {}) {
      if (this._states.remove(this.options.id)) {
        if (this.rejectOnDrop) {
          this._reject(error != null ? error : new BottleneckError$1(message));
        }

        this.Events.trigger("dropped", {
          args: this.args,
          options: this.options,
          task: this.task,
          promise: this.promise
        });
        return true;
      } else {
        return false;
      }
    }

    _assertStatus(expected) {
      var status;
      status = this._states.jobStatus(this.options.id);

      if (!(status === expected || expected === "DONE" && status === null)) {
        throw new BottleneckError$1(`Invalid job status ${status}, expected ${expected}. Please open an issue at https://github.com/SGrondin/bottleneck/issues`);
      }
    }

    doReceive() {
      this._states.start(this.options.id);

      return this.Events.trigger("received", {
        args: this.args,
        options: this.options
      });
    }

    doQueue(reachedHWM, blocked) {
      this._assertStatus("RECEIVED");

      this._states.next(this.options.id);

      return this.Events.trigger("queued", {
        args: this.args,
        options: this.options,
        reachedHWM,
        blocked
      });
    }

    doRun() {
      if (this.retryCount === 0) {
        this._assertStatus("QUEUED");

        this._states.next(this.options.id);
      } else {
        this._assertStatus("EXECUTING");
      }

      return this.Events.trigger("scheduled", {
        args: this.args,
        options: this.options
      });
    }

    doExecute(chained, clearGlobalState, run, free) {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        var error, eventInfo, passed;

        if (_this2.retryCount === 0) {
          _this2._assertStatus("RUNNING");

          _this2._states.next(_this2.options.id);
        } else {
          _this2._assertStatus("EXECUTING");
        }

        eventInfo = {
          args: _this2.args,
          options: _this2.options,
          retryCount: _this2.retryCount
        };

        _this2.Events.trigger("executing", eventInfo);

        try {
          passed = yield chained != null ? chained.schedule(_this2.options, _this2.task, ..._this2.args) : _this2.task(..._this2.args);

          if (clearGlobalState()) {
            _this2.doDone(eventInfo);

            yield free(_this2.options, eventInfo);

            _this2._assertStatus("DONE");

            return _this2._resolve(passed);
          }
        } catch (error1) {
          error = error1;
          return _this2._onFailure(error, eventInfo, clearGlobalState, run, free);
        }
      })();
    }

    doExpire(clearGlobalState, run, free) {
      var error, eventInfo;

      if (this._states.jobStatus(this.options.id === "RUNNING")) {
        this._states.next(this.options.id);
      }

      this._assertStatus("EXECUTING");

      eventInfo = {
        args: this.args,
        options: this.options,
        retryCount: this.retryCount
      };
      error = new BottleneckError$1(`This job timed out after ${this.options.expiration} ms.`);
      return this._onFailure(error, eventInfo, clearGlobalState, run, free);
    }

    _onFailure(error, eventInfo, clearGlobalState, run, free) {
      var _this3 = this;

      return _asyncToGenerator(function* () {
        var retry, retryAfter;

        if (clearGlobalState()) {
          retry = yield _this3.Events.trigger("failed", error, eventInfo);

          if (retry != null) {
            retryAfter = ~~retry;

            _this3.Events.trigger("retry", `Retrying ${_this3.options.id} after ${retryAfter} ms`, eventInfo);

            _this3.retryCount++;
            return run(retryAfter);
          } else {
            _this3.doDone(eventInfo);

            yield free(_this3.options, eventInfo);

            _this3._assertStatus("DONE");

            return _this3._reject(error);
          }
        }
      })();
    }

    doDone(eventInfo) {
      this._assertStatus("EXECUTING");

      this._states.next(this.options.id);

      return this.Events.trigger("done", eventInfo);
    }

  };
  var Job_1 = Job;
  var BottleneckError$2, LocalDatastore, parser$2;
  parser$2 = parser;
  BottleneckError$2 = BottleneckError_1;
  LocalDatastore = class LocalDatastore {
    constructor(instance, storeOptions, storeInstanceOptions) {
      this.instance = instance;
      this.storeOptions = storeOptions;
      this.clientId = this.instance._randomIndex();
      parser$2.load(storeInstanceOptions, storeInstanceOptions, this);
      this._nextRequest = this._lastReservoirRefresh = this._lastReservoirIncrease = Date.now();
      this._running = 0;
      this._done = 0;
      this._unblockTime = 0;
      this.ready = this.Promise.resolve();
      this.clients = {};

      this._startHeartbeat();
    }

    _startHeartbeat() {
      var base;

      if (this.heartbeat == null && (this.storeOptions.reservoirRefreshInterval != null && this.storeOptions.reservoirRefreshAmount != null || this.storeOptions.reservoirIncreaseInterval != null && this.storeOptions.reservoirIncreaseAmount != null)) {
        return typeof (base = this.heartbeat = setInterval(() => {
          var amount, incr, maximum, now, reservoir;
          now = Date.now();

          if (this.storeOptions.reservoirRefreshInterval != null && now >= this._lastReservoirRefresh + this.storeOptions.reservoirRefreshInterval) {
            this._lastReservoirRefresh = now;
            this.storeOptions.reservoir = this.storeOptions.reservoirRefreshAmount;

            this.instance._drainAll(this.computeCapacity());
          }

          if (this.storeOptions.reservoirIncreaseInterval != null && now >= this._lastReservoirIncrease + this.storeOptions.reservoirIncreaseInterval) {
            ({
              reservoirIncreaseAmount: amount,
              reservoirIncreaseMaximum: maximum,
              reservoir
            } = this.storeOptions);
            this._lastReservoirIncrease = now;
            incr = maximum != null ? Math.min(amount, maximum - reservoir) : amount;

            if (incr > 0) {
              this.storeOptions.reservoir += incr;
              return this.instance._drainAll(this.computeCapacity());
            }
          }
        }, this.heartbeatInterval)).unref === "function" ? base.unref() : void 0;
      } else {
        return clearInterval(this.heartbeat);
      }
    }

    __publish__(message) {
      var _this4 = this;

      return _asyncToGenerator(function* () {
        yield _this4.yieldLoop();
        return _this4.instance.Events.trigger("message", message.toString());
      })();
    }

    __disconnect__(flush) {
      var _this5 = this;

      return _asyncToGenerator(function* () {
        yield _this5.yieldLoop();
        clearInterval(_this5.heartbeat);
        return _this5.Promise.resolve();
      })();
    }

    yieldLoop(t = 0) {
      return new this.Promise(function (resolve, reject) {
        return setTimeout(resolve, t);
      });
    }

    computePenalty() {
      var ref;
      return (ref = this.storeOptions.penalty) != null ? ref : 15 * this.storeOptions.minTime || 5000;
    }

    __updateSettings__(options) {
      var _this6 = this;

      return _asyncToGenerator(function* () {
        yield _this6.yieldLoop();
        parser$2.overwrite(options, options, _this6.storeOptions);

        _this6._startHeartbeat();

        _this6.instance._drainAll(_this6.computeCapacity());

        return true;
      })();
    }

    __running__() {
      var _this7 = this;

      return _asyncToGenerator(function* () {
        yield _this7.yieldLoop();
        return _this7._running;
      })();
    }

    __queued__() {
      var _this8 = this;

      return _asyncToGenerator(function* () {
        yield _this8.yieldLoop();
        return _this8.instance.queued();
      })();
    }

    __done__() {
      var _this9 = this;

      return _asyncToGenerator(function* () {
        yield _this9.yieldLoop();
        return _this9._done;
      })();
    }

    __groupCheck__(time) {
      var _this10 = this;

      return _asyncToGenerator(function* () {
        yield _this10.yieldLoop();
        return _this10._nextRequest + _this10.timeout < time;
      })();
    }

    computeCapacity() {
      var maxConcurrent, reservoir;
      ({
        maxConcurrent,
        reservoir
      } = this.storeOptions);

      if (maxConcurrent != null && reservoir != null) {
        return Math.min(maxConcurrent - this._running, reservoir);
      } else if (maxConcurrent != null) {
        return maxConcurrent - this._running;
      } else if (reservoir != null) {
        return reservoir;
      } else {
        return null;
      }
    }

    conditionsCheck(weight) {
      var capacity;
      capacity = this.computeCapacity();
      return capacity == null || weight <= capacity;
    }

    __incrementReservoir__(incr) {
      var _this11 = this;

      return _asyncToGenerator(function* () {
        var reservoir;
        yield _this11.yieldLoop();
        reservoir = _this11.storeOptions.reservoir += incr;

        _this11.instance._drainAll(_this11.computeCapacity());

        return reservoir;
      })();
    }

    __currentReservoir__() {
      var _this12 = this;

      return _asyncToGenerator(function* () {
        yield _this12.yieldLoop();
        return _this12.storeOptions.reservoir;
      })();
    }

    isBlocked(now) {
      return this._unblockTime >= now;
    }

    check(weight, now) {
      return this.conditionsCheck(weight) && this._nextRequest - now <= 0;
    }

    __check__(weight) {
      var _this13 = this;

      return _asyncToGenerator(function* () {
        var now;
        yield _this13.yieldLoop();
        now = Date.now();
        return _this13.check(weight, now);
      })();
    }

    __register__(index, weight, expiration) {
      var _this14 = this;

      return _asyncToGenerator(function* () {
        var now, wait;
        yield _this14.yieldLoop();
        now = Date.now();

        if (_this14.conditionsCheck(weight)) {
          _this14._running += weight;

          if (_this14.storeOptions.reservoir != null) {
            _this14.storeOptions.reservoir -= weight;
          }

          wait = Math.max(_this14._nextRequest - now, 0);
          _this14._nextRequest = now + wait + _this14.storeOptions.minTime;
          return {
            success: true,
            wait,
            reservoir: _this14.storeOptions.reservoir
          };
        } else {
          return {
            success: false
          };
        }
      })();
    }

    strategyIsBlock() {
      return this.storeOptions.strategy === 3;
    }

    __submit__(queueLength, weight) {
      var _this15 = this;

      return _asyncToGenerator(function* () {
        var blocked, now, reachedHWM;
        yield _this15.yieldLoop();

        if (_this15.storeOptions.maxConcurrent != null && weight > _this15.storeOptions.maxConcurrent) {
          throw new BottleneckError$2(`Impossible to add a job having a weight of ${weight} to a limiter having a maxConcurrent setting of ${_this15.storeOptions.maxConcurrent}`);
        }

        now = Date.now();
        reachedHWM = _this15.storeOptions.highWater != null && queueLength === _this15.storeOptions.highWater && !_this15.check(weight, now);
        blocked = _this15.strategyIsBlock() && (reachedHWM || _this15.isBlocked(now));

        if (blocked) {
          _this15._unblockTime = now + _this15.computePenalty();
          _this15._nextRequest = _this15._unblockTime + _this15.storeOptions.minTime;

          _this15.instance._dropAllQueued();
        }

        return {
          reachedHWM,
          blocked,
          strategy: _this15.storeOptions.strategy
        };
      })();
    }

    __free__(index, weight) {
      var _this16 = this;

      return _asyncToGenerator(function* () {
        yield _this16.yieldLoop();
        _this16._running -= weight;
        _this16._done += weight;

        _this16.instance._drainAll(_this16.computeCapacity());

        return {
          running: _this16._running
        };
      })();
    }

  };
  var LocalDatastore_1 = LocalDatastore;
  var BottleneckError$3, States;
  BottleneckError$3 = BottleneckError_1;
  States = class States {
    constructor(status1) {
      this.status = status1;
      this._jobs = {};
      this.counts = this.status.map(function () {
        return 0;
      });
    }

    next(id) {
      var current, next;
      current = this._jobs[id];
      next = current + 1;

      if (current != null && next < this.status.length) {
        this.counts[current]--;
        this.counts[next]++;
        return this._jobs[id]++;
      } else if (current != null) {
        this.counts[current]--;
        return delete this._jobs[id];
      }
    }

    start(id) {
      var initial;
      initial = 0;
      this._jobs[id] = initial;
      return this.counts[initial]++;
    }

    remove(id) {
      var current;
      current = this._jobs[id];

      if (current != null) {
        this.counts[current]--;
        delete this._jobs[id];
      }

      return current != null;
    }

    jobStatus(id) {
      var ref;
      return (ref = this.status[this._jobs[id]]) != null ? ref : null;
    }

    statusJobs(status) {
      var k, pos, ref, results, v;

      if (status != null) {
        pos = this.status.indexOf(status);

        if (pos < 0) {
          throw new BottleneckError$3(`status must be one of ${this.status.join(', ')}`);
        }

        ref = this._jobs;
        results = [];

        for (k in ref) {
          v = ref[k];

          if (v === pos) {
            results.push(k);
          }
        }

        return results;
      } else {
        return Object.keys(this._jobs);
      }
    }

    statusCounts() {
      return this.counts.reduce((acc, v, i) => {
        acc[this.status[i]] = v;
        return acc;
      }, {});
    }

  };
  var States_1 = States;
  var DLList$2, Sync;
  DLList$2 = DLList_1;
  Sync = class Sync {
    constructor(name, Promise) {
      this.schedule = this.schedule.bind(this);
      this.name = name;
      this.Promise = Promise;
      this._running = 0;
      this._queue = new DLList$2();
    }

    isEmpty() {
      return this._queue.length === 0;
    }

    _tryToRun() {
      var _this17 = this;

      return _asyncToGenerator(function* () {
        var args, cb, error, reject, resolve, returned, task;

        if (_this17._running < 1 && _this17._queue.length > 0) {
          _this17._running++;
          ({
            task,
            args,
            resolve,
            reject
          } = _this17._queue.shift());
          cb = yield _asyncToGenerator(function* () {
            try {
              returned = yield task(...args);
              return function () {
                return resolve(returned);
              };
            } catch (error1) {
              error = error1;
              return function () {
                return reject(error);
              };
            }
          })();
          _this17._running--;

          _this17._tryToRun();

          return cb();
        }
      })();
    }

    schedule(task, ...args) {
      var promise, reject, resolve;
      resolve = reject = null;
      promise = new this.Promise(function (_resolve, _reject) {
        resolve = _resolve;
        return reject = _reject;
      });

      this._queue.push({
        task,
        args,
        resolve,
        reject
      });

      this._tryToRun();

      return promise;
    }

  };
  var Sync_1 = Sync;
  var version = "2.19.5";
  var version$1 = {
    version: version
  };
  var version$2 = /*#__PURE__*/Object.freeze({
    version: version,
    default: version$1
  });

  var require$$2 = () => console.log('You must import the full version of Bottleneck in order to use this feature.');

  var require$$3 = () => console.log('You must import the full version of Bottleneck in order to use this feature.');

  var require$$4 = () => console.log('You must import the full version of Bottleneck in order to use this feature.');

  var Events$2, Group, IORedisConnection$1, RedisConnection$1, Scripts$1, parser$3;
  parser$3 = parser;
  Events$2 = Events_1;
  RedisConnection$1 = require$$2;
  IORedisConnection$1 = require$$3;
  Scripts$1 = require$$4;

  Group = function () {
    class Group {
      constructor(limiterOptions = {}) {
        this.deleteKey = this.deleteKey.bind(this);
        this.limiterOptions = limiterOptions;
        parser$3.load(this.limiterOptions, this.defaults, this);
        this.Events = new Events$2(this);
        this.instances = {};
        this.Bottleneck = Bottleneck_1;

        this._startAutoCleanup();

        this.sharedConnection = this.connection != null;

        if (this.connection == null) {
          if (this.limiterOptions.datastore === "redis") {
            this.connection = new RedisConnection$1(Object.assign({}, this.limiterOptions, {
              Events: this.Events
            }));
          } else if (this.limiterOptions.datastore === "ioredis") {
            this.connection = new IORedisConnection$1(Object.assign({}, this.limiterOptions, {
              Events: this.Events
            }));
          }
        }
      }

      key(key = "") {
        var ref;
        return (ref = this.instances[key]) != null ? ref : (() => {
          var limiter;
          limiter = this.instances[key] = new this.Bottleneck(Object.assign(this.limiterOptions, {
            id: `${this.id}-${key}`,
            timeout: this.timeout,
            connection: this.connection
          }));
          this.Events.trigger("created", limiter, key);
          return limiter;
        })();
      }

      deleteKey(key = "") {
        var _this18 = this;

        return _asyncToGenerator(function* () {
          var deleted, instance;
          instance = _this18.instances[key];

          if (_this18.connection) {
            deleted = yield _this18.connection.__runCommand__(['del', ...Scripts$1.allKeys(`${_this18.id}-${key}`)]);
          }

          if (instance != null) {
            delete _this18.instances[key];
            yield instance.disconnect();
          }

          return instance != null || deleted > 0;
        })();
      }

      limiters() {
        var k, ref, results, v;
        ref = this.instances;
        results = [];

        for (k in ref) {
          v = ref[k];
          results.push({
            key: k,
            limiter: v
          });
        }

        return results;
      }

      keys() {
        return Object.keys(this.instances);
      }

      clusterKeys() {
        var _this19 = this;

        return _asyncToGenerator(function* () {
          var cursor, end, found, i, k, keys, len, next, start;

          if (_this19.connection == null) {
            return _this19.Promise.resolve(_this19.keys());
          }

          keys = [];
          cursor = null;
          start = `b_${_this19.id}-`.length;
          end = "_settings".length;

          while (cursor !== 0) {
            [next, found] = yield _this19.connection.__runCommand__(["scan", cursor != null ? cursor : 0, "match", `b_${_this19.id}-*_settings`, "count", 10000]);
            cursor = ~~next;

            for (i = 0, len = found.length; i < len; i++) {
              k = found[i];
              keys.push(k.slice(start, -end));
            }
          }

          return keys;
        })();
      }

      _startAutoCleanup() {
        var _this20 = this;

        var base;
        clearInterval(this.interval);
        return typeof (base = this.interval = setInterval( /*#__PURE__*/_asyncToGenerator(function* () {
          var e, k, ref, results, time, v;
          time = Date.now();
          ref = _this20.instances;
          results = [];

          for (k in ref) {
            v = ref[k];

            try {
              if (yield v._store.__groupCheck__(time)) {
                results.push(_this20.deleteKey(k));
              } else {
                results.push(void 0);
              }
            } catch (error) {
              e = error;
              results.push(v.Events.trigger("error", e));
            }
          }

          return results;
        }), this.timeout / 2)).unref === "function" ? base.unref() : void 0;
      }

      updateSettings(options = {}) {
        parser$3.overwrite(options, this.defaults, this);
        parser$3.overwrite(options, options, this.limiterOptions);

        if (options.timeout != null) {
          return this._startAutoCleanup();
        }
      }

      disconnect(flush = true) {
        var ref;

        if (!this.sharedConnection) {
          return (ref = this.connection) != null ? ref.disconnect(flush) : void 0;
        }
      }

    }

    Group.prototype.defaults = {
      timeout: 1000 * 60 * 5,
      connection: null,
      Promise: Promise,
      id: "group-key"
    };
    return Group;
  }.call(commonjsGlobal);

  var Group_1 = Group;
  var Batcher, Events$3, parser$4;
  parser$4 = parser;
  Events$3 = Events_1;

  Batcher = function () {
    class Batcher {
      constructor(options = {}) {
        this.options = options;
        parser$4.load(this.options, this.defaults, this);
        this.Events = new Events$3(this);
        this._arr = [];

        this._resetPromise();

        this._lastFlush = Date.now();
      }

      _resetPromise() {
        return this._promise = new this.Promise((res, rej) => {
          return this._resolve = res;
        });
      }

      _flush() {
        clearTimeout(this._timeout);
        this._lastFlush = Date.now();

        this._resolve();

        this.Events.trigger("batch", this._arr);
        this._arr = [];
        return this._resetPromise();
      }

      add(data) {
        var ret;

        this._arr.push(data);

        ret = this._promise;

        if (this._arr.length === this.maxSize) {
          this._flush();
        } else if (this.maxTime != null && this._arr.length === 1) {
          this._timeout = setTimeout(() => {
            return this._flush();
          }, this.maxTime);
        }

        return ret;
      }

    }

    Batcher.prototype.defaults = {
      maxTime: null,
      maxSize: null,
      Promise: Promise
    };
    return Batcher;
  }.call(commonjsGlobal);

  var Batcher_1 = Batcher;

  var require$$4$1 = () => console.log('You must import the full version of Bottleneck in order to use this feature.');

  var require$$8 = getCjsExportFromNamespace(version$2);
  var Bottleneck,
      DEFAULT_PRIORITY$1,
      Events$4,
      Job$1,
      LocalDatastore$1,
      NUM_PRIORITIES$1,
      Queues$1,
      RedisDatastore$1,
      States$1,
      Sync$1,
      parser$5,
      splice = [].splice;
  NUM_PRIORITIES$1 = 10;
  DEFAULT_PRIORITY$1 = 5;
  parser$5 = parser;
  Queues$1 = Queues_1;
  Job$1 = Job_1;
  LocalDatastore$1 = LocalDatastore_1;
  RedisDatastore$1 = require$$4$1;
  Events$4 = Events_1;
  States$1 = States_1;
  Sync$1 = Sync_1;

  Bottleneck = function () {
    class Bottleneck {
      constructor(options = {}, ...invalid) {
        var storeInstanceOptions, storeOptions;
        this._addToQueue = this._addToQueue.bind(this);

        this._validateOptions(options, invalid);

        parser$5.load(options, this.instanceDefaults, this);
        this._queues = new Queues$1(NUM_PRIORITIES$1);
        this._scheduled = {};
        this._states = new States$1(["RECEIVED", "QUEUED", "RUNNING", "EXECUTING"].concat(this.trackDoneStatus ? ["DONE"] : []));
        this._limiter = null;
        this.Events = new Events$4(this);
        this._submitLock = new Sync$1("submit", this.Promise);
        this._registerLock = new Sync$1("register", this.Promise);
        storeOptions = parser$5.load(options, this.storeDefaults, {});

        this._store = function () {
          if (this.datastore === "redis" || this.datastore === "ioredis" || this.connection != null) {
            storeInstanceOptions = parser$5.load(options, this.redisStoreDefaults, {});
            return new RedisDatastore$1(this, storeOptions, storeInstanceOptions);
          } else if (this.datastore === "local") {
            storeInstanceOptions = parser$5.load(options, this.localStoreDefaults, {});
            return new LocalDatastore$1(this, storeOptions, storeInstanceOptions);
          } else {
            throw new Bottleneck.prototype.BottleneckError(`Invalid datastore type: ${this.datastore}`);
          }
        }.call(this);

        this._queues.on("leftzero", () => {
          var ref;
          return (ref = this._store.heartbeat) != null ? typeof ref.ref === "function" ? ref.ref() : void 0 : void 0;
        });

        this._queues.on("zero", () => {
          var ref;
          return (ref = this._store.heartbeat) != null ? typeof ref.unref === "function" ? ref.unref() : void 0 : void 0;
        });
      }

      _validateOptions(options, invalid) {
        if (!(options != null && typeof options === "object" && invalid.length === 0)) {
          throw new Bottleneck.prototype.BottleneckError("Bottleneck v2 takes a single object argument. Refer to https://github.com/SGrondin/bottleneck#upgrading-to-v2 if you're upgrading from Bottleneck v1.");
        }
      }

      ready() {
        return this._store.ready;
      }

      clients() {
        return this._store.clients;
      }

      channel() {
        return `b_${this.id}`;
      }

      channel_client() {
        return `b_${this.id}_${this._store.clientId}`;
      }

      publish(message) {
        return this._store.__publish__(message);
      }

      disconnect(flush = true) {
        return this._store.__disconnect__(flush);
      }

      chain(_limiter) {
        this._limiter = _limiter;
        return this;
      }

      queued(priority) {
        return this._queues.queued(priority);
      }

      clusterQueued() {
        return this._store.__queued__();
      }

      empty() {
        return this.queued() === 0 && this._submitLock.isEmpty();
      }

      running() {
        return this._store.__running__();
      }

      done() {
        return this._store.__done__();
      }

      jobStatus(id) {
        return this._states.jobStatus(id);
      }

      jobs(status) {
        return this._states.statusJobs(status);
      }

      counts() {
        return this._states.statusCounts();
      }

      _randomIndex() {
        return Math.random().toString(36).slice(2);
      }

      check(weight = 1) {
        return this._store.__check__(weight);
      }

      _clearGlobalState(index) {
        if (this._scheduled[index] != null) {
          clearTimeout(this._scheduled[index].expiration);
          delete this._scheduled[index];
          return true;
        } else {
          return false;
        }
      }

      _free(index, job, options, eventInfo) {
        var _this21 = this;

        return _asyncToGenerator(function* () {
          var e, running;

          try {
            ({
              running
            } = yield _this21._store.__free__(index, options.weight));

            _this21.Events.trigger("debug", `Freed ${options.id}`, eventInfo);

            if (running === 0 && _this21.empty()) {
              return _this21.Events.trigger("idle");
            }
          } catch (error1) {
            e = error1;
            return _this21.Events.trigger("error", e);
          }
        })();
      }

      _run(index, job, wait) {
        var clearGlobalState, free, run;
        job.doRun();
        clearGlobalState = this._clearGlobalState.bind(this, index);
        run = this._run.bind(this, index, job);
        free = this._free.bind(this, index, job);
        return this._scheduled[index] = {
          timeout: setTimeout(() => {
            return job.doExecute(this._limiter, clearGlobalState, run, free);
          }, wait),
          expiration: job.options.expiration != null ? setTimeout(function () {
            return job.doExpire(clearGlobalState, run, free);
          }, wait + job.options.expiration) : void 0,
          job: job
        };
      }

      _drainOne(capacity) {
        return this._registerLock.schedule(() => {
          var args, index, next, options, queue;

          if (this.queued() === 0) {
            return this.Promise.resolve(null);
          }

          queue = this._queues.getFirst();
          ({
            options,
            args
          } = next = queue.first());

          if (capacity != null && options.weight > capacity) {
            return this.Promise.resolve(null);
          }

          this.Events.trigger("debug", `Draining ${options.id}`, {
            args,
            options
          });
          index = this._randomIndex();
          return this._store.__register__(index, options.weight, options.expiration).then(({
            success,
            wait,
            reservoir
          }) => {
            var empty;
            this.Events.trigger("debug", `Drained ${options.id}`, {
              success,
              args,
              options
            });

            if (success) {
              queue.shift();
              empty = this.empty();

              if (empty) {
                this.Events.trigger("empty");
              }

              if (reservoir === 0) {
                this.Events.trigger("depleted", empty);
              }

              this._run(index, next, wait);

              return this.Promise.resolve(options.weight);
            } else {
              return this.Promise.resolve(null);
            }
          });
        });
      }

      _drainAll(capacity, total = 0) {
        return this._drainOne(capacity).then(drained => {
          var newCapacity;

          if (drained != null) {
            newCapacity = capacity != null ? capacity - drained : capacity;
            return this._drainAll(newCapacity, total + drained);
          } else {
            return this.Promise.resolve(total);
          }
        }).catch(e => {
          return this.Events.trigger("error", e);
        });
      }

      _dropAllQueued(message) {
        return this._queues.shiftAll(function (job) {
          return job.doDrop({
            message
          });
        });
      }

      stop(options = {}) {
        var done, waitForExecuting;
        options = parser$5.load(options, this.stopDefaults);

        waitForExecuting = at => {
          var finished;

          finished = () => {
            var counts;
            counts = this._states.counts;
            return counts[0] + counts[1] + counts[2] + counts[3] === at;
          };

          return new this.Promise((resolve, reject) => {
            if (finished()) {
              return resolve();
            } else {
              return this.on("done", () => {
                if (finished()) {
                  this.removeAllListeners("done");
                  return resolve();
                }
              });
            }
          });
        };

        done = options.dropWaitingJobs ? (this._run = function (index, next) {
          return next.doDrop({
            message: options.dropErrorMessage
          });
        }, this._drainOne = () => {
          return this.Promise.resolve(null);
        }, this._registerLock.schedule(() => {
          return this._submitLock.schedule(() => {
            var k, ref, v;
            ref = this._scheduled;

            for (k in ref) {
              v = ref[k];

              if (this.jobStatus(v.job.options.id) === "RUNNING") {
                clearTimeout(v.timeout);
                clearTimeout(v.expiration);
                v.job.doDrop({
                  message: options.dropErrorMessage
                });
              }
            }

            this._dropAllQueued(options.dropErrorMessage);

            return waitForExecuting(0);
          });
        })) : this.schedule({
          priority: NUM_PRIORITIES$1 - 1,
          weight: 0
        }, () => {
          return waitForExecuting(1);
        });

        this._receive = function (job) {
          return job._reject(new Bottleneck.prototype.BottleneckError(options.enqueueErrorMessage));
        };

        this.stop = () => {
          return this.Promise.reject(new Bottleneck.prototype.BottleneckError("stop() has already been called"));
        };

        return done;
      }

      _addToQueue(job) {
        var _this22 = this;

        return _asyncToGenerator(function* () {
          var args, blocked, error, options, reachedHWM, shifted, strategy;
          ({
            args,
            options
          } = job);

          try {
            ({
              reachedHWM,
              blocked,
              strategy
            } = yield _this22._store.__submit__(_this22.queued(), options.weight));
          } catch (error1) {
            error = error1;

            _this22.Events.trigger("debug", `Could not queue ${options.id}`, {
              args,
              options,
              error
            });

            job.doDrop({
              error
            });
            return false;
          }

          if (blocked) {
            job.doDrop();
            return true;
          } else if (reachedHWM) {
            shifted = strategy === Bottleneck.prototype.strategy.LEAK ? _this22._queues.shiftLastFrom(options.priority) : strategy === Bottleneck.prototype.strategy.OVERFLOW_PRIORITY ? _this22._queues.shiftLastFrom(options.priority + 1) : strategy === Bottleneck.prototype.strategy.OVERFLOW ? job : void 0;

            if (shifted != null) {
              shifted.doDrop();
            }

            if (shifted == null || strategy === Bottleneck.prototype.strategy.OVERFLOW) {
              if (shifted == null) {
                job.doDrop();
              }

              return reachedHWM;
            }
          }

          job.doQueue(reachedHWM, blocked);

          _this22._queues.push(job);

          yield _this22._drainAll();
          return reachedHWM;
        })();
      }

      _receive(job) {
        if (this._states.jobStatus(job.options.id) != null) {
          job._reject(new Bottleneck.prototype.BottleneckError(`A job with the same id already exists (id=${job.options.id})`));

          return false;
        } else {
          job.doReceive();
          return this._submitLock.schedule(this._addToQueue, job);
        }
      }

      submit(...args) {
        var cb, fn, job, options, ref, ref1, task;

        if (typeof args[0] === "function") {
          ref = args, [fn, ...args] = ref, [cb] = splice.call(args, -1);
          options = parser$5.load({}, this.jobDefaults);
        } else {
          ref1 = args, [options, fn, ...args] = ref1, [cb] = splice.call(args, -1);
          options = parser$5.load(options, this.jobDefaults);
        }

        task = (...args) => {
          return new this.Promise(function (resolve, reject) {
            return fn(...args, function (...args) {
              return (args[0] != null ? reject : resolve)(args);
            });
          });
        };

        job = new Job$1(task, args, options, this.jobDefaults, this.rejectOnDrop, this.Events, this._states, this.Promise);
        job.promise.then(function (args) {
          return typeof cb === "function" ? cb(...args) : void 0;
        }).catch(function (args) {
          if (Array.isArray(args)) {
            return typeof cb === "function" ? cb(...args) : void 0;
          } else {
            return typeof cb === "function" ? cb(args) : void 0;
          }
        });
        return this._receive(job);
      }

      schedule(...args) {
        var job, options, task;

        if (typeof args[0] === "function") {
          [task, ...args] = args;
          options = {};
        } else {
          [options, task, ...args] = args;
        }

        job = new Job$1(task, args, options, this.jobDefaults, this.rejectOnDrop, this.Events, this._states, this.Promise);

        this._receive(job);

        return job.promise;
      }

      wrap(fn) {
        var schedule, wrapped;
        schedule = this.schedule.bind(this);

        wrapped = function (...args) {
          return schedule(fn.bind(this), ...args);
        };

        wrapped.withOptions = function (options, ...args) {
          return schedule(options, fn, ...args);
        };

        return wrapped;
      }

      updateSettings(options = {}) {
        var _this23 = this;

        return _asyncToGenerator(function* () {
          yield _this23._store.__updateSettings__(parser$5.overwrite(options, _this23.storeDefaults));
          parser$5.overwrite(options, _this23.instanceDefaults, _this23);
          return _this23;
        })();
      }

      currentReservoir() {
        return this._store.__currentReservoir__();
      }

      incrementReservoir(incr = 0) {
        return this._store.__incrementReservoir__(incr);
      }

    }

    Bottleneck.default = Bottleneck;
    Bottleneck.Events = Events$4;
    Bottleneck.version = Bottleneck.prototype.version = require$$8.version;
    Bottleneck.strategy = Bottleneck.prototype.strategy = {
      LEAK: 1,
      OVERFLOW: 2,
      OVERFLOW_PRIORITY: 4,
      BLOCK: 3
    };
    Bottleneck.BottleneckError = Bottleneck.prototype.BottleneckError = BottleneckError_1;
    Bottleneck.Group = Bottleneck.prototype.Group = Group_1;
    Bottleneck.RedisConnection = Bottleneck.prototype.RedisConnection = require$$2;
    Bottleneck.IORedisConnection = Bottleneck.prototype.IORedisConnection = require$$3;
    Bottleneck.Batcher = Bottleneck.prototype.Batcher = Batcher_1;
    Bottleneck.prototype.jobDefaults = {
      priority: DEFAULT_PRIORITY$1,
      weight: 1,
      expiration: null,
      id: "<no-id>"
    };
    Bottleneck.prototype.storeDefaults = {
      maxConcurrent: null,
      minTime: 0,
      highWater: null,
      strategy: Bottleneck.prototype.strategy.LEAK,
      penalty: null,
      reservoir: null,
      reservoirRefreshInterval: null,
      reservoirRefreshAmount: null,
      reservoirIncreaseInterval: null,
      reservoirIncreaseAmount: null,
      reservoirIncreaseMaximum: null
    };
    Bottleneck.prototype.localStoreDefaults = {
      Promise: Promise,
      timeout: null,
      heartbeatInterval: 250
    };
    Bottleneck.prototype.redisStoreDefaults = {
      Promise: Promise,
      timeout: null,
      heartbeatInterval: 5000,
      clientTimeout: 10000,
      Redis: null,
      clientOptions: {},
      clusterNodes: null,
      clearDatastore: false,
      connection: null
    };
    Bottleneck.prototype.instanceDefaults = {
      datastore: "local",
      connection: null,
      id: "<no-id>",
      rejectOnDrop: true,
      trackDoneStatus: false,
      Promise: Promise
    };
    Bottleneck.prototype.stopDefaults = {
      enqueueErrorMessage: "This limiter has been stopped and cannot accept new jobs.",
      dropWaitingJobs: true,
      dropErrorMessage: "This limiter has been stopped."
    };
    return Bottleneck;
  }.call(commonjsGlobal);

  var Bottleneck_1 = Bottleneck;
  var lib = Bottleneck_1;
  return lib;
});

/***/ }),

/***/ 8263:
/*!************************************************!*\
  !*** ./node_modules/btoa-lite/btoa-browser.js ***!
  \************************************************/
/***/ ((module) => {

module.exports = function _btoa(str) {
  return btoa(str)
}


/***/ }),

/***/ 1334:
/*!*******************************************!*\
  !*** ./node_modules/clean-stack/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const os = __webpack_require__(/*! os */ 5696);

const extractPathRegex = /\s+at.*(?:\(|\s)(.*)\)?/;
const pathRegex = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/;
const homeDir = typeof os.homedir === 'undefined' ? '' : os.homedir();

module.exports = (stack, options) => {
	options = Object.assign({pretty: false}, options);

	return stack.replace(/\\/g, '/')
		.split('\n')
		.filter(line => {
			const pathMatches = line.match(extractPathRegex);
			if (pathMatches === null || !pathMatches[1]) {
				return true;
			}

			const match = pathMatches[1];

			// Electron
			if (
				match.includes('.app/Contents/Resources/electron.asar') ||
				match.includes('.app/Contents/Resources/default_app.asar')
			) {
				return false;
			}

			return !pathRegex.test(match);
		})
		.filter(line => line.trim() !== '')
		.map(line => {
			if (options.pretty) {
				return line.replace(extractPathRegex, (m, p1) => m.replace(p1, p1.replace(homeDir, '~')));
			}

			return line;
		})
		.join('\n');
};


/***/ }),

/***/ 2460:
/*!****************************************************!*\
  !*** ./node_modules/deprecation/dist-web/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deprecation": () => (/* binding */ Deprecation)
/* harmony export */ });
class Deprecation extends Error {
  constructor(message) {
    super(message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = 'Deprecation';
  }

}




/***/ }),

/***/ 3234:
/*!*******************************************!*\
  !*** ./node_modules/fromentries/index.js ***!
  \*******************************************/
/***/ ((module) => {

/*! fromentries. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
module.exports = function fromEntries (iterable) {
  return [...iterable].reduce((obj, [key, val]) => {
    obj[key] = val
    return obj
  }, {})
}


/***/ }),

/***/ 3156:
/*!*********************************************!*\
  !*** ./node_modules/indent-string/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = (string, count = 1, options) => {
	options = {
		indent: ' ',
		includeEmptyLines: false,
		...options
	};

	if (typeof string !== 'string') {
		throw new TypeError(
			`Expected \`input\` to be a \`string\`, got \`${typeof string}\``
		);
	}

	if (typeof count !== 'number') {
		throw new TypeError(
			`Expected \`count\` to be a \`number\`, got \`${typeof count}\``
		);
	}

	if (typeof options.indent !== 'string') {
		throw new TypeError(
			`Expected \`options.indent\` to be a \`string\`, got \`${typeof options.indent}\``
		);
	}

	if (count === 0) {
		return string;
	}

	const regex = options.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;

	return string.replace(regex, options.indent.repeat(count));
};


/***/ }),

/***/ 7266:
/*!*****************************************!*\
  !*** ./node_modules/lru-cache/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// A linked list to keep track of recently-used-ness
const Yallist = __webpack_require__(/*! yallist */ 7322)

const MAX = Symbol('max')
const LENGTH = Symbol('length')
const LENGTH_CALCULATOR = Symbol('lengthCalculator')
const ALLOW_STALE = Symbol('allowStale')
const MAX_AGE = Symbol('maxAge')
const DISPOSE = Symbol('dispose')
const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet')
const LRU_LIST = Symbol('lruList')
const CACHE = Symbol('cache')
const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet')

const naiveLength = () => 1

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
class LRUCache {
  constructor (options) {
    if (typeof options === 'number')
      options = { max: options }

    if (!options)
      options = {}

    if (options.max && (typeof options.max !== 'number' || options.max < 0))
      throw new TypeError('max must be a non-negative number')
    // Kind of weird to have a default max of Infinity, but oh well.
    const max = this[MAX] = options.max || Infinity

    const lc = options.length || naiveLength
    this[LENGTH_CALCULATOR] = (typeof lc !== 'function') ? naiveLength : lc
    this[ALLOW_STALE] = options.stale || false
    if (options.maxAge && typeof options.maxAge !== 'number')
      throw new TypeError('maxAge must be a number')
    this[MAX_AGE] = options.maxAge || 0
    this[DISPOSE] = options.dispose
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false
    this.reset()
  }

  // resize the cache when the max changes.
  set max (mL) {
    if (typeof mL !== 'number' || mL < 0)
      throw new TypeError('max must be a non-negative number')

    this[MAX] = mL || Infinity
    trim(this)
  }
  get max () {
    return this[MAX]
  }

  set allowStale (allowStale) {
    this[ALLOW_STALE] = !!allowStale
  }
  get allowStale () {
    return this[ALLOW_STALE]
  }

  set maxAge (mA) {
    if (typeof mA !== 'number')
      throw new TypeError('maxAge must be a non-negative number')

    this[MAX_AGE] = mA
    trim(this)
  }
  get maxAge () {
    return this[MAX_AGE]
  }

  // resize the cache when the lengthCalculator changes.
  set lengthCalculator (lC) {
    if (typeof lC !== 'function')
      lC = naiveLength

    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC
      this[LENGTH] = 0
      this[LRU_LIST].forEach(hit => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)
        this[LENGTH] += hit.length
      })
    }
    trim(this)
  }
  get lengthCalculator () { return this[LENGTH_CALCULATOR] }

  get length () { return this[LENGTH] }
  get itemCount () { return this[LRU_LIST].length }

  rforEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].tail; walker !== null;) {
      const prev = walker.prev
      forEachStep(this, fn, walker, thisp)
      walker = prev
    }
  }

  forEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].head; walker !== null;) {
      const next = walker.next
      forEachStep(this, fn, walker, thisp)
      walker = next
    }
  }

  keys () {
    return this[LRU_LIST].toArray().map(k => k.key)
  }

  values () {
    return this[LRU_LIST].toArray().map(k => k.value)
  }

  reset () {
    if (this[DISPOSE] &&
        this[LRU_LIST] &&
        this[LRU_LIST].length) {
      this[LRU_LIST].forEach(hit => this[DISPOSE](hit.key, hit.value))
    }

    this[CACHE] = new Map() // hash of items by key
    this[LRU_LIST] = new Yallist() // list of items in order of use recency
    this[LENGTH] = 0 // length of items in the list
  }

  dump () {
    return this[LRU_LIST].map(hit =>
      isStale(this, hit) ? false : {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }).toArray().filter(h => h)
  }

  dumpLru () {
    return this[LRU_LIST]
  }

  set (key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE]

    if (maxAge && typeof maxAge !== 'number')
      throw new TypeError('maxAge must be a number')

    const now = maxAge ? Date.now() : 0
    const len = this[LENGTH_CALCULATOR](value, key)

    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key))
        return false
      }

      const node = this[CACHE].get(key)
      const item = node.value

      // dispose of the old one before overwriting
      // split out into 2 ifs for better coverage tracking
      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET])
          this[DISPOSE](key, item.value)
      }

      item.now = now
      item.maxAge = maxAge
      item.value = value
      this[LENGTH] += len - item.length
      item.length = len
      this.get(key)
      trim(this)
      return true
    }

    const hit = new Entry(key, value, len, now, maxAge)

    // oversized objects fall out of cache automatically.
    if (hit.length > this[MAX]) {
      if (this[DISPOSE])
        this[DISPOSE](key, value)

      return false
    }

    this[LENGTH] += hit.length
    this[LRU_LIST].unshift(hit)
    this[CACHE].set(key, this[LRU_LIST].head)
    trim(this)
    return true
  }

  has (key) {
    if (!this[CACHE].has(key)) return false
    const hit = this[CACHE].get(key).value
    return !isStale(this, hit)
  }

  get (key) {
    return get(this, key, true)
  }

  peek (key) {
    return get(this, key, false)
  }

  pop () {
    const node = this[LRU_LIST].tail
    if (!node)
      return null

    del(this, node)
    return node.value
  }

  del (key) {
    del(this, this[CACHE].get(key))
  }

  load (arr) {
    // reset the cache
    this.reset()

    const now = Date.now()
    // A previous serialized cache has the most recent items first
    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l]
      const expiresAt = hit.e || 0
      if (expiresAt === 0)
        // the item was created without expiration in a non aged cache
        this.set(hit.k, hit.v)
      else {
        const maxAge = expiresAt - now
        // dont add already expired items
        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge)
        }
      }
    }
  }

  prune () {
    this[CACHE].forEach((value, key) => get(this, key, false))
  }
}

const get = (self, key, doUse) => {
  const node = self[CACHE].get(key)
  if (node) {
    const hit = node.value
    if (isStale(self, hit)) {
      del(self, node)
      if (!self[ALLOW_STALE])
        return undefined
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET])
          node.value.now = Date.now()
        self[LRU_LIST].unshiftNode(node)
      }
    }
    return hit.value
  }
}

const isStale = (self, hit) => {
  if (!hit || (!hit.maxAge && !self[MAX_AGE]))
    return false

  const diff = Date.now() - hit.now
  return hit.maxAge ? diff > hit.maxAge
    : self[MAX_AGE] && (diff > self[MAX_AGE])
}

const trim = self => {
  if (self[LENGTH] > self[MAX]) {
    for (let walker = self[LRU_LIST].tail;
      self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      const prev = walker.prev
      del(self, walker)
      walker = prev
    }
  }
}

const del = (self, node) => {
  if (node) {
    const hit = node.value
    if (self[DISPOSE])
      self[DISPOSE](hit.key, hit.value)

    self[LENGTH] -= hit.length
    self[CACHE].delete(hit.key)
    self[LRU_LIST].removeNode(node)
  }
}

class Entry {
  constructor (key, value, length, now, maxAge) {
    this.key = key
    this.value = value
    this.length = length
    this.now = now
    this.maxAge = maxAge || 0
  }
}

const forEachStep = (self, fn, node, thisp) => {
  let hit = node.value
  if (isStale(self, hit)) {
    del(self, node)
    if (!self[ALLOW_STALE])
      hit = undefined
  }
  if (hit)
    fn.call(thisp, hit.value, hit.key, self)
}

module.exports = LRUCache


/***/ }),

/***/ 3677:
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/***/ ((module, exports) => {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports["default"] = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ 2135:
/*!************************************************!*\
  !*** ./node_modules/octokit/dist-web/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNodeMiddleware": () => (/* reexport safe */ _octokit_app__WEBPACK_IMPORTED_MODULE_0__.createNodeMiddleware),
/* harmony export */   "App": () => (/* binding */ App),
/* harmony export */   "OAuthApp": () => (/* binding */ OAuthApp),
/* harmony export */   "Octokit": () => (/* binding */ Octokit)
/* harmony export */ });
/* harmony import */ var _octokit_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @octokit/core */ 1719);
/* harmony import */ var _octokit_plugin_paginate_rest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @octokit/plugin-paginate-rest */ 7215);
/* harmony import */ var _octokit_plugin_rest_endpoint_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @octokit/plugin-rest-endpoint-methods */ 1878);
/* harmony import */ var _octokit_plugin_retry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @octokit/plugin-retry */ 9780);
/* harmony import */ var _octokit_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @octokit/app */ 1175);
/* harmony import */ var _octokit_oauth_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @octokit/oauth-app */ 1225);








const VERSION = "1.7.1";

const Octokit = _octokit_core__WEBPACK_IMPORTED_MODULE_1__.Octokit.plugin(_octokit_plugin_rest_endpoint_methods__WEBPACK_IMPORTED_MODULE_2__.restEndpointMethods, _octokit_plugin_paginate_rest__WEBPACK_IMPORTED_MODULE_3__.paginateRest, _octokit_plugin_retry__WEBPACK_IMPORTED_MODULE_4__.retry
// throttling
).defaults({
    userAgent: `octokit-rest.js/${VERSION}`,
    throttle: {
        onRateLimit,
        onAbuseLimit,
    },
});
// istanbul ignore next no need to test internals of the throttle plugin
function onRateLimit(retryAfter, options, octokit) {
    octokit.log.warn(`Request quota exhausted for request ${options.method} ${options.url}`);
    if (options.request.retryCount === 0) {
        // only retries once
        octokit.log.info(`Retrying after ${retryAfter} seconds!`);
        return true;
    }
}
// istanbul ignore next no need to test internals of the throttle plugin
function onAbuseLimit(retryAfter, options, octokit) {
    octokit.log.warn(`Abuse detected for request ${options.method} ${options.url}`);
    if (options.request.retryCount === 0) {
        // only retries once
        octokit.log.info(`Retrying after ${retryAfter} seconds!`);
        return true;
    }
}

const App = _octokit_app__WEBPACK_IMPORTED_MODULE_0__.App.defaults({ Octokit });
const OAuthApp = _octokit_oauth_app__WEBPACK_IMPORTED_MODULE_5__.OAuthApp.defaults({ Octokit });




/***/ }),

/***/ 5185:
/*!***********************************!*\
  !*** ./node_modules/once/once.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wrappy = __webpack_require__(/*! wrappy */ 2417)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),

/***/ 9028:
/*!*************************************************************************!*\
  !*** ./node_modules/universal-github-app-jwt/dist-web/index.bundled.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "githubAppJwt": () => (/* binding */ o)
/* harmony export */ });
function t(t,n,r,e,i,a,o){try{var u=t[a](o),c=u.value}catch(t){return void r(t)}u.done?n(c):Promise.resolve(c).then(e,i)}function n(n){return function(){var r=this,e=arguments;return new Promise((function(i,a){var o=n.apply(r,e);function u(n){t(o,i,a,u,c,"next",n)}function c(n){t(o,i,a,u,c,"throw",n)}u(void 0)}))}}function r(t){for(var n=new ArrayBuffer(t.length),r=new Uint8Array(n),e=0,i=t.length;e<i;e++)r[e]=t.charCodeAt(e);return n}function e(t){return t.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function i(t){return e(btoa(JSON.stringify(t)))}var a=function(){var t=n((function*(t){var{privateKey:n,payload:a}=t;if(/BEGIN RSA PRIVATE KEY/.test(n))throw new Error("[universal-github-app-jwt] Private Key is in PKCS#1 format, but only PKCS#8 is supported. See https://github.com/gr2m/universal-github-app-jwt#readme");var o,u={name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}},c=(o=n.trim().split("\n").slice(1,-1).join(""),r(atob(o))),p=yield crypto.subtle.importKey("pkcs8",c,u,!1,["sign"]),f=function(t,n){return"".concat(i(t),".").concat(i(n))}({alg:"RS256",typ:"JWT"},a),l=r(f),s=function(t){for(var n="",r=new Uint8Array(t),i=r.byteLength,a=0;a<i;a++)n+=String.fromCharCode(r[a]);return e(btoa(n))}(yield crypto.subtle.sign(u.name,p,l));return"".concat(f,".").concat(s)}));return function(n){return t.apply(this,arguments)}}();function o(t){return u.apply(this,arguments)}function u(){return(u=n((function*(t){var{id:n,privateKey:r,now:e=Math.floor(Date.now()/1e3)}=t,i=e-30,o=i+600,u={iat:i,exp:o,iss:n};return{appId:n,expiration:o,token:yield a({privateKey:r,payload:u})}}))).apply(this,arguments)}


/***/ }),

/***/ 4282:
/*!*************************************************************!*\
  !*** ./node_modules/universal-user-agent/dist-web/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserAgent": () => (/* binding */ getUserAgent)
/* harmony export */ });
function getUserAgent() {
    if (typeof navigator === "object" && "userAgent" in navigator) {
        return navigator.userAgent;
    }
    if (typeof process === "object" && "version" in process) {
        return `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`;
    }
    return "<environment undetectable>";
}




/***/ }),

/***/ 2417:
/*!***************************************!*\
  !*** ./node_modules/wrappy/wrappy.js ***!
  \***************************************/
/***/ ((module) => {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ }),

/***/ 8686:
/*!******************************************!*\
  !*** ./node_modules/yallist/iterator.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";

module.exports = function (Yallist) {
  Yallist.prototype[Symbol.iterator] = function* () {
    for (let walker = this.head; walker; walker = walker.next) {
      yield walker.value
    }
  }
}


/***/ }),

/***/ 7322:
/*!*****************************************!*\
  !*** ./node_modules/yallist/yallist.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = Yallist

Yallist.Node = Node
Yallist.create = Yallist

function Yallist (list) {
  var self = this
  if (!(self instanceof Yallist)) {
    self = new Yallist()
  }

  self.tail = null
  self.head = null
  self.length = 0

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item)
    })
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i])
    }
  }

  return self
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next
  var prev = node.prev

  if (next) {
    next.prev = prev
  }

  if (prev) {
    prev.next = next
  }

  if (node === this.head) {
    this.head = next
  }
  if (node === this.tail) {
    this.tail = prev
  }

  node.list.length--
  node.next = null
  node.prev = null
  node.list = null

  return next
}

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var head = this.head
  node.list = this
  node.next = head
  if (head) {
    head.prev = node
  }

  this.head = node
  if (!this.tail) {
    this.tail = node
  }
  this.length++
}

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var tail = this.tail
  node.list = this
  node.prev = tail
  if (tail) {
    tail.next = node
  }

  this.tail = node
  if (!this.head) {
    this.head = node
  }
  this.length++
}

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  } else {
    this.head = null
  }
  this.length--
  return res
}

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value
  this.head = this.head.next
  if (this.head) {
    this.head.prev = null
  } else {
    this.tail = null
  }
  this.length--
  return res
}

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.next
  }
}

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.prev
  }
}

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.next
  }
  return res
}

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.prev
  }
  return res
}

Yallist.prototype.reduce = function (fn, initial) {
  var acc
  var walker = this.head
  if (arguments.length > 1) {
    acc = initial
  } else if (this.head) {
    walker = this.head.next
    acc = this.head.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i)
    walker = walker.next
  }

  return acc
}

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc
  var walker = this.tail
  if (arguments.length > 1) {
    acc = initial
  } else if (this.tail) {
    walker = this.tail.prev
    acc = this.tail.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i)
    walker = walker.prev
  }

  return acc
}

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.next
  }
  return arr
}

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.prev
  }
  return arr
}

Yallist.prototype.slice = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.splice = function (start, deleteCount, ...nodes) {
  if (start > this.length) {
    start = this.length - 1
  }
  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next
  }

  var ret = []
  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value)
    walker = this.removeNode(walker)
  }
  if (walker === null) {
    walker = this.tail
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev
  }

  for (var i = 0; i < nodes.length; i++) {
    walker = insert(this, walker, nodes[i])
  }
  return ret;
}

Yallist.prototype.reverse = function () {
  var head = this.head
  var tail = this.tail
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev
    walker.prev = walker.next
    walker.next = p
  }
  this.head = tail
  this.tail = head
  return this
}

function insert (self, node, value) {
  var inserted = node === self.head ?
    new Node(value, null, node, self) :
    new Node(value, node, node.next, self)

  if (inserted.next === null) {
    self.tail = inserted
  }
  if (inserted.prev === null) {
    self.head = inserted
  }

  self.length++

  return inserted
}

function push (self, item) {
  self.tail = new Node(item, self.tail, null, self)
  if (!self.head) {
    self.head = self.tail
  }
  self.length++
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self)
  if (!self.tail) {
    self.tail = self.head
  }
  self.length++
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list
  this.value = value

  if (prev) {
    prev.next = this
    this.prev = prev
  } else {
    this.prev = null
  }

  if (next) {
    next.prev = this
    this.next = next
  } else {
    this.next = null
  }
}

try {
  // add if support for Symbol.iterator is present
  __webpack_require__(/*! ./iterator.js */ 8686)(Yallist)
} catch (er) {}


/***/ }),

/***/ 3752:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1509:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByb2plY3QlMjBkYXRhXFxwcm9qZWN0c1xcaW9uaWNcXG9wZW5Gb3JnZVRlc3RBcHBcXHNyY1xcYXBwXFxleHBsb3JlLWNvbnRhaW5lclxcZXhwbG9yZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNGRjs7QURLQTtFQUNFLHFCQUFBO0FDRkYiLCJmaWxlIjoiZXhwbG9yZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iLCIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */";

/***/ }),

/***/ 959:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"container\">\n<!--   <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p> -->\n</div>";

/***/ }),

/***/ 5696:
/*!********************!*\
  !*** os (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 5007:
/*!***********************!*\
  !*** is-plain-object ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPlainObject": () => (/* binding */ isPlainObject)
/* harmony export */ });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}




/***/ }),

/***/ 2399:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@octokit/request/node_modules/is-plain-object/dist/is-plain-object.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPlainObject": () => (/* binding */ isPlainObject)
/* harmony export */ });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}




/***/ })

}]);
//# sourceMappingURL=default-src_app_event-emitter_service_ts-src_app_explore-container_explore-container_module_t-77f3b4.js.map