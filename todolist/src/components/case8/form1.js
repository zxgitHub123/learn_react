import React from "react";
class From1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }
    handleChange=(event)=>{
        this.setState({
            value:event.target.value.toUpperCase()
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.value);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={this.state.value} onChange={this.handleChange}/>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}
export default From1;