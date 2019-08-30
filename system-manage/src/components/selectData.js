import React from "react";
import {Modal,message} from "antd";
import Search from "./search";
import DataTree from "./baseDataTree.js";
import "./../css/tree.css";
class SelectData extends React.Component{
    constructor(props){
        super(props);
        this.selectBarVal=['全部'];
        this.getSearchBarVal();
        this.state={
            keyword:'',
            letter:'',
            selectedData:[...this.props.selectedData]
        }
    }
    getSearchBarVal=()=>{
        for(let i=65;i<91;i++){
            this.selectBarVal.push(String.fromCharCode(i));
        }
    }
    searchByKeyword=(keyword)=>{
        this.setState({
            keyword
        })
    }
    delSelectData(data){
        const newData=this.state.selectedData.filter(item=>item.id!==data.id);
        this.changeSelectData(newData);
    }
    changeSelectData=(selectedData)=>{
        console.log(selectedData);
        this.setState({
            selectedData
        })
    }
    setLetter=(letter)=>{
        this.setState({
            letter
        })
    }
    createSelectBar=()=>{
        return <ul className="search-bar clearfix">
                {this.selectBarVal.map((item,index)=>{
                    return <li key={index} className={(this.state.letter===item?'active':'')+" f-fl"} onClick={()=>{this.setLetter(item==='全部'?'':item)}}>
                        {item}
                    </li>
                })}
        </ul>
    }
    onOk=()=>{
      if(!this.props.maxNum || this.state.selectedData.length<=this.props.maxNum){
        this.props.changeFormData(this.state.selectedData)
        this.props.changeSelectPerson(false)
      }else{
        message.warning(`最多只能选择${this.props.maxNum}个`);
      }
    }
    render(){
        return (<Modal visible={true} onCancel={()=>{this.props.changeSelectPerson(false)}} onOk={this.onOk}>
            <div className="select-wrap">
                <div className="search_input">
                    <Search search={this.searchByKeyword} placeholder="请输入关键字"/>
                </div>
                {this.createSelectBar()}
                <div className="data">
                    <div className="left-result">
                        <DataTree changeSelectData={this.changeSelectData} type={this.props.type} keyword={this.state.keyword} letter={this.state.letter} selectedData={this.state.selectedData}/>
                    </div>
                    <div className="right-result">
                        {
                            this.state.selectedData.map((item)=>{
                                return <span key={item.id} className="result" onClick={()=>{this.delSelectData(item)}}>
                                    {this.props.type!=='dept'?item.member_name:item.dept_name}
                                </span>
                            })
                        }
                    </div>
                </div>
            </div>
        </Modal>)
    }
}
SelectData.defaultProps={
    selectedData:[],
    type:'dept'
}
export default SelectData;