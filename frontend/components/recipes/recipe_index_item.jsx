import React from 'react';
import { Link } from "react-router-dom";

class RecipeIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render () {
    if (!this.props.recipe) return null;
    const { recipe } = this.props
    return (
      <div className="recipe-index-item">
        <Link to={`/recipes/${this.props.recipe.id}`}>
          <img src={recipe.photourl ? recipe.photourl : '/assets/Fork_placeholder.png'} />
        </Link>
        <div className="recipe-info">
          <Link to={`/recipes/${recipe.id}`} className="recipe-title">{recipe.title}</Link>
          &nbsp; by &nbsp;
          <Link to={`/member/${recipe.username}`} className="recipe-author">{recipe.username}</Link>
          &nbsp; in &nbsp;
          <Link to="/" className="recipe-category">{recipe.category}</Link>
        </div>
        <div className="recipe-stats">

        </div>
      </div>
    );
  }
};

export default RecipeIndexItem;