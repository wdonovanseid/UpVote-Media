import React from './react';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick = () => {
    if (this.state.currentPage !== 'kegList') {
      this.setState({
        currentPage: 'kegList',
        selectedKeg: null
      });
    } else {
      this.setState({
        currentPage: 'newKeg',
      });
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      currentPage: 'kegList'
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(x => x.id === id)[0];
    this.setState({
      selectedKeg: selectedKeg,
      currentPage: 'kegDetail'
    });
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