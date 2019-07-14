import React from "react";
import {Switch,Route} from "react-router-dom";
import Detail from "./detail";
import List from "./commonList";
class  Common extends React.Component{
    render(){
        return(
            <Switch>
                <Route path="/attendence/common/list" component={List}/>
                <Route path="/attendence/common/detail" render={(props)=><Detail {...props} type="common"/>}/>
            	<Route component={List}/>
            </Switch>
        )
    }
}
export default Common;