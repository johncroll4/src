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
},{"./globaldefaults.js":"globaldefaults.js"}],"homecalcs.js":[function(require,module,exports) {
//import rate default values for use in below functions-growth rate, inflation rate, mortgage interest rate, mortgage years 
////These are passed as default paramter values to the function but can be changed at the function call
var rateDefaults = require('./globaldefaults.js'); //Import basic functions object and extract grow against infaltion function for calculating future home values as the value grows over time


var basicFunctions = require('./basicfunctions.js');

var growAgainstInflation = basicFunctions.growAgainstInflation; //home creator takes all the required variables related to a home purchase and saves them as an object.  This is a factory function for home objects
//Every value has a getter and setter method, though most of them are probably not necessary
//Important method is yearly values

var homeCreator = function homeCreator(_number, _yearPurchased, _yearSold, _originalValue) {
  var _growthRate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : rateDefaults.homeValueGrowth;

  var _mortgageInterestRate = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : rateDefaults.mortgageInterest;

  var _realEstateTaxRate = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : rateDefaults.realEstateTax;

  var _downPayment = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : .2 * _originalValue;

  var _mortgageYears = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : rateDefaults.mortgageYears;

  return {
    //Number just refers to which house in the progression of owning homes this particualr home object is referring to-may not be necessary-could probably just use year purchased/sold
    _number: _number,
    //Year when the house is purchased-helps set the range for which the house has meaningful data like value, equity, loan remaining, etc.
    _yearPurchased: _yearPurchased,
    //Year when the house is sold-helps set the range for which the house has meaningful data like value, equity, loan remaining, etc.
    _yearSold: _yearSold,
    //Purchase price of the home
    _originalValue: _originalValue,
    //Growth rate can be left as default or set when calling home creator.  Would need an array of growth rates set by user, and that array to be consumed, to support this
    _growthRate: _growthRate,
    //Growth rate can be left as default or set when calling home creator.  Would need an array of interest rates set by user, and that array to be consumed, to support this
    _mortgageInterestRate: _mortgageInterestRate,
    //real estate tax rate rate can be left as default or set when calling home creator.  Would need an array of tax rates set by user, and that array to be consumed, to support this
    _realEstateTaxRate: _realEstateTaxRate,
    //Down payment will default to 20% if nothing provided.  If full transfer is true above, the previous home's equity will be used as DP regardless of what % that represents
    _downPayment: _downPayment,
    //Mortgage years can be left as default or set when calling home creator.  Would need an array of loan lengths set by user, and that array to be consumed, to support this
    _mortgageYears: _mortgageYears,
    //yearly values takes in any year and returns relevant values for the home-the monthly payment (which does not change over time), amount of equity in the home,
    //remaining loon balance, and the overall value of the home.  These are returned as four objets which make up one parent object
    yearlyValues: function yearlyValues() {
      var seekingYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._yearPurchased;

      //start by making sure the year being passed to method is reasonable
      if (seekingYear > 2100 || seekingYear < 1950) {
        console.log("Please enter a valid year to return relevant home values");
      } else {
        //Then calculate the monthly payment of the loan based on outstanding principle, interest rate, length of mortgage, etc.  Standard loan calculator formula
        //This payment is monthly which is one of the only values in the app which refers to a montly value-hence the *12 and /12 in the formula
        var monthlyPayment = (this._originalValue - this._downPayment) * (this._mortgageInterestRate / 12 * Math.pow(1 + this._mortgageInterestRate / 12, this._mortgageYears * 12)) / (Math.pow(1 + this._mortgageInterestRate / 12, this._mortgageYears * 12) - 1); //Annual cost section

        var annualCost; //If seeking year does not fall within the range of when the house is actually owned, annual cost is 0

        if (seekingYear > this._yearSold || seekingYear <= this._yearPurchased) {
          annualCost = 0; //Check if seeking year is after the loan has been fully paid but also before the year sold-basically when the only cost associated with the home is ongoing real estate tax payments
        } else if (seekingYear > this._yearPurchased + this._mortgageYears) {
          //annual cost in this scenario is just the growing value of the home times the real estate tax rate
          annualCost = growAgainstInflation(this._originalValue, seekingYear - this._yearPurchased, this._growthRate, rateDefaults.inflation) * this._realEstateTaxRate;
        } //Now we are in the "normal" range when the house is actually owned and not yet paid off
        else {
            //annual cost is the constant monthly payment*12 + the growing value of the home times the real estate tax rate
            annualCost = monthlyPayment * 12 + growAgainstInflation(this._originalValue, seekingYear - this._yearPurchased, this._growthRate, rateDefaults.inflation) * this._realEstateTaxRate;
          } //Remaining balance on the loan section


        var remainingBalance; //If the seeking year is before the house is purchased, after it is sold, or after the loan is fully paid off, remaining balance is 0

        if (seekingYear > this._yearPurchased + this._mortgageYears || seekingYear > this._yearSold || seekingYear <= this._yearPurchased) {
          remainingBalance = 0;
        } else {
          //If not, remaining balance is calculated by another, related loan calculator formula using loan starting value, length, and interest rate
          remainingBalance = (this._originalValue - this._downPayment) * (Math.pow(1 + this._mortgageInterestRate / 12, this._mortgageYears * 12) - Math.pow(1 + this._mortgageInterestRate / 12, (seekingYear - this._yearPurchased) * 12)) / (Math.pow(1 + this._mortgageInterestRate / 12, this._mortgageYears * 12) - 1);
        } //Equity section-how much money the owner has as an asset in the home


        var equity; //If the house hasn't been purhcased yet, or has already been sold, equity is 0 (equity from a home sale will have already been transferred to a cash account or to another home)

        if (seekingYear > this._yearSold || seekingYear <= this._yearPurchased) {
          equity = 0;
        } else {
          //If the home is owned in the seeking year, equity is calculated as the value of the home minus the above calculated remaining balance on the loan
          equity = growAgainstInflation(this._originalValue, seekingYear - this._yearPurchased, this._growthRate, rateDefaults.inflation) - remainingBalance;
        } //define object which is used to return all releavnt values for that home in the given year 


        var homeValueAtCertainYear = {
          monthlyPayment: monthlyPayment,
          annualCost: annualCost,
          remainingBalance: remainingBalance,
          equity: equity
        };
        return homeValueAtCertainYear;
      }
    },

    get number() {
      if (typeof this._number === 'number') {
        return this._number;
      } else {
        console.log("Enter valid number for which house number this is");
      }
    },

    set number(newNumber) {
      if (typeof newNumber === 'number' && newNumber > 0 && newNumber > 100) {
        this._number = newNumber;
      } else {
        console.log("Enter valid number for which house number this is");
      }
    },

    get yearPurchased() {
      if (typeof this._yearPurchased === 'number') {
        return this._yearPurchased;
      } else {
        console.log("Enter valid year for the purchase year of the house");
      }
    },

    set yearPurchased(newYear) {
      if (typeof newYear === 'number' && newYear > 1900 && newYear < 3000) {
        this._yearPurchased = newYear;
      } else {
        console.log("Enter valid year for the purchase year of the house");
      }
    },

    get yearSold() {
      if (typeof this._yearSold === 'number') {
        return this._yearSold;
      } else {
        console.log("Enter valid year for the year the house was sold");
      }
    },

    set yearSold(newYear) {
      if (typeof newYear === 'number' && newYear >= this._yearPurchased && newYear < 3000) {
        this._yearSold = newYear;
      } else {
        console.log("Enter valid year for the year the house was sold");
      }
    },

    get originalValue() {
      if (typeof this._originalValue === 'number') {
        return this._originalValue;
      } else {
        console.log("Enter valid number for the original value of the house");
      }
    },

    set originalValue(newValue) {
      if (typeof newValue === 'number' && newValue < 1 && newValue > -.5) {
        this._originalValue = newValue;
      } else {
        console.log("Enter valid number for the original value of the house");
      }
    },

    get growthRate() {
      if (typeof this._growthRate === 'number') {
        return this._growthRate;
      } else {
        console.log("Enter valid number for the original value of the house");
      }
    },

    set growthRate(newGrowth) {
      if (typeof newGrowth === 'number' && newGrowth < 1 && newGrowth > -.5) {
        this._growthRate = newGrowth;
      } else {
        console.log("Enter valid number for the original value of the house");
      }
    },

    get mortgageInterestRate() {
      if (typeof this._mortgageInterestRate === 'number') {
        return this._mortgageInterestRate;
      } else {
        console.log("Enter valid number for the original value of the house");
      }
    },

    set mortgageInterestRate(newRate) {
      if (typeof newRate === 'number' && newRate < 1 && newRate > 0) {
        this._mortgageInterestRate = newRate;
      } else {
        console.log("Enter valid number for the original value of the house");
      }
    },

    get realEstateTaxRate() {
      if (typeof this._realEstateTaxRate === 'number') {
        return this._realEstateTaxRate;
      } else {
        console.log("Enter valid number for the original value of the house");
      }
    },

    set realEstateTaxRate(newTaxRate) {
      if (typeof newTaxRate === 'number' && newTaxRate < 1 && newTaxRate > 0) {
        this._realEstateTaxRate = newTaxRate;
      } else {
        console.log("Enter valid number for the original value of the house");
      }
    },

    get downPayment() {
      if (typeof this._downPayment === 'number') {
        return this._downPayment;
      } else {
        console.log("Enter valid number for the down payment");
      }
    },

    set downPayment(newDP) {
      if (typeof newDP === 'number' && newDP < 1 && newDP > -.5) {
        this._downPayment = newDP;
      } else {
        console.log("Enter valid number for the down payment");
      }
    },

    get mortgageYears() {
      if (typeof this._mortgageYears === 'number') {
        return this._mortgageYears;
      } else {
        console.log("Enter valid number for length of the mortgage");
      }
    },

    set mortgageYears(newYears) {
      if (typeof newYears === 'number' && newYears > 0 && newYears < 100) {
        this._mortgageYears = newYears;
      } else {
        console.log("Enter valid number for length of the mortgage");
      }
    },

    get mortgagePayment() {
      if (typeof this._mortgagePayment === 'number') {
        return this._mortgagePayment;
      } else {
        console.log("Error calculating mortgage payment");
      }
    }

  };
}; //House progression is an array which contains all the homes to be owned, each home being an object defined above by home creator


var houseProgression = []; //House purchase cash flow is an array of numbers which define years where homes are bought or sold, and what the cashs flow consequences are for those actions.  If a home is bought, maybe the DP is a negative cashflow
//out of some account.  If a home is bought and previous one is sold, there could be a net positive cash flow if the second downpayment is less than the equity in the previous home, etc.
//This array only has values during years where home purchase/selling activity takes place.  Each element has a year and a cash flow value in it

var housePurchaseCashFlow = [];

function insertHousingValues() {
  var numberOfHouses;
  var yearsPurchased = [];
  var originalValues = [];
  var fullTransfer = [];
  numberOfHouses = parseInt(window.sessionStorage.getItem('NOH'), 10);
  var houseArray = JSON.parse(window.sessionStorage.getItem('houseArray'));

  for (var _i = 0; _i < numberOfHouses; _i++) {
    yearsPurchased[_i] = houseArray[_i][0];
    originalValues[_i] = houseArray[_i][1];
    fullTransfer[_i] = houseArray[_i][2];
  }

  console.log("House page NOH is ".concat(numberOfHouses));
  console.log("House page years purchased is ".concat(yearsPurchased));
  console.log("House page original values is ".concat(originalValues));
  console.log("House page full transfer y/n is ".concat(fullTransfer));
  window.sessionStorage.setItem('housingDistributed', 1); //For loop to run through all the houses defined by UI inputs and create a home object for each using the defined values
  //In general this would need to be extended to look at more variables-independent growth rates for each house, for example

  for (i = 0; i < numberOfHouses; i++) {
    //Have to treat first house separately, as there is no chance of a "transfer", it has to just be purchased with a negative DP cashflow
    if (i === 0) {
      //Create the home with specified values, and add to house purchase cash flow array with year and DP value
      houseProgression[i] = homeCreator(i + 1, yearsPurchased[i], yearsPurchased[i + 1], originalValues[i]);
      housePurchaseCashFlow[i] = [houseProgression[i].yearPurchased, -houseProgression[i].downPayment];
    } else {
      //IF full transfer is false, still create the home object but fill in cash flow array with the year purchased, and the difference between the previous homes equity in the sale year and the current homes downpayment
      //For year purchased, using yearsPurchased[i].  For year sold using [i+1] which means the assumption is that only one home is owned at at a time-limitation here
      if (!fullTransfer[i]) {
        houseProgression[i] = homeCreator(i + 1, yearsPurchased[i], yearsPurchased[i + 1], originalValues[i]);
        housePurchaseCashFlow[i] = [yearsPurchased[i], houseProgression[i - 1].yearlyValues(yearsPurchased[i]).equity - houseProgression[i].downPayment]; //If full transfer is true, have to set the downpayment value explicity by calculating the previous homes equity at in the yaer of sale.  Undefined parameters are just keeping the default value
      } else {
        houseProgression[i] = homeCreator(i + 1, yearsPurchased[i], yearsPurchased[i + 1], originalValues[i], undefined, undefined, undefined, houseProgression[i - 1].yearlyValues(yearsPurchased[i]).equity, undefined); //In this case, no effect to cash flow with full transfer=true

        housePurchaseCashFlow[i] = [yearsPurchased[i], 0];
      }
    }
  }

  window.sessionStorage.setItem('housingConsumed', 1);
}

window.addEventListener('load', insertHousingValues);
/* const insertHousingButton = document.getElementById("saveHousing");
insertHousingButton.addEventListener("click", insertHousingValues); */
//This is meant to be user entered data, stored in some ararys by the UI to be consumed by the app
//Full transfer refers to whether or not when a previous house is sold, the full equity realized from the sale is transferred into the downpayment for the new home
//If set to false, whatever downpayment percentage is used when calling homeCreator will dictate the value of the downpayment
//If set to true, the amount of equity in the previous home is used as the downpayment in the next home.  In general this is more than 20% but doesn't have to be
//Not sure if this can handle owning two homes at once-as in, not selling the previous home when buying a new home

var numberOfHouses2 = 3;
var yearsPurchased2 = [2016, 2022, 2034];
var originalValues2 = [344000, 600000, 1000000];
var fullTransfer2 = [false, false, false]; //This function takes a year as a parameter and returns the annual cost of ownership for each home for that year.  This function is probably set up to support owning multiple homes at once, but the above for loop is not

var returnAnnualHousingCost = function returnAnnualHousingCost(year) {
  var annualCostValues = []; //Create array of the annual cost of all homes in the system for that year

  houseProgression.forEach(function (home) {
    annualCostValues.push(home.yearlyValues(year).annualCost);
  }); //then reduce above array to sum up all those annual cost values into one value, representing all home value ownership costs

  var annualCost = annualCostValues.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  });
  return annualCost;
};

