import React from 'react'

const EditStepListItem = props => {

  const handleClick = e => {
    e.preventDefault();

    props.history.push(`/steps/${props.step.id}/edit`)
  }

  if (!props.step) return null;
  
  const { step, number } = props;
  
  return (
    <div className="step-box" onClick={handleClick}>
      <h2 className="edit-step-title">Step {number}: {step.title}</h2>
      <p> {step.body} </p>
    </div>
  );
}

export default EditStepListItem;