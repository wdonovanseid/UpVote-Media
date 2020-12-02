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