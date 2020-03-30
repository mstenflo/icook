import { requestRecipe } from "../../actions/recipe_actions";
import { requestSteps } from '../../actions/step_actions';
import { connect } from "react-redux";
import RecipeShow from "./recipe_show";

const mapStateToProps = (state, ownProps) => ({
  recipe: state.entities.recipes[ownProps.match.params.recipeId],
  // currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  requestRecipe: recipeId => dispatch(requestRecipe(recipeId)),
  // requestSteps: () => dispatch(requestSteps())
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow);