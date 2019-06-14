import React from "react";
class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date:new Date()
        }
    }
    componentDidMount(){
        this.timer=setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
        return (
            <h1>{this.state.date.toLocaleString()}</h1>
        )
    }
}
export default Timer;