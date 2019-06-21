import React from "react";
function ProductCategoryRow(props){
    return(
        <tr colSpan="2"><th>{props.category}</th></tr>
    )
}
export default ProductCategoryRow;