import React from "react";
import "../css/layout.css";
import winHeight from "../js/winHeight.js";
class Layout extends React.Component{
    render(){
        const height=winHeight();
        if(this.props.type*1===2){
            return (
                <div className="g_layout g_clearfix" style={{height:`${height}px`}}>
                    <div className="g_left">
                        {this.props.left?this.props.left:'暂无内容'}
                    </div>
                    <div className="g_right">
                        {this.props.right?this.props.right:'暂无内容'}
                    </div>
                </div>
            )

        }else if(this.props.type*1===1){
            let content;
            if(this.props.children){
                content=this.props.children;
            }else if(this.props.body){
                content=this.props.body;
            }else{
                content="暂无内容"
            }
            return (
                <div className='g_layout' style={{height:`${height}px`}}>
                    {content}
                </div>
            )
        }
    }
} 
Layout.defaultProps={
    type:1
}
export default Layout;