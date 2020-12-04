import React from "react";
import PropTypes from "prop-types";

function PostDetail(props){
  const { post, onClickingDelete, onClickingUpVote, onClickingDownVote } = props;
  
  return (
    <React.Fragment>
      <h1>Post Detail</h1>
      <h3>{post.author} - {post.title}</h3>
      <p>{post.createdAt}</p>
      <p><em>{post.content}</em></p>
      <p>upvotes: {post.upVotes}</p>
      <p>downvotes: {post.downVotes}</p>
      
      <button onClick={()=> onClickingUpVote(post)}>UpVote!</button>
      <button onClick={()=> onClickingDownVote(post)}>DownVote!</button>
      <button onClick={ props.onClickingEdit }>Update Post</button>
      <button onClick={()=> onClickingDelete(post.id) }>Delete Post</button>
      <hr/>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingUpVote: PropTypes.func,
  onClickingDownVote: PropTypes.func
};

export default PostDetail;