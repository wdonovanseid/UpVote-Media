export default (state = false, action) => {
  switch (action.type) {
    case 'SHOW_EDIT_FORM':
      return !state;
    case 'HIDE_EDIT_FORM':
      const newState = false;
      return newState;
    default:
      return state;
    }
};