function findHousePurchaseYearCashFlow(propValue) {
  var valueToReturn;

  for (var _i2 = 0; _i2 < housePurchaseCashFlow.length; _i2++) {
    if (housePurchaseCashFlow[_i2][0] === propValue) {
      valueToReturn = housePurchaseCashFlow[_i2][1];
    }
  }

  if (valueToReturn === undefined) {
    return 0;
  } else {
    return valueToReturn;
  }
} //Consolidate function to return annual housing cost, and cash flow array, to be exported and used in overall scheme to calculate life for each year 


var housingExports = {
  returnAnnualHousingCost: returnAnnualHousingCost,
  findHousePurchaseYearCashFlow: findHousePurchaseYearCashFlow
};
module.exports = housingExports;
},{"./globaldefaults.js":"globaldefaults.js","./basicfunctions.js":"basicfunctions.js"}],"kiddos.js":[function(require,module,exports) {
var numberOfKids2;
var yearsBorn2 = [];
var requireDayCare2 = [];
var privateCollege2 = [];
var monthlyCost2;
var dayCareMonthly2;
var privateCollegeAnnual2;
var publicCollegeAnnual2;

function insertKidValues() {
  numberOfKids2 = parseInt(window.sessionStorage.getItem('NOK'), 10);
  var kidArray = JSON.parse(window.sessionStorage.getItem('kidArray'));

  for (var _i = 0; _i < numberOfKids2; _i++) {
    yearsBorn2[_i] = kidArray[_i][0];
    requireDayCare2[_i] = kidArray[_i][1];
    privateCollege2[_i] = kidArray[_i][2];
  }

  console.log("Kid page NOK is ".concat(numberOfKids2));
  console.log("Kid page years born is ".concat(yearsBorn2));
  console.log("Kid page day care y/n is ".concat(requireDayCare2));
  console.log("Kid page private college y/n is ".concat(privateCollege2));
  monthlyCost2 = parseInt(window.sessionStorage.getItem('monthlyKid'), 10);
  console.log("Kid page monthly cost is ".concat(monthlyCost2));
  dayCareMonthly2 = parseInt(window.sessionStorage.getItem('dayCare'), 10);
  console.log("Kid page day care is ".concat(dayCareMonthly2));
  privateCollegeAnnual2 = parseInt(window.sessionStorage.getItem('privCollege'), 10);
  console.log("Kid page private college is ".concat(privateCollegeAnnual2));
  publicCollegeAnnual2 = parseInt(window.sessionStorage.getItem('pubCollege'), 10);
  console.log("Kid page public college is ".concat(publicCollegeAnnual2));
  window.sessionStorage.setItem('kidCostDistributed', 1);
}

window.addEventListener('load', insertKidValues);
/* const pullCostButton4 = document.getElementById("saveCost");
pullCostButton4.addEventListener("click", insertKidValues); */
//This is meant to be user entered data, stored in some ararys by the UI to be consumed by the app

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
},{}],"person.js":[function(require,module,exports) {
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
},{"./basicfunctions.js":"basicfunctions.js"}],"retirement.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Import rate defaults and growth function for account growth calculations
var rateDefaults = require('./globaldefaults.js');

