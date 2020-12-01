import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";

function PostList(props){
  return(
    <React.Fragment>
      <h2>Post List</h2>
      <hr/>
      {Object.values(props.postList).map((post) =>
        <Post
          whenPostClicked = {props.onPostSelection}
          title={post.title}
          author={post.author}
          content={post.content}
          createdAt={post.createdAt}
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