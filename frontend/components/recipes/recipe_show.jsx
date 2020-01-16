import React from 'react';
import { Link } from "react-router-dom";

class RecipeShow extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.requestRecipe(this.props.match.params.recipeId);
    // this.props.reqestSteps(this.props.match.params.recipeId);
  }
  
  
  render () {
    if (!this.props.recipe) return null;
    const { recipe, steps } = this.props;
    return (
      <div className="recipe-full-wrapper">
        <header className="article-header">
          <h1 className="header-title">
            {recipe.title}
          </h1>
          <div className="sub-header">
            By &nbsp;
            <Link to="/" className="recipe-author">{recipe.username}</Link>
            &nbsp; in &nbsp;
            <Link to="/" className="recipe-category">{recipe.category}</Link>
          </div>
        </header>
        <div className="article-body">
          <p>{recipe.body}</p>
          <div>
            {/* {
              steps.map(step => (
                step.title
              ))
            } */}
          </div>
        </div>
      </div>
    );
  }
};

export default RecipeShow;