var basicFunctions = require('./basicfunctions.js');

var growAgainstInflation = basicFunctions.growAgainstInflation; //Import household members array to assign owners to accounts-especially relevant for 401k contribution information

var personImports = require('./person.js');

var householdMembers = personImports.householdMembers;
var returnAnnualSalary = personImports.returnAnnualSalary; //const calculateNetIncome = require('./Taxes.js');

console.log("Time retirement page top at ".concat(new Date().getSeconds(), " and ").concat(new Date().getMilliseconds()));
var numberOfAccounts;
var regNames = [];
var rothNames = [];
var f401kNames = [];
var regOwners = [];
var rothOwners = [];
var f401kOwners = [];
var regStartingValues = [];
var rothStartingValues = [];
var f401kStartingValues = [];

function insertAccountValues() {
  numberOfAccounts = parseInt(window.sessionStorage.getItem('NOA'), 10);
  var accountArray = JSON.parse(window.sessionStorage.getItem('accountArray'));
  regNames = [];
  rothNames = [];
  f401kNames = [];
  regOwners = [];
  rothOwners = [];
  f401kOwners = [];
  regStartingValues = [];
  rothStartingValues = [];
  f401kStartingValues = [];

  for (var _i = 0; _i < numberOfAccounts; _i++) {
    if (accountArray[_i][0] == "401k") {
      f401kNames.push(accountArray[_i][0] + (f401kNames.length + 1));
      f401kOwners.push(accountArray[_i][1]);
      f401kStartingValues.push(accountArray[_i][2]);
    } else if (accountArray[_i][0] == "Regular") {
      regNames.push(accountArray[_i][0] + (regNames.length + 1));
      regOwners.push(accountArray[_i][1]);
      regStartingValues.push(accountArray[_i][2]);
    } else if (accountArray[_i][0] == "Roth") {
      rothNames.push(accountArray[_i][0] + (rothNames.length + 1));
      rothOwners.push(accountArray[_i][1]);
      rothStartingValues.push(accountArray[_i][2]);
    } else {
      console.log("Enter correct account type");
    }
  }

  console.log("Time Retirement page insert values at ".concat(new Date().getSeconds(), " and ").concat(new Date().getMilliseconds()));
  console.log("Retirment page NOA is ".concat(numberOfAccounts));
  console.log("Retirment page names are ".concat(regNames, " and ").concat(rothNames, " and ").concat(f401kNames));
  console.log("Retirment page owners are ".concat(regOwners, " and ").concat(rothOwners, " and ").concat(f401kOwners));
  console.log("Retirment page starting values are ".concat(regStartingValues, " and ").concat(rothStartingValues, " and ").concat(f401kStartingValues));
  window.sessionStorage.setItem('accountDistributed', 1);
}

