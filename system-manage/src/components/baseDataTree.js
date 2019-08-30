import React from "react";
import {connect} from "react-redux";
import HeardImg from "./heartImg";
class Person extends React.Component{
    render(){
        const {data,type}=this.props;
        return (
           <li>
               <input type="checkbox" checked={this.props.checked(data.id)} onChange={()=>{this.props.changeChecked(data)}}/>
               {type!=='dept'?<HeardImg {...data} style={{width:'30px',height:'30px'}}/>:null}
               <span>{type!=='dept'?data.member_name:data.dept_name}</span>
           </li>
        )
    }
}
class DataTree extends React.Component{
    verifyChecked=(id)=>{
        var boolean=this.props.selectedData.some(item=>item.id===id);
        return boolean;
    }
    checkedDept=(id)=>{
        return id===this.props.selectedData;
    }
    changeChecked=(data)=>{
        const len=this.props.selectedData.length;
        let index=-1;
        for(let i=0;i<len;i++){
            if(data.id===this.props.selectedData[i].id){
                index=i;
                break;
            }
        }
        if(index>-1){
            var newData=[...this.props.selectedData]
            newData.splice(index,1);
            this.props.changeSelectData(newData);
        }else{
            this.props.changeSelectData([...this.props.selectedData,data]);
        }
    }
    changeDept=(data)=>{
        this.props.changeSelectData(data);
    }
    render(){
        return (
            <div>
               {this.props.type==='dept'?
               <ul>
                    {this.props.dept.map((item,index)=>{
                       return <Person changeChecked={this.changeChecked} data={item} type={this.props.type} key={index} checked={this.verifyChecked}/>
                    })}
               </ul>
                :null   
            }
             {this.props.type==='staff'?
               <ul>
                    {this.props.staff.map((item,index)=>{
                       return <Person data={item} type={this.props.type} key={item.id} checked={this.verifyChecked} changeChecked={this.changeChecked}/>
                    })}
               </ul>
                :null   
            }
            </div>
        )
    }
} 
function getStaffList(state,keyword,letter){
    console.log(state);
    return state.filter(item=>{
        if(!keyword && !letter) return true;
        else if(letter && !keyword) return [item.member_name,item.letter].join(',').indexOf(letter) >= 0;
        else if(!letter && keyword) return [item.member_name,item.letter].join(',').indexOf(keyword) >= 0;
        else return [item.member_name,item.letter].join(',').indexOf(keyword) >= 0 && [item.member_name,item.letter].join(',').indexOf(letter) >= 0
    })
}
function getDeptList(state,keyword,letter){
    return state.filter(item=>{
        if(!keyword && !letter) return true;
        else if(letter && !keyword) return [item.dept_name,item.letter].join(',').indexOf(letter) >= 0;
        else if(!letter && keyword) return [item.dept_name,item.letter].join(',').indexOf(keyword) >= 0;
        else return [item.dept_name,item.letter].join(',').indexOf(keyword) >= 0 && [item.dept_name,item.letter].join(',').indexOf(letter) >= 0
    })
}
export default connect((state,ownProps)=>{
    return {
        staff:getStaffList(state.baseData.staff,ownProps.keyword,ownProps.letter),
        dept:getDeptList(state.baseData.dept,ownProps.keyword,ownProps.letter)
    } 
})(DataTree);