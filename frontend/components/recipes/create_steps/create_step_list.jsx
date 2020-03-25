import React from 'react';
import CreateStepListItem from './create_step_list_item';

const CreateStepList = (steps) => {
  
    if (!steps) return null;
    // const steps = Object.values(this.props.steps)
    // console.log('steps; ', steps, this.props.steps)

    console.log('this: ', Object.values(steps))
    return (
      <div>
      test
        <ul>
          {steps.map((step, idx) => (
            <CreateStepListItem step={step} key={step.id} idx={idx}/>
          ))}
        </ul>
      </div>
    );
  }

export default CreateStepList;