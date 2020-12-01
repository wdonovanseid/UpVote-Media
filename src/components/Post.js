import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPostClicked(props.id)}>
        <h3>{props.author} = {props.title}</h3>
        <p>{props.createdAt}</p>
      </div>
      <hr/>
    </React.Fragment>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  createdAt: PropTypes.string
}

export default Post;