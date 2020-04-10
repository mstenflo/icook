import React from 'react';
import { Link } from "react-router-dom";
import StepListItem from '../steps/step_list_item';
import IngredientList from './ingredient_list';
import CommentList from '../comments/CommentList';
// import StepList from '../steps/step_list';

class RecipeShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
    this.handleDelete = this.handleDelete.bind(this);
    this.refresh = this.refresh.bind(this);
  }

refresh() {
  this.props.requestRecipe(this.props.match.params.recipeId)
    .then(response => {
      this.setState({
        recipe: response.recipe,
      })
    });
}

  componentDidMount() {
    this.props.requestRecipe(this.props.match.params.recipeId)
      .then(response => {
        this.setState({recipe: response.recipe})
      });
      // this.props.requestSteps(this.props.match.params.recipeId);
    }
    
  handleDelete() {
    this.props.deleteRecipe(this.props.match.params.recipeId)
      .then(this.props.history.push('/'));
  }
    
  render () {
    if (!this.state.recipe) return null;
    // if (!this.state.recipe.ingredients) return null;
    const { recipe } = this.state;
    let steps = [];
    let comments = [];
    let currentUser = '';

    if (recipe.steps) {
      steps = Object.values(recipe.steps)
    }
    if (recipe.comments) {
      comments = Object.values(recipe.comments)
    }
    if (this.props.currentUser && this.props.currentUser.username) {
      currentUser = this.props.currentUser.username;
    }
    
    return (
      <div className="recipe-full-wrapper">
        <header className="article-header">
          <h1 className="header-title">
            {recipe.title}
          </h1>
          <div className="sub-header">
            By &nbsp;
            <Link to={`/member/${recipe.username}`} className="recipe-author">{recipe.username}</Link>
            &nbsp; in &nbsp;
            <Link to="/" className="recipe-category">{recipe.category}</Link>
          </div>
          {
            (currentUser === recipe.username) ? <div> {
              <div>
                <Link to={`/recipes/${this.state.recipe.id}/edit`} className="edit-recipe-link">
                  <p className="edit-recipe-button">Edit Recipe</p>
                </Link>
                <div className="delete-recipe" onClick={this.handleDelete}>
                  Delete
                </div>
              </div>
            } </div> : null
          }
        </header>
        <div className="article-body">
          <p>{recipe.body}</p>
          <div className="article-photo-container">
            <img src={recipe.photourl} />
          </div>
          <div>
            <h1>Ingredients: </h1>
            <br />
            <ul>
                {
                  recipe.ingredients.map((ingredient, idx) => (
                    <IngredientList ingredient={ingredient} key={idx} />
                  ))
                }
            </ul>
            {
              steps.map((step, idx) => (
                <StepListItem step={step} idx={idx + 1} key={idx} />
              ))
            }
          </div>
          <h1 className="comments">
            <CommentList 
              comments={comments} 
              history={this.props.history}
              createComment={this.props.createComment} 
              currentUser={this.props.currentUser} 
              recipeId={recipe.id}
              refresh={this.refresh}
            />
          </h1>
        </div>
      </div>
    );
  }
};

export default RecipeShow;