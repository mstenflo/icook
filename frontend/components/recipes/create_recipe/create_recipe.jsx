import React, { Component } from 'react';
// import EditRecipeContainer from '../edit_recipe/edit_recipe_container';
import CreateStep from '../../steps/create_step';
import StepList from '../../steps/step_list';

class CreateRecipe extends Component {

  constructor(props) {
    super(props);
  
    // this.state = this.props.recipe;
    this.state = {};
    // this.state = {recipe: {}};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  componentDidMount() {
    // const recipeIdArray = Object.keys(this.props.recipes);
    // const lastRecipeId = recipeIdArray[recipeIdArray.length - 1];
    // const lastRecipe = this.props.recipes[lastRecipeId];
    // this.setState(lastRecipe);
    this.props.requestRecipes()
      .then((res) => { 
        const recipeIdArray = Object.keys(res.recipes);
        const lastRecipeId = recipeIdArray[recipeIdArray.length - 1];
        const lastRecipe = res.recipes[lastRecipeId];
        this.setState(lastRecipe)
      })
    // this.props.createStep(this.state.step)
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.updateRecipe(this.state);
    this.setState({
      recipe: {
        title: this.state.title,
        body: this.state.body
      }
    })
    this.props.history.push(`/recipes/${this.state.id}`)
  }
  
  render() {
    const emptyStep = { title: "empty", body: "empty", recipe_id: this.state.id }
    console.log(this.state)
    return (
      <div>
        <br/>
        <br/>
        <form onSubmit={this.handleSubmit}>
          {/* <div className="centeredContainer">
            <div className="attachedImages">
              <div className="fileset_placeholder">
                <span className="plus">+ </span>
                <span className="fileset_textTainer">Click to add an image</span>
              </div>
              <div className="navBarButtons">
                <button className="stepButton"><span className="addPlus">+ </span>Add Step</button>
                <button className="publishButton">Publish</button>
              </div>
            </div>
          </div> */}
         
          <div className="stepDetailBox">
            <div className="new-recipe-title">
              <h1>{this.state.title}</h1>
              {/* <label htmlFor="title">
                <input 
                  className="stepTitleInput" 
                  type="text"
                  placeholder="Recipe Title"
                  onChange={this.update("title")}
                />
              </label> */}
            </div>
            <label htmlFor="body">
              <textarea
                className="textEditor"
                placeholder="Description of the Recipe"
                onChange={this.update("body")}
              />
            </label>
            
            {/* <StepList steps={this.props.steps} /> */}
            {/* <CreateStep recipe={this.props.recipe}
                          step={this.props.step} 
                          key={step.id} 
                          idx={idx}
                          destroyStep={this.props.destroyStep} 

                          />
             */}
            {/* <div className="bottom-buttons">
              <button className="submit-button" onClick={() => this.props.createStep(emptyStep)}>Add Step</button>
              <input className="submit-button" type="submit" value="Submit" />
            </div> */}
          {/* <EditRecipeContainer /> */}
            <div className="bottom-buttons">
              <div className="submit-button" onClick={() => this.props.createStep(emptyStep)}>
                  Add Step
              </div>
              <div className="submit-button" onClick={this.handleSubmit}>Submit</div>
            </div>
          </div>

        </form>
      </div>
    );
  }
}

export default CreateRecipe;
