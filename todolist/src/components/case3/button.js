import React from "react";
// class Button extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             isON:true
//         }
//         this.handClick=this.handClick.bind(this);
//     }
//     handClick(){
//         this.setState({
//             isON:!this.state.isON
//         })
//     }
//     render(){
//         return (
//             <button onClick={this.handClick}>
//                 {this.state.isON ?'ON':'OFF'}
//             </button>
//         )
//     }
// }
// class Button extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             isON:true
//         }
//     }
//     handClick=()=>{
//         this.setState((prevState)=>({
//             isON:!prevState.isON
//         }))
//     }
//     render(){
//         return (
//             <button onClick={this.handClick}>
//                 {this.state.isON ?'ON':'OFF'}
//             </button>
//         )
//     }
// }
class Button extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isON:true
        }
    }
    handClick(){
        this.setState((prevState)=>({
            isON:!prevState.isON
        }))
    }
    render(){
        return (
            <button onClick={()=>this.handClick()}>
                {this.state.isON ?'ON':'OFF'}
            </button>
        )
    }
}
export default Button;