import React, { Component } from 'react';

class CommentForm extends Component {

  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

        </form>
      </div>
    );
  }
}

export default CommentForm;
