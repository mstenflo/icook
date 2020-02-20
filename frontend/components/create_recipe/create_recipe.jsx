import React, { Component } from 'react';

class CreateRecipe extends Component {
  render() {
    return (
      <div>
        <br/>
        <br/>
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
            <input className="stepTitleInput"></input>
          </div>
          <textarea className="textEditor"></textarea>
        </div>
      </div>
    );
  }
}

export default CreateRecipe;
