import React from "react";
import LeftNav from "./leftNav";
import Main from "./main";
import Layout from "../../components/layout";
class Holiday extends React.Component{
    render(){
        return (
            <Layout left={LeftNav} right={Main} type="2"/>
        )
    }
}
export default Holiday;