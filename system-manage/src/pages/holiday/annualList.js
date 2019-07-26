import React from "react";
import {connect} from "react-redux";
import List from "./components/list";
class AuunalList extends React.Component{
    render(){
        return <List data={this.props.data} col={this.props.col}/>
    }
}
function getAnnualList(state,keyword){
    if(!keyword) return state.holiday.annual;
    return state.holiday.annual.filter((item)=>{
        return item.name.indexOf(keyword)>=0 || `${item.work_num}`.indexOf(keyword)>=0;
    })
}
export default connect((state,ownProps)=>{
    return{
        data:getAnnualList(state,ownProps.keyword)
    }
})(AuunalList)