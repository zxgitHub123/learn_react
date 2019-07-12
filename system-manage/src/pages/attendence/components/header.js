import React from "react";
import SearchName from "./search.js";
import FilterLetter from "./filter-letter.js";
class Header extends React.Component{
    render(){
        return(
            <div className="g-header">
                <SearchName placeholder={this.props.placeholder} search={this.props.search}></SearchName>
                <FilterLetter style={{marginLeft:'20px'}} letter={this.props.letter} selectLetter={this.props.selectLetter}></FilterLetter>
                {this.props.addContact?this.props.addContact:null}
            </div>
        )
    }
}
export default Header;