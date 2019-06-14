import React from "react";
class Form3 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isCheck:false,
            inputValue:''
        }
    }
    handleChange=(event)=>{
        let target=event.target;
        const value= target.type==='checkbox'? target.checked:target.value;
        const name=target.name;
        this.setState({
            [name]:value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.isCheck);
        console.log(this.state.inputValue)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    多选框
                    <input 
                        type="checkbox"
                        checked={this.state.isCheck}
                        name="isCheck"
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    表单输入
                    <input 
                        type="text"
                        value={this.state.inputValue}
                        name="inputValue"
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
export default Form3