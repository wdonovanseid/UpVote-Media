export default (state = {}, action) => {
  const { title, author, content, createdAt, editedAt, upVotes, downVotes, id } = action;
  switch (action.type) {
  case 'ADD_POST':
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
  case 'DELETE_POST':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }  
};