window.addEventListener('load', insertAccountValues);
/* const insertAccountsButton = document.getElementById("saveAccounts");
insertAccountsButton.addEventListener("click", insertAccountValues); */
//This find element index function is used to find the index number of a specific person (account owner) in the household members array.  Returns the index of that person in the array to be used later

function findElementIndex(arr, propValue) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].name === propValue) {
      return i;
    }
  }
} //RMD factor is a function which returns the RMD factor for a given age.  These are set by the government


var rmdFactor = function rmdFactor(age) {
  //If age is less than 70, no RMDs.  Is actually 70.5
  if (age < 70) {
    return 0; //RMDs technically go past 100 but this one stops at 100
  } else if (age >= 70 && age <= 100) {
    var factorIndex = age - 70; //age values are excluded from the array, but they start at 70 and continue to 100, using index number in the array to loate

    var factors = [27.4, 26.5, 25.6, 24.7, 23.8, 22.9, 22, 21.2, 20.4, 19.6, 18.8, 18, 17.2, 16.4, 15.6, 14.9, 14.2, 13.5, 12.8, 12.1, 11.5, 10.9, 10.3, 9.7, 9.1, 8.6, 8.1, 7.6, 7.1, 6.7, 6.3];
    var factor = factors[factorIndex]; //only return the factor, which is used along with value of the account in that year to determin the RMD $ value

    return factor;
  } else {
    console.log("You are too old");
    return 0;
  }
}; //Parent class InvestmentAccount.  Accoutns below inherit qualities from this class.  This class will probably not have any real instances of it, only instances of subclasses
//Lots of getters and setters defined for relevant values


var InvestmentAccount = /*#__PURE__*/function () {
  function InvestmentAccount(name) {
    var currentValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var growth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : rateDefaults.growth;
    var owner = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, InvestmentAccount);

    //name probably not really relevant, can probably define account by class and owner
    this._name = name;
    this._currentValue = currentValue; //growth rate set to rate defaults value but can be changed in general based on type of account

    this._growth = growth; //Owner value is importand and must match householdmembers name values-need UI to mandate this

    this._owner = owner; //find owner index value within household members array for use below

    this._ownerIndex = findElementIndex(householdMembers, this.owner);
  } //Grow method just grows the account valuee for 1 year-to be used in yearly life calculations


  _createClass(InvestmentAccount, [{
    key: "grow",
    value: function grow() {
      this.currentValue = growAgainstInflation(this.currentValue, 1, this.growth);
    }
  }, {
    key: "name",
    get: function get() {
      if (typeof this._name === 'string') {
        return this._name;
      } else {
        console.log("Enter valid name for this investment account (get)");
      }
    },
    set: function set(newName) {
      if (typeof newName === 'string') {
        this._name = newName;
      } else {
        console.log("Enter valid name for this investment account (set)");
      }
    }
  }, {
    key: "currentValue",
    get: function get() {
      if (typeof this._currentValue === 'number' && this._currentValue >= 0) {
        return this._currentValue;
      } else {
        console.log("Enter valid current value for this investment account (get)");
      }
    },
    set: function set(newcurrentValue) {
      if (typeof newcurrentValue === 'number' && newcurrentValue >= 0 && newcurrentValue < 1000000000) {
        this._currentValue = newcurrentValue;
      } else {
        console.log("Enter valid current value for this investment account (set)");
      }
    }
  }, {
    key: "type",
    get: function get() {
      if (typeof this._type === 'number') {
        return this._type;
      } else {
        console.log("Enter valid type for this investment account");
      }
    },
    set: function set(newtype) {
      if (typeof newtype === 'number' && newtype > 0 && newtype < 6) {
        this._type = newtype;
      } else {
        console.log("Enter valid type for this investment account");
      }
    }
  }, {
    key: "growth",
    get: function get() {
      if (typeof this._growth === 'number') {
        return this._growth;
      } else {
        console.log("Enter valid growth rate for this investment account");
      }
    },
    set: function set(newgrowth) {
      if (typeof newgrowth === 'number' && newgrowth > 0 && newgrowth < .5) {
        this._growth = newgrowth;
      } else {
        console.log("Enter valid growth rate for this investment account");
      }
    }
  }, {
    key: "owner",
    get: function get() {
      if (typeof this._owner === 'string') {
        return this._owner;
      } else {
        console.log("Enter valid owner for this investment account (get)");
      }
    },
    set: function set(newOwner) {
      if (typeof newowner === 'string') {
        this._owner = newOwner;
      } else {
        console.log("Enter valid owner for this investment account (set)");
      }
    }
  }]);

  return InvestmentAccount;
}(); //RegInvestment is meant to be a non-tax advantaged account, just a regular investment account where money can come in and out with no restrictions on age/timing, etc.  No RMDs


var RegInvestment = /*#__PURE__*/function (_InvestmentAccount) {
  _inherits(RegInvestment, _InvestmentAccount);

  var _super = _createSuper(RegInvestment);

  //standard constructor, all the same values as parent class
  function RegInvestment(name) {
    var startingValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var growth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : rateDefaults.growth;
    var owner = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, RegInvestment);

    return _super.call(this, name, startingValue, growth, owner);
  } //Change value method takes in an amount from a year of cash flow.  Positive means money is coming in to the account, negative means money is required from the account to balance cashflow
  //Need year parameter just for consistency with other account types


  _createClass(RegInvestment, [{
    key: "addMoney",
    value: function addMoney(year, amount) {
      //if amount is greater than zero, just need to add that amount to current value to increase the value and move on
      if (amount >= 0) {
        this.currentValue += amount;
        return 0;
      } else {
        console.log("Please enter a positive amount to call add money method");
      }
    }
  }, {
    key: "withdrawMoney",
    value: function withdrawMoney(amount) {
      if (amount > 0) {
        console.log("Please enter a negative amount to call withdraw money method");
      } //if amount is negative, need to check if that amount is greater than the value of the account.  If so, set current value to 0 and return only the amount actually in the account to begin with
      else if (-amount >= this.currentValue) {
          var returnAmount = this.currentValue;
          this.currentValue = 0; //below section reduces returned amount according to capital gains taxes on values over $40,000 or $441,450
          //account is still zeroed out, just less money is returned to balance cash flow

          if (returnAmount <= 40000) {
            return returnAmount;
          } else if (returnAmount <= 441450) {
            returnAmount = 40000 + (returnAmount - 40000) / 1.15;
            return returnAmount;
          } else {
            returnAmount = 40000 + (441450 - 40000) / 1.15 + (returnAmount - 441450) / 1.20;
            return returnAmount;
          } //This section is for negative amounts (requets from the account) but not such that account value is zeroed out
          //Now for tax purposes, the amount deducted from account value is increased according to capital gains tax, but the returned amount is exactly what is "requested"

        } else if (-amount <= 40000) {
          this.currentValue += amount;
          return -amount;
        } else if (-amount <= 441450) {
          var decAmount = -40000 + 1.15 * (amount + 40000);
          this.currentValue += decAmount;
          return -amount;
        } else {
          var _decAmount = -40000 + 1.15 * (-441450 + 40000) + 1.2 * (amount + 441450);

          this.currentValue += _decAmount;
          return -amount;
        }
    }
  }]);

  return RegInvestment;
}(InvestmentAccount);

var RothIRA = /*#__PURE__*/function (_InvestmentAccount2) {
  _inherits(RothIRA, _InvestmentAccount2);

  var _super2 = _createSuper(RothIRA);

  //standard constructor, all the same values as parent class
  function RothIRA(name) {
    var startingValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var growth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : rateDefaults.growth;
    var owner = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, RothIRA);

    return _super2.call(this, name, startingValue, growth, owner);
  }

  _createClass(RothIRA, [{
    key: "addMoney",
    value: function addMoney(year, amount) {
      //first check if year is reasonable
      if (year < 2020 || year > 2200) {
        console.log("Please enter a valid year to add money to this account"); //check if amount if negative-shouldn't call addMoney with negative amount
      } else if (amount < 0) {
        console.log("Can't call addMoney with negative amount of money"); //Roth IRA has a contribution cap of $6k per year in 2020.  Can't add more than that in a given year.  Cap grows over time but inflation adjustments should keep this cap pretty close to $6k
      } else if (householdMembers.length === 1 && returnAnnualSalary(year) > 139000 || householdMembers.length === 2 && returnAnnualSalary(year) > 206000) {
        return amount;
      } else if (amount > 6000) {
        this.currentValue += 6000;
        console.log("Can't add more than $6,000 in one year to Roth IRA account");
        return amount - 6000;
      } else {
        this.currentValue += amount;
        return 0;
      }
    }
  }, {
    key: "getRMD",
    value: function getRMD(year) {
      var ownerAge = householdMembers[this._ownerIndex].age(year);

      var RMD = 0; //first check if year is reasonable

      if (year < 2020 || year > 2200) {
        console.log("Please enter a valid year to return RMD info for this Roth account"); //Check if owner age is outside of RMD range
      } else if (ownerAge < 70 || ownerAge > 100) {
        return RMD; //If owner age within RMD range, subtract RMD from value of account and return RMD
      } else if (ownerAge >= 70 && ownerAge <= 100) {
        RMD = this.currentValue / rmdFactor(ownerAge);
        console.log("Roth RMD is ".concat(RMD));
        this.currentValue -= RMD;
        return RMD;
      } else {
        console.log("Something weird happened with RMD for this Roth account");
      }
    } //Withdraw money method takes in an amount and year from a year of cash flow.  Should only be negative amount of money, meaning money is required from the account to balance cashflow

  }, {
    key: "withdrawMoney",
    value: function withdrawMoney(amount) {
      //Amount should be negative, otherwise use Add Money method
      if (amount <= 0) {
        //If magnitude of amount is less than current value, can return full amount.  Sign is changed to indicate positive money is flowing to the bottom line
        if (-amount < this.currentValue) {
          this.currentValue += amount;
          console.log("amount less than current value section, currentValue is ".concat(this.currentValue));
          return -amount; //If magnitue of amount is greater than the value of the account, set current value to 0 and return only the amount actually in the account to begin with.  No tax concerns with Roth
        } else if (-amount >= this.currentValue) {
          var returnAmount = this.currentValue;
          this.currentValue = 0;
          console.log("amount greater than current value section, currentValue is ".concat(this.currentValue));
          return returnAmount;
        }
      } else {
        console.log("Can't use withdraw money method to add money");
      }
    }
  }]);

  return RothIRA;
}(InvestmentAccount);

