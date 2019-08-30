import React from "react";
import {Modal} from 'antd';
import {connect} from "react-redux";
import {updateStaff} from "../../js/update";
class MemDel extends React.Component{
    render(){
        return <Modal visible={true} title="是否删除该员工" onCancel={this.props.hidePop} onOk={this.props.delete}>
            <span>
                确定删除该员工，删除之后数据将无法恢复？
            </span>
        </Modal>
    }
}
export default connect((state)=>{return state},(dispath,ownProps)=>{
    return {
        delete(data){
            fetch(`/api/staff/del`,{body:JSON.stringify(ownProps.data),method:'POST'})
            .then((res)=>{
                updateStaff();
                ownProps.hidePop();
            })
        }
    }
})(MemDel)