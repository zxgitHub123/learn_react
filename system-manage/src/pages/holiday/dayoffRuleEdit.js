import React from "react";
import {connect} from "react-redux";
import {Button} from "antd";
class DayoffRuleEdit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            editData:this.props.editData
        }
    }
    changeFiled=(field,value,type)=>{
        if(type==='num'){
            value=value.replace(/[^\d]/g,'');
        }
        this.setState((prevS)=>{
            Object.assign(prevS.editData,{[field]:value});
            return {
                editData:prevS.editData
            }
        })
    }
    render(){
        return(
            <table className="form dayOffRuleShow" style={{marginLeft:'50px'}}>
                <tbody>
                    <tr>
                        <td className="in-h">
                            调休规则
                            <span className="in-star"> 
                                *
                            </span>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="type" value="1" checked={this.state.editData.type+''==='1'} onChange={()=>{this.changeFiled('type',1)}}/>手动维护
                            </label>
                            <label>
                                <input type="radio" name="type" value="2" checked={this.state.editData.type+''==='2'} onChange={()=>{this.changeFiled('type',2)}}/>手动维护+自动累加
                            </label>
                        </td>
                    </tr>
                    {this.state.editData.type+''==='2'?
                        <tr>
                            <td className="in-h" style={{verticalAlign:'top'}}>    
                                    加班兑换规则
                                <span className="in-star">
                                    *
                                </span>
                            </td>
                            <td height="80" style={{verticalAlign:'top'}}>
                                <div className="item">
                                    工作日加班1小时换
                                    <input type="text" value={this.state.editData.weekday} onChange={(event)=>{this.changeFiled('weekday',event.target.value,'num')}}/>
                                        小时调休
                                </div>
                                <div className="item">
                                    休息日加班1小时换
                                    <input type="text" value={this.state.editData.weekend} onChange={(event)=>{this.changeFiled('weekend',event.target.value,'num')}}/>
                                        小时调休
                                </div>
                                <div className="item">
                                    法定节假日加班1小时换
                                    <input type="text" value={this.state.editData.holiday} onChange={(event)=>{this.changeFiled('holiday',event.target.value,'num')}}/>
                                        小时调休
                                </div>
                            </td>
                        </tr>
                        :null
                    }
                    {this.state.editData.type+''==='2'?
                    <tr>
                        <td className="in-h">
                            日时长折算规则
                            <span className="in-star">*</span>
                        </td>
                        <td>
                            <input type="text" value={this.state.editData.convery} onChange={(event)=>{this.changeFiled('convery',event.target.value,'num')}}/>小时=1天
                        </td>
                    </tr>:null
                    }
                    <tr>
                        <td></td>
                        <td>
                            <Button type="default" className='cancel' onClick={()=>this.props.changeState(false)}>取消</Button>
                            <Button type="primary" className='sumit' onClick={()=>this.props.submit(this.state.editData)}>提交</Button>
                        </td>
                    </tr>
                </tbody>
                </table>
        )
    }
}
function getData(data){
    if(data.type+''==='1'){
        return {
            type:1,
            weekday:1,
            weekend:1,
            holiday:1,
            convery:8
        }
    }
    return data;
}
export default connect(((state)=>{
    return {
        editData:getData(state.holiday.dayoffRule)
    }
}),(dispatch,ownProps)=>{
    return {
        submit(data){
            dispatch({
                type:'editDayoffRule',
                params:data
            })
            ownProps.changeState(false);
        }
    }
})(DayoffRuleEdit);