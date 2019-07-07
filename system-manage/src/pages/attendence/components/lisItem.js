import React from "react";
import HeartImg from "../../../components/heartImg";
import {Icon,Tooltip,Row,Col} from "antd";
class Heart extends React.Component{
    setLike=()=>{
        const flag=this.props.like ? 0:1;
        if(this.props.type!=='getCommon') this.props.setLike(flag,this.props.id);
        // if(flag===0){
        //     this.props.delCommon(this.props.member);
        // }else {
        //     this.props.addCommon(this.props.member);
        // }
    }
    render(){
        return  <Tooltip title={this.props.like===1?'取消关注':'关注'} placement="bottom">
                    <Icon onClick={this.setLike} type={this.props.like===1?'heart':'heart-o'} className={'heart '+(this.props.like?'like':'')} style={{fontSize:'16px'}}/>
                </Tooltip>
    }
}
class Del extends React.Component{
    handleDel=()=>{
        this.props.del(this.props.id);
        this.props.delCommon({member_id:this.props.is});
    }
    render(){
        return <Icon type="delete" className="del" onClick={this.handleDel}/>
    }
}
class ListItem extends React.Component{
    gotoDetail=()=>{
        this.props.gotoDetail();
        this.props.changeCur(this.props.member);
    }
    render(){
        let content;
        if(this.props.type==="cart"){
            content=<div className="clearFix" style={{position:'relative'}}>
                <HeartImg className="f-fl heading" {...this.props} onClick={this.gotoDetail}/>
                <div className="f-fl" style={{marginLeft:'10px'}}>
                    <p>
                        <span className="name" onClick={this.gotoDetail}>{this.props.member_name}</span>
                        <span className="tel">{this.props.phone}</span>
                    </p>
                    <p>
                        { this.props.position && <span className="position">{this.props.position}</span>}
                        {this.props.leader && <span className="leader">部分负责人</span>}
                    </p>
                </div>
                <Heart type={this.props.type} like={this.props.like} memeber={this.props.member} setLike={this.props.setLike}/>
                {this.props.delIcon ? <Del id={this.props.member_id}/>:null}
            </div>
        }else{
            content=<Row className="clearFix listRow">
                    <Col span={8} className="col col-l" onClick={this.gotoDetail}>
                        {this.props.member_name}
                        {this.props.leader && <span className="leader"> 部分负责人</span>}
                    </Col>
                    <Col span={6} className="col">
                        {this.props.position}
                    </Col>
                    <Col span={6} className="col">
                        {this.props.phone}
                    </Col>
                    <Col span={4} className="col">
                        <Heart type={this.props.type} like={this.props.like} member={this.props.member} setLike={this.props.setLike}/>
                        {this.props.delIcon?<Del id={this.props.member_id}/>:null}
                    </Col>
                </Row>
        }
        return <li className={this.props.type+'Item'}>{content}</li>
    }
}
ListItem.defaultProps={
    type:'cart'
}
export default ListItem;
