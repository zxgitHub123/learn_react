import React from "react";
import {connect} from "react-redux";
class Detail extends React.Component{
    getAttType=()=>{
        switch(`${this.props.data.att_type}`){
            case '1':
                return <span>固定班制-每日相同班次</span>;
            case '2':
                return <span>固定班制-每日不同班次</span>;
            case '3':
                return <span>排班制</span>;
            default:
                return <span>未知</span>
        }
    }
    getIsFlex=()=>{
        if(this.props.data.is_flex){
            return <p>上下班之前的弹性时长{this.props.data.ex_time}分钟,上下班之后的弹性时长{this.props.data.last_time}分钟</p>
        }else{
            return <span>不弹性</span>
        }
    }
    getAttClass=()=>{
        const curClass=this.props.att_classes.find(item=>{
            return `${item.id}`===`${this.props.data.att_class}`
        });
        return (curClass || {}).type || '未知';
    }
    getMembers=()=>{
        if(this.props.data.members && this.props.data.members.length>0){
            return this.props.data.members.map(item=>item.member_name).join(',');
        }else{
            return '未加入其它分组成员'
        }
    }
    render(){
        return (<table className="g-form">
            {this.props.showBread?<div className="header">
                <span className="link bread" onClick={()=>{this.props.changeStatus('list')}}>考勤分组</span> > <span className="bread">考勤分组详情</span>
            </div>:null}
                <tbody>
                    <tr>
                        <td className="in-h">
                            分组名称
                        </td>
                        <td>
                            {this.props.data.group_name}
                        </td>
                    </tr>
                    <tr>
                        <td className="in-h">
                            考勤类型
                        </td>
                        <td>
                            {this.getAttType()}
                        </td>
                    </tr>
                    <tr>
                        <td className="in-h">
                            弹性
                        </td>
                        <td>
                            {this.getIsFlex()}
                        </td>
                    </tr>
                    <tr>
                        <td className="in-h">
                            考勤班次
                        </td>
                        <td>
                            {this.getAttClass()}
                        </td>
                    </tr>
                    <tr>
                        <td className="in-h">分组成员</td>
                        <td>
                            {this.getMembers()}
                        </td>
                    </tr>
                </tbody>
            </table>)
    }
}
export default connect((state)=>{
    return {
        att_classes:state.att.att_class
    }
})(Detail);