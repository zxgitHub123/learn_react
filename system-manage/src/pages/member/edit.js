import React from "react";
import {connect} from "react-redux";
import {Button} from 'antd';
import Tree from "../../components/selectData";
class MemEdit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            formData:this.props.data || {
                member_name:'',
                dept_id:0,
                member_id:0
            },
            treeState:false
        }
    }
    changeTreeState=(boolean)=>{
        this.setState({
            treeState:boolean
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
                   {this.state.treeState?<Tree changeFormData={this.changeFormData} changeSelectPerson={this.changeTreeState} selectedData={this.state.formData.dept_id}/>:null}
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
                    <input type="text" value={this.state.formData.member_id} onChange={(event)=>{this.changeFormData('member_id',event.target.value)}}/>
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
            dispath({
                type:ownProps.type,
                param:data
            })
            ownProps.changeStatus('list')
        }
    }
})(MemEdit);