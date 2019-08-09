import React from "react";
import {connect} from "react-redux";
import List from "../../components/list";
import {Button} from 'antd';
class AttList extends React.Component{
    render(){
        return(
            <div>
                <div className="header">
                    <Button onClick={()=>{this.props.changeStatus('edit','add_att_group')}}>新增考勤分组</Button>
                </div>
                <List col={this.props.col} data={this.props.data}/>
            </div>
         
        )
    }
}
export default connect((state)=>{
    return{
        data:state.att.att_group
    }
})(AttList);