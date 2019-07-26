import {combineReducers,createStore} from 'redux';
import attendence from "./reducer/attendence/index";
import holiday from "./reducer/holiday/index";
export default  createStore(combineReducers({attendence,holiday}));