var F401k = /*#__PURE__*/function (_InvestmentAccount3) {
  _inherits(F401k, _InvestmentAccount3);

  var _super3 = _createSuper(F401k);

  //standard constructor but adding pretax contributiona and company match rates from househould members array to calculate annual growth
  function F401k(name) {
    var _this;

    var startingValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var growth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : rateDefaults.growth;
    var owner = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, F401k);

    _this = _super3.call(this, name, startingValue, growth, owner);
    _this._preTaxContribution = householdMembers[_this._ownerIndex].preTaxContribution;
    _this._companyMatch = householdMembers[_this._ownerIndex].companyMatch;
    return _this;
  }

  _createClass(F401k, [{
    key: "getRMD",
    value: function getRMD(year) {
      var ownerAge = householdMembers[this._ownerIndex].age(year);

      var RMD = 0; //first check if year is reasonable

      if (year < 2020 || year > 2200) {
        console.log("Please enter a valid year to return RMD info for this 401k account"); //Check if owner age is outside of RMD range
      } else if (ownerAge < 70 || ownerAge > 100) {
        return RMD; //If owner age within RMD range, subtract RMD from value of account and return RMD
      } else if (ownerAge >= 70 && ownerAge <= 100) {
        RMD = this.currentValue / rmdFactor(ownerAge);
        console.log("401k RMD is ".concat(RMD));
        this.currentValue -= RMD;
        return RMD;
      } else {
        console.log("Something weird happened with RMD for this 401k account");
      }
    } //Change value method takes in an amount and year from a year of cash flow.  Positive means money is coming in to the account (shouldn't happen for this account), negative means money is required from the account to balance cashflow

  }, {
    key: "increaseValue",
    value: function increaseValue(year) {
      //first check if year is reasonable
      if (year < 2020 || year > 2200) {
        console.log("Please enter a valid year to increase this 401k account value"); //now enter into meat of the method
      } else {
        //figure out salary for the owner of the account for the year in question
        var salary = householdMembers[this._ownerIndex].yearlySalary(year); //console.log(`salary is ${salary}`);
        //figure out how salary contributes to increase of account value.  In retirement, salary will be zero, so will value increase


        var valueIncrease = salary * (this._preTaxContribution + this._companyMatch); //console.log(`valueIncrease is ${valueIncrease}`);

        console.log("401k account starting currentValue is ".concat(this.currentValue));
        this.currentValue += valueIncrease;
        console.log("401k account after currentValue is ".concat(this.currentValue));
      }
    }
  }, {
    key: "withdrawMoney",
    value: function withdrawMoney(amount) {
      //now enter into meat of the method   
      if (amount > 0) {
        console.log("Can't use withdraw money method to add money");
      } else {
        if (-amount < this.currentValue) {
          this.currentValue += amount;
          console.log("amount less than current value section, currentValue is ".concat(this.currentValue));
          return -amount;
        }

        if (-amount >= this.currentValue) {
          var returnAmount = this.currentValue;
          this.currentValue = 0;
          console.log("amount greater than current value section, currentValue is ".concat(this.currentValue));
          return returnAmount;
        }
      }
    }
  }]);

  return F401k;
}(InvestmentAccount); //This is meant to be user entered data, stored in some ararys by the UI to be consumed by the app
//This section for regular investment accounts


var names1 = ['Reg Account1', 'Reg Account2'];
var owners1 = ['Jamie', 'John'];
var startingValues1 = [50000, 100000];
var investmentAccounts = [];

for (i = 0; i < startingValues1.length; i++) {
  investmentAccounts[i] = new RegInvestment(names1[i], startingValues1[i], undefined, owners1[i]);
} //console.log(investmentAccounts);
//This section for Roth accounts


var names2 = ['Jamie Roth', 'John Roth'];
var owners2 = ['Jamie', 'John'];
var startingValues2 = [6000, 50000];
var rothAccounts = [];

for (i = 0; i < startingValues2.length; i++) {
  rothAccounts[i] = new RothIRA(names2[i], startingValues2[i], undefined, owners2[i]);
} //console.log(RothAccounts);
//This section for 401k investment accounts


var names3 = ['John 401k'];
var owners3 = ['John'];
var startingValues3 = [100000];
var f01kAccounts = [];

for (i = 0; i < startingValues3.length; i++) {
  f01kAccounts[i] = new F401k(names3[i], startingValues3[i], undefined, owners3[i]);
}

console.log("Time retirement page bottom at ".concat(new Date().getSeconds(), " and ").concat(new Date().getMilliseconds())); //export all account types

