import { app, h } from "hyperapp";

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
