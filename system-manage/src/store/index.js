import {combineReducers,createStore} from 'redux';
import attendence from "./reducer/attendence/index";
export default  createStore(combineReducers({attendence}));