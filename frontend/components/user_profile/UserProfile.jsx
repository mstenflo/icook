import React, { Component } from 'react';
import NotFound from '../not_found/not_found';

class UserProfile extends Component {
  render() {
    return (
      <div className="profile-header">
        <div className="profile-avatar-container">
          <img className="profile-avatar" src={window.avatarIconURL} />
          <div className="profile-top">
            <h1>{this.props.match.params.username}</h1>
          </div>
        </div>
        <div className="profile-header-stats">
          Joined
        </div>
      </div>
    );
  }
}

export default UserProfile;
