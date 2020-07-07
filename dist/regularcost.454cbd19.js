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
})({"globaldefaults.js":[function(require,module,exports) {
//This object is exported from this file and imported to most other files.  The idea is that there are default values used across the application.  
//The user would in general be able to modify these values from a simple UI or just accept the defaults
//Each value has a getter and setter method associated with it
var rateDefaults = {
  //growth is used as the default value for the annual growth of money in any year.  The value is considered without considering inflation, whihc is separately deducted 
  _growth: .05,
  //inflation rate is used to deduct against regular growth to keep all income/money value in today's dollars.  Income is discounted while costs are not and remain in 2020 dollars
  _inflation: .02,
  //real estate tax rate is used to determine total cost of homeownership-realEstateTax*home value.
  _realEstateTax: .02,
  //This is the default length of a home loan and can be changed for any specific home/loan
  _mortgageYears: 30,
  //This is the default interest rate of a home loan and can be changed for any specific home/loan
  _mortgageInterest: .035,
  //This is the assumed rate of annual home value growth.  This value does not account for inflation, but inflation is discounted when this value is used in any formula
  _homeValueGrowth: .03,

  get growth() {
    if (typeof this._growth === 'number') {
      return this._growth;
    } else {
      console.log("Enter valid number for growth rate");
    }
  },

  get inflation() {
    if (typeof this._inflation === 'number') {
      return this._inflation;
    } else {
      console.log("Enter valid number for inflation rate");
    }
  },

  get realEstateTax() {
    if (typeof this._realEstateTax === 'number') {
      return this._realEstateTax;
    } else {
      console.log("Enter valid number for real estate tax rate");
    }
  },

  get mortgageYears() {
    if (typeof this._mortgageYears === 'number') {
      return this._mortgageYears;
    } else {
      console.log("Enter valid number for years of mortgage");
    }
  },

  get mortgageInterest() {
    if (typeof this._mortgageInterest === 'number') {
      return this._mortgageInterest;
    } else {
      console.log("Enter valid number for mortgage interest rate");
    }
  },

  get homeValueGrowth() {
    if (typeof this._homeValueGrowth === 'number') {
      return this._homeValueGrowth;
    } else {
      console.log("Enter valid number for home value growth rate");
    }
  },

  set growth(newGrowth) {
    if (typeof newGrowth === 'number' && newGrowth < 1 && newGrowth > -.5) {
      this._growth = newGrowth;
    } else {
      console.log("Enter valid number for growth rate");
    }
  },

  set inflation(newInflation) {
    if (typeof newInflation === 'number' && newInflation < 1 && newInflation > -.5) {
      this._inflation = newInflation;
    } else {
      console.log("Enter valid number for inflation rate");
    }
  },

  set realEstateTax(newRealEstateTax) {
    if (typeof newRealEstateTax === 'number' && newRealEstateTax < 1 && newRealEstateTax > 0) {
      this._realEstateTax = newRealEstateTax;
    } else {
      console.log("Enter valid number for real estate tax rate");
    }
  },

  set mortgageYears(newMortgageYears) {
    if (typeof newMortgageYears === 'number' && newMortgageYears < 100 && newMortgageYears > 0) {
      this._mortgageYears = newMortgageYears;
    } else {
      console.log("Enter valid number for years of mortgage");
    }
  },

  set mortgageInterest(newMortgageInterest) {
    if (typeof newMortgageInterest === 'number' && newMortgageInterest < 1 && newMortgageInterest > 0) {
      this._mortgageInterest = newMortgageInterest;
    } else {
      console.log("Enter valid number for mortgage interest rate");
    }
  },

  set homeValueGrowth(newHomeValueGrowth) {
    if (typeof newHomeValueGrowth === 'number' && newHomeValueGrowth < 1 && newHomeValueGrowth > -.5) {
      this._homeValueGrowth = newHomeValueGrowth;
    } else {
      console.log("Enter valid number for home value growth rate");
    }
  }

};

function insertDefaultValues() {
  rateDefaults.growth = parseFloat(window.sessionStorage.getItem('growthRate'), 10);
  console.log("global defaults growth rate is now ".concat(rateDefaults.growth));
  rateDefaults.inflation = parseFloat(window.sessionStorage.getItem('inflation'), 10);
  console.log("global defaults inflation rate is now ".concat(rateDefaults.inflation));
  rateDefaults.realEstateTax = parseFloat(window.sessionStorage.getItem('propertyTax'), 10);
  console.log("global defaults property tax rate is now ".concat(rateDefaults.realEstateTax));
  rateDefaults.mortgageYears = parseInt(window.sessionStorage.getItem('mortgageLength'), 10);
  console.log("global defaults mortage length is now ".concat(rateDefaults.mortgageYears));
  rateDefaults.mortgageInterest = parseFloat(window.sessionStorage.getItem('mortgageRate'), 10);
  console.log("global defaults mortgage rate is now ".concat(rateDefaults.mortgageInterest));
  rateDefaults.homeValueGrowth = parseFloat(window.sessionStorage.getItem('homeGrowth'), 10);
  console.log("global defaults home value growth rate is now ".concat(rateDefaults.homeValueGrowth));
  window.sessionStorage.setItem('defaultDistributed', 1);
}

if (parseInt(window.sessionStorage.getItem('defaultCounter'), 10) < 2) {
  window.addEventListener('load', insertDefaultValues);
  /* const pullDefaultButton = document.getElementById("saveDefault");
  pullDefaultButton.addEventListener("click", insertDefaultValues); */

  var defaultCounter = parseInt(window.sessionStorage.getItem('defaultCounter'), 10) + 1;
  window.sessionStorage.setItem('defaultCounter', defaultCounter);
} else {
  console.log("Trying to add default event listener again!");
} //Only exporting one object from this file for now.  Future default values can be added to the same object or split out as needed


module.exports = rateDefaults;
},{}],"basicfunctions.js":[function(require,module,exports) {
//import rate default values for use in below functions-primarily growth rate and inflation rate.  
//These are passed as default paramter values to the function but can be changed at the function call
var rateDefaults = require('./globaldefaults.js'); //Grow Against Inflation is the basic function which calculates the new value of an amount of money after one year of growth.  
//Values are entered with raw growth rate and inflation is separate, with inflation discounting the growth rate within the calculation
//Typically this function will be called with years=1, to take one value and "grow" it by one year.  But in general this function can be 
//called with any number of years to calculate the future value of something.  This is particularly useful when calculating future salaries
//Start is the starting value of whatever is being grown.  ** is the symbol for exponent in JavaScript


var growAgainstInflation = function growAgainstInflation(start) {
  var years = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var grow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : rateDefaults.growth;
  var inflation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : rateDefaults.inflation;
  var newAmount = start * Math.pow(1 + (grow - inflation), years);
  return newAmount;
};

var basicFunctions = {
  growAgainstInflation: growAgainstInflation
}; //Set up to export more than one basic function with this basicFunctions object, but currently only have one to worry about

module.exports = basicFunctions;
},{"./globaldefaults.js":"globaldefaults.js"}],"person.js":[function(require,module,exports) {
//const rateDefaults = require('./globaldefaults.js');
//Import basic functions object and extract grow against infaltion function for calculating future home values as the value grows over time
var basicFunctions = require('./basicfunctions.js');

var growAgainstInflation = basicFunctions.growAgainstInflation;
console.log("Time Person page top part at ".concat(new Date().getSeconds(), " and ").concat(new Date().getMilliseconds())); //person creator takes all the required variables related to a person and their earnings, and saves them as an object.  This is a factory function for person objects
//Only certain values have a getter and setter method, these are the ones used by retirement functions
//Important method is yearly salary

var personCreator = function personCreator() {
  var _name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Person';

  var _age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;

  var _startingSalary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100000;

  var _salaryGrowth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : .05;

  var _salaryBumps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

  var _salaryPlateau = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

  var _retirementYear = arguments.length > 6 ? arguments[6] : undefined;

  var _preTaxContribution = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;

  var _companyMatch = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;

  return {
    //Name used to identify account owners for retirement
    _name: _name,
    //age when app is being run, important for retirement/RMD considerations
    _age: _age,
    _startingSalary: _startingSalary,
    //Salary growth is not tied to default 5% growth of money-likely to vary widely across people
    _salaryGrowth: _salaryGrowth,
    //Salary bumps are one time (one year) increases in salary meant to approximate promotion related income increases
    _salaryBumps: _salaryBumps,
    //salary plateau is a year after which salary growth slows, ceases, or reverses.  Has to be after all bumps
    _salaryPlateau: _salaryPlateau,
    //Salary is set to 0 after retirement year-no partial retirement support, though could accomplish this with bump/plateau theoretically
    _retirementYear: _retirementYear,
    //Only relevant if 401k account will be tied to this person.  If it doesn't apply, should be set to 0
    _preTaxContribution: _preTaxContribution,
    _companyMatch: _companyMatch,
    //With above information, can calculate estimated salary for this person for a given year
    yearlySalary: function yearlySalary(seekingYear) {
      var newSalary = this._startingSalary; //console.log(`Initial newSalary is ${newSalary}`);
      //y is the current year that function is being called in (2020)

      var y = new Date().getFullYear(); //First check if seeking year is before the current year, which wouldn't make much sense.  Return starting salary, which is always discounted by pre tax contribution rate (which could be 0 and therefore have no impact)

      if (seekingYear < y) {
        //console.log(`Seeking year before current year code is being executed`);
        return newSalary * (1 - this.preTaxContribution); //if seeking year is after retirement, salary is 0
      } else if (seekingYear >= this._retirementYear) {
        newSalary = 0; //console.log(`Seeking year after retirement year code is being executed`);

        return newSalary; //Check if there are salary bumps defined, and seeking year is after at least one of the bumps.  Or if plateau is defined, and seeking year is after plateau
      } else if (this._salaryBumps.length > 0 && seekingYear >= this._salaryBumps[0][0] || this._salaryPlateau.length > 0 && seekingYear >= this._salaryPlateau[0]) {
        //console.log(this._salaryBumps.length);
        //console.log(this._salaryPlateau.length);
        //Then check if seeking year is before plateau year (or there is no plateau)-therefore can only focus on salary bumps
        if (this._salaryPlateau.length === 0 || seekingYear < this._salaryPlateau[0]) {
          //first grow salary using growth rate and number of years between seeking year and current year (standard)
          newSalary = growAgainstInflation(newSalary, seekingYear - y, this._salaryGrowth); //console.log(`Second newSalary is ${newSalary}`);
          //relevant salary bumps are determined as the bumps which occur before the seeking year

          var relevantSalaryBumps = this._salaryBumps.filter(function (bump) {
            return bump[0] < seekingYear;
          }); //Then use relevant salary bumps to increase salary accoringly.  Important to note that percentage increases commute so order of operation doesn't matter                


          for (i = 0; i < relevantSalaryBumps.length; i++) {
            newSalary = growAgainstInflation(newSalary, 1, relevantSalaryBumps[i][1]); //console.log(`For loop with i = ${i}, newSalary is ${newSalary}`);
          } //console.log(`Salary bump return statement code is being executed`);


          return newSalary * (1 - this.preTaxContribution); //Now we are in the section where seeking year is after the salary plateau year
        } else {
          //If there are nonzero number of salary bumps, first repeat above section to calculate the salary at the end of the pre-plateau period.  No need to use relevant bumps since all bumps will be relevant
          if (this._salaryBumps.length > 0) {
            newSalary = growAgainstInflation(newSalary, this._salaryPlateau[0] - y - 1, this._salaryGrowth); //console.log(`Plateau before For loop, newSalary is ${newSalary}`);

            for (i = 0; i < this._salaryBumps.length; i++) {
              newSalary = growAgainstInflation(newSalary, 1, this._salaryBumps[i][1]); //console.log(`Plateau For loop with i = ${i}, newSalary is ${newSalary}`);
            } //then calculate salary growth in plateau period, using the relevant years and new salary growth value


            newSalary = growAgainstInflation(newSalary, seekingYear + 1 - this._salaryPlateau[0], this._salaryPlateau[1]); //console.log(`Plateau after For loop, newSalary is ${newSalary}`);

            return newSalary * (1 - this.preTaxContribution); //If there were no salary bumps to begin with, calculate salary at beginning of plateau period, then salary within plateau period
          } else {
            newSalary = growAgainstInflation(newSalary, this._salaryPlateau[0] - y - 1, this._salaryGrowth);
            newSalary = growAgainstInflation(newSalary, seekingYear + 1 - this._salaryPlateau[0], this._salaryPlateau[1]); //console.log(`Post plateau, no salary bumps code is being executed`);

            return newSalary * (1 - this.preTaxContribution);
          }
        } //if not, salary is calculated based on basic growth rate and number of years between first year and seeking year

      } else {
        newSalary = growAgainstInflation(this._startingSalary, seekingYear - y, this._salaryGrowth); //console.log(`no salary bumps code is being executed`);

        return newSalary;
      }
    },

    get name() {
      if (typeof this._name === 'string') {
        return this._name;
      } else {
        console.log("Enter valid name for this person (get)");
      }
    },

    set name(newName) {
      if (typeof newName === 'string') {
        this._name = newName;
      } else {
        console.log("Enter valid name for this person (set)");
      }
    },

    //method to return person's age for a given year
    age: function (_age2) {
      function age(_x) {
        return _age2.apply(this, arguments);
      }

      age.toString = function () {
        return _age2.toString();
      };

      return age;
    }(function (year) {
      var y = new Date().getFullYear();

      if (year < y || year > 2200) {
        console.log("Enter a valid year to return person's age");
      } else {
        age = year - y + this._age;
        return age;
      }
    }),

    get preTaxContribution() {
      if (typeof this._preTaxContribution === 'number') {
        return this._preTaxContribution;
      } else {
        console.log("Enter valid pre tax contribution rate (get)");
      }
    },

    set preTaxContribution(newRate) {
      if (typeof newRate === 'number' && newRate >= 0 && rewRate <= .5) {
        this._preTaxContribution = newRate;
      } else {
        console.log("Enter valid pre tax contribution rate (set)");
      }
    },

    get companyMatch() {
      if (typeof this._companyMatch === 'number') {
        return this._companyMatch;
      } else {
        console.log("Enter valid company match contribution rate (get)");
      }
    },

    set companyMatch(newRate) {
      if (typeof newRate === 'number' && newRate >= 0 && rewRate <= .5) {
        this._companyMatch = newRate;
      } else {
        console.log("Enter valid company match contribution rate (set)");
      }
    }

  };
}; //Household members is an array which contains the people invovled, each person being an object defined above by person creator


var householdMembers = [];

function insertPersonValues() {
  numberOfPeople = parseInt(window.sessionStorage.getItem('NOP'), 10);
  var personArray = JSON.parse(window.sessionStorage.getItem('personArray'));
  var names = [];
  var age = [];
  var startingSalary = [];
  var salaryGrowth = [];
  var salaryPlateau = [[], []];
  var retirementYears = [];
  var preTax = [];
  var companyMatch = [];
  var salaryBumps = [[], []];

  for (var _i = 0; _i < numberOfPeople; _i++) {
    names[_i] = personArray[_i][0];
    age[_i] = personArray[_i][1];
    startingSalary[_i] = personArray[_i][2];
    salaryGrowth[_i] = personArray[_i][3];
    salaryPlateau[_i][0] = personArray[_i][4];
    salaryPlateau[_i][1] = personArray[_i][5];
    retirementYears[_i] = personArray[_i][6];
    preTax[_i] = personArray[_i][7];
    companyMatch[_i] = personArray[_i][8];
  }

  console.log("Person page array is ".concat(personArray));
  console.log("Person page NOP is ".concat(numberOfPeople));
  console.log("Person page names is ".concat(names));
  console.log("Person page ages are ".concat(age));
  console.log("Person page starting salaries are ".concat(startingSalary));
  console.log("Person page salary growth is ".concat(salaryGrowth));
  console.log("Person page salary plateaus is ".concat(salaryPlateau));
  console.log("Person page retirement years are ".concat(retirementYears));
  console.log("Person page pre tax are ".concat(preTax));
  console.log("Person page company match are ".concat(companyMatch));
  var bumpArray = JSON.parse(window.sessionStorage.getItem('bumpArray'));
  salaryBumps = bumpArray;
  console.log("Person page bump array is ".concat(salaryBumps));
  window.sessionStorage.setItem('salaryDistributed', 1); //For loop to run through the people defined by UI inputs and create a person object for each using the defined values

  for (i = 0; i < names.length; i++) {
    householdMembers[i] = personCreator(names[i], age[i], startingSalary[i], salaryGrowth[i], salaryBumps[i], salaryPlateau[i], retirementYears[i], preTax[i], companyMatch[i]);
  }

  console.log("Household members are ".concat(householdMembers));
  window.sessionStorage.setItem('salaryConsumed', 1);
  console.log("Time Person page values inserted at ".concat(new Date().getSeconds(), " and ").concat(new Date().getMilliseconds()));
}

if (parseInt(window.sessionStorage.getItem('personCounter'), 10) < 2) {
  window.addEventListener('load', insertPersonValues);
  var personCounter = parseInt(window.sessionStorage.getItem('personCounter'), 10) + 1;
  window.sessionStorage.setItem('personCounter', personCounter);
} else {
  console.log("Trying to add person event listener again!");
}

console.log("Time Person page bottom at ".concat(new Date().getSeconds(), " and ").concat(new Date().getMilliseconds())); //This is meant to be user entered data, stored in some ararys by the UI to be consumed by the app
//In general can have more than two people, but won't make sense for tax purposes
//All of these arrays need to exist, even if they are empty

var names2 = ['Jamie', 'John'];
var age2 = [31, 30];
var startingSalary2 = [60000, 116000];
var salaryGrowth2 = [.03, .04];
var retirementYears2 = [2055, 2060];
var salaryBumps2 = [[], [[2025, .05], [2035, .05]]];
var salaryPlateau2 = [[2045, .02], [2045, 0.02]];
var preTax2 = [0, .06];
var companyMatch2 = [0, .075];

var returnAnnualSalary = function returnAnnualSalary(year) {
  var annualSalaryValues = []; //Create array of the annual cost of all people in the household

  householdMembers.forEach(function (person) {
    annualSalaryValues.push(person.yearlySalary(year));
  }); //then reduce above array to sum up all those annual cost values into one value, representing all home value ownership costs

  var annualSalary = annualSalaryValues.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  });
  return annualSalary;
}; //Consolidate function to return person creator function (which may not be necessary) and household members array, to be exported and used in overall scheme to calculate life for each year 


var personExports = {
  householdMembers: householdMembers,
  returnAnnualSalary: returnAnnualSalary
};
module.exports = personExports;
},{"./basicfunctions.js":"basicfunctions.js"}],"regularcost.js":[function(require,module,exports) {
var personImports = require('./person.js');

var householdMembers = personImports.householdMembers;
var monthlyDiscretionarySpending;
var monthlyGrocerySpending;
var monthlyRetirementSpending;

function insertCostValues() {
  monthlyDiscretionarySpending = parseInt(window.sessionStorage.getItem('disc'), 10);
  monthlyGrocerySpending = parseInt(window.sessionStorage.getItem('groc'), 10);
  monthlyRetirementSpending = parseInt(window.sessionStorage.getItem('retir'), 10);
  console.log("Cost page discretionary is ".concat(monthlyDiscretionarySpending));
  console.log("Cost page grocery is ".concat(monthlyGrocerySpending));
  console.log("Cost page retirement is ".concat(monthlyRetirementSpending));
  window.sessionStorage.setItem('regCostDistributed', 1);
  console.log("Time Cost page values inserted at ".concat(new Date().getSeconds(), " and ").concat(new Date().getMilliseconds()));
}

window.addEventListener('load', insertCostValues);

var regSpending2 = function regSpending2(year) {
  var disc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : monthlyDiscretionarySpending;
  var groc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : monthlyGrocerySpending;
  var retir = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : monthlyRetirementSpending;
  console.log("Time Cost page regspending called at ".concat(new Date().getSeconds(), " and ").concat(new Date().getMilliseconds()));
  var annualCost = 0;

  if (year >= householdMembers[0]._retirementYear) {
    annualCost = retir * 12;
    return annualCost;
  } else if (year >= householdMembers[0]._retirementYear) {
    annualCost = retir * 12;
    return annualCost;
  } else {
    annualCost = (disc + groc) * 12;
    return annualCost;
  }
};

console.log("Time Cost page bottom at ".concat(new Date().getSeconds(), " and ").concat(new Date().getMilliseconds()));
module.exports = regSpending2;
},{"./person.js":"person.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","regularcost.js"], null)
//# sourceMappingURL=/regularcost.454cbd19.js.map