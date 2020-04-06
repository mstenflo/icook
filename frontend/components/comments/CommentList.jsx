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
    
    if (!comments || comments.length === 0) {
      console.log('props: ', this.props)
      return (
        <div>
          <h2>
            Be the first to leave a comment!
          </h2>
          <CommentForm />
        </div>
      );
    }

    commentList = comments && comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))

    return (
      <div>
        <h2>
          User comments ({ comments && comments.length })
        </h2>
        { commentList }
      </div>
    )
  }
}

export default CommentList;
