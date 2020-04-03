import * as CommentAPIUtil from '../util/comment_api_util'

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const requestComments = () => dispatch => (
  CommentAPIUtil.fetchComments()
  .then((comments) => dispatch(receiveComments(comments)))
);

export const requestComment = commentId => dispatch => (
  CommentAPIUtil.fetchComment(commentId)
  .then(comment => dispatch(receiveComment(comment)))
);

export const createComment = comment => dispatch => (
  CommentAPIUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
    // // .fail(errors => {
    // //   return dispatch(receiveErrors(errors));
    // })
);

export const updateComment = comment => dispatch => (
  CommentAPIUtil.updateComment(comment)
  .then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = commentId => dispatch => (
  CommentAPIUtil.deleteComment(commentId)
  .then(() => dispatch(removeComment(commentId)))
);
