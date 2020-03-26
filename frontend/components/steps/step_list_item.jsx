import React from 'react'

class StepListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }
  
  render() {
    if (!this.props.step) return null;
    const {step} = this.props;
    
    const stepNumber = this.props.number
        return (
          <div className="recipe-step">
            <h2 className="recipe-step-title">Step {stepNumber}: {step.title}</h2>
            <div className="recipe-step-body">{step.body}</div>
          </div>
        );

    }
}

export default StepListItem;