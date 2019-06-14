import React from "react";
import MailBox from "./mailBox";
class Yu extends React.Component{
    render(){
        const message=['React', 'Re: React'];
        return (
           <MailBox unreadMessages={message}/> 
        )
    }
}
export default Yu;
