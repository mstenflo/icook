import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import StepListItem from '../steps/step_list_item';
import IngredientList from './ingredient_list';
import CommentList from '../comments/CommentList';

const RecipeShow = props => {

  const [recipe, setRecipe] = useState('');

  useEffect(() => {
    props.requestRecipe(props.match.params.recipeId)
      .then(res => setRecipe(res.recipe));
  }, [])

  const refresh = () => {
    props.requestRecipe(props.match.params.recipeId)
      .then(res => setRecipe(res.recipe));
  }
    
  const handleDelete = () => {
    props.deleteRecipe(props.match.params.recipeId)
      .then(props.history.push('/'));
  }
  
  if (!recipe) return null;

  let steps = [];
  let comments = [];
  let currentUser = '';

  if (recipe.steps) {
    steps = Object.values(recipe.steps)
  }

  if (recipe.comments) {
    comments = Object.values(recipe.comments)
  }

  if (props.currentUser && props.currentUser.username) {
    currentUser = props.currentUser.username;
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
          <span>{recipe.category}</span>
        </div>
        {
          (currentUser === recipe.username) ? <div> {
            <div>
              <Link to={`/recipes/${recipe.id}/edit`} className="edit-recipe-link">
                <p className="edit-recipe-button">Edit Recipe</p>
              </Link>
              <div className="delete-recipe" onClick={handleDelete}>
                Delete
              </div>
            </div>
          } </div> : null
        }
      </header>
      <div className="article-body">
        <p>{recipe.body}</p>
        <h1>Ingredients: </h1>
          <br />
        <div className="article-photo-ingredients">
          <ul>
            {
              recipe.ingredients.map((ingredient, idx) => (
                <IngredientList ingredient={ingredient} key={idx} />
              ))
            }
          </ul>
          <div className="article-photo-container">
            <img src={recipe.photo_url} />
          </div>
        </div>
        <div className="steps">
          {
            steps.map((step, idx) => (
              <StepListItem step={step} idx={idx + 1} key={idx} />
            ))
          }
        </div>
        <h1 className="comments">
          <CommentList 
            comments={comments} 
            history={props.history}
            createComment={props.createComment} 
            currentUser={props.currentUser} 
            recipeId={recipe.id}
            refresh={refresh}
          />
        </h1>
      </div>
    </div>
  );
}

export default RecipeShow;