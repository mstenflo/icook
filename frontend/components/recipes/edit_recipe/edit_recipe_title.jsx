import React, { Component } from 'react';

class EditRecipeTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {ingredient: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleIngredient = this.handleIngredient.bind(this);
  }

  componentDidMount() {
    this.props.requestRecipe(this.props.match.params.recipeId)
      .then(res => this.setState(res.recipe))
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateRecipe(this.state)
      .then(res => this.props.history.push(`/recipes/${res.recipe.id}/edit`));
  }

  handleIngredient(e) {
    e.preventDefault();
    let IngredientList = this.state.ingredients;
    IngredientList.push(this.state.ingredient);

    let newState = Object.assign({}, this.state);
    newState.ingredients = IngredientList;
    newState.ingredient = '';
    
    console.log('newState: ', newState)
    this.setState(newState);
    console.log('updated state: ', this.state)
    this.props.updateRecipe(newState)
      .then(res => console.log(res))
    // console.log('ingredients state: ', this.state.ingredients)
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.history.push(`/recipes/${this.state.id}/edit`);
  }
  
  render() {
    console.log('state: ', this.state)
    if (!this.state.ingredients) return null;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="stepDetailBox">
            <input 
              className="step-title-form" 
              type="text"
              placeholder="Step Title" 
              value={this.state.title} 
              onChange={this.update("title")}>
            </input>
            <label htmlFor="body">
              <textarea
                placeholder="Enter the step description"
                className="textEditor"
                value={this.state.body}
                onChange={this.update("body")}
              />
            </label>
            <div className="inline">
              <input
                className="add-ingredient"
                type="text"
                value={this.state.ingredient}
                placeholder="Add Ingredient"
                onChange={this.update("ingredient")}
              >
              </input>
              <div className="add-ingredient-button" onClick={this.handleIngredient}>Add Ingredient</div>
            </div>
            <br />
            {this.state.ingredients.map((ingredient, idx) => (
              <li className="add-ingredient-container" key={idx}>
                <div className="add-ingredient-list">{ingredient}
                  <div className="delete-ingredient">X</div>
                </div>
              </li>
            ))}
            <div className="bottom-buttons">
              <div className="submit-button" onClick={this.handleCancel}>Cancel</div>
              <div className="submit-button" onClick={this.handleSubmit}>Submit</div>
            </div>
          </div>

        </form>
      </div>
    );
  }
}

export default EditRecipeTitle;
