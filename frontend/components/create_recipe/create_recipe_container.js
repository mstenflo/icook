import { connect } from 'react-redux';
import newRecipe from './create_recipe';
import { createRecipe } from '../../actions/recipe_actions';

const mapSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  recipe: {
    title: "",
    body: "",
    author_id: state.session.id,
  }
});

const mapDTP = dispatch => ({
  action: (recipe) => dispatch(createRecipe(recipe)),
});

export default connect(mapSTP, mapDTP)(newRecipe);