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

__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "hyperapp"
var external__hyperapp_ = __webpack_require__(0);
var external__hyperapp__default = /*#__PURE__*/__webpack_require__.n(external__hyperapp_);

// CONCATENATED MODULE: ./src/components/carousel.js
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// failed experiment

// state
var expand = function expand(n) {
  return [].concat(_toConsumableArray(Array(n).keys()));
};

var carousel_state = {
  current: 0,
  elements: expand(10).map(function (n) {
    return Object(external__hyperapp_["h"])(
      "div",
      { "class": "inline-block" },
      "Do something ",
      n
    );
  }),
  perWidth: 150
};

// actions
var carousel_actions = {
  onPrev: function onPrev(_event) {
    return function (oldState) {
      return Object.assign({}, oldState, {
        current: Math.max(oldState.current - 1, 0)
      });
    };
  },

  onNext: function onNext(_event) {
    return function (oldState) {
      return Object.assign({}, oldState, {
        current: Math.min(oldState.current + 1, oldState.elements.length - 1)
      });
    };
  }
};

/**
 *
 * @param {perWidth} - width per item
 * @param {current} - current first item index
 */
var carousel_HyperappCarouselView = function HyperappCarouselView(_ref) {
  var perWidth = _ref.perWidth,
      current = _ref.current,
      elements = _ref.elements,
      onPrev = _ref.onPrev,
      onNext = _ref.onNext;

  return Object(external__hyperapp_["h"])(
    "div",
    { "class": "HyperappCarousel" },
    Object(external__hyperapp_["h"])(
      "div",
      {
        id: "carousel",
        style: {
          whiteSpace: "nowrap",
          width: perWidth * 3 + "px",
          overflowX: "hidden"
        }
      },
      Object(external__hyperapp_["h"])(
        "div",
        {
          "class": "margin-left-transition",
          style: {
            marginLeft: -(perWidth * current) + "px"
          }
        },
        elements
      )
    ),
    Object(external__hyperapp_["h"])(
      "div",
      { "class": "HyperappCarousel-ctrl" },
      Object(external__hyperapp_["h"])(
        "button",
        { "class": "HyperappCarousel-prev", onclick: onPrev },
        "Previous"
      ),
      current,
      Object(external__hyperapp_["h"])(
        "button",
        { "class": "HyperappCarousel-next", onclick: onNext },
        "Next"
      )
    )
  );
};

/* harmony default export */ var carousel = (carousel_HyperappCarouselView);
// CONCATENATED MODULE: ./src/components/file_droparea.js
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



var initialState = {
  value: "",
  isDraggingOver: false,
  mainElement: null
};

var file_droparea_actions = {
  onUpdateFile: function onUpdateFile(newPath) {
    return function (oldState) {
      return Object.assign({}, oldState, { value: newPath });
    };
  },
  onDrop: function onDrop(event) {
    return function (oldState) {
      event.preventDefault();
      var files = event.dataTransfer.files;

      var filePath = "";
      if (files) {
        var _files = _slicedToArray(files, 1);

        filePath = _files[0].name;
      }
      return Object.assign({}, file_droparea_actions.onUpdateFile(filePath)(oldState), {
        isDraggingOver: false
      });
    };
  },
  onDragOver: function onDragOver(event) {
    return function (oldState) {
      event.preventDefault();

      return Object.assign({}, oldState, {
        isDraggingOver: true
      });
    };
  },
  onDragLeave: function onDragLeave(event) {
    return function (oldState) {
      event.preventDefault();

      return Object.assign({}, oldState, {
        isDraggingOver: false
      });
    };
  },
  onChangeFile: function onChangeFile(event) {
    return function (oldState) {
      var files = event.target.files;

      var filePath = "";
      if (files) {
        // default {} in case remove file
        var _files2 = _slicedToArray(files, 1);

        var _files2$ = _files2[0];
        _files2$ = _files2$ === undefined ? {} : _files2$;
        filePath = _files2$.name;
      }
      return file_droparea_actions.onUpdateFile(filePath)(oldState);
    };
  }
};

