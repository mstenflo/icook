import React from 'react'

class EditStepListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/steps/${this.props.step.id}/edit`)
  }

  render() {
    if (!this.props.step) return null;
    
    const {step} = this.props;
    const stepNumber = this.props.number
    
    return (
      <div className="step-box" onClick={this.handleClick}>
        <h2 className="recipe-step-title">Step {stepNumber}: {step.title}</h2>
        <p> {step.body} </p>
      </div>
    );

    }
}

export default EditStepListItem;