import React from "react";
import Layout from "../../components/layout";
import Main from "./main";
import DeptTree from "./deptTree";
class Department extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selected_id:'',
        }
    }
    selectDept=(selected_id)=>{
       this.setState({
            selected_id
       })
    }
    render(){
        return (
           <Layout left={<DeptTree selectDept={this.selectDept} selected_id={this.state.selected_id}/>} right={<Main dept_id={this.state.selected_id}/>} type={2}/>
           )
    }
}
export default Department;