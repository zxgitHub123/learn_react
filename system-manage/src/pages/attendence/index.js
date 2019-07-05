import React from "react";
import Main  from "./main";
import LeftNav from "./components/leftNav";
import Layout from "../../components/layout.js"
class Attendence extends React.Component{
    componentDidMount(){
        this.props.history.push('/attendence/staff');
    }
    render(){
        return (
           <Layout type={2} left={<LeftNav {...this.props}/>} right={<Main {...this.props}/>}/>
        )
    }
}
export default Attendence;