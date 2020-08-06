export const fetchSteps = (recipeId) =>
  $.ajax({
    method: "GET",
    url: `/api/recipes/${recipeId}/steps`
  });

export const fetchStep = (stepId) =>
  $.ajax({
    method: "GET",
    url: `/api/steps/${stepId}`
  });

export const createStep = (step) =>
  $.ajax({
    method: "POST",
    url: `/api/recipes/${step.recipe_id}/steps`,
    data: {
      step
    }
  });

export const updateStep = step =>
  $.ajax({
    method: "PATCH",
    url: `/api/steps/${step.id}`,
    data: {
      step
    }
  });

export const destroyStep = stepId =>
  $.ajax({
    method: "DELETE",
    url: `/api/steps/${stepId}`
  });