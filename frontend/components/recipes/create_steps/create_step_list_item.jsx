import React from 'react';

class CreateStepListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  render() {
    if (!this.props.step) return null;
    // console.log('state: ', this.state)
    
    const stepNo = this.props.idx + 1
        return (
          <div>
          {/* <div className="recipe-step"> */}
            <h2 className="recipe-step-title">Step {stepNo}:
              <input placeholder="Step Title" onChange={this.update("title")} /> 
            </h2>
            <div className="recipe-step-body">
              <textarea className="textEditor" placeholder="Step Description" onChange={this.update("body")} />
            </div>
          </div>
        )

    }
}

export default CreateStepListItem;