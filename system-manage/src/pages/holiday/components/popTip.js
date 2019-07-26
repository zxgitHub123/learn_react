import React from "react";
import {connect} from "react-redux";
import {Modal} from "antd";
class PopTip extends React.Component{
	render(){
		const poptips={
			stop_type:{
				title:'您是否要停用该假期类型?',
				info:'停用后员工请假不能选择该类型假期'
			},
			start_type:{
				title:'您是否要启用该假期类型?',
            	info:'启用后员工请假可选择该类型假期'
			},
			del_type:{
				title:'您是否要删除该假期类型?',
        		info:'删除后员工请假不能选择该类型假期'
			},
			del_dayoff:{
				title:'您是否要删除该员工的调休?',
        		info:'删除后该员工的调休时间全部清零,将不能请调休'
			},
			batchDel_dayoff:{
				title:'您是否要删除选中员工的调休?',
        		info:'删除后该员工的调休时间全部清零,将不能请调休'
			},
			del_award:{
				title:'您是否要删除该员工的奖励假?',
        		info:'删除后该员工的奖励假全部清零,将不能带薪休假'
			},
			batchDel_award:{
				title:'您是否要删除选中员工的奖励假?',
        		info:'删除后该员工的调休时间全部清零,将不能请调休'
			},
			del_annual:{
				title:'您是否要删除选中员工的年假?',
        		info:'删除后该员工的年假全部清零,将不能请年假'
			}
		}
		return <Modal visible={true} title={this.props.title} onCancel={this.props.hideModal} onOk={this.props.submit}>
			<div>
				<p className="title">
					{poptips[this.props.type].title}
				</p>
				<p className="info">
					{poptips[this.props.type].info}
				</p>
			</div>
		</Modal>
	}
}
export default connect((state)=>{return {}},(dispatch,ownProps)=>{
	return {
		submit(){
			dispatch({
				type:ownProps.type,
				params:ownProps.data
			})
			ownProps.hideModal();
		}
	}
})(PopTip);