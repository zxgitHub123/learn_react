import React from "react";
import TemperatureInput from "./temperatureInput"
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            temperature:'',
            scale:''
        }
    }
    cChange=(value)=>{
        this.setState({
            temperature:value,
            scale:"c",
        })
    }
    fchange=(value)=>{
        this.setState({
            temperature:value,
            scale:"f",
        })
    }
    tryConvert(temperature,convert){
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
          return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }
    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
      
    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }
    render(){
        const scale=this.state.scale;
        const temperature=this.state.temperature;
        const celsius = scale==='f'? this.tryConvert(temperature,this.toCelsius) : temperature;
        const fahrenheit = scale==='c'? this.tryConvert(temperature, this.toFahrenheit) : temperature;
        return(
            <div>
                <TemperatureInput temperature={celsius} sclae="c" onTemperatureChange={this.cChange}/>
                <TemperatureInput temperature={fahrenheit} sclae="f" onTemperatureChange={this.fchange}/>
            </div>
        )
      
    }
}
export default Calculator;