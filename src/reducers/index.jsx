import {combineReducers} from 'redux';
import postReducer from './postReducer'
import usersReducers from './userReducer'
export default combineReducers({
  posts: postReducer,
  users: usersReducers
});

