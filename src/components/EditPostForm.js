import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditPostForm (props) {
  const { post } = props;

  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditPost({
      author: event.target.author.value,
      title: event.target.title.value,
      content: event.target.content.value,
      editedAt: date+" - "+time,
      createdAt: post.createdAt,
      id: post.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditPostFormSubmission}
        buttonText="Update Post" />
    </React.Fragment>
  );
}

EditPostForm.propTypes = {
  onEditPost: PropTypes.func
};

export default EditPostForm;