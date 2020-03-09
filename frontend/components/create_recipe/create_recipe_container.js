import { connect } from 'react-redux';
import newRecipe from './create_recipe';
import { createRecipe } from '../../actions/recipe_actions';

const mapSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  recipes: {
    title: "",
    body: "",
    author_id: state.session.id,
  }
});

const mapDTP = dispatch => ({
  createRecipe: (recipe) => dispatch(createRecipe(recipe)),
});

export default connect(mapSTP, mapDTP)(newRecipe);