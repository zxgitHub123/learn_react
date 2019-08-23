import React from "react";
import {Modal,Button,message} from "antd";
import List from "./list";
import {connect} from "react-redux";
import {updateStaff,updateDept} from "../../js/update";
import FilterDept from "../../components/filter-dept";
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            visible:false
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
        
    }
    render(){
        return <div>
            <List col={this.col}/>
            <Modal visible={this.state.visible} onCancel={this.hideModal} hideModal={this.hideModal}>
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
export default Main;