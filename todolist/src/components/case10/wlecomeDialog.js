import React from "react";
import Dialog from "./dialog";
class WelcomeDialog extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:''
        }
    }
    singUp=()=>{
        alert(`欢迎你${this.state.inputValue}`);
    }
    handleChange=(event)=>{
        this.setState({
            inputValue:event.target.value
        })
    }
    render(){
        return(
            <Dialog 
            title="ars Exploration Program"
            content="How should we refer to you?"
            >
            <input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
            <button onClick={this.singUp}>
                Sign Me up
            </button>
            </Dialog>
        )
    }
}
export default WelcomeDialog;