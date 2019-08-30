import React from "react";
import {Modal,Button,message} from "antd";
import List from "./list";
import {connect} from "react-redux";
import {updateStaff, updateDept} from "../../js/update";
import SelectData from "../../components/selectData";
import FilterDept from "../../components/filter-dept";
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            visible:false,
            memberTree:false
        }
        this.currentData={};
        this.col=[
            {
                key:'member_name',
                title:'姓名'
            },
            {
                key:'dept_name',
                title:'部门'
            },
            {
                key:'work_num',
                title:'工号'
            },
            {
                key:'action',
                title:'操作',
                render:(item)=>{
                    return <div className="action">
                        <span onClick={()=>{this.showModal(item)}}>修改部门</span>
                    </div>
                }
            }
        ]
    }
    showModal=(data)=>{
        this.currentData=data;
        this.setState({
            visible:true
        })
    }
    hideModal=()=>{
        this.setState({
            visible:false
        })
    }
    changeDept=(dept)=>{
        this.optDept=JSON.parse(dept);
    }
    showMember=(boolean)=>{
        this.setState({
            memberTree:boolean
        })
    }
    onOk=(value)=>{
        fetch("/api/dept/editLeader",{body:JSON.stringify({...value[0],dept_id:this.props.dept_id}),method:'POST'})
        .then(res=>{
            if((res||{}).status==200){
                message.success('修改成功');
                updateDept();
                this.hideModal();
            }
        })
    }
    submit=()=>{
        fetch("/api/staff/edit",{body:JSON.stringify({...this.currentData,dept_id:this.optDept.id}),method:'POST'})
        .then(res=>{
            if((res||{}).status==200){
                message.success('修改成功');
                updateStaff();
                this.hideModal();
            }
        })
    }
    render(){
        return <div>
            {this.props.dept_id*1?<div>
                <span>
                    {this.props.dept_leader.member_name}
                </span>
                <Button onClick={()=>{this.showMember(true)}}>{!this.props.dept_leader?'选择部门负责人':'更改部门负责人'}</Button>
            </div>:null}
            {
                this.state.memberTree?<SelectData maxNum={1} changeSelectPerson={this.showMember} type="staff" selectedData={this.props.dept_leader.id?[this.props.dept_leader]:[]} changeFormData={this.onOk} visible={this.state.memberTree}/>:null
            }
            <List col={this.col} dept_id={this.props.dept_id}/>
            <Modal visible={this.state.visible} onCancel={this.hideModal} hideModal={this.hideModal} onOk={this.submit}>
                <table className="g-form">
                    <tbody>
                        <tr>
                            <td className="in-th">
                                姓名
                                <span className="in-star">
                                    *
                                </span>
                            </td>
                            <td>
                                <span>
                                    {this.currentData.member_name}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="in-th">
                                部门
                                <span className="in-star">
                                    *
                                </span>
                            </td>
                            <td>
                                <span>
                                    {this.currentData.dept_name}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="in-th">
                                新部门
                                <span className="in-star">
                                    *
                                </span>
                            </td>
                            <td>
                                <FilterDept onChange={this.changeDept}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Modal>
        </div>
    }
}
export default connect((state,ownProps)=>{
    return {
        dept_name:(depts=>{
            const curDept=depts.find(item=>{
                return item.id==ownProps.dept_id
            })
            return (curDept || {}).dept_name
        })(state.baseData.dept),
        dept_leader:(depts=>{
            const curDept=depts.find(item=>{
                return item.id==ownProps.dept_id
            })
            return {
                member_name:(curDept || {}).leader_member_name,
                id:(curDept || {}).leader_member_id
            }
        })(state.baseData.dept)
    }
})(Main);