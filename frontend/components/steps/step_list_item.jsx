import React from 'react'

class StepListItem extends React.Component {
  render() {
    if (!this.props.step) return null;
    
    const stepNo = this.props.idx + 1
        return (
          <div className="recipe-step">
            <h2 className="recipe-step-title">Step {stepNo}: {this.props.step.title}</h2>
            <div className="recipe-step-body">{this.props.step.body}</div>
          </div>
        );

    }
}

export default StepListItem;