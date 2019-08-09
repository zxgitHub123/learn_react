import React from "react";
import {Button} from "antd";
import {connect} from "react-redux";
import List from "../../components/list";
class MemList extends React.Component{
    render(){
        return <div>
                <Button onClick={()=>{this.props.changeStatus('edit','add_member')}}>新增员工</Button>
                <List data={this.props.data} col={this.props.col}/>
            </div>
    }
}
function getMemberList(staffs,depts){
    return staffs.map(staff=>{
        const dept=depts.find(dept=>{
            return dept.dept_id===staff.dept_id
        })
        staff.department_name=dept.dept_name
        return staff;
    })
}
export default connect((state)=>{
    return {
        data:getMemberList(state.baseData.staff,state.baseData.dept)
    }
})(MemList);