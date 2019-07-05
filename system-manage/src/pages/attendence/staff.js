import React from "react";
import {Route,Switch} from "react-router-dom";
import StaffList from "./staffList";
import Detail from "./detail";
class Staff extends React.Component{
    componentDidMount(){
        this.props.history.push("/attendence/staff/list");
    }
    render(){
        return(
            <Switch>
                <Route path="/attendence/staff/list" component={StaffList}></Route>
                <Route path="/attendence/staff/detail" render={(props)=><Detail {...props} type="staff"/>}></Route>
                <Route component={StaffList}></Route>
            </Switch>
        )
    }
}
export default Staff;