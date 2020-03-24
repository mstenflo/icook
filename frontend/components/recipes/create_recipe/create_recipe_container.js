import { connect } from 'react-redux';
import CreateRecipe from './create_recipe';
import { createRecipe, requestRecipes, updateRecipe } from '../../../actions/recipe_actions';
import { createStep } from '../../../actions/step_actions';

const mapSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  // recipes: state.entities.recipes,
  // step: {title: '', body: ''}
});

const mapDTP = dispatch => ({
  createRecipe: (recipe) => dispatch(createRecipe(recipe)),
  updateRecipe: (recipe) => dispatch(updateRecipe(recipe)),
  createStep: (step) => dispatch(createStep(step)),
  requestRecipes: () => dispatch(requestRecipes())
});

export default connect(mapSTP, mapDTP)(CreateRecipe);