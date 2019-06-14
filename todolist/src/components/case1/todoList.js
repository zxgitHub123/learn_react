import React from 'react';
import TodoItem from "./todoItem";

 class TodoList extends React.Component {
 	constructor(props) {
	    super(props); 
	    this.state={
	    	list:[],
	    	inputValue:''
	    }
	    this.handleClickBtn=this.handleClickBtn.bind(this);
	    this.handelChange=this.handelChange.bind(this);
	    this.handelDeleteItem=this.handelDeleteItem.bind(this);
	}
	handleClickBtn(){
		this.setState({
			list:[...this.state.list,this.state.inputValue],
			inputValue:''
		})
	}
	handelChange(e){
		this.setState({
			inputValue:e.target.value
		})
	}
	handelDeleteItem(index){
		var list=this.state.list;
		list.splice(index,1);
		this.setState({
			list
		})
	}
	getlistItem(){
		return(
			this.state.list.map((item,index)=>{
				return <TodoItem key={index} index={index} content={item} delete={this.handelDeleteItem}/>
			})
		)
	}
 	render(){
 		return (
 			<div>
 				<div>
 					<input value={this.state.inputValue} type="text" onChange={this.handelChange}/>
 					<button onClick={this.handleClickBtn}>点击</button>
 				</div>
 				<ul>
					{
						this.getlistItem()
					}
 				</ul>
 			</div>
 		);
 	}

 }
 export default TodoList;