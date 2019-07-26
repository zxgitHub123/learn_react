import React from "react";
import List from "./dayoffList";
import EditModal from "./components/editModal";
import PopTip from "./components/popTip";
import Search from "../../components/search";
import {Button,message} from "antd";
class Form extends React.Component{
    render(){
        return <table className="form">
            <tbody>
                <tr>
                    <td>
                        姓名:<span className="in-star">*</span>
                    </td>
                    <td>
                        {this.props.editModalType==='add_dayoff'?<input onChange={(event)=>{this.props.formValueChange('member_name',event.target.value)}}/>:this.props.editModalData.member_name}
                    </td>
                </tr>
                <tr>
                    <td>
                        部门:<span className="in-star">*</span>
                    </td>
                    <td>
                        {this.props.editModalType==='add_dayoff'?<input onChange={(event)=>{this.props.formValueChange("department_name",event.target.value)}}/>:this.props.editModalData.department_name}
                    </td>
                </tr>
                <tr>
                    <td>
                        工号:<span className="in-star">*</span>
                    </td>
                    <td>
                        {this.props.editModalType==='add_dayoff'?<input onChange={(event)=>{this.props.formValueChange("work_num",event.target.value,'num')}}/>:this.props.editModalData.work_num}
                    </td>
                </tr>
                <tr>
                    <td>
                        剩余调休时间:<span className="in-star">*</span>
                    </td>
                    <td>
                        <input value={this.props.editModalData.remove_time} onChange={(event)=>{this.props.formValueChange("remove_time",event.target.value,'num',1)}}/>
                    </td>
                </tr>
            </tbody>
        </table>
    }
}
export default class  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            keyword:'',
            showEditModal:false,
            showPopTip:false,
            editModalData:''
        }
        this.popTipTitle='';
        this.editModalTitle="";
        this.popTipData='';
        this.editModalType='';
        this.popTipType='';
        this.col=[
            {
                type:'selection',
                width:60
            },
            {
                title:'姓名',
                key:'member_name'
            },
            {
                title:'部门',
                key:'department_name',
                width:200
            },
            {
                title:'可调休时间(小时)',
                key:'remove_time',
                width:200
            },
            {
                key:'action',
                width:200,
                render:(item)=>{
                    return <div>
                            <span className="action" onClick={()=>{this.showModal('edit_dayoff','编辑调休',item)}}>编辑</span>
                            <span className="action" onClick={()=>{this.showPop(item,false)}}>删除</span>
                    </div>
                }
            }
        ]
    }
    search=(keyword)=>{
        this.setState({
            keyword
        })
    }
    showModal=(type,title,data={member_name:'',department_name:'',work_num:''})=>{
        this.setState({
            editModalData:data,
            showEditModal:true
        })
        this.editModalTitle=title;
        this.editModalType=type;
    }
    showPop=(data={},batch=false)=>{
        if(!batch){
            this.popTipTitle='删除调休';
            this.popTipData=data;
            this.popTipType='del_dayoff';
        }else{
            this.popTipTitle='批量删除调休';
            this.popTipData=data;
            this.popTipType='batchDel_dayoff';
        }
        this.setState({
            showPopTip:true
        })
    }
    hideModal=()=>{
        this.setState({
            showEditModal:false,
            showPopTip:false
        })
    }
    formValueChange=(field,value,type='text',decimal=0)=>{
        if(type==='num' && decimal===0){
            value=`${value}`.replace(/[^\d]/g,'');
        }
        if(type==='num' && decimal>0){
            value=`${value}`.replace(/^\./,'');
            value=`${value}`.replace(/[^\d\.]/g,'');
            const valueArr=`${value}`.split(".");
            if(valueArr[1]!=undefined){
                value=valueArr[0]+"."+valueArr[1].slice(0,decimal);
            }else{
                value=valueArr[0]
            }
        }
        console.log(value);
        console.log(343434);
        this.setState((prevS)=>{
            Object.assign(prevS.editModalData,{[field]:value})
            return {
                editModalData:prevS.editModalData
            }
        })
    }
    verifyForm=()=>{
        if(this.trim(this.state.editModalData.member_name).length<=0){
            message.warning("请输入姓名");
            return false;
        }else if(this.trim(this.state.editModalData.department_name).length<=0){
            message.warning("请输入部门名称");
            return false;
        }else if(this.trim(this.state.editModalData.remove_time).length<=0){
            message.warning("请输入剩余调休时间");
            return false;
        }else{
            return true;
        }
    }
    trim=(value)=>{
        return `${value}`.replace(/\s/g,'');
    }
    render(){
        return (
            <div>
                <div className="header">
                    <Search placeholder='姓名工号' search={this.search}/>
                    <Button type="primary" className="fr" onClick={()=>{this.showModal('add_dayoff','新增调休')}}>新增调休</Button>
                </div>
                <List showPop={this.showPop} col={this.col} title="假期类型" keyword={this.state.keyword}/>
                {this.state.showEditModal?<EditModal render={()=><Form editModalData={this.state.editModalData} editModalType={this.editModalType} formValueChange={this.formValueChange
                }/>} hideModal={this.hideModal} data={this.state.editModalData} verifyForm={this.verifyForm} type={this.editModalType} title={this.editModalTitle}/>:null}
                {this.state.showPopTip?<PopTip data={this.popTipData} title={this.popTipTitle} type={this.popTipType} hideModal={this.hideModal}/>:null}
            </div>
        )
    }
}
