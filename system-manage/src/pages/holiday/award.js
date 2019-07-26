import React from "react";
import Search from "../../components/search";
import List from "./awardList";
import EditModal from "./components/editModal";
import PopTip from "./components/popTip";
import {Button,message} from 'antd';
class Form extends React.Component{
	render(){
		return(
			<table className="form">
				<tbody>
					<tr>
						<td className="in-h">
							姓名
							<span className="in-star">*</span>
						</td>
						<td>
							{this.props.editModalType==='edit_award'?<span>{this.props.editModalData.name}</span>:<input type="text" className="input" value={this.props.editModalData.name} onChange={(event)=>{this.props.changeFormValue('name',event.target.value)}}/>}
						</td>
					</tr>
					<tr>
						<td className="in-h">
							部门
							<span className="in-star">*</span>
						</td>
						<td>
							{this.props.editModalType==='edit_award'?<span>{this.props.editModalData.department_name}</span>:<input className="input" type="text" value={this.props.editModalData.department_name} onChange={(event)=>{this.props.changeFormValue('department_name',event.target.value)}}/>}
						</td>
					</tr>
					<tr>
						<td className="in-h">
							工号
							<span className="in-star">*</span>
						</td>
						<td>
							{this.props.editModalType==='edit_award'?<span>{this.props.editModalData.work_num}</span>:<input className="input" type="text" value={this.props.editModalData.work_num} onChange={(event)=>{this.props.changeFormValue('work_num',event.target.value)}}/>}
						</td>
					</tr>
					<tr>
						<td className="in-h">
							年假总额
							<span className="in-star">*</span>
						</td>
						<td>
							<input className="input" type="text" value={this.props.editModalData.total_day} onChange={(event)=>{this.props.changeFormValue('total_day',event.target.value,'num')}}/>(天)
						</td>
					</tr>
					<tr>
						<td className="in-h">
							剩余年假
							<span className="in-star">*</span>
						</td>
						<td>
							<input type="text" className="input" value={this.props.editModalData.remove_day} onChange={(event)=>{this.props.changeFormValue('remove_day',event.target.value,'num')}}/>(天)
						</td>
					</tr>
				</tbody>
			</table>
		)
	}
}
class Award extends React.Component{
	constructor(props){
		super(props);
		this.state={
			keyword:'',
			showEditModal:false,
			showPopTip:false,
			editModalData:''
		}
		this.editModalType='';
		this.editModalTitle='';
		this.popTipType='';
		this.popTipTitle='';
		this.popTipData='';
		this.col=[
			{
				type:'selection',
				width:60
			},
			{
				title:'姓名',
				key:'name'
			},
			{
				title:'工号',
				key:'work_num',
				width:100
			},
			{
				title:'部门',
				key:'department_name',
				width:150
			},
			{
				title:'总天数(天)',
				key:'total_day',
				width:150
			},
			{
				title:'剩余天数(天)',
				key:'remove_day',
				width:150
			},
			{
				key:'action',
				title:'操作',
				width:150,
				render:(item)=>{
					return <div>
						<span className="action" onClick={()=>{this.showEditModal('edit_award','编辑奖励假',item)}}>编辑</span>
						<span className="action" onClick={()=>{this.showPop(item)}}>删除</span>
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
	changeFormValue=(field,value,type='text')=>{
		if(type==='num'){
			value=value.replace(/[^\d]/g,'');
		}
		this.setState((prevS)=>{
			Object.assign(prevS.editModalData,{[field]:value});
			return {
				editModalData:prevS.editModalData
			}
		})
	}
	verifyForm=()=>{
		if(this.trim(this.state.editModalData.name).length<=0){
			message.warning("请输入姓名");
			return false;
		}else if(this.trim(this.state.editModalData.department_name).length<=0){
			message.warning("请输入部门名城");
			return false;
		}else if(this.trim(this.state.editModalData.work_num).length<=0){
			message.warning("请输入工号");
			return false;
		}else if(this.trim(this.state.editModalData.totay_day).length<=0){
			message.warning("请输入年假总额");
			return false;
		}else if(this.state.editModalData.remove_day>this.state.editModalData.totay_day){
			message.warning("剩余年假需小于年假总额");
			return false;
		}else{
			return true;
		}
	}
	trim=(value)=>{
		return (value+'').replace(/\s/g,'');
	}
	showEditModal=(type,title,data={name:'',department_name:'',work_num:'',total_day:0,remove_day:0})=>{
		this.setState({
			showEditModal:true,
			editModalData:data
		})
		this.editModalType=type;
		this.editModalTitle=title;
	}
	showPop=(data={},batch=false)=>{
		if(!batch){
            this.popTipTitle='删除奖励假';
            this.popTipData=data;
            this.popTipType='del_award';
        }else{
            this.popTipTitle='批量删除调休';
            this.popTipData=data;
            this.popTipType='batchDel_award';
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
	render(){
		return (
			<div>
				<div className="header">
					<Search search={this.search} placeholder="姓名/工号"/>
					<Button onClick={()=>this.showEditModal('add_award','新增奖励假')}>新增奖励假</Button>
				</div>
				<div>
					<List col={this.col} showPop={this.showPop} keyword={this.state.keyword}/>
					{this.state.showEditModal?<EditModal data={this.state.editModalData} hideModal={this.hideModal} type={this.editModalType} title={this.editModalTitle} render={()=><Form changeFormValue={this.changeFormValue} editModalType={this.editModalType} editModalData={this.state.editModalData}/>} verifyForm={this.verifyForm}/>:null}
					{this.state.showPopTip?<PopTip data={this.popTipData} hideModal={this.hideModal} title={this.popTipTitle} type={this.popTipType}/>:null}
				</div>
				
			</div>
		)
	}
}
export default Award;