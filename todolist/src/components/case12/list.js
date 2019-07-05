import React from "react";
import {connect} from "react-redux";
import actions from "../../store/actions/index.js";
class TodoList extends React.Component{
    delTodo=(event)=>{
        this.props.delTodo(event.target.value);
    }
    filterDisplay(){
        return this.props.todos.filter(item=>{
            switch (this.props.display){
                case 'complete':
                    return item.isComplete;
                    break;
                case 'unComplete':
                    return !item.isComplete;
                    break;
                case 'all':
                default:
                    return true;
            }
        })
    }
    todoChange=(event)=>{
        this.props.toggleComplete(event.target.value)
    }
    render(){
        return(
            <ul>
                {this.filterDisplay().map(item=>{
                    return (
                    <li key={item.id}>
                        <input type="checkbox" value={item.id} checked={item.isComplete} onChange={this.todoChange}/>
                        {item.isComplete?<del>{item.title}</del>:<span>{item.title}</span>}
                        <button type="button" value={item.id} onClick={this.delTodo}>删除</button>
                    </li>
                    )
                })}
            </ul>
        )
    }
}
export default connect((state)=>({...state}),actions)(TodoList)