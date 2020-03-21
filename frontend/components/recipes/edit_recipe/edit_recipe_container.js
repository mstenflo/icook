import { connect } from "react-redux";
import EditRecipe from "./edit_recipe";
import { requestRecipe } from '../../../actions/recipe_actions';
import { requestSteps, createStep, clearSteps, destroyStep } from '../../../actions/step_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  recipe: state.entities.recipes[ownProps.match.params.recipeId],
  steps: state.entities.steps
})

const mapDispatchToProps = dispatch => ({
  action: (recipe) => dispatch(updateRecipe(recipe)),
  createStep: (step) => dispatch(createStep(step)),
  requestRecipe: (recipeId) => dispatch(requestRecipe(recipeId)),
  requestSteps: (recipeId) => dispatch(requestSteps(recipeId)),
  clearSteps: () => dispatch(clearSteps()),
  destroyStep: (stepId) => dispatch(destroyStep(stepId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipe)
