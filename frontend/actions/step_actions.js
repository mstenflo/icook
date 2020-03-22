import * as StepAPIUtil from "../util/step_api_util";

export const RECEIVE_ALL_STEPS = "RECEIVE_ALL_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";

const receiveAllSteps = ({ steps }) => ({
  type: RECEIVE_ALL_STEPS,
  steps,
});

const receiveStep = step => ({
  type: RECEIVE_STEP,
  step
});

const removeStep = stepId => ({
  type: REMOVE_STEP,
  stepId
});

export const requestSteps = (recipeId) => dispatch =>
  StepAPIUtil.fetchSteps(recipeId).then(steps => dispatch(receiveAllSteps(steps)));

export const createStep = (step) => dispatch =>
  StepAPIUtil.createStep(step)
  .then(step => dispatch(receiveStep(step))
);

export const updateStep = step => dispatch =>
  StepAPIUtil.updateStep(step)
  .then(step => dispatch(receiveStep(step)));

export const destroyStep = step => dispatch =>
  StepAPIUtil.destroyStep(step)
  .then(step => dispatch(removeStep(step)));