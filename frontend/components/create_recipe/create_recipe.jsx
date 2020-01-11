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
              <span className="fileset_textTainer">Click to add images</span>
            </div>
            <button className="navBarButtons">Add</button>
            <button className="navBarButtons">More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateRecipe;