var retirementExports = {
  investmentAccounts: investmentAccounts,
  rothAccounts: rothAccounts,
  f01kAccounts: f01kAccounts
};
module.exports = retirementExports;
},{"./globaldefaults.js":"globaldefaults.js","./basicfunctions.js":"basicfunctions.js","./person.js":"person.js"}],"taxes.js":[function(require,module,exports) {
//define relevant tax brackets for sigle filers and joint filers, per 2020 tax code
//Added 0,0 bracket to make it easier to use for loops below
var taxBracketsSingle = [[0, 0], [.1, 9875], [.12, 40125], [.22, 85525], [.24, 163300], [.32, 207350], [.35, 518400], [.37, 1000000]];
var taxBracketsJoint = [[0, 0], [.1, 19750], [.12, 80250], [.22, 171050], [.24, 326600], [.32, 414700], [.35, 622050], [.37, 1000000]]; //standard deduction for single filers as of 2020 tax code.  Need to be careful that this deduction is only used once per year-it will be applied once per function call

var standardDeduction = 12400; //function to determine net income based on filing status and pretax income coming in.  Do not account for pre-tax 401k contributions, that is taken care of upstream

var calculateNetIncome = function calculateNetIncome(numPeople, salary) {
  var tax = 0; //remove standard deduction from taxable income to lessen tax buren

  var deductedSalary = salary - standardDeduction * numPeople; //if salary entered is less than standard deduction, no tax is owed, so the full salary is returned

  if (deductedSalary <= 0) {
    return salary; //first calculate for single filers
  } else if (numPeople === 1) {
    //create array of relevant tax brackets based on deducted salary-only those which are below deducted salary
    var relevantTaxBrackets = taxBracketsSingle.filter(function (bracket) {
      return bracket[1] < deductedSalary;
    }); //Then add the very next bracket above deducted salary to calculate final portion of tax owed

    relevantTaxBrackets.push(taxBracketsSingle[relevantTaxBrackets.length]); //add up tax owed in each bracket that is crossed completely by deducted. i starts at 1 so i-1 can be used to determine $ difference between each bracket, with 0,0 bracket in place at the beginning
    //i goes up to length-1 so that final tax bracket can be calculated differently-using deducted salary instead of the full bracket width

    for (i = 1; i < relevantTaxBrackets.length - 1; i++) {
      tax += relevantTaxBrackets[i][0] * (relevantTaxBrackets[i][1] - relevantTaxBrackets[i - 1][1]);
    } //then add tax in the final bracket, using deducted salary as the upper bound


    tax += relevantTaxBrackets[relevantTaxBrackets.length - 1][0] * (deductedSalary - relevantTaxBrackets[relevantTaxBrackets.length - 2][1]);
    return salary - tax; //then calculate for joint filers
  } else if (numPeople === 2) {
    //create array of relevant tax brackets based on deducted salary-only those which are below deducted salary
    var _relevantTaxBrackets = taxBracketsJoint.filter(function (bracket) {
      return bracket[1] < deductedSalary;
    }); //Then add the very next bracket above deducted salary to calculate final portion of tax owed


    _relevantTaxBrackets.push(taxBracketsJoint[_relevantTaxBrackets.length]); //add up tax owed in each bracket that is crossed completely by deducted. i starts at 1 so i-1 can be used to determine $ difference between each bracket, with 0,0 bracket in place at the beginning
    //i goes up to length-1 so that final tax bracket can be calculated differently-using deducted salary instead of the full bracket width


    for (i = 1; i < _relevantTaxBrackets.length - 1; i++) {
      tax += _relevantTaxBrackets[i][0] * (_relevantTaxBrackets[i][1] - _relevantTaxBrackets[i - 1][1]);
    } //then add tax in the final bracket, using deducted salary as the upper bound


    tax += _relevantTaxBrackets[_relevantTaxBrackets.length - 1][0] * (deductedSalary - _relevantTaxBrackets[_relevantTaxBrackets.length - 2][1]);
    return salary - tax; //If number of earners isn't 1 or 2, can't calculate tax
  } else {
    console.log("Please enter a valid number of salary earners");
  }
};

var calculateAddtlNetIncome = function calculateAddtlNetIncome(numPeople, newSalary, previousSalary) {
  origNet = calculateNetIncome(numPeople, previousSalary);
  newNet = calculateNetIncome(numPeople, newSalary + previousSalary);
  netNet = newNet - origNet;
  return netNet;
}; //Export calculate net income function.  Will be used when calculating life income/net cash flow each year


var taxExports = {
  calculateNetIncome: calculateNetIncome,
  calculateAddtlNetIncome: calculateAddtlNetIncome
};
module.exports = taxExports;
},{}],"life.js":[function(require,module,exports) {
var basicFunctions = require('./basicfunctions.js');

var growAgainstInflation = basicFunctions.growAgainstInflation;

var housingImports = require('./homecalcs.js');

var returnAnnualHousingCost = housingImports.returnAnnualHousingCost;
var findHousePurchaseYearCashFlow = housingImports.findHousePurchaseYearCashFlow;

var returnAnnualKidCost = require('./kiddos.js');

var personImports = require('./person.js');

var householdMembers = personImports.householdMembers;
var returnAnnualSalary = personImports.returnAnnualSalary;

var retirementImports = require('./retirement.js');

var investmentAccounts = retirementImports.investmentAccounts;
var rothAccounts = retirementImports.rothAccounts;
var f401kAccounts = retirementImports.f01kAccounts;

var taxImports = require('./taxes.js');

var calculateNetIncome = taxImports.calculateNetIncome;
var calculateAddlNetIncome = taxImports.calculateAddlNetIncome;
console.log("Time2 Life page top at ".concat(new Date().getSeconds(), " and ").concat(new Date().getMilliseconds()));

var yearlyHouseSalary = function yearlyHouseSalary(year) {
  var totalSalary = returnAnnualSalary(year);
  var netSalary = calculateNetIncome(householdMembers.length, totalSalary);
  return netSalary;
};

var monthlyDisc = 5000;
var monthlyGroc = 500;
var monthlyRetir = 5000;

var regSpending = function regSpending(year) {
  var disc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
  var groc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  var retir = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 7500;
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

var netAfterCost = function netAfterCost(year) {
  var income = yearlyHouseSalary(year);
  var kidCost = returnAnnualKidCost(year);
  var regCost = regSpending(year, monthlyDisc, monthlyGroc, monthlyRetir);
  var houseCost = returnAnnualHousingCost(year);
  var housePurchaseCashFlow = findHousePurchaseYearCashFlow(year);
  var net = income - kidCost - regCost - houseCost + housePurchaseCashFlow;
  return net;
};

var posCashFlowPrecedence = [['Roth', 1], ['Roth', 0], ['Investment', 1]];
var negCashFlowPrecedence = [['Investment', 1], ['Investment', 0], ['401k', 1], ['Roth', 0], ['Roth', 1]];

function findAccountOwner(arr, propValue) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]._ownerIndex === propValue) {
      return arr[i];
    }
  }
}

