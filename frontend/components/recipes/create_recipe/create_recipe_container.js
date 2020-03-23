import { connect } from 'react-redux';
import CreateRecipe from './create_recipe';
import { createRecipe, requestRecipes } from '../../../actions/recipe_actions';
import { createStep } from '../../../actions/step_actions';

const mapSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  recipe: state.entities.recipes,
  steps: [{title: 'title', body: 'body'}]
});

const mapDTP = dispatch => ({
  createRecipe: (recipe) => dispatch(createRecipe(recipe)),
  createStep: (step) => dispatch(createStep(step)),
  requestRecipes: () => dispatch(requestRecipes())
});

export default connect(mapSTP, mapDTP)(CreateRecipe);