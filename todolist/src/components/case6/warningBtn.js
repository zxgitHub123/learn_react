import React from "react";
function WarningBtn(props){
    if(!props.warn){
        return null;
    }
    return (
        <div>
            warning!
        </div>
    )
}
export default WarningBtn;