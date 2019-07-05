import React from 'react';
import "./heartImg.css";
class HeartImg extends React.Component{
    constructor(props){
        super(props);
        this.color=['rgb(32,167,253)','rgb(25,179,52)','rgb(255,131,54)'];
        this.img=props.imgSrc? props.imgSrc :props.member_name[0];
        this.style=Object.assign({background:this.color[props.member_id%3]},{...this.props.style})
    }
    render(){
        return (
            <div className={'heartImg '+this.props.className} style={this.style}>
                <div className="heartImg-inner" onClick={this.props.onClick}>
                    <div className="inner">
                        {this.img}
                    </div>
                </div>
            </div>
        )
    }
}
HeartImg.defaultProps={
    className:'',
    onClick:function(){}
}
export default HeartImg;