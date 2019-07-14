import React from "react";
import Header from "./components/header";
import MemberList from "./components/memberList";
class commonList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            letter:'',
            keyword:''
        }
    }
    // 按字母搜索
    selectLetter=(letter)=>{
        this.setState({
            letter
        })
    }
    // 按关键字搜索
    search=(keyword)=>{
        this.setState({
            keyword
        })
    }
    // 跳转到详情
    gotoDetail=()=>{
        this.props.history.push("/attendence/common/detail");
    }
    render(){
        return(
            <div>
                <Header search={this.search} letter={this.state.letter} selectLetter={this.selectLetter} placeholder="请输入姓名"/>
                <MemberList filed1="attendence" filed2="common" title="常用联系人" gotoDetail={this.gotoDetail} letter={this.state.letter} keyword={this.state.keyword}/>

            </div>
        )
    }
}
export default commonList;