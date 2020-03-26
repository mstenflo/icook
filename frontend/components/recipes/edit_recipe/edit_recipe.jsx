import React from 'react';
// import RecipeEditBoxContainer from './recipe_edit_box_container';
// import StepEditBoxList from './step_edit_box_list'
import StepListItem from '../../steps/step_list_item';


class EditRecipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStep = this.handleStep.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        // this.props.clearSteps();
        this.props.requestRecipe(this.props.match.params.recipeId)
            .then(res => this.setState(res.recipe));
    }



    // noRecipeComponent() {
    //     return (
    //         <div className="edit-box">
    //             <div className="edit-box-left">
    //                 <div className="image-box-holder image-box no-redirect">
    //                     Click to Add Image
    //                 </div>
    //             </div>
    //             <div className="edit-box-right">
    //                 <div className="step-box-title">
    //                     Intro + Supplies: (Click to Edit)
    //                 </div>
    //                 <img src={window.caret} />

    //             </div>
    //         </div>
    //     )
    // }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.clearSteps();
        // this.props.history.push(`/recipes/${this.props.match.params.recipeId}`)
        this.props.updateRecipe(this.state);
        this.setState({
            recipe: {
                title: this.state.title,
                body: this.state.body,
                steps: this.state.steps
            }
        })
        this.props.history.push(`/recipes/${this.state.id}`)
    }

    handleDelete(stepId) {
        return e => {
        e.preventDefault();
        console.log('delete: ', this)
        this.props.destroyStep(stepId).then(
        this.props.requestRecipe(this.state.id)
            .then(res => this.setState(res.recipe)))

    }}

    handleStep(e) {
        e.preventDefault();
        const emptyStep = {
            title: "",
            body: "",
            recipe_id: this.state.id
        }
        this.props.createStep(emptyStep)
            .then(res => {
                console.log('recipe_id: ', this.state)
                const recipeId = res.step.recipe_id
                this.props.requestRecipe(recipeId)
                    .then(res => this.setState(res.recipe))
            })
    }

    render() {
        let stepList = [];
        if (this.state.steps) {
            stepList = Object.values(this.state.steps)
        }
        console.log('state: ', this.state)
        console.log('props: ', this.props)
        return (
            <div className="new-edit-container">
            <br/>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <div className="stepDetailBox">
            <div className="new-recipe-title">
              <h1>{this.state.title}</h1>
            </div>
            <label htmlFor="body">
              <textarea
                className="textEditor"
                placeholder="Description of the Recipe"
                onChange={this.update("body")}
              />
            </label>
            
            <ul>
         { stepList.map((step, idx) => (
            <div key={step.id} className="step-edit-container">
              <StepListItem history={this.props.history} deleteStep={this.props.destroyStep} step={step} number={idx + 1} />
              <div className="delete-step" onClick={this.handleDelete(step.id)}>x</div>
            </div>
      ))}
        </ul>
            <div className="bottom-buttons">
              <div className="submit-button" onClick={ this.handleStep }>
                  Add Step
              </div>
              <div className="submit-button" onClick={this.handleSubmit}>Submit</div>
            </div>
          </div>

        </form>
                <div>
                    {/* <div>
                        {(localStorage.getItem('newRecipeId') > 0 || this.props.location.recipeId) ?
                            <RecipeEditBoxContainer recipeId={this.props.match.params.recipeId} /> :
                        this.noRecipeComponent()}
                    </div> */}
                    {/* <StepEditBoxList
                        recipe={this.props.recipe}
                        steps={this.props.steps}
                        destroyStep={this.props.destroyStep}
                    /> */}
                    {/* <div className="bottom-buttons">
                      <button className="submit-button" onClick={() => this.props.createStep(emptyStep)}>
                          Add Step
                      </button>
                      <div className="submit-button" onClick={this.handleSubmit}>Submit</div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default EditRecipe;