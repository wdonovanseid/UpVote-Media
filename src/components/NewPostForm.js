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

  }
}