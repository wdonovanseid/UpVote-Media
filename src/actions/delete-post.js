import * as c from './ActionTypes';

export const deletePost = id => ({
  type: c.DELETE_POST,
  id
});