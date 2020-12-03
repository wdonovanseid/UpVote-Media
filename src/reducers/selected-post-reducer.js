import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { selectedPost } = action;
  switch (action.type) {
  case c.SELECTED_POST:
    const newState = selectedPost;
    return newState;
  case c.NO_POST:
    const newState2 = null;
    return newState2;
  default:
    return state;
  }
};