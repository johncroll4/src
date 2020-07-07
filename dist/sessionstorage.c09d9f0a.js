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
})({"sessionstorage.js":[function(require,module,exports) {
window.sessionStorage.setItem('defaultStored', 0);
window.sessionStorage.setItem('housingStored', 0);
window.sessionStorage.setItem('salaryStored', 0);
window.sessionStorage.setItem('costStored', 0);
window.sessionStorage.setItem('accountStored', 0);
window.sessionStorage.setItem('defaultDistributed', 0);
window.sessionStorage.setItem('housingDistributed', 0);
window.sessionStorage.setItem('salaryDistributed', 0);
window.sessionStorage.setItem('regCostDistributed', 0);
window.sessionStorage.setItem('kidCostDistributed', 0);
window.sessionStorage.setItem('accountDistributed', 0);
window.sessionStorage.setItem('housingConsumed', 0);
window.sessionStorage.setItem('salaryConsumed', 0);

function pullCostValues() {
  var discElement = document.getElementById("monthlyDisc");
  window.sessionStorage.setItem('disc', discElement.value);
  var grocElement = document.getElementById("monthlyGroc");
  window.sessionStorage.setItem('groc', grocElement.value);
  var retirElement = document.getElementById("monthlyRetir");
  window.sessionStorage.setItem('retir', retirElement.value);
  console.log("Storage Page Discretionary is ".concat(window.sessionStorage.getItem('disc')));
  console.log("Storage Page Grocery is ".concat(window.sessionStorage.getItem('groc')));
  console.log("Storage Page Retirement is ".concat(window.sessionStorage.getItem('retir')));
  var nokElement = document.getElementById("kidNumber");
  window.sessionStorage.setItem('NOK', nokElement.value);
  console.log("Storage Page NOK is ".concat(window.sessionStorage.getItem('NOK')));
  var numberOfKids = parseInt(nokElement.value, 10);
  var kidArray = [];

  for (var i = 0; i < numberOfKids; i++) {
    var j = i + 1;
    kidArray[i] = [document.getElementById('kidYear' + j).valueAsNumber, document.getElementById('dayCare' + j).checked, document.getElementById('privCollege' + j).checked];
  }

  window.sessionStorage.setItem('kidArray', JSON.stringify(kidArray));
  console.log("Storage Page kid array is ".concat(window.sessionStorage.getItem('kidArray')));
  var kidElement = document.getElementById("monthlyKid");
  window.sessionStorage.setItem('monthlyKid', kidElement.value);
  console.log("Storage Page monthly kid is ".concat(window.sessionStorage.getItem('monthlyKid')));
  var dayCareElement = document.getElementById("dayCare");
  window.sessionStorage.setItem('dayCare', dayCareElement.value);
  console.log("Storage Page day care is ".concat(window.sessionStorage.getItem('dayCare')));
  var privElement = document.getElementById("privCollege");
  window.sessionStorage.setItem('privCollege', privElement.value);
  console.log("Storage Page annual private college is ".concat(window.sessionStorage.getItem('privCollege')));
  var pubElement = document.getElementById("pubCollege");
  window.sessionStorage.setItem('pubCollege', pubElement.value);
  console.log("Storage Page annual public is ".concat(window.sessionStorage.getItem('pubCollege')));
  window.sessionStorage.setItem('costStored', 1);
}

var pullCostButton3 = document.getElementById("saveCost");
pullCostButton3.addEventListener("click", pullCostValues);

function pullDefaultValues() {
  var growthElement = document.getElementById("growthRate");
  window.sessionStorage.setItem('growthRate', growthElement.value);
  console.log("Storage Page Growth is ".concat(window.sessionStorage.getItem('growthRate')));
  var inflationElement = document.getElementById("inflation");
  window.sessionStorage.setItem('inflation', inflationElement.value);
  console.log("Storage Page Inflation is ".concat(window.sessionStorage.getItem('inflation')));
  var properyTaxElement = document.getElementById("propertyTax");
  window.sessionStorage.setItem('propertyTax', properyTaxElement.value);
  console.log("Storage Page Property Tax is ".concat(window.sessionStorage.getItem('propertyTax')));
  var mortgageLengthElement = document.getElementById("mortgageLength");
  window.sessionStorage.setItem('mortgageLength', mortgageLengthElement.value);
  console.log("Storage Page Mortgage Length is ".concat(window.sessionStorage.getItem('mortgageLength')));
  var mortgageRateElement = document.getElementById("mortgageRate");
  window.sessionStorage.setItem('mortgageRate', mortgageRateElement.value);
  console.log("Storage Page Mortgage Rate is ".concat(window.sessionStorage.getItem('mortgageRate')));
  var homeGrowthElement = document.getElementById("homeGrowth");
  window.sessionStorage.setItem('homeGrowth', homeGrowthElement.value);
  console.log("Storage Page Home Value Growth is ".concat(window.sessionStorage.getItem('homeGrowth')));
  window.sessionStorage.setItem('defaultStored', 1);
}

var pullDefaultButton = document.getElementById("saveDefault");
pullDefaultButton.addEventListener("click", pullDefaultValues);
window.sessionStorage.setItem('defaultCounter', 1);

function pullHousingValues() {
  var nohElement = document.getElementById("houseNumber");
  var numberOfHouses = parseInt(nohElement.value, 10);
  window.sessionStorage.setItem('NOH', numberOfHouses);
  console.log("Storage Page NOH is ".concat(window.sessionStorage.getItem('NOH')));
  var houseArray = [];

  for (var i = 0; i < numberOfHouses; i++) {
    var j = i + 1;
    houseArray[i] = [document.getElementById('houseYear' + j).valueAsNumber, document.getElementById('houseAmount' + j).valueAsNumber, document.getElementById('fullTransfer' + j).checked];
  }

  window.sessionStorage.setItem('houseArray', JSON.stringify(houseArray));
  console.log("Storage Page house array is ".concat(window.sessionStorage.getItem('houseArray')));
  window.sessionStorage.setItem('housingStored', 1);
}

var pullHousingButton = document.getElementById("saveHousing");
pullHousingButton.addEventListener("click", pullHousingValues);

function pullAccountValues() {
  var noaElement = document.getElementById("accountNumber");
  var numberOfAccounts = parseInt(noaElement.value, 10);
  window.sessionStorage.setItem('NOA', numberOfAccounts);
  console.log("Storage Page NOA is ".concat(window.sessionStorage.getItem('NOA')));
  var accountArray = [];

  for (var i = 0; i < numberOfAccounts; i++) {
    var j = i + 1;
    accountArray[i] = [document.getElementById('accountType' + j).value, document.getElementById('accountOwner' + j).value, document.getElementById('accountAmount' + j).valueAsNumber];
  }

  window.sessionStorage.setItem('accountArray', JSON.stringify(accountArray));
  console.log("Storage Page account array is ".concat(window.sessionStorage.getItem('accountArray')));
  window.sessionStorage.setItem('accountStored', 1);
}

var pullAccountsButton = document.getElementById("saveAccounts");
pullAccountsButton.addEventListener("click", pullAccountValues);

function pullPersonValues() {
  var nopElement = document.getElementById("personNumber");
  var numberOfPeople = parseInt(nopElement.value, 10);
  window.sessionStorage.setItem('NOP', numberOfPeople);
  console.log("Storage Page NOP is ".concat(window.sessionStorage.getItem('NOP')));
  var nameA = document.getElementById("nameA").value;
  var ageA = document.getElementById("ageA").valueAsNumber;
  var startingSalaryA = document.getElementById("startingSalaryA").valueAsNumber;
  var growthA = document.getElementById("growthA").valueAsNumber;
  var plateauYearA = document.getElementById("plateauYearA").valueAsNumber;
  var plateauGrowthA = document.getElementById("plateauGrowthA").valueAsNumber;
  var retirementA = document.getElementById("retirementA").valueAsNumber;
  var preTaxA = document.getElementById("preTaxA").valueAsNumber;
  var companyMatchA = document.getElementById("companyMatchA").valueAsNumber;
  var nameB = document.getElementById("nameB").value;
  var ageB = document.getElementById("ageB").valueAsNumber;
  var startingSalaryB = document.getElementById("startingSalaryB").valueAsNumber;
  var growthB = document.getElementById("growthB").valueAsNumber;
  var plateauYearB = document.getElementById("plateauYearB").valueAsNumber;
  var plateauGrowthB = document.getElementById("plateauGrowthB").valueAsNumber;
  var retirementB = document.getElementById("retirementB").valueAsNumber;
  var preTaxB = document.getElementById("preTaxB").valueAsNumber;
  var companyMatchB = document.getElementById("companyMatchB").valueAsNumber;
  var personArray = [];
  personArray[0] = [nameA, ageA, startingSalaryA, growthA, plateauYearA, plateauGrowthA, retirementA, preTaxA, companyMatchA];

  if (numberOfPeople == 2) {
    personArray[1] = [nameB, ageB, startingSalaryB, growthB, plateauYearB, plateauGrowthB, retirementB, preTaxB, companyMatchB];
  }

  window.sessionStorage.setItem('personArray', JSON.stringify(personArray));
  console.log("Storage Page person array is ".concat(window.sessionStorage.getItem('personArray')));
  var bumpNumberA = document.getElementById("bumpNumberA").value;
  var bumpNumberB = document.getElementById("bumpNumberB").value;
  var bumpArray = [[], []];

  if (numberOfPeople == 1) {
    if (bumpNumberA == 0) {
      console.log("No bumps for person A");
    } else if (bumpNumberA > 0) {
      for (var i = 0; i < bumpNumberA; i++) {
        var j = i + 1;
        bumpArray[0][i] = [document.getElementById('bumpYearA' + j).valueAsNumber, document.getElementById('bumpGrowthA' + j).valueAsNumber];
      }
    } else {
      console.log("Issue with salary bumps for person A");
    }
  } else if (numberOfPeople == 2) {
    if (bumpNumberA == 0 && bumpNumberB == 0) {
      console.log("No bumps for either person");
    } else if (bumpNumberB == 0 && bumpNumberA > 0) {
      for (var _i = 0; _i < bumpNumberA; _i++) {
        var _j = _i + 1;

        bumpArray[0][_i] = [document.getElementById('bumpYearA' + _j).valueAsNumber, document.getElementById('bumpGrowthA' + _j).valueAsNumber];
      }
    } else if (bumpNumberA == 0 && bumpNumberB > 0) {
      for (var _i2 = 0; _i2 < bumpNumberB; _i2++) {
        var _j2 = _i2 + 1;

        bumpArray[1][_i2] = [document.getElementById('bumpYearB' + _j2).valueAsNumber, document.getElementById('bumpGrowthB' + _j2).valueAsNumber];
      }
    } else if (bumpNumberA > 0 && bumpNumberB > 0) {
      for (var h = 0; h < bumpNumberA; h++) {
        for (var _i3 = 0; _i3 < bumpNumberB; _i3++) {
          var _j3 = h + 1;

          var k = _i3 + 1;
          bumpArray[0][h] = [document.getElementById('bumpYearA' + _j3).valueAsNumber, document.getElementById('bumpGrowthA' + _j3).valueAsNumber];
          bumpArray[1][_i3] = [document.getElementById('bumpYearB' + k).valueAsNumber, document.getElementById('bumpGrowthB' + k).valueAsNumber];
        }
      }
    } else {
      console.log("Issue with salary bumps-none of the if statements were activated");
    }
  } else {
    console.log("Issue with number of people-none of the if statements were activated");
  }

  window.sessionStorage.setItem('bumpArray', JSON.stringify(bumpArray));
  console.log("Storage Page bump array is ".concat(window.sessionStorage.getItem('bumpArray')));
  window.sessionStorage.setItem('salaryStored', 1);
}

var pullPersonButton = document.getElementById("savePerson");
pullPersonButton.addEventListener("click", pullPersonValues);
window.sessionStorage.setItem('personCounter', 1);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50910" + '/');

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
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","sessionstorage.js"], null)
//# sourceMappingURL=/sessionstorage.c09d9f0a.js.map