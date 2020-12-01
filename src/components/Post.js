import React from "react";
import PropTypes from "prop-types";


function Post(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPostClicked(props.id)}>
        <h3>{props.author} - {props.title}</h3>
        <p>Created: {props.createdAt}</p>
        <p>{props.editedAt != null && "Edited: "+props.editedAt}</p>
      </div>
      <hr/>
    </React.Fragment>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  createdAt: PropTypes.string,
  editedAt: PropTypes.string
}

export default Post;