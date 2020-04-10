import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="site-header-right">
      <Link to="/login">Login</Link>
      &nbsp; | &nbsp;
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
  const personalGreeting = () => (
    <div>
      <ul className="site-header-right">
        <Link to={`/member/${currentUser.username}`}>
          <li>{currentUser.username}</li>
          <li><img src={window.avatarIconURL} /></li>
        </Link>
        <button className="header-button" onClick={logout}>Log Out</button>
      </ul>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;