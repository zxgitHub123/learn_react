import React from "react";
import "./css/list.css";
import fixHeight from "../../js/winHeight.js";
class GList extends React.Component{
    render(){
        let height=fixHeight({offset:this.props.offset || 0})
        return(
            <div className="list">
                <div className="list-wrap">
                    
                </div>
            </div>
        )
    }
}
export default GList;