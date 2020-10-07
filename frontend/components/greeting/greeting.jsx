import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Greeting = props => {

  const [currentUser, setCurrentUser] = useState(props.currentUser);

  const handleLogout = (e) => {
    e.preventDefault();
    props.logout()
      .then(() => window.location.href = '/')
  } 

  if (!currentUser) {
    return (
      <div className="site-header-right">
        <nav>
          <Link to="/login">Login</Link>
          &nbsp; | &nbsp;
          <Link to="/signup">Sign Up</Link>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="site-header-right">
        <ul>
          <Link to={`/member/${currentUser.username}`}>
            <li>{currentUser.username}</li>
          </Link>
          <li><img src={window.avatarIconURL} /></li>
          <button onClick={handleLogout}>Log Out</button>
        </ul>
      </div>
    )
  }
}

export default Greeting;