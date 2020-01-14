import { connect } from 'react-redux';
import RecipeIndex from './recipe_index';
import { requestRecipes } from "../../actions/recipe_actions";
import { requestUsers } from "../../actions/user_actions";

const mapStateToProps = state => {
  return ({
    recipes: Object.values(state.entities.recipes),
    users: state.entities.users,
  });
};

const mapDispatchToProps = dispatch => ({
  requestRecipes: () => dispatch(requestRecipes()),
  requestUsers: () => dispatch(requestUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeIndex);