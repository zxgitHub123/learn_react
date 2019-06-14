import React from "react";
import UserGetting from "./userGetting";
import GuestGetting from "./guestGetting"
class Getting extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.isLoginState){
            return <UserGetting/>
        }else{
            return <GuestGetting/>
        }
    }
}
export default Getting;