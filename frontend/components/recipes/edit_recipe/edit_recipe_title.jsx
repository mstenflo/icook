import React, { Component } from 'react';

class EditRecipeTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {ingredient: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleIngredient = this.handleIngredient.bind(this);
    this.deleteIngredient = this.deleteIngredient.bind(this);
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

    const updatedIngredients = [...this.state.ingredients, this.state.ingredient]
    this.setState({
      ingredients: updatedIngredients,
      ingredient: ''
    })
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.history.push(`/recipes/${this.state.id}/edit`);
  }

  deleteIngredient(idx) {
    return e => {
      const { ingredients } = this.state;
      const newIngredients = [...ingredients.slice(0,idx), ...ingredients.slice(idx + 1, ingredients.length)];
      this.setState({ ingredients: newIngredients })
      // return console.log(newIngredients)
      // console.log('delete')
    }
  }
  
  render() {
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
                value={this.state.body || ''}
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
                  <div className="delete-ingredient" onClick={this.deleteIngredient(idx)}>X</div>
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
