import React from "react";
import {Button,message} from 'antd';
import Search from "../../components/search";
import List from "./annualList";
import EditModal from "./components/editModal";
import Poptip from "./components/popTip";
class Form extends React.Component{
    render(){
        return <table className="form">
                <tbody>
                    <tr>
                        <th className="in-h">
                            姓名
                            <span className="in-star">*</span>
                        </th>
                        <th>
                            {this.props.editModalType==='edit_annual'?<span>{this.props.editData.name}</span>:<input type="text" className="input" value={this.props.editData.name} onChange={(event)=>{this.props.changeFormValue('name',event.target.value)}}/>}
                        </th>
                    </tr>
                    <tr>
                        <th className="in-h">
                            部门
                            <span className="in-star">*</span>
                        </th>
                        <th>
                            {this.props.editModalType==='edit_annual'?<span>{this.props.editData.department_name}</span>:<input type="text" className="input" value={this.props.editData.department_name} onChange={(event)=>{this.props.changeFormValue('department_name',event.target.value)}}/>}
                        </th>
                    </tr>
                    <tr>
                        <th className="in-h">
                            工号
                            <span className="in-star">*</span>
                        </th>
                        <th>
                            {this.props.editModalType==='edit_annual'?<span>{this.props.editData.work_num}</span>:<input type="text" className="input" value={this.props.editData.work_num} onChange={(event)=>{this.props.changeFormValue('work_num',event.target.value)}}/>}
                        </th>
                    </tr>
                    <tr>
                        <th className="in-h">
                            年假总额
                            <span className="in-star">*</span>
                        </th>
                        <th>
                           <input type="text" className="input" value={this.props.editData.total_day} onChange={(event)=>{this.props.changeFormValue('total_day',event.target.value,'num')}}/>
                        </th>
                    </tr>
                    <tr>
                        <th className="in-h">
                            剩余年假
                            <span className="in-star">*</span>
                        </th>
                        <th>
                           <input type="text" className="input" value={this.props.editData.remove_day} onChange={(event)=>{this.props.changeFormValue('remove_day',event.target.value,'num')}}/>
                        </th>
                    </tr>
                </tbody>
            </table>
    }
}
class AnnualListPanel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            keyword:'',
            showModal:false,
            showPop:false,
            editData:''
        }
        this.editModalType="";
        this.editModalTitle="";
        this.popTipType="";
        this.popTipTitle="";
        this.popTipData=""
        this.col=[
            {
                key:'name',
                title:'姓名'
            },
            {
                key:'department_name',
                title:'部门'
            },
            {
                key:'work_num',
                title:'工号'
            },
            {
                key:'today_day',
                title:'年假总额(小时)'
            },
            {
                key:'remove_day',
                title:'剩余年假(小时)'
            },{
                key:'action',
                title:'操作',
                render:(item)=>{
                    return <div>
                            <span className="action" onClick={()=>{this.showModal('edit_annual','编辑年假',item)}}>编辑</span>
                            <span className="action" onClick={()=>{this.showPop('del_annual','删除编辑',item)}}>删除</span>
                        </div>
                }
            }
        ]
    }
    changeFormValue=(field,value,type='text')=>{
        if(type==='num'){
            value=value.replace(/[^\d]/g,'');
        }
        this.setState((prevS)=>{
            Object.assign(prevS.editData,{[field]:value})
            console.log(prevS.editData);
            return {
                editData:prevS.editData
            }
        })
    }
    showModal=(type,title,data={name:'',department_name:'',work_num:'',total_day:0,remove_day:0})=>{
        this.setState({
            showModal:true,
            editData:data
        })
        this.editModalTitle=title;
        this.editModalType=type;
    }
    showPop=(type,title,data)=>{
        this.setState({
            showPop:true,
        })
        this.popTipTitle=title;
        this.popTipType=type;
        this.popTipData=data;
    }
    hideModal=()=>{
        this.setState({
            showModal:false,
            showPop:false
        })
    }
    verifyForm=()=>{
        if(this.trim(this.state.editData.name).length<=0){
            message.warning("请输入姓名");
        }else if(this.trim(this.state.editData.department_name).length<=0){
            message.warning("请输入部门名称");
        }else if(this.trim(this.state.editData.work_num).length<=0){
            message.warning("请输入工号");
        }else if(this.trim(this.state.editData.total_day).length<=0){
            message.warning("请输入年假总额");
        }else if(this.state.editData.remove_day>this.state.editData.total_day){
            message.warning("剩余年假不得多余年纪总额");
        }else{
            return true;
        }
    }
    trim=(value)=>{
        return `${value}`.replace(/\s/g,'');
    }
    search=(keyword)=>{
        this.setState({
            keyword
        })
    }
    render(){
        return <div>
            <div className="header">
                <Search search={this.search} placeholder="姓名/工号"/>
                <Button onClick={()=>{this.showModal("add_annual","新增年假")}}>新增年假</Button>
            </div>
            <div className="content">
                <List col={this.col} keyword={this.state.keyword}/>
            </div>
            {this.state.showModal?<EditModal title={this.editModalTitle} type={this.editModalType} render={()=><Form editData={this.state.editData} type={this.editModalType} changeFormValue={this.changeFormValue}/>} data={this.state.editData} hideModal={this.hideModal} verifyForm={this.verifyForm}/>:null}
            {this.state.showPop?<Poptip title={this.popTipTitle} type={this.popTipType} data={this.popTipData} hideModal={this.hideModal}/>:null}
        </div>
    }
}
export default AnnualListPanel;