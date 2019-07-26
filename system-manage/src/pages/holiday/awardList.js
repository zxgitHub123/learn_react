import React from "react";
import {connect} from "react-redux";
import List from "./components/list";
import { dispatch } from "rxjs/internal/observable/pairs";
class awardList extends React.Component{
    render(){
        return(
            <List data={this.props.award} col={this.props.col} showPop={this.props.showPop} selectAll={this.props.selectAll} selectOne={this.props.selectOne}/>
        )
    }
}
function getAwardList(state,keyword){
    console.log(state);
    console.log(keyword);
    return state.holiday.award.filter(item=>{
        if(item.name.indexOf(keyword)>=0 || item.department_name.indexOf(keyword)>=0){
            return item;
        }
    })
}
export default connect((state,ownProps)=>{
    return {
        award:getAwardList(state,ownProps.keyword)
    }
},(dispatch,ownProps)=>{
    return{
        selectAll(state){
            dispatch({
                type:'selectedAll_award',
                params:state
            })
        },
        selectOne(data){
            dispatch({
                type:'selectedOne_award',
                params:data
            })
        }
    }
})(awardList)