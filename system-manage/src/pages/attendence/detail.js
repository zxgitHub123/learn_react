import React from "react";
import Breadcrumb from "../../components/breadcrumb";
import HeartImg from "../../components/heartImg";
import {Button} from "antd";
import {connect} from "react-redux";
import "./detail.css";
class Detail extends React.Component{
    constructor(props){
        super(props);
        this.breadcrumb={
            'common':[
                {
                    link:'/attendence/common/list',
                    label:'常用联系人'
                },{
                    label:'常用联系人详情'
                }
            ],
            'external':[
                {
                    link:'/attendence/external/list',
                    label:'外部联系人'
                },{
                    label:'外部联系人详情'
                }
            ],
            'staff':[
                {
                    link:'/attendence/staff/list',
                    label:'公司职员'
                },{
                    label:'公司职员详情'
                }
            ]
        }
        this.state={
            btn_loading:false
        }
    }
    del=()=>{
        this.props.delExternal(this.props.data.member_id);
        this.props.history.push("/attendence/external/list");
    }
    edit=()=>{
        this.props.history.push("/attendence/external/edit");
    }
    render(){
        const {data}=this.props;
        return(
            <div className="detail">
                <Breadcrumb breadcrumb={this.breadcrumb[this.props.type]}/>
                {this.props.type!=='external'?null:(
                    <div className="top-col">
                        <Button type="default" style={{marginRight:'20px'}} loading={this.state.btn_loading} onClick={this.del}> 删除</Button>
                        <Button type="primary" loading={this.state.btn_loading} onClick={this.edit}>编辑</Button>
                    </div> 
                )}
                <div className="base clearFix">
                    <HeartImg {...data} className="img"/>
                    <div className="word">
                        <span className="name">
                            {data.member_name}
                        </span>
                        <p>
                            <span className="title">部门: </span>
                            {data.depart_name}
                        </p>
                        <p>
                            <span className="title">职位</span>
                            {data.position}
                        </p>
                    </div>
                </div>
                <div className="add">
                    <p>
                        <span className="title">电话:</span>
                        {data.phone}
                    </p>
                    <p>
                        <span className="title">邮箱</span>
                        {data.email}
                    </p>
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
        delExternal(member_id){
            dispatch({
                type:'delExternal',
                param:member_id
            })
        },
        delCommon(member){
            dispatch({
                type:'delCommon',
                member
            })
        }
    }
})(Detail)