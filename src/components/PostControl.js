import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import EditPostForm from './EditPostForm';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectedPost != null) {
      const action = {
        type: 'NO_POST'
      }
      dispatch(action);
      this.setState({
        editing: false
      });
    } else {
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { id, author, title, content, createdAt, editedAt } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      author: author,
      title: title,
      content: content,
      createdAt: createdAt,
      editedAt: editedAt
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleChangingSelectedPost = (id) => {
    const { dispatch } = this.props;
    const selectedPost = this.props.masterPostList[id];
    const action = {
      type: 'SELECTED_POST',
      selectedPost: selectedPost
    }
    dispatch(action);
  }

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    const action2 = {
      type: 'NO_POST'
    }
    dispatch(action2);
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const { id, author, title, content, createdAt, editedAt } = postToEdit;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      author: author,
      content: content,
      createdAt: createdAt,
      editedAt: editedAt
    }
    dispatch(action);
    const action2 = {
      type: 'NO_POST'
    }
    dispatch(action2);
    this.setState({
      editing: false,
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState =
        <EditPostForm
          post={this.props.selectedPost}
          onEditPost={this.handleEditingPostInList} />
      buttonText = "Return to Post List";
    } else if (this.props.selectedPost != null) {
      currentlyVisibleState =
        <PostDetail
          post={this.props.selectedPost}
          onClickingEdit={this.handleEditClick}
          onClickingDelete={this.handleDeletingPost}
        />
      buttonText = "Return to Post List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState =
        <NewPostForm
          onNewPostCreation={this.handleAddingNewPostToList}
        />
      buttonText = "Return to Post List";
    } else {
      currentlyVisibleState =
        <PostList
          postList={this.props.masterPostList}
          onPostSelection={this.handleChangingSelectedPost}
        />;
      buttonText = "Create A Post";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

PostControl.propTypes = {
  masterPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  selectedPost: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterPostList: state.masterPostList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedPost: state.selectedPost
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;