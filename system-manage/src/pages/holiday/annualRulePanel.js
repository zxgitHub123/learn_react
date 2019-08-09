import React from "react";
import List from "./annualRuleList";
import Edit from "./annualRuleEdit";
class AnnualRulePanel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            editState:false
        }
    }
    changeEditSate=(state)=>{
        this.setState({
            editState:state
        })
    }
    render(){
        return <div>
            {this.state.editState?<Edit changeEditSate={this.changeEditSate}/>:<List changeEditSate={this.changeEditSate}/>}
        </div>
    }
}
export default AnnualRulePanel;