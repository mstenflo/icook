import React, { Component } from 'react';
import axios from 'axios';

import IngredientList from '../recipes/ingredient_list';
import StepListItem from '../steps/step_list_item';

class ShowSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiKey: '1a974bca59804d718e18d36625f1dceb',
      recipe: {},
      steps: []
    }
    
  }

  componentDidMount() {
    let id = this.props.match.params.recipeId;
    axios.get('https://api.spoonacular.com/recipes/' + id + '/information?includeNutrition=false' + '&apiKey=' + this.state.apiKey)
      .then(res => {
        console.log(res.data)
        this.setState({ recipe: res.data });
      });
    axios.get('https://api.spoonacular.com/recipes/' + id + '/analyzedInstructions' + '?apiKey=' + this.state.apiKey)
      .then(res => {
        this.setState({ steps: res.data[0].steps });
        console.log(res.data[0].steps);
    })
  }
  
  render() {
    const { title, sourceName, image, extendedIngredients } = this.state.recipe;
    const { steps } = this.state;

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
}

export default ShowSearch;
