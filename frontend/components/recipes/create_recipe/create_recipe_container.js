import { connect } from 'react-redux';
import CreateRecipe from './create_recipe';
import { createRecipe, requestRecipes, updateRecipe, requestRecipe } from '../../../actions/recipe_actions';
import { createStep, requestSteps, destroyStep } from '../../../actions/step_actions';

const mapSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  // recipes: state.entities.recipes,
  // step: {title: '', body: ''}
});

const mapDTP = dispatch => ({
  createRecipe: (recipe) => dispatch(createRecipe(recipe)),
  updateRecipe: (recipe) => dispatch(updateRecipe(recipe)),
  createStep: (step) => dispatch(createStep(step)),
  requestRecipe: (recipeId) => dispatch(requestRecipe(recipeId)),
  requestRecipes: () => dispatch(requestRecipes()),
  requestSteps: (recipeId) => dispatch(requestSteps(recipeId)),
  destroyStep: (stepId) => dispatch(destroyStep(stepId))
});

export default connect(mapSTP, mapDTP)(CreateRecipe);