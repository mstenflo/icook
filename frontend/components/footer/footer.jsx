import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer-flex">
        <img src={window.logoURL} />
        <div>
          <h1>Categories</h1>
          <ul>
            <li>Appetizer</li>
            <li>Main Dish</li>
            <li>Dessert</li>
          </ul>
        </div>
        <div>
          <h1>About Me</h1>
          <ul>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
