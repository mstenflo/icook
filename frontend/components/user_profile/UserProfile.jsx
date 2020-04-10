import React, { Component } from 'react';
import NotFound from '../not_found/not_found';

class UserProfile extends Component {
  render() {
    return (
      <div>
      {this.props.match.params.username}'s profile page
        <form>
          
        </form>
      </div>
    );
  }
}

export default UserProfile;
