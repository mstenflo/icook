import React from 'react';
import moment from 'moment';

const Comment = ({ comment }) => {
  return (
    <div className="post">
      <div>
        <span className="posted-by-author">
          { comment.username } &nbsp;
        </span>
        <span className="posted-by-date">
          {
            moment(comment.created_at).startOf('minute').fromNow()
          }
        </span>
      </div>
      <div className="comment-body">
        { comment.body }
      </div>
    </div>
  );
}

export default Comment;
