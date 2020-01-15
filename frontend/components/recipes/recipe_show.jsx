import React from 'react';
import { Link } from "react-router-dom";

class RecipeShow extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.requestRecipe(this.props.match.params.recipeId);
  }
  
  
  render () {
    if (!this.props.recipe) return null;
    return (
      <div className="recipe-full-wrapper">
        <header className="article-header">
          <h1 className="header-title">
            {this.props.recipe.title}
          </h1>
          <div className="sub-header">
            By &nbsp;
            <Link to="/" className="recipe-author">{this.props.recipe.author.username}</Link>
            &nbsp; in &nbsp;
            <Link to="/" className="recipe-category">{this.props.recipe.category}</Link>
          </div>
        </header>
        <div className="article-body">
          <p>{this.props.recipe.body}</p>
        </div>
      </div>
    );
  }
};

export default RecipeShow;