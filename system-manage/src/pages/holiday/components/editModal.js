import React from "react";
import {Modal} from "antd"
import {connect} from "react-redux";
class EditModal extends React.Component{
	hideModal=()=>{
		this.props.hideModal();
	}
	submit=()=>{
		this.props.submit();
	}
	render(){
		return(
			<Modal 
			title={this.props.title}
			visible={true}
			onOk={this.props.submit}
			onCancel={this.props.hideModal}
			>
				{this.props.render()}
			</Modal>
		)
	}
}
export default connect((state)=>{
	return {}
},
(dispatch,ownProps)=>{
	return {
		submit(){
			if(ownProps.verifyForm()){
				console.log(ownProps.type);
				console.log(ownProps.data);
				dispatch({
					type:ownProps.type,
					params:ownProps.data
				})
				ownProps.hideModal();
			}
		}
	}
}
)(EditModal);