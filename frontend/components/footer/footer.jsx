import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer-flex">
        <img src={window.spoonURL} />
        <div>
          <h1>Categories</h1>
          <ul>
            <li>Appetizers</li>
            <li>Main Dishes</li>
            <li>Desserts</li>
          </ul>
        </div>
        <div>
          <h1>About Me</h1>
          <ul>
            <li>Who am I</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div>
          <h1>Resources</h1>
          <ul>
            <li>Sitemap</li>
            <li>Help</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h1>Find me</h1>
          <ul>
            <li>Facebook</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
