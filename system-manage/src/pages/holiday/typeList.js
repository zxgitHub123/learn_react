import React from "react";
import {connect} from "react-redux";
import List from "./components/list";
class TypeList extends React.Component{
	render(){
		return(
			<List/>
		)
	}
}
function getTypeList(state){
	return state.holiday.type.map((item)=>{
		let text={
			status_text:{
				0:'停用',
				1:'启用'
			}
		}
	})
}
export default connect((state)=>{
	return {
		data:getTypeList(state);
	}
})(TypeList);