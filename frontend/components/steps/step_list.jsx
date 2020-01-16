import React from 'react';
import StepListItem from './step_list_item';

class StepList extends React.Component {
  debugger
  render() {
    if (!this.props.steps) return null;
    const steps = Object.values(this.props.steps)

    return (
      <div>
        <ul className="step-list">
          {steps.map((step, idx) => (
            <StepListItem step={step} key={step.id} idx={idx}/>
          ))}
        </ul>
      </div>
    );
  }

}

export default StepList;