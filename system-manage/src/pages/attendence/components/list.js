import React from "react";
import {Icon} from "antd";
import ListItem from "./lisItem";
import winHeight from "../../../js/winHeight";
import {connect} from "react-redux";
const height=winHeight({offset:95});
class List extends React.Component{
    render(){
        if(this.props.data.length>0){
            const items=this.props.data.map((item)=>{
                return <ListItem key={item.member_id} type={this.props.type} {...item} member={item} gotoDetail={this.props.gotoDetail}/>
            })
            return <div className="content" style={{height:height}}>
                {this.props.header && this.props.header()}
                <ul className="list clearFix">
                    {items}
                </ul>
            </div>
        }else{
            return (
                <div className="g-empty">
                    <Icon type="frown-o" style={{color:'#b8e0c8',fontSize:'50px'}}></Icon>
                    <p className="word">暂无数据</p>
                </div>
            )
           
        }
    }
}
function getData(state,ownProps){
    return state[ownProps.filed1][ownProps.filed2].filter((item)=>{
        let match=true;
        if(ownProps.letter!=='' && item.letter!==ownProps.letter) match=false;
        if(match && ownProps.keyword!=='' && item.member_name.indexOf(ownProps.keyword)<0) match=false;
        return match;
    })
}
export default connect((state,ownProps)=>{
    console.log(getData(state,ownProps));
    return {
        data:getData(state,ownProps)
    }
})(List);