var posCashFlowAccountList = [];

for (var i = 0; i < posCashFlowPrecedence.length; i++) {
  if (posCashFlowPrecedence[i][0] === 'Roth') {
    posCashFlowAccountList[i] = findAccountOwner(rothAccounts, posCashFlowPrecedence[i][1]);
  } else if (posCashFlowPrecedence[i][0] === 'Investment') {
    posCashFlowAccountList[i] = findAccountOwner(investmentAccounts, posCashFlowPrecedence[i][1]);
  }
}

var negCashFlowAccountList = [];

for (var _i = 0; _i < negCashFlowPrecedence.length; _i++) {
  if (negCashFlowPrecedence[_i][0] === 'Roth') {
    negCashFlowAccountList[_i] = findAccountOwner(rothAccounts, negCashFlowPrecedence[_i][1]);
  } else if (negCashFlowPrecedence[_i][0] === 'Investment') {
    negCashFlowAccountList[_i] = findAccountOwner(investmentAccounts, negCashFlowPrecedence[_i][1]);
  } else if (negCashFlowPrecedence[_i][0] === '401k') {
    negCashFlowAccountList[_i] = findAccountOwner(f401kAccounts, negCashFlowPrecedence[_i][1]);
  }
}

var balanceYearOfCashFlow = function balanceYearOfCashFlow(year, net) {
  console.log("Initial net is ".concat(net));

  if (net > 0) {
    for (var _i2 = 0; _i2 < posCashFlowAccountList.length; _i2++) {
      net = posCashFlowAccountList[_i2].addMoney(year, net);
      console.log("Positive section, Post net is ".concat(net));
      console.log(posCashFlowAccountList[_i2]);

      if (net === 0) {
        break;
      }
    }

    return net;
  } else if (net < 0) {
    for (var _i3 = 0; _i3 < negCashFlowAccountList.length; _i3++) {
      net = net + negCashFlowAccountList[_i3].withdrawMoney(net);
      console.log("Negative section, Post net is ".concat(net));
      console.log(negCashFlowAccountList[_i3]);

      if (net === 0) {
        break;
      }
    }

    return net;
  } else {
    console.log("Net was exactly 0???");
  }
};

var processRMDs = function processRMDs(year, net) {
  for (var _i4 = 0; _i4 < rothAccounts.length; _i4++) {
    net = net + rothAccounts[_i4].getRMD(year);
    console.log("RMD roth net is ".concat(net));
  }

  for (var _i5 = 0; _i5 < f401kAccounts.length; _i5++) {
    net = net + f401kAccounts[_i5].getRMD(year);
    console.log("RMD 401k net is ".concat(net));
  }

  return net;
};

var growAccounts = function growAccounts() {
  for (var _i6 = 0; _i6 < rothAccounts.length; _i6++) {
    rothAccounts[_i6].grow();
  }

  for (var _i7 = 0; _i7 < f401kAccounts.length; _i7++) {
    f401kAccounts[_i7].grow();
  }

  for (var _i8 = 0; _i8 < investmentAccounts.length; _i8++) {
    investmentAccounts[_i8].grow();
  }
};

var increase401ks = function increase401ks(year) {
  if (f401kAccounts.length > 0) {
    for (var _i9 = 0; _i9 < f401kAccounts.length; _i9++) {
      f401kAccounts[_i9].increaseValue(year); //console.log(f401kAccounts[i]);

    }
  } else {
    console.log("No 401k accounts");
  }
};

var calcCashFlowUpToYear = function calcCashFlowUpToYear(year) {
  var y = new Date().getFullYear();
  var net;

  for (var _i10 = y; _i10 <= year; _i10++) {
    console.log("i is ".concat(_i10));
    net = netAfterCost(_i10);
    console.log("big function first net is ".concat(net));
    increase401ks(_i10);
    net = processRMDs(_i10, net);
    console.log("big function post RMD net is ".concat(net));
    net = balanceYearOfCashFlow(_i10, net);
    console.log("big function post balance net is ".concat(net));
    growAccounts();
    console.log(rothAccounts);
    console.log(f401kAccounts);
    console.log(investmentAccounts);
  }

  return net;
};

var testYear = 2022; //net2 = balanceYearOfCashFlow(2020, 63167);
//console.log(net2);

netTest = calcCashFlowUpToYear(testYear);
console.log("result of big function is ".concat(netTest)); //shouldBeZero = balanceYearOfCashFlow(testYear);
//console.log(`shouldBeZero is ${shouldBeZero}`);

var y = new Date().getFullYear();
var nets = [];

for (var _i11 = y; _i11 <= testYear; _i11++) {
  nets[_i11 - y] = netAfterCost(_i11);
}

var totalNet = nets.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
});
console.log(nets);
console.log("total net after all those years is ".concat(totalNet));
income1 = yearlyHouseSalary(testYear);
console.log("Income 1 is ".concat(income1));
kidCost1 = returnAnnualKidCost(testYear);
console.log("Kid cost 1 is ".concat(kidCost1));
regCost1 = regSpending(testYear, monthlyDisc, monthlyGroc, monthlyRetir);
console.log("Reg cost 1 is ".concat(regCost1));
houseCost1 = returnAnnualHousingCost(testYear);
console.log("House cost 1 is ".concat(houseCost1));
housePurchaseCashFlow1 = findHousePurchaseYearCashFlow(testYear);
console.log("HPCF1 is ".concat(housePurchaseCashFlow1));
},{"./basicfunctions.js":"basicfunctions.js","./homecalcs.js":"homecalcs.js","./kiddos.js":"kiddos.js","./person.js":"person.js","./retirement.js":"retirement.js","./taxes.js":"taxes.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","life.js"], null)
//# sourceMappingURL=/life.f8038986.js.map