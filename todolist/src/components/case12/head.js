import React from "react";
import {connect} from 'react-redux';
import actions from "../../store/actions/index";
class TodoHead extends React.Component{
    addTodo=()=>{
        this.props.addTodo( 
            {
            id: parseInt(Math.random() * 10000000),
            isComplete: false,
            title: this.inputText.value
            }
        )
    }
    getUnfinishedCount=()=>{
        return this.props.todos.filter((i)=>{
            return i.isComplete==false
        }).length;
    }
    render(){
        return(
            <div>
                <div>您有{this.getUnfinishedCount()} 件事情没有完成</div>
                <input type="text" ref={(input)=>{this.inputText=input}}/><button onClick={this.addTodo}>添加</button>
            </div>
        )
    }
}
let ConnectTodoHead=connect((state)=>({
    ...state
}),actions)(TodoHead);
export default ConnectTodoHead;