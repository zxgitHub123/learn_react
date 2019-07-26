import React from "react";
import { Input } from "antd";
const { Search } = Input;
class SearchName extends React.Component{
    render(){
        return  <Search
        className="g-search f-di"
        placeholder={this.props.placeholder}
        onSearch={this.props.search}
        style={this.props.style && this.props.style}
      />
    }
}
SearchName.defaultProps={
    placeholder:'请输入姓名'
}
export default SearchName;