import { h } from "hyperapp";
import Description from "./Description";
import Carousel from "./carousel";
import MultiDropdown from "./multi_dropdown";

/**
 * first object in the store is 'state' (an object - {})
 * second object in the store is 'actions' (an object - {})
 * here we destructure what is needed
 * 'num' from 'state' and 'add'/'sub' from 'actions'
 */
export default (
  { carousel: { current, elements, perWidth } },
  { carousel: { onNext, onPrev } }
) => {
  return (
    <div class="counter">
      <Description />
      <h3>Carousel</h3>
      <Carousel {...{ current, elements, perWidth, onNext, onPrev }} />
      <h3>Multi Dropdown</h3>
      <MultiDropdown />
    </div>
  );
};
