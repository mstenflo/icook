import React from 'react';

import EditStepListItem from '../../steps/edit_step_list_item';


class EditRecipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStep = this.handleStep.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
    }

    componentDidMount() {
        this.props.requestRecipe(this.props.match.params.recipeId)
            .then(res => this.setState(res.recipe));
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
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
                const recipeId = res.step.recipe_id
                this.props.requestRecipe(recipeId)
                    .then(res => this.setState(res.recipe))
            })
    }

    handleTitle(id) {
        return e => {
            e.preventDefault();
            this.props.history.push(`/recipe_title/${id}/edit`);
        }
    }

    render() {
        let stepList = [];
        if (this.state.steps) {
            stepList = Object.values(this.state.steps)
        }
        if (!this.state.ingredients) return null;
        return (
            <div className="new-edit-container">
                <br/>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <div className="stepDetailBox">
                        <div onClick={this.handleTitle(this.state.id)} className="recipe-title-box">
                            <div className="new-recipe-title">
                                <h1>{this.state.title}</h1>
                            </div>
                            <p>{this.state.body}</p>
                            
                        </div>
                        {
                            this.state.ingredients.length === 0 ? null :
                                <div className="ingredient-container">
                                    {this.state.ingredients.map((ingredient, idx) => (
                                        <div className="ingredient-list" key={idx}>
                                            <li>{ingredient}</li>
                                        </div>
                                    ))}
                                </div>
                        }
                        <ul>
                            { stepList.map((step, idx) => (
                                <div key={step.id} className="step-edit-container">
                                    <EditStepListItem 
                                        history={this.props.history} 
                                        deleteStep={this.props.destroyStep} 
                                        step={step} 
                                        number={idx + 1} 
                                    />
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
            </div>
        )
    }
}

export default EditRecipe;