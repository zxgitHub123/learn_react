import React from "react";
import Header from "./components/header";
import MemberList from "./components/memberList";
import {Button} from "antd";
class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            letter:'',
            keyword:''
        }
    }
    selectLetter=(letter)=>{
        this.setState({
            letter
        })
    }  
    addContact=()=>{
        this.props.history.push("/attendence/external/add")
    } 
    search=(keyword)=>{
        this.setState({
            keyword
        })
    }
    gotoDetail=()=>{
        this.props.history.push("/attendence/external/detail");
    }
    render(){
        return(
            <div style={{...this.props.style}}>
                <Header selectLetter={this.selectLetter} letter={this.state.letter} search={this.search} placeholder="请输入姓名"
                addContact={<Button style={{float:'right'}} onClick={this.addContact}>添加联系人</Button>}
                ></Header>
                <MemberList type="getExternal" filed1="attendence" filed2="external" title="外部联系人" letter={this.state.letter} keyword={this.state.keyword} delIcon={true} gotoDetail={this.gotoDetail}/>           
            </div>
        )
    }
}
export default List;