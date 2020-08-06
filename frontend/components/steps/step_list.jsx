import React from 'react';

class StepList extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.steps[0]
  }

  render() {
    if (!this.props.steps) return null;
    const steps = Object.values(this.state)

    return (
      <div>
      {steps[1]}
      </div>
    );
  }

}

export default StepList;