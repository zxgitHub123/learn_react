import React from "react";
import {connect} from "react-redux";
import actions from "../../store/actions/index";
class TodoFoot extends React.Component{
    changeAll=()=>{
        this.props.changeDisplay('all')
    }
    changeComplete=()=>{
        this.props.changeDisplay('complete')
    }
    changeUnComplete=()=>{
        this.props.changeDisplay('unComplete')
    }
    render(){
        return (
            <div>
                <button onClick={this.changeAll}>全部</button>
                <button onClick={this.changeComplete}>已完成</button>
                <button onClick={this.changeUnComplete}>未完成</button>
            </div>
        )
    }
}
export default connect((state)=>({...state}),actions)(TodoFoot);