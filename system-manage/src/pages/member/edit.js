import React from "react";
import {connect} from "react-redux";
import {Button} from 'antd';
import Tree from "../../components/selectData";
import {updateStaff} from "../../js/update";
class MemEdit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            formData:this.props.data || {
                id:'',
                dept_id:'',
                dept_name:'',
                member_name:'',
                work_num:''
            },
            treeState:false
        }
    }
    changeTreeState=(boolean)=>{
        this.setState({
            treeState:boolean
        })
    }
    changeDept=(value)=>{
        this.setState((prevState)=>{
            return {
                formData: Object.assign({...prevState.formData},{'dept_id':value[0].id,'dept_name':value[0].dept_name})
            }
        })
    }
    changeFormData=(field,value)=>{
        this.setState((prevState)=>{
            return {
                formData: Object.assign({...prevState.formData},{[field]:value})
            }
        })
    }
    render(){
        return <table>
            <tbody>
            <tr>
                <td className="in-h">
                    姓名
                    <span className="in-star">
                        *
                    </span>
                </td>
                <td>
                    <input type="text" value={this.state.formData.member_name} onChange={(event)=>{this.changeFormData('member_name',event.target.value)}}/>
                </td>
            </tr>
            <tr>
                <td className="in-h">
                    部门
                    <span className="in-star">
                        *
                    </span>
                </td>
                <td>
                   <Button onClick={()=>{this.changeTreeState(true)}}>
                       部门
                   </Button>
                   {this.state.treeState?<Tree type="dept" changeFormData={this.changeDept} changeSelectPerson={this.changeTreeState} selectedData={!this.props.data?[]:[this.state.formData]} maxNum={1}/>:null}
                   {this.state.formData.dept_name}
                </td>
            </tr>
            <tr>
                <td className="in-h">
                    工号
                    <span className="in-star">
                        *
                    </span>
                </td>
                <td>
                    <input type="text" value={this.state.formData.work_num} onChange={(event)=>{this.changeFormData('work_num',event.target.value)}}/>
                </td>
            </tr>
            <tr>
                <td className="in-h">

                </td>
                <td>
                    <Button type="default" onClick={()=>{this.props.changeStatus('list')}}>取消</Button>
                    <Button type="submit" onClick={()=>{this.props.submit(this.state.formData)}}>提交</Button>
                </td>
            </tr>
            </tbody>
        </table>
    }
}
export default connect((state)=>{return state},(dispath,ownProps)=>{
    return {
        submit(data){
            fetch(`/api/staff/${ownProps.type}`,{body:JSON.stringify(data),method:'POST'})
            .then((res)=>{
                updateStaff()
                ownProps.changeStatus('list')
            })
        }
    }
})(MemEdit);