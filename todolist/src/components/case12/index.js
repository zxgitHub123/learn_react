import React from "react";
import TodoHead from "./head";
import TodoList from "./list";
import TodoFoot from "./foot";
class Todos extends React.Component{
    render(){
        return (
            <div>
                <TodoHead/>
                <TodoList/>
                <TodoFoot/>
                {/* 1111 */}
            </div>
        )
    }
}
export default Todos;