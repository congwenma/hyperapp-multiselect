import { h } from "hyperapp";
import Description from "./Description";
import Carousel from "./components/carousel";
import MultiSelect from "./components/multi_select";

/**
 * first object in the store is 'state' (an object - {})
 * second object in the store is 'actions' (an object - {})
 * here we destructure what is needed
 * 'num' from 'state' and 'add'/'sub' from 'actions'
 */
export default (state, actions) => {
  const {
    carousel: { current, elements, perWidth },
    multiSelect: multiSelectState
  } = state;
  const {
    carousel: { onNext, onPrev },
    multiSelect: multiSelectActions
  } = actions;
  return (
    <div class="counter" style={{ height: "1000px" }}>
      <Description />
      <h3>Carousel</h3>
      <Carousel {...{ current, elements, perWidth, onNext, onPrev }} />
      <h3>Multi Dropdown</h3>
      {MultiSelect({
        state: multiSelectState,
        actions: multiSelectActions,
        class: "inputfield flex-auto u-pl0",
        objectName: "Sizes",
        inputClass: "pl0_5",
        // dropdownIcon: DropdownArrowIcon,
        listStyle: { marginTop: "4px" },
        // filterIcon: FilterIcon,
        isFilterable: true,
        canSelectAll: true
      })}

      <button style={{ border: "1px solid black" }}>The End</button>
    </div>
  );
};
