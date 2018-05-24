import { h } from "hyperapp";
import Description from "./Description";
import HyperappCarouselView from "./hyperapp_carousel";

/**
 * first object in the store is 'state' (an object - {})
 * second object in the store is 'actions' (an object - {})
 * here we destructure what is needed
 * 'num' from 'state' and 'add'/'sub' from 'actions'
 */
export default ({ current, elements, perWidth }, { onNext, onPrev }) => {
  // debugger;
  return (
    <div class="counter">
      <Description />
      <HyperappCarouselView
        {...{ current, elements, perWidth, onNext, onPrev }}
      />
    </div>
  );
};
