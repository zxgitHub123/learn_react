import React from "react";
import {NavLink as Link} from "react-router-dom";
class LeftNav extends React.Component{
    render(){
        return <ul className="leftNav">
                <li className="nav">
                    <Link to="/attendence/staff" activeClassName="g_navActive" className="link">公司职员</Link>
                </li>
                <li className="nav">
                    <Link to="/attendence/external" activeClassName="g_navActive" className="link">外部联系人</Link>
                </li>
                <li className="nav">
                    <Link to="/attendence/common" activeClassName="g_navActive" className="link">常用联系人
                    </Link>
                </li>
            </ul>
    }
}
export default LeftNav;