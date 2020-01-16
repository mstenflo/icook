import { combineReducers } from 'redux';
import recipes from './recipes_reducer';
import users from './users_reducer';
import steps from './steps_reducer';

export default combineReducers({ users, recipes, steps });
