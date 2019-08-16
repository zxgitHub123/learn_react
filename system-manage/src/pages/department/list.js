import React from "react";
import {connect} from "react-redux";
import List from "../../components/list";
class DeptList extends React.Component{
    render(){
        return <List col={this.props.col} data={this.props.data}/>
    }
}
function getDeptData(state){
    return state.baseData.staff
}
export default connect((state)=>{
    return {
        data:getDeptData(state)
    }
})(DeptList);