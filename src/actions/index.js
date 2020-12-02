import * as c from './ActionTypes';

export const addPost = (post) => {
  const { id, author, title, content, createdAt, editedAt, upVotes, downVotes } = post;
  return {
    type: c.ADD_POST,
    id: id,
    title: title,
    author: author,
    content: content,
    createdAt: createdAt,
    editedAt: editedAt,
    upVotes: upVotes,
    downVotes: downVotes
  }
}

export const deletePost = id => ({
  type: c.DELETE_POST,
  id
});

export const hideEditForm = ({
  type: c.HIDE_EDIT_FORM
});

export const noPost = ({
  type: c.NO_POST
});

export const selectedPost = post => ({
  type: c.SELECTED_POST,
  selectedPost: post
});

export const toggleForm = ({
  type: c.TOGGLE_FORM,
});

export const showEditForm = ({
  type: c.SHOW_EDIT_FORM
});