import { RECEIVE_ALL_RECIPES, RECEIVE_RECIPE, REMOVE_RECIPE } from "../actions/recipe_actions";

const RecipesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_ALL_RECIPES:
      return action.recipes;
    case RECEIVE_RECIPE:
      const newRecipe = action.project;
      return Object.assign({}, oldState, newRecipe);
    case REMOVE_RECIPE:
      delete nextState[action.recipeId]
      return nextState;
    default:
      return oldState;
  }
};

export default RecipesReducer;