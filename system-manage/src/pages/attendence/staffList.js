import React from "react";
import Header from "./components/header";
import MemberList from "./components/memberList";
class StaffList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            letter:'',
            keyword:''
        }
    }
    gotoDetail=()=>{
        this.props.history.push('/attendence/staff/detail');
    }
    // 按字母进行筛选
    selectLetter=(letter)=>{
        this.setState({letter})
    }
    // 按关键字搜素
    search=(keyword)=>{
        this.setState({keyword})
    }
    render(){
        return (
            <div style={{...this.props.style}}>
                <Header selectLetter={this.selectLetter} letter={this.state.letter} search={this.search} placeholder="请输入姓名"/>
                <MemberList filed1='attendence' filed2="staff" type="getStaff" url="/api/get/staffList" title="公司职员" letter={this.state.letter} keyword={this.state.keyword} gotoDetail={this.gotoDetail}/>
            </div>
        )
    }   
}
export default StaffList;