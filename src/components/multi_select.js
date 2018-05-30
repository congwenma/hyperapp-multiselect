import { app, h } from "hyperapp";

const expand = n => [...Array(n).keys()];

// state
export const state = {
  selected: [],
  allOptions: [],
  isOpen: false
};

// actions
export const actions = {
  updateOptions: allOptions => oldState => {
    return Object.assign({}, oldState, {
      allOptions,
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
  onOpen: _event => oldState => {
    return Object.assign({}, oldState, { isOpen: true });
  },
  onClose: _event => oldState => {
    return Object.assign({}, oldState, { isOpen: false });
  }
};

const OptionRow = ({ checked, onclick, option }) => (
  <li class="MultiSelect-option">
    <label style={{ display: "block" }}>
      {/* TODO: make this render checkbox or a custom element */}
      <input type="checkbox" checked={checked} onclick={onclick} />
      {option}
    </label>
  </li>
);

const MultiSelect = ({
  state: { isOpen, allOptions, selected },
  actions: { onSelect, onOpen, onClose, updateOptions },
  dropdownIcon,
  dropdownCheckbox, // TODO: implement
  style
}) => {
  return (
    <div
      class="MultiSelect"
      style={Object.assign({ position: "relative" }, style)}
      oncreate={element => {
        updateOptions(expand(10));
      }}
    >
      <div
        class="MultiSelect-input"
        style={{ border: "1px solid black", display: "flex" }}
        onclick={isOpen ? onClose : onOpen}
      >
        <span style={{ marginRight: "auto" }}>
          {selected.length
            ? `Selected ${selected.length} items`
            : "Pick one..."}
        </span>
        <span>{dropdownIcon || "v"}</span>
      </div>

      {isOpen && (
        <div
          class="MultiSelect-overlay"
          style={{
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            position: "fixed"
          }}
          onclick={onClose}
        />
      )}

      {isOpen && (
        <ul
          class="MultiSelect-list"
          style={{
            marginTop: "0",
            listStyle: "none",
            paddingLeft: 0,
            position: "absolute",
            overflowY: "scroll",
            width: "100%",
            zIndex: 1,
            maxHeight: "600px",
            background: "rgba(255, 255, 255, 1)",
            border: "1px solid black",
            borderTop: "0px"
          }}
        >
          {allOptions.map(option => (
            <OptionRow
              option={option}
              checked={selected.includes(option)}
              onclick={e => {
                e.preventDefault();
                onSelect(option);
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

MultiSelect.initialState = state;
MultiSelect.actions = actions;
export default MultiSelect;