var file_droparea_FileDroparea = function FileDroparea(_ref) {
  var state = _ref.state,
      actions = _ref.actions,
      style = _ref.style,
      className = _ref.class,
      phasingClass = _ref.phasingClass;
  var value = state.value,
      isDraggingOver = state.isDraggingOver;
  var onUpdateFile = actions.onUpdateFile,
      onDrop = actions.onDrop,
      onDragOver = actions.onDragOver,
      onDragLeave = actions.onDragLeave,
      onChangeFile = actions.onChangeFile;

  return Object(external__hyperapp_["h"])(
    "div",
    {
      "class": "FileDroparea " + className + "\n        " + (isDraggingOver ? phasingClass : "") + "\n        " + (isDraggingOver ? "FileDroparea--isDraggingOver" : "") + "\n        " + (value ? "FileDroparea--hasFile" : "") + "\n      ",
      oncreate: function oncreate(element) {
        return state.mainElement = element;
      },
      ondrop: onDrop,
      ondragover: onDragOver,
      ondragleave: onDragLeave,
      onclick: function onclick(event) {
        state.mainElement.querySelector("input[type=file]").click();
      },
      style: Object.assign({
        transition: "0.2s",
        border: "1px dashed #7c7bd3"
      }, style)
    },
    Object(external__hyperapp_["h"])(
      "button",
      { "class": "FileDroparea-description" },
      "CHOOSE FILES"
    ),
    Object(external__hyperapp_["h"])(
      "span",
      { "class": "FileDroparea-filePath" },
      value || "or drag the file here"
    ),
    Object(external__hyperapp_["h"])("input", {
      "class": "FileDroparea-fileupload",
      type: "file",
      style: { display: "none" },
      onclick: function onclick(e) {
        e.stopPropagation();
        onUpdateFile("");
      },
      onchange: onChangeFile
    })
  );
};

file_droparea_FileDroparea.initialState = initialState;
file_droparea_FileDroparea.actions = file_droparea_actions;

/* harmony default export */ var file_droparea = (file_droparea_FileDroparea);
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
function multi_select_helper__toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }




// state
var multi_select_helper_initialState = {
  selected: [],
  allOptions: [],
  cachedOptions: [],
  isOpen: false,
  filterText: ""
};

