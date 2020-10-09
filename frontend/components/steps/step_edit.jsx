import React, { useEffect, useState } from 'react';

import { updateObject } from '../../shared/utility';

const StepEdit = props => {

  const [stepData, setStepData] = useState('');

  useEffect(() => {
    props.requestStep(props.match.params.stepId)
      .then(res => setStepData(res.step));
  }, []);

  const update = (e, field) => {
    const udpatedData = updateObject(stepData, { [field]: e.currentTarget.value });
    setStepData(udpatedData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.updateStep(stepData);
    props.history.push(`/recipes/${stepData.recipe_id}/edit`);
  }

  const handleCancel = (e) => {
    e.preventDefault();

    props.history.push(`/recipes/${stepData.recipe_id}/edit`);
  }
  
  if (!stepData.recipe_id) return null;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="stepDetailBox">
          <input 
            className="step-title-form" 
            type="text"
            placeholder="Step Title" 
            value={stepData.title} 
            onChange={e => update(e, 'title')}>
          </input>

          <label htmlFor="body">
            <textarea
              placeholder="Enter the step description"
              className="textEditor"
              value={stepData.body}
              onChange={e => update(e, 'body')}
            />
          </label>

          <div className="bottom-buttons">
            <div className="submit-button" onClick={handleCancel}>Cancel</div>
            <div className="submit-button" onClick={handleSubmit}>Submit</div>
          </div>
        </div>

      </form>
    </div>
  );
}

export default StepEdit;
