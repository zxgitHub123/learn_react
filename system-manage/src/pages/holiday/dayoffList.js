import React from "react";
import {connect} from "react-redux";
import { dispatch } from "rxjs/internal/observable/range";
import List from "./components/list"
function getDayOffList(data,keyword){
    if(!keyword) return data;
    else{
        console.log(keyword);
        return data.filter((item)=>{
            return item.member_name.indexOf(keyword)>=0 || `${item.work_num}`.indexOf(keyword)>=0;
        })
    }
}
class DayoffList extends React.Component{
    render(){
        return (
            <List showPop={this.props.showPop} selectAll={this.props.selectAll} selectOne={this.props.selectOne} col={this.props.col} data={this.props.data} title={this.props.title}/>
        )
    }
}
export default connect((state,ownProps)=>{
    return {
        data:getDayOffList(state.holiday.dayoff,ownProps.keyword)
        }
},(dispatch,ownProps)=>{
    return {
        selectAll(checked){
            dispatch({
                type:"selectedAll_dayoff",
                params:checked
            })
        },
        selectOne(data){
            dispatch({
                type:"selectedOne_dayoff",
                params:data
            })
        }
    }
})(DayoffList)