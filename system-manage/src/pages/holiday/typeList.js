import React from "react";
import {connect} from "react-redux";
import List from "./components/list";
class TypeList extends React.Component{
	render(){
		console.log(this.props.data)
		return(
			<List offset={55} data={this.props.data} col={this.props.col} title={this.props.title}/>
		)
	}
}
function getTypeList(state){
	return state.holiday.type.map((item)=>{
		let regText={
			status_text:{
				0:'停用',
				1:'启用'
			},
			attachment_text:{
				0:'否',
				1:'是'
			},
			period_text:{
				1:'每年',
				2:'每月',
				3:'永久'
			},
			max_time_text(value){
				if(value===0){
					return '不限'
				}
				return {
					[value]:value
				}[value]
			}
		}
		return Object.assign({},item,{
			status_text:regText.status_text[item.status],
			attachment_text:regText.attachment_text[item.attachment],
			period_text:regText.period_text[item.period],
			max_time_text:regText.max_time_text(item.max_time)

		});
	})
}
export default connect((state)=>{
	return {
		data:getTypeList(state)
	}
})(TypeList);