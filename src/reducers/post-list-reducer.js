import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { title, author, content, createdAt, editedAt, upVotes, downVotes, id } = action;
  switch (action.type) {
  case c.ADD_POST:
    return Object.assign({}, state, {
      [id]: {
        title: title,
        author: author,
        content: content,
        createdAt: createdAt,
        editedAt: editedAt,
        upVotes: upVotes,
        downVotes: downVotes,
        id: id
      }
    });
  case c.DELETE_POST:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }  
};