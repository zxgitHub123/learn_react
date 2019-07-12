import React from "react";
import {Route,Switch} from "react-router-dom";
import Detail from "./detail";
import List from "./externalList";
import Edit from "./externalEdit";
export default class  extends React.Component{
    render(){
        return(
            <Switch>
                <Route path="/attendence/external/list" component={List}></Route>
                <Route path="/attendence/external/edit" render={(props)=><Edit {...props} type="edit"/>}></Route>
                <Route path="/attendence/external/add" render={(props)=><Edit {...props} type="add"/>}></Route>
                <Route path="/attendence/external/detail" render={(props)=><Detail type="external" {...props}/>}></Route>
                <Route component={List}></Route>
            </Switch>
        )
    }
}