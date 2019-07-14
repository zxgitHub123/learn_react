import React from "react";
import {Switch,Route} from "react-router-dom";
import Type from "./type";
import Dayoff from "./dayoff";
import Award from "./award";
import Annual from "./annual";
class Main extends React.Component{
	render(){
		return (
			<Switch>
				<Route path="/holiday/type" component={Type}/>
				<Route path="/holiday/day-off" component={Dayoff}/>
				<Route path="/holiday/award" component={Award}/>
				<Route path="/holiday/annual" component={Annual}/>
				<Route component={Type}/>
			</Switch>
		)
	}
}
export default Main;
