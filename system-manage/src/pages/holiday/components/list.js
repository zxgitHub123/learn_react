import React from "react";
import {Checkbox,Button,Icon} from "antd";
import "./list.css";
import fixHeight from "../../../js/winHeight";
class List extends React.Component{
	constructor(props){
		super(props);
		this.selectedAll=false;		
	}
	selectedAll=()=>{
		this.props.onSelectAll()
	}
	render(){
		this.height=fixHeight({offset:this.props.offset || 0});
		this.selectedAll=this.props.data.filter((item)=>{
			return item.checked
		}).length>=this.props.data.length;
		return (
			<div className="holiday_list">
				<div className="list-wrap">
					{
						this.props.data.length>0?
						<div class="list-header">
							{this.props.title}
							{this.props.data.filter((item)=>{return item.checked}).length>0?<Button>批量删除</Button>:null}
						</div>
					}
					{
						this.props.data.length>0?
						<div className="list-body">
							<table class="list-table">
								<thead>
									<tr>
										{this.props.cols.map((item,index)=>{
											if(item.type==='selection'){
												return <td key={index} width={item.width && item.width}>
													<Checkbox/>
												</td>
											}else{
												return <td key={index} width={item.width && item.width}>
													{item.label}
												</td>
											}
										})}
									</tr>
								</thead>
								<tbody>
									{this.props.data.length>0 && this.props.data.map((item)=>{
										return <tr key={item.id}>
												{this.props.cols.map(col,index)=>{
													if(col.type==='action'){
														return <td key={index} width={col.width}>
															{col.render(item)}
														</td>
													}else if(col.type==='selection'){
														return <td key={index} width={col.width}>
																<Checkbox/>
															</td>
													}else{
														return <td key={index} width={col.width}>{item[col.key+'_text']?item[col.ey+'_text':item[col.key]]}</td>
													}
												}}
										</tr>	
									})}
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