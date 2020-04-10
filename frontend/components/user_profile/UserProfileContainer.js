import { connect } from 'react-redux';
import UserProfile from './UserProfile';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(UserProfile);