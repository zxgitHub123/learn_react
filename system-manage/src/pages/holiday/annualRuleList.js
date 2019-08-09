import React from "react";
import {Button} from 'antd';
import {connect} from "react-redux";
import List from "../../components/list";
class AnnualRuleList extends React.Component{
    constructor(props){
        super(props);
        this.col=[
            {
                key:'type',
                title:'类型'
            },{
                key:'year1',
                title:'大于等于年数'
            },
            {
                key:'year2',
                title:'小于年数'
            },
            {
                key:'day',
                title:'天数'
            }
        ]
    }
    render(){
        return <div>
            <div className="header">
                <Button onClick={()=>this.props.changeEditSate(true)}>修改规则</Button>
            </div>
            <div>
                {this.props.type===1?'手动维护':'手动维护+司龄（自动累加）+工龄（自动累加)'}
                {this.props.type===1?null:
                <List data={this.props.rules} col={this.col}/>
                }
            </div>
        </div>
    }
}
function getAnnualRule(data){
    const obj={
        si:'司龄',
        gong:'工龄'
    }
    return data.map(item=>{
        return {...item,type:obj[item.type]}
    })
}
export default connect((state)=>{
    return {
        rules:getAnnualRule( state.holiday.annualRule.rules),
        type:state.holiday.annualRule.type
    }
})(AnnualRuleList);