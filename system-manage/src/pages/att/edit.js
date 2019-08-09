import React from "react";
import {connect} from "react-redux";
import {Steps,Button,Select,message} from "antd";
import SelectPerson from "../../components/selectData";
import Detail from "./detail";
const {Step}=Steps;
const {Option}=Select;
class Edit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            step:0,
            selectPerson:false,
            formData:this.props.data || {
                group_name:'',
                members:[],
                att_type:1,
                att_class:2,
                is_flex:0,
                ex_time:30,
                last_time:30
            }
        }
        console.log( this.state.formData.members)
    }
    changeFormData=(field,value,type='text')=>{
        this.setState((prevState)=>{
            return {
                formData:{...prevState.formData,[field]:value}
            }
        })
    }
    verifyFormData=(step)=>{
        const needVerifyData={
            0:{
                group_name:{
                    is_required:true,
                    msg:'请输入考勤分组名称'
                },
                members:{
                        is_required:!this.state.formData.is_default,
                        msg:'请选择考勤分组成员'
                    }
                },
            1:{
                ex_time:{
                    is_required:this.state.formData.is_flex,
                    msg:'请输入上/下班时间之前的弹性时间'
                },
                last_time:{
                    is_required:this.state.formData.is_flex,
                    msg:'请输入上/下班时间之后的弹性时间'
                }
            }
        }[step];
        const verifyKey=Object.keys(needVerifyData);
        const len=verifyKey.length;
        for(let i=0;i<len;i++){
            const curKey=verifyKey[i];
            const is_required=needVerifyData[curKey].is_required;
            console.log(step);
            console.log(is_required);
            console.log(`${this.state.formData[curKey]}`.length);
            if(is_required && `${this.state.formData[curKey]}`.length<=0){
                message.warning(needVerifyData[curKey].msg);
                return false;
            }
        }
        return true;
    }
    setStep=(flag)=>{
       if(flag>0 && !this.verifyFormData(this.state.step)) return;
        this.setState({
            step:this.state.step*1+(flag)
        })
    }
    changeSelectPerson=(selectPerson)=>{
        this.setState({
            selectPerson
        })
    }
    createHeader=()=>{
        const text=this.props.type==='edit'?'编辑考勤分组':'新增考勤分组';
        return <div>
            <span className="link bread" onClick={()=>{this.props.changeStatus('list')}}>考勤分组</span>
            >
            <span>{text}</span>
        </div>
    }
    render(){
        return <div>
                {this.createHeader()}
                {this.state.selectPerson?<SelectPerson changeFormData={this.changeFormData} changeSelectPerson={this.changeSelectPerson} type="staff" selectedData={this.state.formData.members}/>:null}
                <div className="step">
                    <Steps current={this.state.step}>
                        <Step title="分组基本信息"/>
                        <Step title="设置规则"/>
                        <Step title="提交发布"/>
                    </Steps>
                </div>
                <div className="form">
                    <table>
                        {this.state.step===0 ?<tbody>
                            <tr>
                                <td className="in-h">
                                    考勤分组名称
                                    <span className="in-star">*</span>
                                </td>
                                <td>
                                    <input type="text" value={this.state.formData.group_name} onChange={(event)=>{this.changeFormData('group_name',event.target.value)}}/>
                                </td>
                            </tr>
                            <tr>
                                <td className="in-h">
                                    考勤分组成员
                                    <span className="in-star">*</span>
                                </td>
                                <td>
                                    <Button onClick={()=>{this.changeSelectPerson(true)}}>选择人员</Button>
                                    {this.state.formData.members.map(item=>{
                                        return <span key={item.member_id}>
                                            {item.member_name}
                                        </span>
                                    })}
                                </td>
                            </tr>
                            <tr>
                                <td className="in-h">
                                    考勤类型
                                    <span className="in-star">*</span>
                                </td>
                                <td>
                                   <label htmlFor="">
                                       <input type="radio" name="att_type" checked={this.state.formData.att_type===1} onChange={()=>{this.changeFormData('att_type',1,'num')}}/>固定班制-每日相同班次 （如每个工作日09:00-18:00,工作日相同班次）
                                   </label>
                                   <br/>
                                   <label htmlFor="">
                                       <input type="radio" name="att_type" checked={this.state.formData.att_type===2} onChange={()=>{this.changeFormData('att_type',2,'num')}}/>固定班制-每日不同班次 （如周一09:00-18:00，周二08:00-19:00，工作日有不同班次，按周循环）
                                   </label>
                                   <br/>    
                                   <label htmlFor="">
                                   <input type="radio" name="att_type" checked={this.state.formData.att_type===3} onChange={()=>{this.changeFormData('att_type',3,'num')}}/>排版制（每天的考勤时间不固定，可以灵活的设置考勤时间）
                                   </label>
                                </td>
                            </tr>
                            <tr>
                                 <td className="in-h">
                                   
                                </td>
                                <td>
                                    <Button type="default" onClick={()=>{this.props.changeStatus('list')}}>取消</Button>
                                    <Button type="primary" onClick={()=>{this.setStep(1)}}>保存并进行下一步</Button>
                                </td>
                            </tr>
                        </tbody>:null}
                        {
                            this.state.step===1?
                            <tbody>
                            <tr>
                                <td className="in-h">
                                    是否弹性
                                    <span className="in-star">*</span>
                                </td>
                                <td>
                                   <label htmlFor="">
                                       <input type="radio" name="att_type" checked={this.state.formData.is_flex===0} onChange={()=>{this.changeFormData('is_flex',0,'num')}}/>无弹性(严格按照上下班时间考勤)
                                   </label>
                                   <br/>
                                   <label htmlFor="">
                                       <input type="radio" name="att_type" checked={this.state.formData.is_flex===1} onChange={()=>{this.changeFormData('is_flex',1,'num')}}/>部分弹性(上下班时间前后弹性一段时间)
                                   </label>
                                   {this.state.formData.is_flex===1?<p>
                                    上下班之前的弹性时长
                                    <input type="text" onChange={(event)=>{this.changeFormData('ex_time',event.target.value)}} value={this.state.formData.ex_time}/>
                                    分钟， 
                                    上下班之后的弹性时长
                                    <input type="text" value={this.state.formData.last_time} onChange={(event)=>{this.changeFormData('last_time',event.target.value)}} />
                                    分钟
                                   </p>:null}
                                </td>
                            </tr>
                            <tr>
                                <td className="in-h">
                                    考勤班次
                                    <span className="in-star">*</span>
                                </td>
                            <td>
                                <Select style={{ width: 300 }} defaultVal={this.state.formData.att_class} placeholder='请选择考勤班次' onChange={(val)=>{this.changeFormData('att_class',val)}}>
                                    {this.props.att_class.map(item =>{
                                        return <Option key={item.id}>
                                            <span className="name">
                                                {item.type}
                                            </span>
                                        </Option>
                                    })}
                                </Select>
                            </td>
                            </tr>
                            <tr>
                                 <td className="in-h">
                                   
                                </td>
                                <td>
                                    <Button type="default" onClick={()=>{this.props.changeStatus('list')}}>取消</Button>
                                    <Button onClick={()=>{this.setStep(-1)}}>返回上一步</Button>
                                    <Button type="primary" onClick={()=>{this.setStep(1)}}>保存并进行下一步</Button>
                                </td>
                            </tr>
                            </tbody>:null
                        }
                        {
                            this.state.step===2?<tbody>
                                <Detail data={this.state.formData}/>
                                <tr>
                                 <td className="in-h">
                                   
                                </td>
                                <td>
                                    <Button type="default" onClick={()=>{this.props.changeStatus('list')}}>取消</Button>
                                    <Button onClick={()=>{this.setStep(-1)}}>上一步</Button>
                                    <Button type="primary" onClick={()=>{this.props.submit(this.state.formData)}}>提交</Button>
                                </td>
                            </tr>
                            </tbody>:null
                        }
                    </table>
                </div>
            </div>
    }
}
export default connect((state)=>{
    return {
        att_class:state.att.att_class
    }
},(dispatch,ownProps)=>{
    return {
        submit(data){
            dispatch({
                type:ownProps.type,
                param:data
            })
            ownProps.changeStatus('list');
        }
    }
})(Edit);