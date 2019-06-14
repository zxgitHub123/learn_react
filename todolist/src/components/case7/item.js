import React from "react";
function Item(props){
    const numberList=props.numbers;
    const liList=numberList.map((item,index)=>
        <li key={index}>{item}</li>
    );
    // console.log(liList);
    return (
       <ul>
           {liList}
       </ul>
    )
}
export default Item;