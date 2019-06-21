import React from "react";
import ProductRow from "./productRow";
import ProductCategoryRow from "./productCategoryRow";
function ProductTable(props){
    const {filterText,inStockOnly}=props;
    let productList=[
        {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
        {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'}
      ];
    let rows=[];
    let newProductList={}
    productList.map(item=>{
        if(item.name.indexOf(filterText) === -1 || (!item.stocked && inStockOnly)) {
            return;
        }
        if(!newProductList[item.category]){
            newProductList[item.category]=item;
            newProductList[item.category]=Array.of(newProductList[item.category]);
        }else{
            newProductList[item.category].push(item);
        }
    })
    for (let [key, value] of Object.entries(newProductList)) {
        rows.push(<ProductCategoryRow category={key} key={key} />);
        value.map(item=>{
            rows.push(<ProductRow product={item} key={item.name} />);
        })
    }
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}
export default ProductTable;