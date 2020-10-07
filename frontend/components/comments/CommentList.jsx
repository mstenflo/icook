import React from 'react';

import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentList = props => {
  
  const { comments } = props
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
          history={props.history}
          createComment={props.createComment}
          currentUser={props.currentUser} 
          recipeId={props.recipeId}
          refresh={props.refresh}
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
        history={props.history}
        createComment={props.createComment}
        currentUser={props.currentUser} 
        recipeId={props.recipeId}
        refresh={props.refresh}
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

export default CommentList;
