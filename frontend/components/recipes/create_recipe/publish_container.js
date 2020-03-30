import { connect } from 'react-redux';
import { createRecipe, requestRecipes, requestRecipe } from '../../../actions/recipe_actions';
import { createStep } from '../../../actions/step_actions';
import Publish from './publish';

const mapSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  // recipe: {
  //   title: "",
  //   body: "",
  //   ingredients: ['none'],
  //   category: "new",
    author_id: state.session.id,
  //   steps: []
  // },
});

const mapDTP = dispatch => ({
  requestRecipe: (recipeId) => dispatch(requestRecipe(recipeId)),
  requestRecipes: () => dispatch(requestRecipes()),
  createRecipe: (recipe) => dispatch(createRecipe(recipe)),
  createStep: (step) => dispatch(createStep(step)),
});

export default connect(mapSTP, mapDTP)(Publish);