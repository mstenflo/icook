import { connect } from "react-redux";
import { requestRecipe, updateRecipe } from '../../../actions/recipe_actions';
import EditRecipeTitle from "./edit_recipe_title";

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
})

const mapDispatchToProps = dispatch => ({
  requestRecipe: (recipeId) => dispatch(requestRecipe(recipeId)),
  updateRecipe: (recipe) => dispatch(updateRecipe(recipe)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipeTitle);
