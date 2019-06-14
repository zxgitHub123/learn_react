import React from "react";
import WarningBtn from "./warningBtn";
class Page extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isWarning:false
        }
    }
    handleToggleClick=()=>{
        this.setState(prevState =>({
            isWarning:!prevState.isWarning
        })
        )
    }
    render(){
        return (
            <div>
                <button onClick={this.handleToggleClick}>
                {this.state.isWarning ? 'hide':'show'}
                </button>
                <WarningBtn warn={this.state.isWarning}/>
            </div>
        )
    }
}
export default Page;