// actions
var multi_select_helper_actions = {
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
        selected: [option].concat(multi_select_helper__toConsumableArray(oldState.selected))
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
  onUpdateFilterText: function onUpdateFilterText(text) {
    return function (oldState) {
      var textLowered = text.toLowerCase();
      var cachedOptions = oldState.cachedOptions;

      return Object.assign({}, oldState, {
        allOptions: cachedOptions.filter(function (option) {
          return textLowered === "" || option.toLowerCase().includes(textLowered);
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

var multi_select_helper_OptionRow = function OptionRow(_ref) {
  var checked = _ref.checked,
      onclick = _ref.onclick,
      option = _ref.option,
      filterText = _ref.filterText;
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
  Object(external__hyperapp_["h"])(components_MarkTerms, { words: option, terms: filterText })])]);
};

var multi_select_helper_AllOptionRows = function AllOptionRows(_ref2) {
  var allOptions = _ref2.allOptions,
      selected = _ref2.selected,
      onSelect = _ref2.onSelect,
      filterText = _ref2.filterText;

  return [Object(external__hyperapp_["h"])("div", { style: { height: "5px" } })].concat(multi_select_helper__toConsumableArray(allOptions.map(function (option) {
    return Object(external__hyperapp_["h"])(multi_select_helper_OptionRow, {
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

var multi_select_helper_MultiSelectControl = function MultiSelectControl(_ref3) {
  var isFilterable = _ref3.isFilterable,
      isOpen = _ref3.isOpen,
      onUpdateFilterText = _ref3.onUpdateFilterText,
      filterIcon = _ref3.filterIcon,
      cachedOptions = _ref3.cachedOptions,
      selected = _ref3.selected,
      canSelectAll = _ref3.canSelectAll,
      onSelectAll = _ref3.onSelectAll;

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
      return onUpdateFilterText(event.target.value);
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
  initialState: multi_select_helper_initialState,
  actions: multi_select_helper_actions,
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
    onSelectAll: onSelectAll
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
    filterText: filterText
  }) : cachedOptions.length ? multi_select_ZERO_STATE_FILTERED_MESSAGE : multi_select_ZeroStateTemplate('There are no ' + objectName))])]);
};

multi_select_MultiSelect.initialState = multi_select_initialState;
multi_select_MultiSelect.actions = multi_select_actions;
/* harmony default export */ var multi_select = (multi_select_MultiSelect);
// CONCATENATED MODULE: ./src/Description.js


/* harmony default export */ var Description = (function () {
  return Object(external__hyperapp_["h"])(
    "div",
    null,
    Object(external__hyperapp_["h"])(
      "h1",
      null,
      "hyperapp-one"
    ),
    Object(external__hyperapp_["h"])(
      "p",
      null,
      Object(external__hyperapp_["h"])(
        "em",
        null,
        "With JSX and Webpack"
      )
    ),
    Object(external__hyperapp_["h"])("hr", null)
  );
});
// CONCATENATED MODULE: ./src/TestGround.js







Object(external__hyperapp_["h"])("does", null, ["nothing but ensure its imported"]);

/**
 * first object in the store is 'state' (an object - {})
 * second object in the store is 'actions' (an object - {})
 * here we destructure what is needed
 * 'num' from 'state' and 'add'/'sub' from 'actions'
 */
/* harmony default export */ var TestGround = (function (state, actions) {
  var _state$carousel = state.carousel,
      current = _state$carousel.current,
      elements = _state$carousel.elements,
      perWidth = _state$carousel.perWidth,
      multiSelectState = state.multiSelect,
      myFileState = state.myFile;
  var _actions$carousel = actions.carousel,
      onNext = _actions$carousel.onNext,
      onPrev = _actions$carousel.onPrev,
      multiSelectActions = actions.multiSelect,
      myFileActions = actions.myFile;

  return Object(external__hyperapp_["h"])(
    'div',
    { 'class': 'counter', style: { height: "1000px" } },
    Object(external__hyperapp_["h"])(Description, null),
    Object(external__hyperapp_["h"])(
      'h3',
      null,
      'Carousel'
    ),
    Object(external__hyperapp_["h"])(
      'div',
      { 'class': 'm2' },
      Object(external__hyperapp_["h"])(carousel, { current: current, elements: elements, perWidth: perWidth, onNext: onNext, onPrev: onPrev })
    ),
    Object(external__hyperapp_["h"])(
      'h3',
      null,
      'Multi Dropdown'
    ),
    multi_select({
      state: multiSelectState,
      actions: multiSelectActions,
      class: "inputfield flex-auto u-pl0 m2",
      objectName: "Sizes",
      inputClass: "pl0_5",
      // dropdownIcon: DropdownArrowIcon,
      listStyle: { marginTop: "4px" },
      selectedDisplay: function selectedDisplay() {
        return multiSelectState.selected.length + ' selected';
      },
      // filterIcon: FilterIcon,
      isFilterable: true,
      canSelectAll: true
    }),
    Object(external__hyperapp_["h"])(
      'h3',
      null,
      'File Droparea'
    ),
    Object(external__hyperapp_["h"])(file_droparea, {
      state: myFileState,
      actions: myFileActions,
      'class': 'p2 m2',
      phasingClass: 'bkgd-blue'
    }),
    Object(external__hyperapp_["h"])(
      'button',
      { style: { border: "1px solid black" } },
      'The End'
    )
  );
});
// CONCATENATED MODULE: ./src/index.js
function src__toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



var src_expand = function expand(n) {
  return [].concat(src__toConsumableArray(Array(n).keys()));
};






var src_state = {
  carousel: carousel_state,
  multiSelect: multi_select.initialState,
  myFile: file_droparea.initialState
};

var src_actions = {
  carousel: carousel_actions,
  multiSelect: multi_select.actions,
  myFile: file_droparea.actions
};

var myApp = Object(external__hyperapp_["app"])(src_state, src_actions, TestGround, document.body);
window.myApp;
myApp.multiSelect.updateOptions(src_expand(20));
/**
 * Hyperapp wires your actions so the view is re-rendered every time the state
 * changes as a result of calling any action. This object is useful because it
 * allows you to talk to your app from another app, framework, vanilla JS, etc.
 *
 * Here is an example on CodePen: https://codepen.io/selfup/pen/jLMRjO
 */

// setTimeout(add, 1000);
// setTimeout(sub, 2000);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});