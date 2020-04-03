export const fetchComments = (recipeId) =>
  $.ajax({
    method: "GET",
    url: `/api/recipes/${recipeId}/comments`
  });

export const createComment = (comment) =>
  $.ajax({
    method: "POST",
    url: `/api/recipes/${comment.recipe_id}/comments`,
    data: {
      comment
    }
  });

export const destroyComment = comment =>
  $.ajax({
    method: "DELETE",
    url: `/api/recipes/${comment.recipe_id}/comments/${comment.id}`
  });