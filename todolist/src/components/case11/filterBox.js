import React from "react";
import ProductTable from "./productTable";
import SearchBar from "./searchBar";
import "../../index.css"
class FilterBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inStockOnly:false,
            filterText:''
        }
    }
    filterTextChange=(value)=>{
        this.setState({
            filterText:value
        })
    }
    stockCheck=(value)=>{
        this.setState({
            inStockOnly:value
        })
    }
    render(){
        return(
            <div>
                 <SearchBar 
                inStockOnly={this.state.inStockOnly} 
                filterText={this.state.filterText} 
                onStockCheck={this.stockCheck}
                onFilterTextChange={this.filterTextChange}/>
                <ProductTable 
                inStockOnly={this.state.inStockOnly} 
                filterText={this.state.filterText}/>
            </div>
        )
    }
}
export default FilterBox;