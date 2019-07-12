import React from "react";
import Header from "./components/header";
import MemberList from "./components/memberList";
class commonList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Header/>


            </div>
        )
    }
}
export default commonList;