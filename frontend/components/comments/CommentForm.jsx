import React, { Component } from 'react';

class CommentForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      body: ""
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const payload = {
      body: this.state.body,
      recipe_id: this.props.recipeId,
      user_id: this.props.currentUser.id,
    }
    this.props.createComment(payload)
      .then(this.setState({ body: '' }))
  }

  handleCancel() {
    this.setState({
      body: ''
    });
  }
  
  render() {
    console.log('state: ', this.state)
    console.log('props: ', this.props)
    return (
      <div className="discuss">
        <form onSubmit={this.handleSubmit}>
          <div className="comment-form">
            <textarea 
              type="text"
              placeholder="Enter your comment here..."
              value={this.state.body}
              onChange={this.update("body")}
            />
            <div className="bottom-buttons">
              <div className="submit-button" onClick={this.handleCancel}>Cancel</div>
              <div className="submit-button" onClick={this.handleSubmit}>Submit</div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentForm;
