import { requestRecipe } from "../../actions/recipe_actions";
import { connect } from "react-redux";
import RecipeShow from "./recipe_show";

const mapStateToProps = (state, ownProps) => ({
  recipe: state.entities.recipes[ownProps.match.params.recipeId],
});

const mapDispatchToProps = dispatch => ({
  requestRecipe: recipeId => dispatch(requestRecipe(recipeId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow);