import { connect } from 'react-redux';
import CreateRecipe from './create_recipe';
import { createRecipe } from '../../../actions/recipe_actions';
import { createStep } from '../../../actions/step_actions';

const mapSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  recipe: {
    title: "",
    body: "",
    category: "new",
    author_id: state.session.id,
  }
});

const mapDTP = dispatch => ({
  createRecipe: (recipe) => dispatch(createRecipe(recipe)),
  createStep: (step) => dispatch(createStep(step)),
});

export default connect(mapSTP, mapDTP)(CreateRecipe);