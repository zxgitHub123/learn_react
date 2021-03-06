import React from "react";
import {NavLink as Link} from "react-router-dom";
class LeftNav extends React.Component{
	render(){
		return (
			<ul className="leftNav">
				<li className="nav">
					<Link to="/holiday/type" activeClassName="g_navActive" className="link">假期类型</Link>
				</li>
				<li className="nav">
					<Link to="/holiday/dayoff" activeClassName="g_navActive" className="link">调休</Link>
				</li>
				<li className="nav">
					<Link to="/holiday/award" activeClassName="g_navActive" className="link">奖励假</Link>
				</li>
				<li className="nav">
					<Link to="/holiday/annual" activeClassName="g_navActive" className="link">年假</Link>
				</li>
			</ul>
		)
	}
}
export default LeftNav;