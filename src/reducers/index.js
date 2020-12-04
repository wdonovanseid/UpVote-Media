import formVisibleReducer from './form-visible-reducer';
import postListReducer from './post-list-reducer';
import selectedPostReducer from './selected-post-reducer';
import editPostReducer from './edit-post-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterPostList: postListReducer,
  selectedPost: selectedPostReducer,
  editing: editPostReducer
});

export default rootReducer;