import React from 'react';
import { Link } from "react-router-dom";
import StepListItem from '../steps/step_list_item';
// import StepList from '../steps/step_list';

class RecipeShow extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.requestRecipe(this.props.match.params.recipeId);
    // this.props.requestSteps(this.props.match.params.recipeId);
  }
  
  
  render () {
    // debugger
    if (!this.props.recipe) return null;
    const { recipe } = this.props;
    const steps = Object.values(this.props.steps)
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
            {/* <StepList /> */}
            {/* {this.props.steps[0].title} */}
            {
              steps.map(step => (
                <StepListItem step={step} idx={step.id % steps[0].id} key={step.id} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
};

export default RecipeShow;