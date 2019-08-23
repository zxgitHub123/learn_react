import React from "react";
import {connect} from "react-redux";
import {TreeSelect } from "antd";
const {TreeNode }=TreeSelect ;
class FilterDept extends React.Component{
    checkChild=(id)=>{
        return this.props.depts.some(dept=>dept.dept_pid===id);
    }
    selectOption=(pid)=>{
        return this.props.depts.map(item=>{
            if(item.dept_pid===pid){
                console.log(item.dept_pid);
                return <TreeNode value={item.dept_id} title={item.dept_name} key={item.dept_id}>
                        {this.checkChild(item.dept_id) ? this.selectOption(item.dept_id):'<TreeNode key="123"></TreeNode>'}
                    </TreeNode>
            }else{
                return null;
            }
        })
    }
    onChange=(value)=>{
        this.props.onChange(value);
    }
    render(){
        return (
            <TreeSelect
                value=""
                style={{ width: 300 }}
            >
           {this.selectOption(-1)}
          </TreeSelect>
        )
    }
}

export default connect((state)=>{
    return {
        depts:state.baseData.dept
    }
})(FilterDept)