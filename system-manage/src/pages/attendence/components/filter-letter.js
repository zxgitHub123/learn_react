import React from "react";
import {Button} from 'antd';
class ItemLetter extends React.Component{
    selectLetter=()=>{
        this.props.changeSpread();
        this.props.selectLetter(this.props.value);
    }
    render(){
        return(
            <li className={'f-di '+(this.props.active?'active':'')} onClick={this.selectLetter}>
                {this.props.label}
            </li>
        )
    }
}
class ListLetter extends React.Component{
    createListLetter(){
        let listLetter=[];
        for(let i=65;i<=90;i++){
            listLetter.push(String.fromCharCode(i));
        }
        this.listLetter=listLetter;
    }
    componentWillMount(){
        this.createListLetter();
    }
    render(){
       return(
           <ul className="list">
                <ItemLetter key='all' label="全部" value='' active={this.props.letter===''} changeSpread={this.props.changeSpread} selectLetter={this.props.selectLetter}/>
               {
                   this.listLetter.map((item)=>{
                       return <ItemLetter key={item} label={item} value={item} active={this.props.letter===item} changeSpread={this.props.changeSpread} selectLetter={this.props.selectLetter}/>
                   })
               }
            </ul>
       )
    }
}
class FilterLetter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            spread:false
        }
    }
    changeSpread=()=>{
        this.setState((prevState)=>{
            return {
                spread:!prevState.spread
            }
        })
    }
    render(){
        return (
            <div className="g-filter-letter f-di" style={this.props.style}>
                <Button onClick={this.changeSpread}>
                    {this.props.letter===''?'按字母筛选':'按'+this.props.letter+'筛选'}
                </Button>
                {this.state.spread && <ListLetter letter={this.props.letter} changeSpread={this.changeSpread} selectLetter={this.props.selectLetter}/>}
            </div>
        )
    }
}
FilterLetter.defaultProps={
    letter:''
}
export default FilterLetter;