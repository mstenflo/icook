import React, { useState } from 'react';

import { updateObject } from '../../../shared/utility';

const CreateStepListItem = props => {

  const [step, setStep] = useState(props.step);
  
  const update = (e, field) => {
    const updatedForm = updateObject(step, { [field]: e.target.value });
    setStep(updatedForm);
  }

  if (!props.step) return null;
  
  const stepNo = props.idx + 1;

  return (
    <div>
      <h2 className="recipe-step-title">Step {stepNo}:
        <input type="text" value={step.title} placeholder="Step Title" onChange={e => update(e, 'title')} /> 
      </h2>
      <div className="recipe-step-body">
        <textarea className="textEditor" placeholder="Step Description" onChange={e => update(e, 'body')} />
      </div>
    </div>
  )
}

export default CreateStepListItem;