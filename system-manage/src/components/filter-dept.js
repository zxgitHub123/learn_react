import React from "react";
import {connect} from "react-redux";
import { Select } from 'antd';
const { Option } = Select;
class FilterDept extends React.Component{
    onChange=(value)=>{
        this.props.onChange(value);
    }
    render(){
        return <Select style={{width:300}} onChange={this.props.onChange}>
            {this.props.depts.map(item=>{
                return <Option value={JSON.stringify(item)} key={JSON.stringify(item)}>
                    <span style={{paddingLeft:`${item.level*10}px`}}>
                        {item.dept_name}
                    </span>
                </Option>
            })}
        </Select>
    }
}
   
function getDepts(depts){
    var newArr=[]
    function fn(pid,level){
        return depts.map(dept=>{
            if(dept.dept_pid===pid){
                newArr=[...newArr,{...dept,level:level}];
                if(depts.some(item=>item.dept_pid*1===dept.id*1)){
                    fn(dept.id,level*1+1)
                }
            }
        })
    }
    fn(-1,0);
    console.log(newArr);
    return newArr
}
export default connect((state)=>{
    return {
        depts:getDepts(state.baseData.dept)
    }
})(FilterDept)