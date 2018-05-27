import { app, h } from "hyperapp";
// state
export const state = {
  selected: [],
  allOptions: [],
  is_open: false
};

// actions
export const actions = {
  onSelect: option => oldState => {
    return oldState.allOptions.push(option);
  },
  onOpen: _event => oldState => {
    return Object.assign({}, oldState, { is_open: true });
  },
  onClose: _event => oldState => {
    return Object.assign({}, oldState, { is_open: false });
  }
};

const MultiDropdown = ({}) => {
  return (
    <div class="MultiDropdown">
      <div />
    </div>
  );
};

export default MultiDropdown;
