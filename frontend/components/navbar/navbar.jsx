import React from 'react';
import { Link } from 'react-router-dom';

import GreetingContainer from '../greeting/greeting_container';

const Navbar = () => {
  
  return (
    <div className="site-header-top">
      <ul>
        <li>
          <Link to="/">
            <i className="fas fa-home home-icon"></i>
          </Link>
        </li>
        <li>
          <Link to="/recipes">
            <i className="fas fa-utensils"><span>Recipe List</span></i>
          </Link>
        </li>
        <li>
          <Link to="/publish">
            <i className="fas fa-pencil-alt"><span>Create a Recipe</span></i>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <i className="fas fa-search"><span>Search Recipes</span></i>
          </Link>
        </li>
      </ul>
      <GreetingContainer />
    </div>
  );
}

export default Navbar;
