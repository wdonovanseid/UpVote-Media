import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewPostForm(props){

  let today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      title: event.target.title.value,
      author: event.target.author.value,
      content: event.target.content.value,
      createdAt: date,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <h2>Add a new Post</h2>
      <hr />
      <ReusableForm
        formSubmissionHandler={handleNewPostFormSubmission}
        formButtonText="Add Post" />
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;