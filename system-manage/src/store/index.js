import {combineReducers,createStore} from 'redux';
import attendence from "./reducer/attendence/index";
import holiday from "./reducer/holiday/index";
import att from "./reducer/att/index";
import baseData from "./reducer/baseData/index";
export default  createStore(combineReducers({attendence,holiday,att,baseData}));