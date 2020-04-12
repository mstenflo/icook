import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      logout: this.props.logout
    }
  }
  
  render() {
    if (!this.state.currentUser) {
      return (
        <div>
          <nav className="site-header-right">
            <Link to="/login">Login</Link>
            &nbsp; | &nbsp;
            <Link to="/signup">Sign Up</Link>
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <ul className="site-header-right">
            <Link to={`/member/${this.state.currentUser.username}`}>
              <li>{this.state.currentUser.username}</li>
              <li><img src={window.avatarIconURL} /></li>
            </Link>
            <button className="header-button" onClick={this.props.logout}>Log Out</button>
          </ul>
        </div>
      )
    }
  }
}

export default Greeting;