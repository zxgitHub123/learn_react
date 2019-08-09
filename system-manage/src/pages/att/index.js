import React from "react";
import Edit from "./edit";
import List from "./list";
import Detail from "./detail";
import Delete from "./delete"
class Att extends React.Component{
    constructor(props){
        super(props);
        this.state={
            status:'list',
            editType:'',
            delGroup:false
        }
        this.col=[
            {
                key:'group_name',
                title:'分组名称'
            },
            {
                key:'att_type',
                title:'考勤类型',
                render:(item)=>{
                    const text={
                        1:'固定班制-每日相同班次',
                        2:'固定班制-每日不同班次',
                        3:'排班制'
                    }
                    return <div>{text[item.att_type]}</div>
                }
            },
            {
                key:'is_flex',
                title:'弹性',
                render:(item)=>{
                    const text={
                        0:'不弹性',
                        1:'弹性'
                    }[item.is_flex];
                    return <div>{text}</div>
                }
            },
            {
                key:'members',
                title:'考勤人员',
                render:(item)=>{
                    if(item.members.length<=0){
                        return <div>未加入其它分组的全体成员</div>
                    }else{
                        const member_names=item.members.map(item=>item.member_name).join(',');
                        return <div>{member_names}</div>
                    }
                }
            },
            {
                key:'action',
                title:'操作',
                render:(item)=>{
                    return <div>
                        <span className="action" onClick={()=>{this.changeState('edit','edit_att_group',()=>{this.getCurrentData(item)})}}>编辑</span>
                        <span className="action" onClick={()=>{this.changeState('detail','',()=>{this.getCurrentData(item)})}}>详情</span>
                        {!item.is_default?<span className="action" onClick={()=>{this.changeState('delete','',()=>{this.getCurrentData(item)})}}>删除</span>:null}
                    </div>
                }
            }
        ];
        this.currentData=''
    }
    getCurrentData=(data)=>{
        this.currentData=data;
        console.log( this.currentData);
    }
    changeState=(status,editType='',callback)=>{
        callback && callback();
        this.setState({
            status,
            editType
        })
    }
    render(){
        return (
            <div>
                {this.state.status==='delete'?<Delete data={this.currentData} changeStatus={this.changeState}/>:null}
                {this.state.status==='list'?<List col={this.col} changeStatus={this.changeState}/>:null}
                {this.state.status==='edit'?<Edit data={this.currentData} changeStatus={this.changeState} type={this.state.editType}/>:null}
                {this.state.status==='detail'?<Detail data={this.currentData} changeStatus={this.changeState} showBread={true}/>:null}
            </div>
        )
    }
}
export default Att;