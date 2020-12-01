export default (state = null, action) => {
  const { selectedPost } = action;
  switch (action.type) {
  case 'SELECTED_POST':
    const newState = selectedPost;
    return newState;
  case 'NO_POST':
    const newState2 = null;
    return newState2;
  default:
    return state;
  }
};