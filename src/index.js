import { app } from "hyperapp";
import view from "./components/TestGround";
import {
  state as carouselState,
  actions as carouselActions
} from "./components/carousel";

const state = {
  carousel: carouselState
};

const actions = {
  carousel: carouselActions
};

const myApp = app(state, actions, view, document.body);

/**
 * Hyperapp wires your actions so the view is re-rendered every time the state
 * changes as a result of calling any action. This object is useful because it
 * allows you to talk to your app from another app, framework, vanilla JS, etc.
 *
 * Here is an example on CodePen: https://codepen.io/selfup/pen/jLMRjO
 */

// setTimeout(add, 1000);
// setTimeout(sub, 2000);
