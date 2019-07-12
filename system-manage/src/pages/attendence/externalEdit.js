import React from "react";
import Breadcrumb from "../../components/breadcrumb";
import {connect} from "react-redux";
import {message,Button} from "antd";
import "./externalEdit.css";
class Phone extends React.Component{
    addPhone=()=>{
        const phone=this.props.phone;
        phone.push('');
        this.props.changePhone(phone);
    }
    delPhone=(index)=>{
        const phone=this.props.phone;
        phone.splice(index,1);
        this.props.changePhone(phone);
    }
    changePhone=(event,index)=>{
        const target=event.target;
        let value=target.value;
        value=value.replace(/[^\d]/g,'');
        value=value.replace(/^[^1]/,'');
        if(value.length>11) value=value.slice(0,11);
        const phone=this.props.phone.concat();
        phone.splice(index,1,value);
        this.props.changePhone(phone);
    }
    render(){
       const phone=this.props.phone.map((phone,index)=>{
           if(index===0){
                return <tr key={index}>
                    <td className="in-h">手机号
                        <span className="in-star">*</span>
                    </td>
                    <td>
                        <input value={phone} className="input" onChange={(event)=>{this.changePhone(event,index)}}/>
                        <button type="button" className="submit" onClick={this.addPhone}>
                            增加
                        </button>
                    </td>
                </tr>
           }else{
               return <tr key={index}>
                   <td className="in-h">{`手机号${index+1}`}</td>
                    <td>
                        <input type="text" className="input" onChange={(event)=>{this.changePhone(event,index)}}/>
                        <button type="button" className="cancel" onClick={()=>{this.delPhone(index)}}>删除</button>
                    </td>
                </tr>
           }
       })
       return <table><tbody>{phone}</tbody></table>
    }
}
class Edit extends React.Component{
    constructor(props){
        super(props);
        const curLabel={
            'add':'添加外部联系人',
            'edit':'编辑外部联系人'
        }
        this.breadcrumb=[
            {
                link:'/attendence/external/list',
                label:'外部联系人'
            },{
                label:curLabel[this.props.type]
            }
        ]
        this.isModify=false;
        this.state={
            phone:[''],
            dept:'',
            position:'',
            member_name:''
        }
    }
    componentDidMount(){
        if(this.props.type==='edit'){
            this.setState({
                ...this.props.data
            })
        }
    }
    changeValue=(event)=>{
        const target=event.target;
        const field=target.dataset.field;
        this.setState({
            [field]:target.value
        })
    }
    changePhone=(phone)=>{
        this.setState({
            phone
        })
    }
    cancel=()=>{
        this.gotoList();
    }
    gotoList=()=>{
        this.props.history.push("/attendence/external/list");
    }
    static checkFrom(data){
        const keys=Object.keys(data);
        for(const key of keys){
            const item=data[key];
            if(item.required && item.value.length<1){
                message.warning(`请输入${item.label}`);
                return false;
            }
            if(!item.exp.test(item.value)){
                message.warning(`${item.label}格式不正确`);
                return false;
            }
        }
        return true;
    }
    static clearTrim(value){
        if(value===undefined) return;
        if(Array.isArray(value)){
            value=value.filter(item=>{
                item=Edit.clearTrim(item);
                return item.length>0;
            })
            if(value.length>0){
                value=(value.join().replace(/\s/g,'')).split(',');
            }
            return value;
        }else{
            value=value.replace(/\s/g,'');
        }
        return value;
    }
    saveGoto=()=>{
        this.save(this.gotoList);
    }
    save=(callback)=>{
        const msg={
            member_name:{
                lable:'姓名',
                value:Edit.clearTrim(this.state.member_name),
                exp:/.+/,
                required:true
            },
            phone:{
                label:'手机号',
                value:Edit.clearTrim(this.state.phone),
                exp:/^1[34578]\d{9}$/,
                required:true
            },
            dept:{
                label:'部门',
                value:Edit.clearTrim(this.state.dept),
                exp:/.*/,
                required:true
            },
            position:{
                label:'职位',
                value:Edit.clearTrim(this.state.position),
                exp:/.*/,
                required:false
            }
        }
        if(!Edit.checkFrom(msg)){
            return;
        }
        if(this.props.type==='add'){
            this.props.addExternal(this.state);
        }else{
            this.props.editExternal(this.state);
        }
        callback && callback();
    }
    saveNew=()=>{
        this.save(()=>{
            this.setState({
                member_name:'',
                phone:[''],
                dept:'',
                position:''
            })
        })
    }
    render(){
        return(
        <div className="external-edit">
            <Breadcrumb breadcrumb={this.breadcrumb}/>
            <div className="content">
                <table className="form">
                    <tbody>
                        <tr>
                            <td className="in-h">
                                姓名<span className="in-star">*</span>
                            </td>
                            <td>
                                <input type="text" className="input" value={this.state.member_name} data-field="member_name" onChange={this.changeValue}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <Phone phone={this.state.phone} changePhone={this.changePhone}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="in-h">
                                部门
                            </td>
                            <td>
                                <input type="text" className="input" value={this.state.dept} data-field="dept" onChange={this.changeValue}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="in-h">
                                职位
                            </td>
                            <td>
                                <input type="text" className="input" value={this.state.position} data-field="position" onChange={this.changeValue}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="in-h">

                            </td>
                            <td>
                                <div className="btns">
                                    <Button type="primary" className="cancel" style={{marginRight:'20px'}} onClick={this.cancel}>取消</Button>
                                    <Button type="primary" className="submit" style={{marginRight:'20px'}} onClick={this.saveGoto}>保存</Button>
                                    {this.props.type==='add'?<Button tyoe="priamry" className="submit" onClick={this.saveNew}>保存并新增</Button>:null}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}
export default connect((state)=>{
    return{
        data:state.attendence.curMember
    }
},(dispatch)=>{
    return {
        addExternal(data){
            dispatch({
                type:"addExternal",
                param:data
            })
        },
        editExternal(data){
            dispatch({
                type:"editExternal",
                param:data
            })
        }
    }
})(Edit);