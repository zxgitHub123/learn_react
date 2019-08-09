import React from "react";
import {Modal} from 'antd';
import {connect} from "react-redux";
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
            console.log(data);
            dispath({
                type:'del_member',
                param:ownProps.data
            })
            ownProps.hidePop();
        }
    }
})(MemDel)