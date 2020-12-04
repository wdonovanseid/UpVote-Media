import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";

function PostList(props){
  return(
    <React.Fragment>
      <h2>Post List</h2>
      <hr/>
      {Object.values(props.postList)
      .sort((a, b) => b.upVotes - a.upVotes)
      .map((post) =>
        <Post
          whenPostClicked = {props.onPostSelection}
          title={post.title}
          author={post.author}
          content={post.content}
          createdAt={post.createdAt}
          editedAt={post.editedAt}
          upVotes={post.upVotes}
          downVotes={post.downVotes}
          id={post.id}
          key={post.id}
        />
      )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
};

export default PostList;