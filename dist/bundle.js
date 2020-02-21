(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("hyperapp"));
	else if(typeof define === 'function' && define.amd)
		define(["hyperapp"], factory);
	else if(typeof exports === 'object')
		exports["main"] = factory(require("hyperapp"));
	else
		root["main"] = factory(root["hyperapp"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "hyperapp"
var external__hyperapp_ = __webpack_require__(0);
var external__hyperapp__default = /*#__PURE__*/__webpack_require__.n(external__hyperapp_);

// CONCATENATED MODULE: ./src/components/MarkTerms.js


// original implementation.
var MarkTerms_MarkTerms = function MarkTerms(_ref) {
  var _ref$words = _ref.words,
      words = _ref$words === undefined ? "" : _ref$words,
      _ref$terms = _ref.terms,
      terms = _ref$terms === undefined ? "" : _ref$terms,
      _ref$labelClass = _ref.labelClass,
      labelClass = _ref$labelClass === undefined ? "" : _ref$labelClass;

  if (!words) return words;
  if (terms) {
    var splitTerms = terms.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&").split(/\s+/);
    var result = [];
    var lastIndex = 0;

    // ['this', 'that'] => /this|that/
    var regex = new RegExp("(" + splitTerms.join("|") + ")", "ig");

    words.replace(regex, function (match, group, index) {
      if (index > lastIndex) {
        result.push(words.slice(lastIndex, index));
      }

      result.push(Object(external__hyperapp_["h"])("mark", { class: labelClass }, match));
      lastIndex = index + match.length;
    });

    if (lastIndex < words.length) {
      result.push(words.slice(lastIndex));
    }
    return Object(external__hyperapp_["h"])("div", { style: { whiteSpace: "pre" } }, result);
  } else {
    return [words];
  }

  // end
  var splitedWords = words.split(" ");
  if (!words) return words;
  if (terms) {
    var _splitTerms = terms.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&").split(/\s+/);
    var _result = [];
    var _lastIndex = 0;

    var _regex = new RegExp("(" + _splitTerms.join("|") + ")", "ig");

    words.replace(_regex, function (match, group, index) {
      if (index > _lastIndex) {
        _result.push(words.slice(_lastIndex, index));
      }

      _result.push(Object(external__hyperapp_["h"])("mark", { class: labelClass }, match));
      _lastIndex = index + match.length;
    });

    if (_lastIndex < words.length) {
      _result.push(words.slice(_lastIndex));
    }
    return _result;
  } else {
    return [words];
  }
};

/* harmony default export */ var components_MarkTerms = (MarkTerms_MarkTerms);
// CONCATENATED MODULE: ./src/components/multi_select/multi_select_helper.js
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }





var identity = function identity(x) {
  return x;
};

// state
var initialState = {
  selected: [],
  allOptions: [],
  cachedOptions: [],
  isOpen: false,
  filterText: ""
};

// actions
var actions = {
  updateOptions: function updateOptions(allOptions) {
    return function (oldState) {
      return Object.assign({}, oldState, {
        allOptions: allOptions,
        cachedOptions: allOptions,
        selected: []
      });
    };
  },
  onSelect: function onSelect(option) {
    return function (oldState) {
      if (oldState.selected.includes(option)) {
        var newSelected = oldState.selected.filter(function (opt) {
          return opt !== option;
        });
        return Object.assign({}, oldState, {
          selected: newSelected
        });
      }
      return Object.assign({}, oldState, {
        selected: [option].concat(_toConsumableArray(oldState.selected))
      });
    };
  },
  onSelectAll: function onSelectAll() {
    return function (oldState) {
      var selected = oldState.selected,
          cachedOptions = oldState.cachedOptions;

      var everythingSelected = cachedOptions.length === selected.length;
      return Object.assign({}, oldState, {
        selected: everythingSelected ? [] : cachedOptions
      });
    };
  },
  onOpen: function onOpen(_event) {
    return function (oldState) {
      return Object.assign({}, oldState, { isOpen: true });
    };
  },
  onClose: function onClose(_event) {
    return function (oldState) {
      return Object.assign({}, oldState, { isOpen: false });
    };
  },
  onUpdateFilterText: function onUpdateFilterText(_ref) {
    var text = _ref.text,
        _ref$optionDisplay = _ref.optionDisplay,
        optionDisplay = _ref$optionDisplay === undefined ? identity : _ref$optionDisplay;
    return function (oldState) {
      var textLowered = text.toLowerCase();
      var cachedOptions = oldState.cachedOptions;

      return Object.assign({}, oldState, {
        allOptions: cachedOptions.filter(function (option) {
          return textLowered === "" || optionDisplay(option).toLowerCase().includes(textLowered);
        }),
        filterText: textLowered
      });
    };
  }
};

var multi_select_helper_ZeroStateTemplate = function ZeroStateTemplate(text) {
  return Object(external__hyperapp_["h"])("div", {
    style: {
      position: "absolute",
      height: "100%",
      width: "100%"
    }
  }, Object(external__hyperapp_["h"])("div", {
    style: {
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      display: "flex"
    }
  }, text));
};
var ZERO_STATE_FILTERED_MESSAGE = multi_select_helper_ZeroStateTemplate("No results found");

var multi_select_helper_OptionRow = function OptionRow(_ref2) {
  var checked = _ref2.checked,
      onclick = _ref2.onclick,
      option = _ref2.option,
      filterText = _ref2.filterText,
      optionDisplay = _ref2.optionDisplay;
  return Object(external__hyperapp_["h"])("li", {
    class: "MultiSelect-option",
    style: {
      listStyle: "none"
    }
  }, [Object(external__hyperapp_["h"])("label", {
    style: {
      display: "flex",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflowX: "hidden",
      alignItems: "center"
    }
  }, [Object(external__hyperapp_["h"])("input", { type: "checkbox", checked: checked, onclick: onclick }),
  // label mark terms
  Object(external__hyperapp_["h"])(components_MarkTerms, {
    words: optionDisplay ? optionDisplay(option) : option,
    terms: filterText
  })])]);
};

var multi_select_helper_AllOptionRows = function AllOptionRows(_ref3) {
  var allOptions = _ref3.allOptions,
      selected = _ref3.selected,
      onSelect = _ref3.onSelect,
      filterText = _ref3.filterText,
      optionDisplay = _ref3.optionDisplay;

  return [Object(external__hyperapp_["h"])("div", { style: { height: "5px" } })].concat(_toConsumableArray(allOptions.map(function (option) {
    return Object(external__hyperapp_["h"])(multi_select_helper_OptionRow, {
      optionDisplay: optionDisplay,
      option: option,
      checked: selected.includes(option),
      onclick: function onclick(e) {
        e.preventDefault();
        onSelect(option);
      },
      filterText: filterText
    });
  })));
};

var handleFocusFilterInput = function handleFocusFilterInput(event) {
  setTimeout(function () {
    var topLevelComponent = event.target;
    // find its parent
    while (!topLevelComponent.classList.contains("MultiSelect")) {
      topLevelComponent = topLevelComponent.parentElement;
    }
    topLevelComponent.querySelector(".MultiSelect-filterInput").focus();
  });
};

var SOME_CHECKED_MARK = Object(external__hyperapp_["h"])("div", {
  style: {
    position: "absolute",
    height: "100%",
    alignItems: "center",
    top: 0,
    display: "flex",
    left: "3px"
  }
}, Object(external__hyperapp_["h"])("div", {
  style: {
    height: "4px",
    backgroundColor: "#19B5FE",
    width: "10px",
    borderRadius: "3px"
  }
}));

var multi_select_helper_MultiSelectControl = function MultiSelectControl(_ref4) {
  var isFilterable = _ref4.isFilterable,
      isOpen = _ref4.isOpen,
      onUpdateFilterText = _ref4.onUpdateFilterText,
      filterIcon = _ref4.filterIcon,
      cachedOptions = _ref4.cachedOptions,
      selected = _ref4.selected,
      canSelectAll = _ref4.canSelectAll,
      onSelectAll = _ref4.onSelectAll,
      optionDisplay = _ref4.optionDisplay;

  var isEverythingSelected = selected.length === cachedOptions.length;
  return Object(external__hyperapp_["h"])("div", {
    class: "MultiSelect-filterCheckallControl",
    style: {
      padding: "2px 0",
      background: "#eefaff",
      borderBottom: "1px dashed #19B5FE"
    }
  }, [isFilterable && Object(external__hyperapp_["h"])("div", {
    style: {
      display: "flex",
      background: "#eefaff",
      padding: "4px 6px",
      fontWeight: "800"
    }
  }, [isOpen && Object(external__hyperapp_["h"])("span", {
    oncreate: function oncreate(element) {
      // hacks into lifecycle hook
      element.nextElementSibling.focus();
    }
  }), Object(external__hyperapp_["h"])("input", {
    onkeyup: function onkeyup(event) {
      return onUpdateFilterText({
        text: event.target.value,
        optionDisplay: optionDisplay
      });
    },
    class: "MultiSelect-filterInput",
    placeholder: "Search...",
    style: {
      outlineWidth: "0px", // removes halo
      width: "100%",
      fontSize: "16px",
      border: "2px solid #19B5FE",
      boxSizing: "border-box" // otherwise overextends
    }
  }), filterIcon]), canSelectAll && Object(external__hyperapp_["h"])("div", {
    style: {
      position: "relative",
      background: "#eefaff"
    }
  }, [Object(external__hyperapp_["h"])(multi_select_helper_OptionRow, {
    option: "Select all",
    checked: isEverythingSelected,
    onclick: function onclick(e) {
      e.preventDefault();
      onSelectAll();
    }
  }), !!selected.length && !isEverythingSelected && SOME_CHECKED_MARK])]);
};

/* harmony default export */ var multi_select_helper = ({
  ZERO_STATE_FILTERED_MESSAGE: ZERO_STATE_FILTERED_MESSAGE,
  ZeroStateTemplate: multi_select_helper_ZeroStateTemplate,
  AllOptionRows: multi_select_helper_AllOptionRows,
  initialState: initialState,
  actions: actions,
  handleFocusFilterInput: handleFocusFilterInput,
  MultiSelectControl: multi_select_helper_MultiSelectControl
});
// CONCATENATED MODULE: ./src/components/multi_select.js




var multi_select_ZERO_STATE_FILTERED_MESSAGE = multi_select_helper.ZERO_STATE_FILTERED_MESSAGE,
    multi_select_ZeroStateTemplate = multi_select_helper.ZeroStateTemplate,
    multi_select_AllOptionRows = multi_select_helper.AllOptionRows,
    multi_select_actions = multi_select_helper.actions,
    multi_select_initialState = multi_select_helper.initialState,
    multi_select_handleFocusFilterInput = multi_select_helper.handleFocusFilterInput,
    multi_select_MultiSelectControl = multi_select_helper.MultiSelectControl;


var multi_select_MultiSelect = function MultiSelect(_ref) {
  var _ref$state = _ref.state,
      isOpen = _ref$state.isOpen,
      allOptions = _ref$state.allOptions,
      cachedOptions = _ref$state.cachedOptions,
      selected = _ref$state.selected,
      filterText = _ref$state.filterText,
      _ref$actions = _ref.actions,
      onSelect = _ref$actions.onSelect,
      onSelectAll = _ref$actions.onSelectAll,
      onOpen = _ref$actions.onOpen,
      onClose = _ref$actions.onClose,
      onUpdateFilterText = _ref$actions.onUpdateFilterText,
      dropdownIcon = _ref.dropdownIcon,
      filterIcon = _ref.filterIcon,
      _dropdownCheckbox = _ref._dropdownCheckbox,
      _ref$style = _ref.style,
      topLevelStyle = _ref$style === undefined ? {} : _ref$style,
      _ref$class = _ref.class,
      topLevelClass = _ref$class === undefined ? "" : _ref$class,
      _ref$inputClass = _ref.inputClass,
      inputClass = _ref$inputClass === undefined ? "" : _ref$inputClass,
      _ref$listStyle = _ref.listStyle,
      listStyle = _ref$listStyle === undefined ? {} : _ref$listStyle,
      _ref$objectName = _ref.objectName,
      objectName = _ref$objectName === undefined ? "Items" : _ref$objectName,
      selectedDisplay = _ref.selectedDisplay,
      optionDisplay = _ref.optionDisplay,
      _ref$isFilterable = _ref.isFilterable,
      isFilterable = _ref$isFilterable === undefined ? false : _ref$isFilterable,
      _ref$canSelectAll = _ref.canSelectAll,
      canSelectAll = _ref$canSelectAll === undefined ? false : _ref$canSelectAll;

  var isShowingControl = isFilterable || canSelectAll;
  var topLevelClassMashed = 'MultiSelect ' + (isOpen ? "is-open" : "") + ' ' + topLevelClass;

  var inferredSelectedMessage = function inferredSelectedMessage() {
    return selected.length ? 'Selected ' + selected.length + ' ' + objectName : 'Pick ' + objectName + '...';
  };

  var selectedMessage = selectedDisplay ? selectedDisplay({ selected: selected, filterText: filterText, isOpen: isOpen }) : inferredSelectedMessage();

  return Object(external__hyperapp_["h"])("div", {
    class: topLevelClassMashed,
    style: Object.assign({
      border: "1px solid black",
      position: "relative",
      paddingBottom: "2px"
    }, topLevelStyle, isOpen ? { borderBottomStyle: "dashed" } : { borderBottomStyle: "solid" })
  }, [Object(external__hyperapp_["h"])("div", {
    class: 'MultiSelect-input ' + inputClass,
    style: {
      display: "flex",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    },
    onclick: isOpen ? onClose : onOpen
  }, [Object(external__hyperapp_["h"])("span", { style: { marginRight: "auto" } }, [selectedMessage]), Object(external__hyperapp_["h"])("span", {
    class: "MultiSelect-arrowIcon",
    style: {
      position: "absolute",
      right: 0
    }
  }, [dropdownIcon || Object(external__hyperapp_["h"])("span", {
    oncreate: function oncreate(elem) {
      return elem.innerHTML = "&forall;";
    },
    style: {
      right: "5px",
      position: "absolute",
      transition: "transform .4s ease",
      transform: isOpen ? "rotate(180deg)" : ""
    }
  })])]), isOpen && Object(external__hyperapp_["h"])("div", {
    class: "MultiSelect-overlay",
    style: {
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      position: "fixed",
      zIndex: 1 // need to block all other multi selects from clickable.
    },
    onclick: onClose
  }), isOpen && Object(external__hyperapp_["h"])("div", {
    // TODO: rename this class, to MultiSelect-list-wrapper.
    class: "MultiSelect-list-wrapper",
    style: Object.assign({
      marginTop: "0",
      paddingLeft: 0,
      position: "absolute",
      width: "100%",
      zIndex: 2,
      background: "rgba(255, 255, 255, 1)",
      border: "1px solid black",
      borderTop: "0px"
    }, listStyle)
  }, [isShowingControl && Object(external__hyperapp_["h"])(multi_select_MultiSelectControl, {
    isFilterable: isFilterable,
    isOpen: isOpen,
    onUpdateFilterText: onUpdateFilterText,
    filterIcon: filterIcon,
    cachedOptions: cachedOptions,
    selected: selected,
    canSelectAll: canSelectAll,
    onSelectAll: onSelectAll,
    optionDisplay: optionDisplay
  }), Object(external__hyperapp_["h"])("ul", {
    class: "MultiSelect-list",
    style: {
      position: "relative",
      overflowY: "scroll",
      overflowX: "hidden",
      maxHeight: "200px",
      minHeight: "100px",
      // reset list
      padding: 0,
      margin: 0,
      listStyle: "none"
    },
    onclick: isFilterable && multi_select_handleFocusFilterInput
  }, allOptions.length ? Object(external__hyperapp_["h"])(multi_select_AllOptionRows, {
    allOptions: allOptions,
    selected: selected,
    onSelect: onSelect,
    filterText: filterText,
    optionDisplay: optionDisplay
  }) : cachedOptions.length ? multi_select_ZERO_STATE_FILTERED_MESSAGE : multi_select_ZeroStateTemplate('There are no ' + objectName))])]);
};

multi_select_MultiSelect.initialState = multi_select_initialState;
multi_select_MultiSelect.actions = multi_select_actions;
/* harmony default export */ var multi_select = __webpack_exports__["default"] = (multi_select_MultiSelect);

/***/ })
/******/ ]);
});