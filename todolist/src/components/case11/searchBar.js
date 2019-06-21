import React from "react";
class SearchBar extends React.Component{
    textChange=(event)=>{
        this.props.onFilterTextChange(event.target.value);
    }
    stockChange=(event)=>{
        console.log(event.target.checked)
        this.props.onStockCheck(event.target.checked);
    }
    render(){
        const {inStockOnly,filterText}=this.props;
        return(
            <div>
                <input type="text" value={filterText} onChange={this.textChange}/>
                <input type="checkbox" onChange={this.stockChange} checked={inStockOnly}/>  Only show products in stock
            </div>
        )
    }
}
export default SearchBar;