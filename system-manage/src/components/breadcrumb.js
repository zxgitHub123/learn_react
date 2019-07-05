import React from "react";
import {Link} from "react-router-dom";
class Breadcrumb extends React.Component{
    render(){
        const len=this.props.breadcrumb.length;
        const bread =this.props.breadcrumb.map((item,index)=>{
            if(index<len-1){
                return <li key={index} className="f-fl">
                        <Link className="link" to={`${item.link}`}>
                            {item.label}
                        </Link>
                        <span className="separator">{this.props.separator}</span>
                    </li>
            }
            return <li key={index} className="f-fl last">{item.label}</li>
        })
        return <ul className="g-breadcrumb clearFix">
                {bread}
                </ul>
    }
} 
Breadcrumb.defaultProps={
    breadcrumb:[],
    separator:'>'
}
export default Breadcrumb;