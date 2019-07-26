import React from "react";
import {Tabs} from "antd";
import List from "./dayoffListpanel.js";
import Rule from "./dayoffRulepanel.js";
const {TabPane}=Tabs;
class Dayoff extends React.Component{
	render(){
		return(
			<Tabs defaultActiveKey="list" type="card" >
				<TabPane tab="调休时间管理" key="list">
					<List/>				
				</TabPane>
				<TabPane tab="调休规则" key="rule">
					<Rule/>
				</TabPane>
		  	</Tabs>
		)
	}
}
export default Dayoff;