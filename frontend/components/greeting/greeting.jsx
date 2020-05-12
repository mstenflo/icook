import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      logout: this.props.logout
    }
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout()
      .then(() => window.location.href = '/')
  } 

  render() {
    if (!this.state.currentUser) {
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
            <Link to={`/member/${this.state.currentUser.username}`}>
              <li>{this.state.currentUser.username}</li>
            </Link>
            <li><img src={window.avatarIconURL} /></li>
            <button onClick={this.handleLogout}>Log Out</button>
          </ul>
        </div>
      )
    }
  }
}

export default Greeting;