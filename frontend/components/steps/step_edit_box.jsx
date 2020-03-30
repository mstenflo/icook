import React from 'react'
import { withRouter } from 'react-router-dom';

class StepEditBox extends React.Component {
    constructor(props) {
        super(props);
        this.deleteStep = this.deleteStep.bind(this);
        // this.redirect = this.redirect.bind(this);
        this.state = {}
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleStepFile = this.handleStepFile.bind(this);
    }

    deleteStep(e) {
        e.stopPropagation();
        this.props.destroyStep(this.props.step.id);
    }

    handleSubmit() {
        const formData = new FormData();
        formData.append('step[recipe]', this.props.recipe);
        // if (this.state.imageFile) {
        //     formData.append('step[photo]', this.state.imageFile);
        // }
        $.ajax({
            url: `/api/steps/${this.props.step.id}`,
            method: 'PATCH',
            data: formData,
            // contentType: false,
            // processData: false
        });        
    }

    render() {

      return(
        <div>Hello</div>
      )
        // if (!this.props.step) return null;
        // const stepNo = this.props.idx + 1
        // return (
        //     // <div onClick={this.redirect}>
        //         <div className="edit-box">
        //             {/* <div className="edit-box-left">
        //                 <div className="edit-box-left">
        //                     {this.state.imageUrl || this.props.step.imageUrl ? this.previewImage() : this.imageForm()}
        //                 </div>
        //             </div> */}
        //             <div className="edit-box-right">
        //                 <div className="step-box-title">
        //                     Step {stepNo}: {this.props.step.title ?
        //                         this.props.step.title :
        //                         "Click to Edit"
        //                     }
        //                 </div>
        //                 {/* <img src={window.caret} /> */}
        //                 <div
        //                     className="delete-step"
        //                     onClick={this.deleteStep}>
        //                     ×
        //                 </div>
        //             </div>
        //         </div>
            // </div>
        // );

    }
}

export default withRouter(StepEditBox);