export const fetchRecipes = () => (
  $.ajax({
    url: '/api/recipes'
  })
);

export const fetchRecipe = recipeId => (
  $.ajax({
    url: `/api/recipes/${recipeId}`
  })
);

export const createRecipe = recipe => (
  $.ajax({
    method: "POST",
    url: "/api/recipes",
    data: {
      recipe
    }
  })
);

export const updateRecipe = recipe => (
  $.ajax({
    url: `/api/recipe/${recipe.id}`,
    method: 'PATCH',
    data: {
      recipe
    }
  })
);

export const deleteRecipe = recipeId => (
  $.ajax({
    method: "DELETE",
    url: `/api/recipes/${recipeId}`
  })
);