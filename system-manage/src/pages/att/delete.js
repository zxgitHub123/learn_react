import React from "react";
import {connect} from "react-redux";
import {Modal} from "antd";
class Delete extends React.Component{
    render(){
        return <Modal onCancel={()=>{this.props.changeStatus('list')}} visible={true} title="确定要删除么" onOk={this.props.submit}>
            <p className="title">您是否要删除该考勤分组？</p>
            <p className="info">删除后该组成员将会根据规则自动进入其他分组
                规则：员工>部门>默认分组</p>
        </Modal>
    }
}
export default connect((state)=>{return state},(dispatch,ownProps)=>{
    return {
        submit(){
            dispatch({
                type:'del_att_group',
                param:ownProps.data
            })
            ownProps.changeStatus('list');
        }
    }
})(Delete);