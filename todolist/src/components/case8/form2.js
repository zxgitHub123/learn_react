import React from "react";
class Form2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }
    handleChange=(event)=>{
        this.setState({
            value:event.target.value
        })
    }
    handleSubmit=(event)=>{
        console.log(this.state.value);
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="one">one</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                    <option value="four">four</option>
                    <option value="five">five</option>
                </select>
                <input type="submit" value="Submit"/>
            </form>
        )
    }

}
export default Form2;