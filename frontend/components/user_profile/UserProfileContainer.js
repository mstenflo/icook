import { connect } from 'react-redux';
import UserProfile from './UserProfile';
import { requestUser } from '../../actions/user_actions';
import { requestRecipes } from '../../actions/recipe_actions';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  requestUser: username => dispatch(requestUser(username)),
  requestRecipes: () => dispatch(requestRecipes())
})

export default connect(mSTP, mDTP)(UserProfile);