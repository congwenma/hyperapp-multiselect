import { app, h } from "hyperapp";
// state
const expand = n => [...Array(n).keys()];

export const state = {
  current: 0,
  elements: expand(10).map(n => {
    return <div class="inline-block">Do something {n}</div>;
  }),
  perWidth: 150
};

// actions
export const actions = {
  onPrev: _event => oldState => {
    return Object.assign({}, oldState, {
      current: Math.max(oldState.current - 1, 0)
    });
  },

  onNext: _event => oldState => {
    return Object.assign({}, oldState, {
      current: Math.min(oldState.current + 1, oldState.elements.length - 1)
    });
  }
};

/**
 *
 * @param {perWidth} - width per item
 * @param {current} - current first item index
 */
const HyperappCarouselView = ({
  perWidth,
  current,
  elements,
  onPrev,
  onNext
}) => {
  return (
    <div class="HyperappCarousel">
      <div
        id="carousel"
        style={{
          whiteSpace: "nowrap",
          width: perWidth * 3 + "px",
          overflowX: "hidden"
        }}
      >
        <div
          class="margin-left-transition"
          style={{
            marginLeft: -(perWidth * current) + "px"
          }}
        >
          {elements}
        </div>
      </div>
      <div class="HyperappCarousel-ctrl">
        <button class="HyperappCarousel-prev" onclick={onPrev}>
          Previous
        </button>
        {current}
        <button class="HyperappCarousel-next" onclick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default HyperappCarouselView;
