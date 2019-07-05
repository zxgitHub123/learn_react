import React from "react";
import {Route,Switch} from "react-router-dom";
import Attendence from "../pages/attendence/index";
import Holiday from "../pages/holiday/index";
import Att from "../pages/att/index";
import Department from "../pages/department/index";
import Member from "../pages/member/index";
import "../css/leftNav.css";
export default class Main extends React.Component{
    render(){
        return (
            <div>
                <Switch>
                    <Route path="/attendence" component={Attendence}/>
                    <Route path="/holiday" component={Holiday}/>
                    <Route path="/att" component={Att}/>
                    <Route path="/department" component={Department}/>
                    <Route path="/member" component={Member}/>
                    <Route component={Attendence}/>
                </Switch>
            </div>
        )
    }
}