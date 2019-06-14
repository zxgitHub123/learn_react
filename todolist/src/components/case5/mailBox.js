import React from "react";
function MailBox(props){
    const message=props.unreadMessages;
    const isLoginIn=false;
    return (
        // <div>
        //     <h1>hello</h1>
        //     <h2>
        //         {
        //           message.length>0 && 
        //           <h2>
        //               You have {message.length} unread messages.
        //           </h2>  
        //         }
        //     </h2>
        // </div>
        <div>
            这个用户{isLoginIn ? 'currently':'not'} logged in
        </div>
        
    )
}
export default MailBox;