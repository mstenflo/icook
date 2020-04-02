import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div>
      <div>
        { comment.body }
      </div>
        <small>
          <em>
            Created 
            <span>
             { comment.created_at }
            </span>  ago by: 
          </em>
          { comment.user.fullname }
        </small>
    </div>
  );
}

export default Comment;
