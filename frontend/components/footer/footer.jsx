import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="footer-flex">
        <img src={window.logoURL} />
        <div>
          <h1>Categories</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/publish">Create Recipe</Link></li>
          </ul>
        </div>
        <div>
          <h1>About Me</h1>
          <ul>
            <li><a href="https://www.linkedin.com/in/martin-stenflo-3140251a1/">LinkedIn</a></li>
            <li><a href="https://github.com/mstenflo">Github</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
