import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

  render() {
    return (
      <div className="footer-flex">
        <img src='/assets/Fork_v2-01.png' />
        <div>
          <h1>Categories</h1>
          <ul>
            <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
            <li><Link to="/recipes"><i className="fas fa-utensils"></i> Recipes</Link></li>
            <li><Link to="/publish"><i className="fas fa-pencil-alt"></i> Create Recipe</Link></li>
          </ul>
        </div>
        <div className="social">
          <h1>About Me</h1>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/martin-stenflo-3140251a1/"><i className="fab fa-linkedin fa-3x"></i></a>
              <a href="https://github.com/mstenflo"><i className="fab fa-github fa-3x"></i></a>
              <a href="https://angel.co/u/martin-stenflo"><i className="fab fa-angellist fa-3x"></i></a>
            </li>
            <li><a href="https://martin.stenflo.org">martin.stenflo.org</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
