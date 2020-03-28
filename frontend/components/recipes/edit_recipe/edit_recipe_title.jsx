import React, { Component } from 'react';

class EditRecipeTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
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

  handleCancel(e) {
    e.preventDefault();
    this.props.history.push(`/recipes/${this.state.id}/edit`);
  }
  
  render() {
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
