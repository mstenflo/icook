import React from 'react'

class EditStepListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    // console.log(this.props)
    this.props.history.push(`/steps/${this.props.step.id}/edit`)
  }
  
  render() {
    console.log("this.props: ", this.props)
    if (!this.props.step) return null;
    const {step} = this.props;
    console.log('step: ', step.body)
    
    const stepNumber = this.props.number
        return (
          // <div className="step-edit-container">
          <div className="step-box">
            <div onClick={this.handleClick}>
              <h2 className="recipe-step-title">Step {stepNumber}: {step.title}</h2>
            </div>
          </div>
            
          // {/* </div> */}
        );

    }
}

export default EditStepListItem;