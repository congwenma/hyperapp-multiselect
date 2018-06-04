import { h } from "hyperapp";
import MarkTerms from "../MarkTerms";

// state
const initialState = {
  selected: [],
  allOptions: [],
  cachedOptions: [],
  isOpen: false,
  filterText: ""
};

// actions
const actions = {
  updateOptions: allOptions => oldState => {
    return Object.assign({}, oldState, {
      allOptions,
      cachedOptions: allOptions,
      selected: []
    });
  },
  onSelect: option => oldState => {
    if (oldState.selected.includes(option)) {
      const newSelected = oldState.selected.filter(opt => opt !== option);
      return Object.assign({}, oldState, {
        selected: newSelected
      });
    }
    return Object.assign({}, oldState, {
      selected: [option, ...oldState.selected]
    });
  },
  onSelectAll: () => oldState => {
    const { selected, cachedOptions } = oldState;
    const everythingSelected = cachedOptions.length === selected.length;
    return Object.assign({}, oldState, {
      selected: everythingSelected ? [] : cachedOptions
    });
  },
  onOpen: _event => oldState => {
    return Object.assign({}, oldState, { isOpen: true });
  },
  onClose: _event => oldState => {
    return Object.assign({}, oldState, { isOpen: false });
  },
  onUpdateFilterText: text => oldState => {
    const textLowered = text.toLowerCase();
    const { cachedOptions } = oldState;
    return Object.assign({}, oldState, {
      allOptions: cachedOptions.filter(
        option =>
          textLowered === "" || option.toLowerCase().includes(textLowered)
      ),
      filterText: textLowered
    });
  }
};

const ZeroStateTemplate = text =>
  h(
    "div",
    {
      style: {
        position: "absolute",
        height: "100%",
        width: "100%"
      }
    },
    h(
      "div",
      {
        style: {
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex"
        }
      },
      text
    )
  );
const ZERO_STATE_FILTERED_MESSAGE = ZeroStateTemplate("No results found");

const OptionRow = ({ checked, onclick, option, filterText }) =>
  h(
    "li",
    {
      class: "MultiSelect-option",
      style: {
        listStyle: "none"
      }
    },
    [
      h(
        "label",
        {
          style: {
            display: "flex",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflowX: "hidden",
            alignItems: "center"
          }
        },
        [
          h("input", { type: "checkbox", checked: checked, onclick: onclick }),
          // label mark terms
          h(MarkTerms, { words: option, terms: filterText })
        ]
      )
    ]
  );

const AllOptionRows = ({ allOptions, selected, onSelect, filterText }) => {
  return [
    h("div", { style: { height: "5px" } }), // padding top of list

    ...allOptions.map(option => {
      return h(OptionRow, {
        option,
        checked: selected.includes(option),
        onclick: e => {
          e.preventDefault();
          onSelect(option);
        },
        filterText
      });
    })
  ];
};

const handleFocusFilterInput = event => {
  setTimeout(() => {
    let topLevelComponent = event.target;
    // find its parent
    while (!topLevelComponent.classList.contains("MultiSelect")) {
      topLevelComponent = topLevelComponent.parentElement;
    }
    topLevelComponent.querySelector(".MultiSelect-filterInput").focus();
  });
};

const SOME_CHECKED_MARK = h(
  "div",
  {
    style: {
      position: "absolute",
      height: "100%",
      alignItems: "center",
      top: 0,
      display: "flex",
      left: "3px"
    }
  },
  h("div", {
    style: {
      height: "4px",
      backgroundColor: "#19B5FE",
      width: "10px",
      borderRadius: "3px"
    }
  })
);

const MultiSelectControl = ({
  isFilterable,
  isOpen,
  onUpdateFilterText,
  filterIcon,
  cachedOptions,
  selected,
  canSelectAll,
  onSelectAll
}) => {
  const isEverythingSelected = selected.length === cachedOptions.length;
  return h(
    "div",
    {
      class: "MultiSelect-filterCheckallControl",
      style: {
        padding: "2px 0",
        background: "#eefaff",
        borderBottom: "1px dashed #19B5FE"
      }
    },
    [
      isFilterable &&
        h(
          "div",
          {
            style: {
              display: "flex",
              background: "#eefaff",
              padding: "4px 6px",
              fontWeight: "800"
            }
          },
          [
            isOpen &&
              h("span", {
                oncreate: element => {
                  // hacks into lifecycle hook
                  element.nextElementSibling.focus();
                }
              }),
            h("input", {
              onkeyup: event => onUpdateFilterText(event.target.value),
              class: "MultiSelect-filterInput",
              placeholder: "Search...",
              style: {
                outlineWidth: "0px", // removes halo
                width: "100%",
                fontSize: "16px",
                border: "2px solid #19B5FE",
                boxSizing: "border-box" // otherwise overextends
              }
            }),
            filterIcon
          ]
        ),
      canSelectAll &&
        h(
          "div",
          {
            style: {
              position: "relative",
              background: "#eefaff"
            }
          },
          [
            h(OptionRow, {
              option: "Select all",
              checked: isEverythingSelected,
              onclick: e => {
                e.preventDefault();
                onSelectAll();
              }
            }),
            !!selected.length && !isEverythingSelected && SOME_CHECKED_MARK
          ]
        )
    ]
  );
};

export default {
  ZERO_STATE_FILTERED_MESSAGE,
  ZeroStateTemplate,
  AllOptionRows,
  initialState,
  actions,
  handleFocusFilterInput,
  MultiSelectControl
};
