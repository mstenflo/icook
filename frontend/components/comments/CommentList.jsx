import React, { Component } from 'react';

import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentList extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    
    const { comments } = this.props
    let commentList = null
    let discussion = "Discussion"
    if ( comments.length > 1 ) discussion = "Discussions"
    
    if (!comments || comments.length === 0) {
      return (
        <div className="discussion">
          <h2>
            Be the first to leave a comment!
          </h2>
          <CommentForm 
            createComment={this.props.createComment}
            currentUser={this.props.currentUser} 
            recipeId={this.props.recipeId}
          />
        </div>
      );
    }
    
    commentList = comments && comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))
    
    return (
      <div className="discussion">
        <CommentForm 
          createComment={this.props.createComment}
          currentUser={this.props.currentUser} 
          recipeId={this.props.recipeId}
        />
        <br />
        <h2>
          { comments && comments.length } {discussion}
        </h2>
        <br />
        { commentList }
      </div>
    )
  }
}

export default CommentList;
