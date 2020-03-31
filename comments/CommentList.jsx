import React, { Component } from 'react';

import Comment from './Comment';

class CommentList extends Component {
  render() {
    
  const { comments } = this.props
  let commentList = null

  if (!comments || comments.length === 0) {
      return (
        <div>
          <h2>
            Be the first to leave a comment!
          </h2>
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
