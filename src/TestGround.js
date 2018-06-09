import { h } from "hyperapp";
import Description from "./Description";
import Carousel from "./components/carousel";
import MultiSelect from "./components/multi_select";
import FileDroparea from "./components/file_droparea";

/**
 * first object in the store is 'state' (an object - {})
 * second object in the store is 'actions' (an object - {})
 * here we destructure what is needed
 * 'num' from 'state' and 'add'/'sub' from 'actions'
 */
export default (state, actions) => {
  const {
    carousel: { current, elements, perWidth },
    multiSelect: multiSelectState,
    myFile: myFileState
  } = state;
  const {
    carousel: { onNext, onPrev },
    multiSelect: multiSelectActions,
    myFile: myFileActions
  } = actions;
  return (
    <div class="counter" style={{ height: "1000px" }}>
      <Description />
      <h3>Carousel</h3>
      <div class="m2">
        <Carousel {...{ current, elements, perWidth, onNext, onPrev }} />
      </div>

      <h3>Multi Dropdown</h3>
      {MultiSelect({
        state: multiSelectState,
        actions: multiSelectActions,
        class: "inputfield flex-auto u-pl0 m2",
        objectName: "Sizes",
        inputClass: "pl0_5",
        // dropdownIcon: DropdownArrowIcon,
        listStyle: { marginTop: "4px" },
        // filterIcon: FilterIcon,
        isFilterable: true,
        canSelectAll: true
      })}

      <h3>File Droparea</h3>
      <FileDroparea
        state={myFileState}
        actions={myFileActions}
        class="p2 m2"
        phasingClass="bkgd-blue"
      />

      <button style={{ border: "1px solid black" }}>The End</button>
    </div>
  );
};
