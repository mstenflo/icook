import React, { Component } from 'react';

class UserRecipeItem extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    const { recipe } = this.props;
    return (
      <div className="user-recipes-wrapper">
        <div className="user-recipes">
          <img src={recipe.photourl ? recipe.photourl : window.placeholder} />
        </div>
        <div className="caption">
          {recipe.title}
        </div>
      </div>
    );
  }
}

export default UserRecipeItem;
