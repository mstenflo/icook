import React, { Component } from 'react';
import moment from 'moment';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }

  componentDidMount() {
    this.props.requestUser(this.props.match.params.username)
      .then(res => this.setState({
        user: res.user
      }));
  }
  
  
  render() {
    if (!this.state.user) return null;
    return (
      <div className="profile-header">
        <div className="profile-avatar-container">
          <img className="profile-avatar" src={window.avatarIconURL} />
          <div className="profile-top">
            <h1>{this.props.match.params.username}</h1>
          </div>
        </div>
        <div className="profile-header-stats">
          <img className="join-icon" src={window.joinIcon} />
          Joined &nbsp;
          {
            moment(this.state.user.created_at).format('LL')
          }
        </div>
      </div>
    );
  }
}

export default UserProfile;
