import React from "react";
import {NavLink as Link} from "react-router-dom";
import "../css/menu.css";
class Menu extends React.Component{
    render(){
        return(
            <ul className="g_menu">
                <li className="g_menu_item">
                    <Link to='/attendence' activeClassName="g_navActive" className="link">通讯录</Link>
                </li>
                <li className="g_menu_item">
                    <Link to='/holiday' activeClassName="g_navActive" className="link">假期管理</Link>
                </li>
                <li className="g_menu_item">
                    <Link to='/att' activeClassName="g_navActive" className="link">考勤分组</Link>
                </li>
                <li className="g_menu_item">
                    <Link to='/member' activeClassName="g_navActive" className="link">员工管理</Link>
                </li>
                <li className="g_menu_item">
                    <Link to='/department' activeClassName="g_navActive" className="link">部分管理</Link>
                </li>
            </ul>
        )
    }
}
export default Menu;
