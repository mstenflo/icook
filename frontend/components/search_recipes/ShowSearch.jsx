import React, { useEffect, useState } from 'react';
import axios from 'axios';

import IngredientList from '../recipes/ingredient_list';
import StepListItem from '../steps/step_list_item';

const ShowSearch = props => {

  const [recipe, setRecipe] = useState({});
  const [steps, setSteps] = useState([]);
  const apiKey = '1a974bca59804d718e18d36625f1dceb';

  useEffect(() => {
    let id = props.match.params.recipeId;
    axios.get('https://api.spoonacular.com/recipes/' + id + '/information?includeNutrition=false' + '&apiKey=' + apiKey)
      .then(res => {
        setRecipe(res.data);
      });
    axios.get('https://api.spoonacular.com/recipes/' + id + '/analyzedInstructions' + '?apiKey=' + apiKey)
      .then(res => setSteps(res.data[0].steps));
  }, []);
  
  const { title, sourceName, image, extendedIngredients } = recipe;

  return (
    <div className="recipe-full-wrapper" >
      <header className="article-header">
        <h1 className="header-title">
          {title}
        </h1>
        <div className="sub-header">
          By <span className="recipe-author">{sourceName}</span>
        </div>
      </header>
      <div className="article-body">
        <h1>Ingredients: </h1>
        <br />
        <div className="article-photo-ingredients">
          <ul>
            {
              extendedIngredients && extendedIngredients.map((ingredient, idx) => (
                <IngredientList ingredient={ingredient.name} key={idx} />
              ))
            }
          </ul>
          <div className="article-photo-container">
            <img src={image} />
          </div>
        </div>
        <div className="steps">
          {
            steps.map((step, idx) => (
              <StepListItem step={step} idx={idx + 1} key={idx} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default ShowSearch;
