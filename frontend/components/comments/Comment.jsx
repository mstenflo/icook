import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Comment = ({ comment }) => {
  return (
    <div className="post">
      <div>
        <span className="posted-by-author">
          <Link to={`/member/${comment.username}`}>
          { comment.username }</Link> &nbsp;
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
