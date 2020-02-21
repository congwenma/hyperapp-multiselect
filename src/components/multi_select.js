import { h } from 'hyperapp';

import multi_select_helper from './multi_select/multi_select_helper';

const {
  ZERO_STATE_FILTERED_MESSAGE,
  ZeroStateTemplate,
  AllOptionRows,
  actions,
  initialState,
  handleFocusFilterInput,
  MultiSelectControl
} = multi_select_helper;

const MultiSelect = ({
  state: { isOpen, allOptions, cachedOptions, selected, filterText },
  actions: { onSelect, onSelectAll, onOpen, onClose, onUpdateFilterText },

  // components
  dropdownIcon,
  filterIcon,
  _dropdownCheckbox, // TODO: implement

  // styles
  style: topLevelStyle = {},
  class: topLevelClass = "",
  inputClass = "",
  listStyle = {},

  // strings
  objectName = "Items",
  selectedDisplay, // function

  optionDisplay, // (option): string

  // booleans
  isFilterable = false,
  canSelectAll = false
}) => {
  const isShowingControl = isFilterable || canSelectAll;
  const topLevelClassMashed = `MultiSelect ${
    isOpen ? "is-open" : ""
  } ${topLevelClass}`;

  const inferredSelectedMessage = () =>
    selected.length
      ? `Selected ${selected.length} ${objectName}`
      : `Pick ${objectName}...`;

  const selectedMessage = selectedDisplay
    ? selectedDisplay({ selected, filterText, isOpen })
    : inferredSelectedMessage();

  return h(
    "div",
    {
      class: topLevelClassMashed,
      style: Object.assign(
        {
          border: "1px solid black",
          position: "relative",
          paddingBottom: "2px"
        },
        topLevelStyle,
        isOpen
          ? { borderBottomStyle: "dashed" }
          : { borderBottomStyle: "solid" }
      )
    },
    [
      h(
        "div",
        {
          class: `MultiSelect-input ${inputClass}`,
          style: {
            display: "flex",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
          },
          onclick: isOpen ? onClose : onOpen
        },
        [
          h("span", { style: { marginRight: "auto" } }, [selectedMessage]),
          h(
            "span",
            {
              class: "MultiSelect-arrowIcon",
              style: {
                position: "absolute",
                right: 0
              }
            },
            [
              dropdownIcon ||
                h("span", {
                  oncreate: elem => (elem.innerHTML = "&forall;"),
                  style: {
                    right: "5px",
                    position: "absolute",
                    transition: "transform .4s ease",
                    transform: isOpen ? "rotate(180deg)" : ""
                  }
                })
            ]
          )
        ]
      ),
      isOpen &&
        h("div", {
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
        }),
      isOpen &&
        h(
          "div",
          {
            // TODO: rename this class, to MultiSelect-list-wrapper.
            class: "MultiSelect-list-wrapper",
            style: Object.assign(
              {
                marginTop: "0",
                paddingLeft: 0,
                position: "absolute",
                width: "100%",
                zIndex: 2,
                background: "rgba(255, 255, 255, 1)",
                border: "1px solid black",
                borderTop: "0px"
              },
              listStyle
            )
          },
          [
            isShowingControl &&
              h(MultiSelectControl, {
                isFilterable,
                isOpen,
                onUpdateFilterText,
                filterIcon,
                cachedOptions,
                selected,
                canSelectAll,
                onSelectAll,
                optionDisplay
              }),
            h(
              "ul",
              {
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
                onclick: isFilterable && handleFocusFilterInput
              },

              allOptions.length
                ? h(AllOptionRows, {
                    allOptions,
                    selected,
                    onSelect,
                    filterText,
                    optionDisplay
                  })
                : cachedOptions.length
                ? ZERO_STATE_FILTERED_MESSAGE
                : ZeroStateTemplate(`There are no ${objectName}`)
            )
          ]
        )
    ]
  );
};

MultiSelect.initialState = initialState;
MultiSelect.actions = actions;
export default MultiSelect;
