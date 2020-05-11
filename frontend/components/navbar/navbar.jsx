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
              <i className="fas fa-home"></i>
            </Link>
          </li>
          {/* <li>Appetizer</li>
          <li>Main Dish</li>
          <li>Dessert</li> */}
        </ul>
        <GreetingContainer />
      </div>
    );
  }
}

export default Navbar;
