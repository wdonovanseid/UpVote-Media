import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewPostForm(props){
  return (
    <React.Fragment>
      <h2>Add a new Post</h2>
      <hr />
      <ReusableForm
        formSubmissionHandler={handleNewPostFormSubmission}
        formButtonText="Add Post" />
    </React.Fragment>
  );
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
props.onNewKegCPosttion({
      title: event.target.title.value,
      author: event.target.author.value,
      content: event.target.content.value,
      createdAt: event.target.createdAt.value,
      id: v4()
    });
  }
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;