import React from "react";
import LoginButton from "./loginButton";
import LogoutButton from "./logoutButton";
import Greeting from "./greeting";
class LoginControll extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoginIn:false
        }
    }
    logoutClick=()=>{
        this.setState({
            isLoginIn:false
        })
    }
    loginClick=()=>{
        this.setState({
            isLoginIn:true
        })
    }
    render(){
        const isLoginIn=this.state.isLoginIn;
        let button=null;
        if(isLoginIn){
            button=<LogoutButton onClick={this.logoutClick}/>
        }else{
            button=<LoginButton onClick={this.loginClick}/>
        }
        return (
            <div>
                <Greeting isLoginState={this.state.isLoginIn}/>
                {button}
            </div>
        )
    }
}
export default LoginControll;