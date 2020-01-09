import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';


class Navbar extends Component {
  render() {
    return (
      <div className="site-header-top">
        <ul>
          <li>
            <Link to="/">
              <img src={window.homeButtonURL} />
            </Link>
          </li>
          <li>Appetizer</li>
          <li>Main dish</li>
          <li>Dessert</li>
        </ul>
        <GreetingContainer />
      </div>
    );
  }
}

export default Navbar;
