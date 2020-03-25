import React from 'react';
import CreateStepListItem from './create_step_list_item';

class CreateStepList extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log('this: ', this)
  }
  
  
  render() {
    if (!this.props.steps) return null;
    const steps = Object.values(this.props.steps)
    // console.log('steps; ', steps, this.props.steps)

    return (
      <div>
        <ul>
          {steps.map((step, idx) => (
            <CreateStepListItem step={step} key={step.id} idx={idx}/>
          ))}
        </ul>
      </div>
    );
  }

}

export default CreateStepList;