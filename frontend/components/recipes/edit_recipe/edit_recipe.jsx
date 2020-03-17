import React from 'react';
// import RecipeEditBoxContainer from './recipe_edit_box_container';
// import StepEditBoxList from './step_edit_box_list'


class EditRecipe extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            recipe: this.props.recipe,
            steps: {}
        }
    }

    componentDidMount() {
        // this.props.clearSteps();
        // this.props.requestRecipe(this.props.match.params.recipeId);
        // this.props.requestSteps(this.props.match.params.recipeId);
        console.log(this.state)
        console.log(this.props)
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


    handleSubmit(e) {
        e.preventDefault();
        this.props.clearSteps();
        this.props.history.push(`/recipes/${this.props.match.params.recipeId}`)
    }

    render() {
        // let emptyStep = { title: "", body: "", recipe_id: this.props.match.params.recipeId }
        return (
            <div className="new-edit-container">
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
                    <div className="bottom-buttons">
                      <button className="submit-button" onClick={() => this.props.createStep(emptyStep)}>
                          Add Step
                      </button>
                      <div className="submit-button" onClick={this.handleSubmit}>Submit</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditRecipe;