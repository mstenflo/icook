import React from 'react'

class StepListItem extends React.Component {
  render() {
    if (!this.props.step) return null;
    
    const stepNo = this.props.idx + 1
        return (
          <div className="project-step">
            <h2 className="project-step-title">Step {stepNo}: {this.props.step.title}</h2>
            <div className="project-step-body">{this.props.step.body}</div>
          </div>
        );

    }
}

export default StepListItem;