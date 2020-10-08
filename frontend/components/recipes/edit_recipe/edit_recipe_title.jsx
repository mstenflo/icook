import React, { useState, useEffect } from 'react';

import { updateObject } from '../../../shared/utility';

const EditRecipeTitle = props => {

  const [ingredient, setIngredient] = useState('');
  const [recipe, setRecipe] = useState('');

  useEffect(() => {
    props.requestRecipe(props.match.params.recipeId)
      .then(res => {
        const updatedRecipe = updateObject(recipe, res.recipe)
        setRecipe(updatedRecipe);
      })
  }, []);

  const update = (e, field) => {
    const updateField = updateObject(recipe, { [field]: e.target.value });
    setRecipe(updateField);
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    props.updateRecipe(recipe)
      .then(res => props.history.push(`/recipes/${res.recipe.id}/edit`));
  }

  const handleIngredient = (e) => {
    e.preventDefault();

    const updatedIngredients = [...recipe.ingredients, ingredient];
    const updatedRecipe = updateObject(recipe, { ingredients: updatedIngredients });
    setRecipe(updatedRecipe);
    setIngredient('');
  }

  const handleCancel = (e) => {
    e.preventDefault();
    props.history.push(`/recipes/${recipe.id}/edit`);
  }

  const deleteIngredient = (idx) => {
    return e => {
      const { ingredients } = recipe;
      const newIngredients = [...ingredients.slice(0,idx), ...ingredients.slice(idx + 1, ingredients.length)];
      const updatedRecipe = updateObject(recipe, { ingredients: newIngredients });
      setRecipe(updatedRecipe);
    }
  }

  const updateIngredient = e => {
    setIngredient(e.target.value);
  }
  
  if (!recipe.ingredients) return null;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="stepDetailBox">
          <input 
            className="step-title-form" 
            type="text"
            placeholder="Step Title" 
            value={recipe.title} 
            onChange={e => update(e, "title")}>
          </input>
          <label htmlFor="body">
            <textarea
              placeholder="Enter the step description"
              className="textEditor"
              value={recipe.body || ''}
              onChange={e => update(e, "body")}
            />
          </label>
          <div className="inline">
            <input
              className="add-ingredient"
              type="text"
              value={ingredient}
              placeholder="Add Ingredient"
              onChange={updateIngredient}
            >
            </input>
            <div className="add-ingredient-button" onClick={handleIngredient}>Add Ingredient</div>
          </div>
          <br />
          {recipe.ingredients.map((ingredient, idx) => (
            <li className="add-ingredient-container" key={idx}>
              <div className="add-ingredient-list">{ingredient}
                <div className="delete-ingredient" onClick={deleteIngredient(idx)}>X</div>
              </div>
            </li>
          ))}
          <div className="bottom-buttons">
            <div className="submit-button" onClick={handleCancel}>Cancel</div>
            <div className="submit-button" onClick={handleSubmit}>Submit</div>
          </div>
        </div>

      </form>
    </div>
  );
}

export default EditRecipeTitle;
