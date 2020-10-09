import React from 'react';

const StepListItem = props => {

  const { step, idx } = props;
  
  if (!step) return null;
  
  return (
    <div className="recipe-step">
      <h2 className="recipe-step-title">Step {idx}: {step.title}</h2>
      <div className="recipe-step-body">{step.body}</div>
      <div className="recipe-step-body">{step.step}</div>
    </div>
  );
}

export default StepListItem;