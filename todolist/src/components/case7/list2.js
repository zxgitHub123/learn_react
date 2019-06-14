import React from "react";
import ListItem from "./listItem";
class List2 extends React.Component{
    // render(){
    //     const numbers=[1,2,3,4,5];
    //     const liList=numbers.map((item,index)=>{
    //         return <ListItem key={index} value={item}/>
    //     })
    //     return (
    //         <ul>
    //             {liList}
    //         </ul>
    //     )
    // }
    render(){
        const numbers=[1,2,3,4,5];
        return (
            <ul>
                {
                    numbers.map((item,index)=>{
                        return <ListItem key={index} value={item}/>
                    })
                }
            </ul>
        )
    }
}
export default List2;