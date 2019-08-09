import React from "react";
import List from "./list";
import Edit from "./edit";
import Delete from "./delete";
class Member extends React.Component{
    constructor(props){
        super(props);
        this.state={
            status:'list',
            editType:'',
            showPop:false
        }
        this.currentData={};
        this.col=[
            {
                key:'member_name',
                title:'姓名'
            },
            {
                key:'department_name',
                title:'部门'
            },
            {
                key:'member_id',
                title:'工号'
            },
            {
                key:'action',
                title:'操作',
                render:(item)=>{
                    return <div>
                        <span className="action" onClick={()=>{this.changeStatus('edit','edit_member',item)}}>编辑</span>
                        <span className="action" onClick={()=>{this.showPop(item)}}>删除</span>
                    </div>
                }
            }
        ]
    }
    changeStatus=(status,editType,data='')=>{
        this.setState({
            status,
            editType
        })
        this.currentData=data;
    }
    showPop=(data)=>{
        this.setState({
            showPop:true
        })
        this.currentData=data;
    }
    hidePop=()=>{
        this.setState({
            showPop:false
        })
    }
    render(){
        return (
            <div>
                {this.state.status==='list'?<List col={this.col} changeStatus={this.changeStatus}/>:null}
                {this.state.status==='edit'?<Edit changeStatus={this.changeStatus} type={this.state.editType} data={this.currentData}/>:null}
                {this.state.showPop?<Delete data={this.currentData} hidePop={this.hidePop}/>:null}
            </div>
        )
    }
}
export default Member;