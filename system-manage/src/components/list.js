import React from "react";
import {Checkbox,Button,Icon} from "antd";
import "../css/list.css";
import fixHeight from "../js/winHeight";
class List extends React.Component{
	constructor(props){
		super(props);
		this.selectedAll=false;		
	}
	selectAll=()=>{
		this.props.selectAll(!this.selectedAll);
	}
	render(){
		console.log(this.props.data);
		this.height=fixHeight({offset:this.props.offset || 0});
		this.selectedAll=this.props.data.filter((item)=>{
			return item.checked
		}).length>=this.props.data.length;
		return (
			<div className="holiday_list">
				<div className="list-wrap">
					{
						this.props.data.length>0 &&
						<div className="list-header">
							{this.props.title}
							{this.props.data.filter((item)=>{return item.checked}).length>0?<Button onClick={()=>{this.props.showPop({},true)}}>批量删除</Button>:null}
						</div>
					}
					{
						this.props.data.length>0?
						<div className="list-body" style={{height:(this.height-92)+'px'}}>
							<table className="list-table">
								<thead>
									<tr>
										{this.props.col.map((item,index)=>{
											if(item.type==='selection'){
												return <td key={index} width={item.width && item.width}>
													<Checkbox onChange={this.selectAll} checked={this.selectedAll}/>
												</td>
											}else{
												return <td key={index} width={item.width && item.width}>
													{item.title}
												</td>
											}
										})}
									</tr>
								</thead>
								<tbody>
									{this.props.data.length>0 && this.props.data.map((item)=>{
										return <tr key={item.id}>
												{this.props.col.map((col,index)=>{
													if(col.key==='action'){
														return <td key={index} width={col.width}>
															{col.render(item)}
														</td>
													}else if(col.type==='selection'){
														return <td key={index} width={col.width}>
																<Checkbox checked={item.checked} onChange={()=>{this.props.selectOne({...item,checked:!item.checked})}}/>
															</td>
													}else if(col.render){
														return <td key={index} width={col.width}>{col.render(item)}</td>
													}
													else{
														return <td key={index} width={col.width}>{item[col.key+'_text']?item[col.key+'_text']:item[col.key]}</td>
													}
											})}
										</tr>	
									})
								}
								</tbody>
							</table>
						</div>:
						<div className="empty">
							<Icon type="frown-o" style={{color:'#b8e0c8',fontSize:'50px'}}></Icon>
							<p className="word">暂无数据</p>
						</div>
					}
				</div>
			</div>
		)
	}
}
export default List;