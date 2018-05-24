export default {
  onPrev: _event => oldState => {
    return Object.assign({}, oldState, {
      current: Math.max(oldState.current - 1, 0)
    });
  },

  onNext: _event => oldState =>
    Object.assign({}, oldState, {
      current: Math.min(oldState.current + 1, oldState.elements.length - 1)
    })
};
