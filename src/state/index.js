import { h } from "hyperapp";
const expand = n => [...Array(n).keys()];

export default {
  current: 0,
  elements: expand(10).map(n => {
    return <div class="inline-block">Do something {n}</div>;
  }),
  perWidth: 150
};
