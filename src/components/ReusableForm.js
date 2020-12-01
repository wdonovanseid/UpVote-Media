import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <form onSubmit={props.formSubmissionHandler}>
      <h5>Title of Post</h5>
      <input
        type='text'
        name='title'
        defaultValue = {props.title ? props.title : ''}
      />
      <h5>Author</h5>
      <input
        type='text'
        name='author'
        defaultValue = {props.author ? props.author : ''}
      />
      <h5>Content</h5>
      <input
        type='text'
        name='content'
        defaultValue = {props.content ? props.content : ''}
      />
      <button type='submit'>{props.buttonText}</button>
    </form>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;