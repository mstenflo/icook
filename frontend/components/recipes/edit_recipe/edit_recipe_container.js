import { connect } from "react-redux";

import EditRecipe from "./edit_recipe";
import { createRecipe, requestRecipes, updateRecipe, requestRecipe } from '../../../actions/recipe_actions';
import { createStep, requestSteps, destroyStep } from '../../../actions/step_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  recipe: state.entities.recipes[ownProps.match.params.recipeId],
  steps: state.entities.steps
})

const mapDispatchToProps = dispatch => ({
  createRecipe: (recipe) => dispatch(createRecipe(recipe)),
  createStep: (step) => dispatch(createStep(step)),
  updateRecipe: (recipe) => dispatch(updateRecipe(recipe)),
  requestRecipe: (recipeId) => dispatch(requestRecipe(recipeId)),
  requestRecipes: () => dispatch(requestRecipes()),
  requestSteps: (recipeId) => dispatch(requestSteps(recipeId)),
  destroyStep: (stepId) => dispatch(destroyStep(stepId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipe)
