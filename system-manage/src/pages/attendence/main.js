import React from "react";
import {Route,Switch} from "react-router-dom";
import Staff from "./staff";
import External from "./external";
import Common from "./common"
export default class  extends React.Component{
    render(){
        return(
            <Switch>
                <Route path="/attendence/staff" component={Staff}/>
                <Route path="/attendence/external" component={External}/>
                <Route path="/attendence/common" component={Common}/>
            </Switch>
        )
    }
}