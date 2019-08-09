import React from "react";
import {Button,Icon} from "antd";
import {connect} from "react-redux";
class Rule extends React.Component{
    changeVlaue=(index,field,value)=>{
        value=`${value}`.replace(/[^\d]/g,'');
        this.props.rules[index][field]=value;
        this.props.changeRules(this.props.rules);
    }
    addRule=(type)=>{
        console.log(111);
        this.props.rules.push({id:new Date().getTime(),type:type,year1:'',year2:'',day:''});
        console.log(this.props.rules);
        this.props.changeRules(this.props.rules);
    }
    delRule=(index)=>{
        this.props.rules.splice(index,1);
        this.props.changeRules(this.props.rules);
    }
    render(){
        return <div>
            <Button type="primary" onClick={()=>this.addRule('si')}>新增司龄</Button>
            <Button type="primary" onClick={()=>this.addRule('gong')}>新增工龄</Button>
            {
                this.props.rules.map((item,index)=>{
                    return <p key={item.id}>
                        <input type="text" value={item.year1} onChange={(event)=>this.changeVlaue(index,'year1',event.target.value)}/>
                        年 小于等于{item.type==='si'?'司龄':'工龄'}
                        小于
                        <input type="text" value={item.year2} onChange={(event)=>this.changeVlaue(index,'year2',event.target.value)}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        年假
                        <input type="text" value={item.day} onChange={(event)=>this.changeVlaue(index,'day',event.target.value)}/>
                        天
                        <Icon type="delete" onClick={()=>this.delRule(index)}></Icon>
                    </p>
                })
            }
        </div>
    }
}
class AnnualRuleEdit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            type:this.props.rule.type,
            rules:this.props.rule.rules
        }
    }
    changeRuleTyle=(type)=>{
        this.setState({
            type
        })
    }
    changeRules=(data)=>{
        this.setState({
            rules:data
        })
    }
    render(){
        return <div>
            <table>
                <tbody>
                    <tr>
                        <td className="in-h">
                            年假规则
                            <span>*</span>
                        </td>
                        <td>
                            <label htmlFor="">
                                <input type="radio" checked={this.state.type===1} onChange={()=>{this.changeRuleTyle(1)}}/>
                                手动维护
                            </label>
                            <label htmlFor="">
                                <input type="radio" checked={this.state.type===2} onChange={()=>{this.changeRuleTyle(2)}}/>
                                手动维护+自动累加
                            </label>
                        </td>
                    </tr>
                    {this.state.type===1?null:
                    <tr>
                        <td className="in-h">
                            累加规则 
                            <span className="in-star">*</span>
                        </td>
                        <td>
                            <Rule rules={this.state.rules} changeRules={this.changeRules}/>
                        </td>
                    </tr>
                    }
                </tbody>
            </table>
            <Button type="default" onClick={()=>{this.props.changeEditSate(false)}}>取消</Button>
            <Button type="primary" onClick={()=>this.props.submit({rules:this.state.rules,type:this.state.type})}>提交</Button>
        </div>
    }
}
export default connect((state)=>{
   return {
        rule:state.holiday.annualRule
   }
},(dispatch,ownProps)=>{
    return {
        submit(data){
            dispatch({
                type:'edit_annualRule',
                params:data
            })
            ownProps.changeEditSate(false);
        }
    }
})(AnnualRuleEdit);