import { connect } from "react-redux";

import StepEdit from './step_edit';
import { requestStep, updateStep } from '../../actions/step_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  steps: state.entities.steps
})

const mapDispatchToProps = dispatch => ({
  requestStep: (stepId) => dispatch(requestStep(stepId)),
  updateStep: (step) => dispatch(updateStep(step)),
  destroyStep: (stepId) => dispatch(destroyStep(stepId))
});

export default connect(mapStateToProps, mapDispatchToProps)(StepEdit);
