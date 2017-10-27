import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer'
import DashboardReducers from './DashboardReducers';

const rootReducer = combineReducers({
  login: LoginReducer,
  dashboard:DashboardReducers
})
export default rootReducer;
