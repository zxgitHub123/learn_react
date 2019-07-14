import React from "react";
import {Button,message} from "antd";
import List from "./typeList";
import PopTip from "./components/popTip";
import EditModal from "./components/editModal";
class Type extends React.Component{
	constructor(props){
		super(props){
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
							<span className="action" onClick={()=>{}}>编辑</span>
							{item.status===1?<span className="action">停用</span>:<span className="action">启用</span>}
							{item.default===1?null:<span className="action">删除</span>}
						</div>
					}
				}
			]
			this.state={
				showPopTip:false,
				showEditModal:false,
				editData:'',
				visible:true
			}
			this.popTiptIitle="";
			this.popTipType='';
			this.popTipDispatch='';
			this.editModalTitle='';
			this.editModalType='';
		}
	}

	render(){
		return (
			<div className="holiday_type">
				<div className="header">
					<Button>新增类型</Button>
				</div>
				<List/>
				{this.state.showPopTip?:<PopTip/>:null}
				{this.state.showEditModal?<EditModal/>:null}
			</div>
		)
	}
}
export default Type;