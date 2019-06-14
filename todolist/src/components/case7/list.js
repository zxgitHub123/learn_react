import React from "react";
import Item from "./item";
function List(){
    const numbers=[1,2,3,4,5];
    return (
        <div>
            <Item numbers={numbers}/>
        </div>
    )
}
export default List;