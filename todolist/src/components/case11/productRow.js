import React from "react";
function ProductRow(props){
    let name=props.product.stocked ? 
    props.product.name :
    <span className="redText">{props.product.name }</span>
    return(
        <tr>
            <td>{name}</td>
            <td>{props.product.price}</td>
        </tr>
    )
}
export default ProductRow;