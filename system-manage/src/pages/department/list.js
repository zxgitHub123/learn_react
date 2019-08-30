import React from "react";
import {connect} from "react-redux";
import List from "../../components/list";
class DeptList extends React.Component{
    render(){
        return <List col={this.props.col} data={this.props.data}/>
    }
}
function getDeptData(staff,dept,props){
    let newStaff=[];
    if(!!props.dept_id){
        newStaff=staff.filter(item=>{return item.dept_id===props.dept_id})
    }else{
        newStaff=staff;
    }
    return newStaff.map(item=>{
        let curDept=dept.find(iitem=>{
            return iitem.id===item.dept_id
        });
        return {...item,dept_name:curDept.dept_name}
    })
}
export default connect((state,ownProps)=>{
    return {
        data:getDeptData(state.baseData.staff,state.baseData.dept,ownProps)
    }
})(DeptList);