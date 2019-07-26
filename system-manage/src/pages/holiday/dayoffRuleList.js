import React from "react";
import {connect} from "react-redux";
import {Button} from "antd";
class DayOffRuleList extends React.Component{
    render(){
        return(
            <div className="dayOffRuleShow">
           <div className="header">
                <Button type="primary" onClick={()=>this.props.changeState(true)}>修改</Button>
           </div>
           <div className="main">
                <div className="item clearFix">
                    <div className="info fl">
                        调休规则
                    </div>
                    <div className="desc fl">
                        {this.props.rule.type+''==='1'?'手动维护':'手动维护+加班兑换'}
                    </div>
                </div>
                {this.props.rule.type+''==='2'?
                    <div className="item clearFix">
                        <div className="info fl">
                            加班兑换规则
                        </div>
                        <div className="desc fl">
                        <p>
                            工作日加班{this.props.rule.weekday}小时换1小时调休
                        </p>
                        <p>  
                                休息日{this.props.rule.weekend}小时换1小时调休
                        </p>
                        <p>
                                法定节假日加班{this.props.rule.holiday}小时换1小时调休
                        </p>
                        </div>
                    </div>
                    :null
                }
                 {this.props.rule.type+''==='2'?
                 <div className="item clearFix">
                    <div className="info fl">
                        日时长折算规则
                    </div>
                    <div className="desc fl">
                        {this.props.rule.convery}小时=1天
                    </div>
                </div>
                :null
            }
           </div>
        </div>
        )
    }
}
export default connect((state)=>{
    return {
        rule:state.holiday.dayoffRule
    }
})(DayOffRuleList)