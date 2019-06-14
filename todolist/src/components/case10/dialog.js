import React from "react";
import FancyBorder from "./fancyBaorder";
function Dialog(props){
    return(
        <FancyBorder>
            <div className="title">
                {props.title}
            </div>
            <div className="content">
                {props.content}
            </div>
            {props.children}
        </FancyBorder>
    )
}
export default Dialog;