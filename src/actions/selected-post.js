import * as c from './ActionTypes';

export const selectedPost = post => ({
  type: c.SELECTED_POST,
  selectedPost: post
});