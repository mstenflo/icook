import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import UserRecipeItem from './UserRecipeItem';

const UserProfile = props => {

  const [user, setUser] = useState('');
  const [recipes, setRecipes] = useState('');

  useEffect(() => {
    props.requestUser(props.match.params.username)
      .then(res => setUser(res.user));
    props.requestRecipes()
      .then(res => setRecipes(res.recipes));
  }, []);

  if (!user) return null;
  if (!recipes) return null;
  let userRecipes = [];

  Object.values(recipes).forEach(recipe => {
    if (recipe.username === user.username) userRecipes.push(recipe);
  });

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
          <i className="fas fa-user-plus"></i>
          Joined &nbsp;
          {
            moment(user.created_at).format('LL')
          }
        </div>
      </div>
      <div className="background">
        <div className="profile-body">
          <h2 className="module-title">{user.username}'s Recipes</h2>
          <div className="inline">
            {
              userRecipes.map((recipe, key) => (
                <div key={key} >
                  <Link to={`/recipes/${recipe.id}`}>
                    <UserRecipeItem recipe={recipe} />
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
