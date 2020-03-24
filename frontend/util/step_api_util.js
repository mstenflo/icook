export const fetchSteps = (recipeId) =>
  $.ajax({
    method: "GET",
    url: `/api/recipes/${recipeId}/steps`
  });

export const createStep = (step, recipeId) =>
  $.ajax({
    method: "POST",
    url: `/api/recipes/${recipeId}/steps`,
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

export const destroyStep = step =>
  $.ajax({
    method: "DELETE",
    url: `/api/steps/${step.id}`
  });