import React from "react";
import LeftNav from "./leftNav";
import Main from "./main";
import Layout from "../../components/layout";
class Holiday extends React.Component{
    componentDidMount(){
        this.props.history.push('/holiday/type');
    }
    render(){
        return (
            <Layout left={<LeftNav {...this.props}/>} right={<Main {...this.props}/>} type="2"/>
        )
    }
}
export default Holiday;