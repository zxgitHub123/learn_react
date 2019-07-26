import React from "react";
import {Tabs} from "antd";
import List from "./annualListPanel";
import Rule from "./annualRulePanel";
const {TabPane} =Tabs;
class Annual extends React.Component{
	render(){
		return(
			<Tabs type="card">
				<TabPane tab="年假时间管理" key="list">
					<List/>
				</TabPane>
				<TabPane tab="年假规则" key="edit">
					<Rule/>
				</TabPane>
		  	</Tabs>
		)
	}
}
export default Annual;