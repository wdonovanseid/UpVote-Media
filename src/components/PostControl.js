import React from './react';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
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