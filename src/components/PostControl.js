import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import EditPostForm from './EditPostForm';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from './../actions/index.js';

class PostControl extends React.Component {

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectedPost != null) {
      const action = a.noPost;
      dispatch(action);
      const action2 = a.hideEditForm;
      dispatch(action2);
    } else {
      const action = a.toggleForm;
      dispatch(action);
    }
  }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const action = a.addPost(newPost);
    dispatch(action);
    const action2 = a.toggleForm;
    dispatch(action2)
  }

  handleChangingSelectedPost = (id) => {
    const { dispatch } = this.props;
    const post = this.props.masterPostList[id];
    const action = a.selectedPost(post);
    dispatch(action);
  }

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = a.deletePost(id);
    dispatch(action);
    const action2 = a.noPost;
    dispatch(action2);
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.showEditForm;
    dispatch(action);
  }

  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const action = a.addPost(postToEdit);
    dispatch(action);
    const action2 = a.noPost;
    dispatch(action2);
    const action3 = a.hideEditForm;
    dispatch(action3);
  }

  handleUpVoteButton = (postToUpVote) => {
    // const { dispatch } = this.props;
    // const action = a.upVotePost(postToUpVote);
    // dispatch(action);
    postToUpVote.upVotes+=1;
    this.setState({});
  }

  handleDownVoteButton = (postToDownVote) => {
    // const { dispatch } = this.props;
    // const action = a.downVotePost(postToDownVote);
    // dispatch(action);
    postToDownVote.downVotes+=1;
    this.setState({});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.editing) {
      currentlyVisibleState =
        <EditPostForm
          post={this.props.selectedPost}
          onEditPost={this.handleEditingPostInList}
        />
      buttonText = "Return to Post List";
    } else if (this.props.selectedPost != null) {
      currentlyVisibleState =
        <PostDetail
          post={this.props.selectedPost}
          onClickingEdit={this.handleEditClick}
          onClickingDelete={this.handleDeletingPost}
          onClickingUpVote={this.handleUpVoteButton}
          onClickingDownVote={this.handleDownVoteButton}
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
  selectedPost: PropTypes.object,
  editing: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterPostList: state.masterPostList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedPost: state.selectedPost,
    editing: state.editing
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;




// handleChangingSelectedUpvote = (upVoteId) => {
//   const postToUpvote = this.props.masterPostList[upVoteId];
//   const {dispatch} = this.props;
//   const {id, title, author, body, date, picture, vote} = postToUpvote;
//   const upvote = vote + 1;
//   const action = {
//     type: 'ADD_POST',
//     id: id,
//     title: title,
//     author: author,
//     body: body,
//     date: date,
//     picture: picture,
//     vote: upvote
//   }
//   dispatch(action);
// };