import React from "react";
import List from "./dayoffRuleList";
import Edit from "./dayoffRuleEdit";
class dayOffRulePannel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isEditRule:false
        }
    }
    changeState=(state)=>{
        console.log(state);
        this.setState({
            isEditRule:state
        })
    }
    render(){
        console.log(this.state.isEditRule);
        return this.state.isEditRule?<Edit changeState={this.changeState}/>:<List changeState={this.changeState}/>
    }
}
export default dayOffRulePannel;