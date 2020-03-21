import React, { Component } from 'react';
// import EditRecipeContainer from '../edit_recipe/edit_recipe_container';
import CreateStep from '../../steps/create_step';
import StepList from '../../steps/step_list';

class CreateRecipe extends Component {

  constructor(props) {
    super(props);
  
    this.state = this.props.recipe;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    console.log('state', this.state)
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    this.props.createRecipe(this.state);
    this.setState({
      recipe: {
        title: this.state.title,
        body: this.state.body
      }
    })
    console.log('state submit: ', this.state)
  }
  
  componentDidMount() {
    console.log('state', this.state)
    console.log('props', this.props)
    console.log('this', this)
  }
  

  render() {
    const emptyStep = { title: "", body: "", recipe_id: this.props.match.params.recipeId }
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
            <div className="stepTitleWrapper">
              <label htmlFor="title">
                <input 
                  className="stepTitleInput" 
                  type="text"
                  placeholder="Recipe Title"
                  onChange={this.update("title")}
                />
              </label>
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
              <button className="submit-button" onClick={() => this.props.createStep(emptyStep)}>
                  Add Step
              </button>
              <div className="submit-button" onClick={this.handleSubmit}>Submit</div>
            </div>
          </div>

        </form>
      </div>
    );
  }
}

export default CreateRecipe;
