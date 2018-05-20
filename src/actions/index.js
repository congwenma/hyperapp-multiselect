export default {
  prev: _event => oldState => {
    return Object.assign({}, oldState, {
      current: Math.max(oldState.current - 1, 0)
    });
  },

  next: _event => oldState =>
    Object.assign({}, oldState, {
      current: Math.min(oldState.current + 1, oldState.elements.length - 1)
    })
};
