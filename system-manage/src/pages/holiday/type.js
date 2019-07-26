import React from "react";
import {Button,message} from "antd";
import List from "./typeList";
import PopTip from "./components/popTip";
import EditModal from "./components/editModal";
class Form extends React.Component{
	formValueChange=(field,value,type)=>{
		this.props.formValueChange(field,value,type)
	}
	render(){
		return <table className="form">
				<tbody>
					<tr className="item">
						<td className="in-h">
							类型<span className="in-star">*</span>
						</td>
						<td>
							<input type="text" className="input" value={this.props.editData.type} onChange={(event)=>this.formValueChange('type',event.target.value)}/>
						</td>
					</tr>
					<tr className="item">
						<td className="in-h">
							假期上线<span className="in-star">*</span>
						</td>
						<td>
							<input type="text" className="input" value={this.props.editData.max_time} onChange={(event)=>this.formValueChange('max_time',event.target.value,'num')}/>
						</td>
					</tr>
					<tr className="item" height="40">
						<td className="in-h">
							周期<span className="in-star">*</span>
						</td>
						<td>
							<label htmlFor="mouth">
								每月<input type="radio" checked={this.props.editData.period===2} classID="mouth" name="period" onChange={()=>this.formValueChange('period',2)}/>
							</label>
							<label htmlFor="year">
								每年<input type="radio" checked={this.props.editData.period===1} classID="year" name="period" onChange={()=>this.formValueChange('period',1)}/>
							</label>
							<label htmlFor="forver">
								永久<input type="radio" checked={this.props.editData.period===3} classID="forver" name="period" onChange={()=>this.formValueChange('period',3)}/>
							</label>
						</td>
					</tr>
					<tr className="item" height="40">
						<td className="in-h">
							附件证明<span className="in-star">*</span>
						</td>
						<td>
							<label htmlFor="yes">
								是<input type="radio" classID="yes" checked={this.props.editData.attachment===1} name="attachment" onChange={()=>this.formValueChange('attachment',1)}/>
							</label>
							<label htmlFor="no">
								否<input type="radio" classID="no" checked={this.props.editData.attachment===0} name="attachment" onChange={()=>this.formValueChange('attachment',0)}/>
							</label>
						</td>
					</tr>
				</tbody>
			</table> 
	}
}
class Type extends React.Component{
	constructor(props){
		super(props)
		this.col=[
			{
				title:'假期类型',
				key:'type'
			},
			{
				title:'状态',
				key:'status',
				width:100
			},
			{
				title:'假期上限(天)',
				key:'max_time',
				width:150
			},
			{
				title:'周期',
				key:'period',
				width:150
			},
			{
				title:'附件证明',
				key:'attachment',
				width:100
			},
			{
				title:'操作',
				key:'action',
				width:200,
				render:(item)=>{
					return <div className="action">
						<span className="action" onClick={()=>{this.showModal("edit_type","编辑类型",item)}}>编辑</span>
						{item.status===1?<span className="action" onClick={()=>{this.showPop("停用假期类型",'stop_type',item.id)}}>停用</span>:<span className="action" onClick={()=>{this.showPop("启用假期类型",'start_type',item.id)}}>启用</span>}
						{item.default===1?null:<span className="action" onClick={()=>{this.showPop("删除假期类型",'del_type',item.id)}}>删除</span>}
					</div>
				}
			}
		]
		this.state={
			showPopTip:false,
			showEditModal:false,
			editData:{
				type:'test',
				max_time:'不限',
				period:1,
				attachment:0
			}
		}
		this.popTiptIitle="";
		this.popTipType='';
		this.editModalTitle='';
		this.editModalType='';
		this.popTipData=''
	}
	showModal=(type,title,data={max_time:0,period:1,attachment:0,type:'11'})=>{
		this.editModalTitle=title;
		this.editModalType=type;
		this.setState({
			showEditModal:true,
			editData:data
		})
	}
	showPop=(title,type,id)=>{
		console.log(111);
		this.setState({
			showPopTip:true
		})
		this.popTipData=id;
		this.popTiptIitle=title;
		this.popTipType=type;
	}
	hideModal=()=>{
		this.setState({
			showEditModal:false,
			showPopTip:false
		})
	}
	verifyForm=()=>{
		if(this.state.editData.type.replace(/\s/g,'').length<=0){
			message.warning("请输入假期类型");
			return false
		}else if((this.state.editData.max_time+'').replace(/\s/g,'').length<=0){
			message.warning("请输入假期上限");
			return false;
		}else{
			return true;
		}
	}
	formValueChange=(field,value,type="text")=>{
		if(type==="num"){
			value=value.replace(/[^\d]/g,'');
		}
		this.setState((prevState) => {
			Object.assign(prevState.editData,{[field]:value})
            return {
                editData:prevState.editData
            }
		})
	}
	render(){
		return (
			<div className="holiday_type">
				<div className="g-header">
					<Button onClick={()=>{this.showModal('add_type','新增类型')}}>新增类型</Button>
				</div>
				<List col={this.col} title="假期类型"/>
				{this.state.showPopTip?<PopTip data={this.popTipData} hideModal={this.hideModal} type={this.popTipType} title={this.popTiptIitle}/>:null}
				{this.state.showEditModal?<EditModal title={this.editModalTitle} type={this.editModalType} hideModal={this.hideModal} render={()=><Form editData={this.state.editData} formValueChange={this.formValueChange}/>} verifyForm={this.verifyForm} data={this.state.editData}/>:null}
			</div>
		)
	}
}
export default Type;