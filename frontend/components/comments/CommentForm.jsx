import React, { useState } from 'react';

const CommentForm = props => {

  const [body, setBody] = useState('');
    
  const updateBody = (e) => {
    setBody(e.target.value)
    // return e => this.setState({
    //   [field]: e.currentTarget.value
    // })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      body: body,
      recipe_id: props.recipeId,
      user_id: props.currentUser.id,
    }
    props.createComment(payload)
      .then(res => {
        setBody('');
      })
    props.refresh
    setTimeout(() => props.refresh(), 100)
  }

  const handleCancel = () => {
    setBody('');
  }
  
  if (!props.currentUser) return null;

  return (
    <div className="discuss">
      <form onSubmit={handleSubmit}>
        <div className="comment-form">
          <textarea 
            type="text"
            placeholder="Enter your comment here..."
            value={body}
            onChange={updateBody}
          />
          <div className="bottom-buttons">
            <div className="submit-button" onClick={handleCancel}>Cancel</div>
            <div className="submit-button" onClick={handleSubmit}>Submit</div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
