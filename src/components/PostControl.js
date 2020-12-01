import React from './react';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    // this.handleClick = this.handleClick.bind(this);
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
    const { id, author, title, content, createdAt } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      author: author,
      title: title,
      content: content,
      createdAt: createdAt
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

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.formVisible) {
      currentlyVisibleState =
        <NewPostForm
          onNewPostCreation={this.handleAddingNewPostToList} />
      buttonText = "Return to Post List";
    } else {
      currentlyVisibleState =
        <PostList
          PostList={this.props.masterPostList}
          onPostSelection={this.handleChangingSelectedPost} />;
      buttonText = "Add Post";
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

}



export default PostControl;