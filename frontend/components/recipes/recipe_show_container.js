import { requestRecipe, deleteRecipe } from "../../actions/recipe_actions";
import { connect } from "react-redux";
import RecipeShow from "./recipe_show";

const mapStateToProps = (state, ownProps) => ({
  recipe: state.entities.recipes[ownProps.match.params.recipeId],
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
  requestRecipe: recipeId => dispatch(requestRecipe(recipeId)),
  deleteRecipe: recipeId => dispatch(deleteRecipe(recipeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow);