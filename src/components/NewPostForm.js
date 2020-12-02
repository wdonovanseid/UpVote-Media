import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewPostForm(props){

  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      title: event.target.title.value,
      author: event.target.author.value,
      content: event.target.content.value,
      createdAt: date+" - "+time,
      editedAt: null,
      upVotes: 0,
      downVotes: 0,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <h2>Add a new Post</h2>
      <hr />
      <ReusableForm
        formSubmissionHandler={handleNewPostFormSubmission}
        buttonText="Add Post" />
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;