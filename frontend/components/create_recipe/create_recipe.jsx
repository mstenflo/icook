import React, { Component } from 'react';

class CreateRecipe extends Component {

  constructor(props) {
    super(props);
  
    this.state = this.props;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    this.props.action(this.state);
  }

  render() {
    return (
      <div>
        <br/>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <div className="centeredContainer">
            <div className="attachedImages">
              <div className="fileset_placeholder">
                <span className="plus">+ </span>
                <span className="fileset_textTainer">Click to add an image</span>
              </div>
              <div className="navBarButtons">
                <button className="stepButton"><span className="addPlus">+ </span>Add Step</button>
                <button className="publishButton">Publish</button>
              </div>
            </div>
          </div>
          <div className="stepDetailBox">
            <div className="stepTitleWrapper">
              <label for="title">
                <input 
                  className="stepTitleInput" 
                  type="text"
                  value={this.state.title}
                  onChange={this.update("title")}
                />
              </label>
            </div>
            <label for="body">
              <textarea
                className="textEditor"
                onChange={this.update("body")}
              />
            </label>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateRecipe;
