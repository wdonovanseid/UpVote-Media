import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
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
    {/* <h5>Date</h5> */}
    {/* <input
      type='date'
      name='createdAt'
      defaultValue = {props.createdAt ? props.createdAt : ''}
    /> */}
  </form>
}