import { h } from "hyperapp";
import Description from "./Description";

/**
 * first object in the store is 'state' (an object - {})
 * second object in the store is 'actions' (an object - {})
 * here we destructure what is needed
 * 'num' from 'state' and 'add'/'sub' from 'actions'
 */
export default ({ current, elements, perWidth }, { next, prev }) => {
  // debugger;
  return (
    <div class="counter">
      <Description />
      <section>
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
            {/* <div class="inline-block">Do something 1</div>
              <div class="inline-block">Do something 2</div>
              <div class="inline-block">Do something 3</div>
              <div class="inline-block">Do something 4</div>
              <div class="inline-block">Do something 5</div>
              <div class="inline-block">Do something 6</div>
              <div class="inline-block">Do something 7</div>
              <div class="inline-block">Do something 8</div>
            */}
            {elements}
          </div>
        </div>
        <div>
          <button onclick={prev}>Previous</button>
          {current}
          <button onclick={next}>Next</button>
        </div>
      </section>
    </div>
  );
};
