import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <div className="not-found-text">
          <h1>Page Not Found!</h1>
          <br />
          <p>Please check the url, or go back to the <Link to={'/'}>Home Page</Link></p>
        </div>
      </div>
    );
  }
}

export default NotFound;
