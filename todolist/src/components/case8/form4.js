import React from "react";
class Form4 extends React.Component{
    constructor(props){
        super(props);
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.input.value);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                defaultValue="123"
                type="text" 
                ref={(input)=>this.input=input}
                />
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
export default Form4;