import React from 'react';
import StepListItem from './step_list_item';

class StepList extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.steps[0]
  }

  componentDidMount() {
    console.log('this: ', this)
  }
  
  
  render() {
    if (!this.props.steps) return null;
    const steps = Object.values(this.state)

    return (
      <div>
      hello
      {/* {this.props.steps[0].body} */}
      {steps[1]}
        {/* <ul className="step-list">
          {steps.map((step, idx) => (
            <StepListItem step={step} key={step.id} idx={idx}/>
          ))}
        </ul> */}
      </div>
    );
  }

}

export default StepList;