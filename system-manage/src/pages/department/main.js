import React from "react";
import {Modal} from "antd";
import List from "./list";
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
                    return <div class="action">
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
    render(){
        return <div>
            <List col={this.col}/>
            <Modal visible={this.state.visible} data={this.currentData} hideModal={this.hideModal}/>
        </div>
    }
}
export default Main;