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
    this.props.requestRecipes()
      .then(res => this.setState({
        recipes: res.recipes
      }))
  }
  
  
  render() {
    const { recipes, user } = this.state;

    if (!user) return null;
    if (!recipes) return null;
    let userRecipes = [];

    Object.values(recipes).forEach(recipe => {
      if (recipe.username === user.username) userRecipes.push(recipe)
    })

    return (
      <div>
        <div className="profile-header">
          <div className="profile-avatar-container">
            <img className="profile-avatar" src={window.avatarIconURL} />
            <div className="profile-top">
              <h1>{user.username}</h1>
            </div>
          </div>
          <div className="profile-header-stats">
            <img className="join-icon" src={window.joinIcon} />
            Joined &nbsp;
            {
              moment(user.created_at).format('LL')
            }
          </div>
        </div>
        {
          userRecipes.map((recipe, key) => (
            <div key={key}>{recipe.title}</div>
          ))
        }
      </div>
    );
  }
}

export default UserProfile;
