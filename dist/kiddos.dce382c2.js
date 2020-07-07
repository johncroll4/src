// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"kiddos.js":[function(require,module,exports) {
var numberOfKids2;
var yearsBorn2 = [];
var requireDayCare2 = [];
var privateCollege2 = [];
var monthlyCost2;
var dayCareMonthly2;
var privateCollegeAnnual2;
var publicCollegeAnnual2;
var pullCostButton4 = document.getElementById("saveKidCost");
pullCostButton4.addEventListener("click", insertKidValues);

function insertKidValues() {
  console.log("caller is ".concat(insertKidValues.caller));
  console.trace();
  numberOfKids2 = parseInt(window.localStorage.getItem('NOK'), 10);
  var kidArray = JSON.parse(window.localStorage.getItem('kidArray'));

  for (var _i = 0; _i < numberOfKids2; _i++) {
    yearsBorn2[_i] = kidArray[_i][0];
    requireDayCare2[_i] = kidArray[_i][1];
    privateCollege2[_i] = kidArray[_i][2];
  }

  console.log("Kid page NOK is ".concat(numberOfKids2));
  console.log("Kid page years born is ".concat(yearsBorn2));
  console.log("Kid page day care y/n is ".concat(requireDayCare2));
  console.log("Kid page private college y/n is ".concat(privateCollege2));
  monthlyCost2 = parseInt(window.localStorage.getItem('monthlyKid'), 10);
  console.log("Kid page monthly cost is ".concat(monthlyCost2));
  dayCareMonthly2 = parseInt(window.localStorage.getItem('dayCare'), 10);
  console.log("Kid page day care is ".concat(dayCareMonthly2));
  privateCollegeAnnual2 = parseInt(window.localStorage.getItem('privCollege'), 10);
  console.log("Kid page private college is ".concat(privateCollegeAnnual2));
  publicCollegeAnnual2 = parseInt(window.localStorage.getItem('pubCollege'), 10);
  console.log("Kid page public college is ".concat(publicCollegeAnnual2));
} //This is meant to be user entered data, stored in some ararys by the UI to be consumed by the app


var numberOfKids = 3;
var yearsBorn = [2022, 2024, 2026];
var names = ['Frankie', 'Suzie', 'Armando']; //Require day care = true means nobody is home to take care of the kid from age 0-4

var requireDayCare = [true, true, true]; //Determines annual cost of college for ages 19-22

var privateCollege = [true, true, true]; //regular monthly cost whenver the kid is at home 0-18

var monthlyCost = 1500; //cost of daycare if applicable, ages 0-4

var dayCareMonthly = 1000;
var privateCollegeAnnual = 60000;
var publicCollegeAnnual = 30000; //standard tax credit for dependent

var taxCredit = 1500; //Kid creator takes all the required variables related to the cost of a kid, and saves them as an object.  This is a factory function for kid objects
//Really only need a name and year born, default values are reasonable
//Important method is yearlyCost

var kidCreator = function kidCreator() {
  var _name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Kid';

  var _yearBorn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2020;

  var _requiresDayCare = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var _privateCollege = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  return {
    _name: _name,
    _yearBorn: _yearBorn,
    _requiresDayCare: _requiresDayCare,
    _privateCollege: _privateCollege,
    //With above information, can calculate estimated cost for this kid for a given year
    yearlyCost: function yearlyCost(seekingYear) {
      var cost = 0; //if seeking year is before birth year, cost is 0

      if (seekingYear < this._yearBorn) {
        cost = 0; //if seeking year occurs between age 0 and 4, and that kid requires day care, enter this section
      } else if (seekingYear - this._yearBorn < 4 && this._requiresDayCare) {
        //cost is regular monthly cost + daycare cost
        cost = (monthlyCost + dayCareMonthly) * 12 - taxCredit; //This section is for kids aged 0-4 that don't require daycare, or any kid aged 0-18 which wasn't caught by previous else if section
      } else if (seekingYear - this._yearBorn < 4 && !this._requiresDayCare || seekingYear - this._yearBorn <= 18) {
        //cost does not include daycare
        cost = monthlyCost * 12 - taxCredit; //Seeking year falls within college years for private college
      } else if (seekingYear - this._yearBorn > 18 && seekingYear - this._yearBorn < 23 && this._privateCollege) {
        cost = privateCollegeAnnual - taxCredit; //Seeking year falls within college years for public college
      } else if (seekingYear - this._yearBorn > 18 && seekingYear - this._yearBorn < 23 && !this._privateCollege) {
        cost = publicCollegeAnnual - taxCredit; //Kid has left the nest, no cost
      } else if (seekingYear - this._yearBorn > 22) {
        cost = 0;
      }

      return cost;
    }
  };
}; //Kiddos is an array which contains the kids invovled, each kid being an object defined above by kid creator


var kiddos = []; //For loop to run through the kids defined by UI inputs and create a kid object for each using the defined values

for (i = 0; i < numberOfKids; i++) {
  kiddos[i] = kidCreator(names[i], yearsBorn[i], requireDayCare[i], privateCollege[i]);
} //This function takes a year as a parameter and returns the annual cost of having kids for that year.  Will add up costs of multiple kids at the same time


var returnAnnualKidCost = function returnAnnualKidCost(year) {
  var annualCostValues = [];
  kiddos.forEach(function (kid) {
    //for each kid, add the cost for the given year to an array
    annualCostValues.push(kid.yearlyCost(year));
  }); //then reduce above array to sum up kid cost values into one total cost number

  var annualCost = annualCostValues.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  });
  return annualCost;
}; //export annual kid cost calculator to be used in overall life yearly calculations


module.exports = returnAnnualKidCost;
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60146" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","kiddos.js"], null)
//# sourceMappingURL=/kiddos.dce382c2.js.map