import React from "react";
class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
    }
    handleChange=(event)=>{
        this.props.onTemperatureChange(event.target.value);
    }
    render(){
        const temperature=this.props.temperature;
        const scale=this.props.scale;
        const scaleNames={
            c:'celsius',
            f:'fahrenheit'
        }
        return(
            <div>
                <span>请输入{scaleNames[scale]}温度</span>
                <input type="text" value={temperature} onChange={this.handleChange}/>
            </div>
        )
    }
}
export default TemperatureInput;