import React from 'react';

const UserRecipeItem = props => {
  
  const { recipe } = props;

  return (
    <div className="user-recipes-wrapper">
      <div className="user-recipes">
        <img src={recipe.photo_url ? recipe.photo_url : window.placeholder} />
      </div>
      <div className="caption">
        {recipe.title}
      </div>
    </div>
  );
}

export default UserRecipeItem;
