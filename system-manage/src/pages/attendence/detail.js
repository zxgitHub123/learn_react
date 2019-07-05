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
                    link:'/common/list',
                    label:'常用联系人'
                },{
                    label:'常用联系人详情'
                }
            ],
            'external':[
                {
                    link:'/external/list',
                    label:'外部联系人'
                },{
                    label:'外部联系人详情'
                }
            ],
            'staff':[
                {
                    link:'/staff/list',
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
    render(){
        const {data}=this.props;
        return(
            <div className="detail">
                <Breadcrumb breadcrumb={this.breadcrumb[this.props.type]}/>
                {this.props.type!=='external'?null:(
                    <div className="top-col">
                        <Button type="default" style={{marginRight:'20px'}} loading={this.state.btn_loading} onClick={this.del}> 删除</Button>
                        <Button type="primary" loading={this.state.btn_loading} onClick={this.edit}>编辑dz</Button>
                    </div> 
                )}
                <div className="content">
                    <div className="base clearFix">
                        <HeartImg {...data} className="img"/>
                        <div class="word">
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
                    <div class="add">
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
        delExter(member_id){
            dispatch({
                type:'delExternal',
                member_id
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