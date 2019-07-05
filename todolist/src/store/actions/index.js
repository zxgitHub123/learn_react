import {ADD_TODO,TOGGLE_COMPLETE,CHANGE_DISPLAY,DEL_TODO} from "./action-type/action-types";
let actions={
    addTodo:function(payload){
        return {type:ADD_TODO,payload};
    },
    toggleComplete:function(payload){
        return {type:TOGGLE_COMPLETE,payload};
    },
    changeDisplay:function(payload){
        return {type:CHANGE_DISPLAY,payload};
    },
    delTodo:function(payload){
        return {type:DEL_TODO,payload};
    }
}
export default actions;