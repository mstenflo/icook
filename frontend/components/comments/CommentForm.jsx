import React, { Component } from 'react';

class CommentForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      body: ""
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit = this.handleCancel.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }
  
  handleSubmit(e) {
    e.preventDefault();
  }

  handleCancel() {
    this.props.history.push(`/recipes`);
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="discuss">
        <form onSubmit={this.handleSubmit}>
          <div className="comment-form">
            <textarea 
              type="text"
              placeholder="Enter your comment here..."
              value={this.state.comment}
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
