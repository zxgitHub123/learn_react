import React from "react";
import {Icon,Dropdown,Menu,Modal,message} from 'antd';
import {connect} from "react-redux";
import {updateDept} from "../../js/update";
class Dept extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showHandle:false,
            changeSpread:false
        }
    }
    getMenu=(id,dept_name)=>{
        return (
            <Menu onClick={({key})=>{this.action(key,id,dept_name)}}>
               <Menu.Item key="0">
                    新增子部门
               </Menu.Item>
               {
                   id>0?<Menu.Item key="1">
                       编辑部门
                   </Menu.Item>:null
               }
               {
                !this.checkCildren(id)?<Menu.Item key="2">删除部门</Menu.Item>:null
               }
            </Menu>)
    }
    checkCildren=(id)=>{
        return this.props.depts.find((dept)=>{return dept.dept_pid*1===id*1})
    }
    changeCaretState=(dept)=>{
        this.props.depts.some(item=>{
            if(item.id*1===dept.id*1){
                item.spread=!item.spread;
                return true;
            }else{
                return false;
            }
        })
        this.setState((prevState)=>{
            return {
                changeSpread:!prevState.changeSpread
            }
        })
    }
    action=(key,id,dept_name)=>{
        if(key*1===0){
            this.props.changeDept(id,'add');
        }else if(key*1===1){
            this.props.changeDept(id,'edit',dept_name);
        }else{
            this.props.changeDept(id,'del');
        }
    }
    render(){
        const props=this.props;
        return <div>
            {
                props.depts.map(dept=>{
                    if(dept.dept_pid*1===props.pid*1){
                        return <div key={dept.id} style={{paddingLeft:`${8*props.level}px`}}>
                            <span className="dept_name" onClick={(e)=>{e.stopPropagation();props.selectDept(dept.id)}}>
                                {this.checkCildren(dept.id)?<Icon style={{color:dept.id===props.selected_id?'#25c870':''}} className='arrow' type={dept.spread?'caret-down':'caret-right'} onClick={()=>{this.changeCaretState(dept)}}/>:null}
                                <span style={{color:dept.id===props.selected_id?'#25c870':''}}>{dept.dept_name}</span>
                                <Dropdown overlay={this.getMenu(dept.id,dept.dept_name)} trigger={['click']}>
                                    <Icon type="edit" className="ellipsis" style={{color:dept.id===props.selected_id?'#25c870':''}}/>
                                </Dropdown>
                            </span>
                            {dept.spread?<Dept selected_id={props.selected_id} pid={dept.id} selectDept={props.selectDept} changeDept={props.changeDept} depts={props.depts} level={props.level +1}/>:null}
                        </div>
                    }else{
                        return null;
                    }
                })
            }
        </div>
    }
}
class DeptTree extends React.Component{
    constructor(props){
        super(props);
        this.modelType='';
        this.param='';
        this.state={
            depts:[],
            addDeptModal:false,
            dept_name:''
        }
    }
    changeDept=(id,type,dept_name='')=>{
        this.modelType=type;
        this.param={
            add:{
                url:'/api/dept/add',
                params:{
                    id:id
                },
                info:{
                    error:'部门添加失败',
                    success:'部门添加成功'
                },
                title:'新增子部门'
            },
            edit:{
                url:'/api/dept/edit',
                params:{
                    id:id
                },
                info:{
                    error:'部门编辑失败',
                    success:'部门编辑成功'
                },
                title:'编辑部门'
            },
            del:{
                url:'/api/dept/del',
                params:{
                    id:id
                },
                info:{
                    error:'部门删除失败',
                    success:'部门删除成功'
                },
                title:'删除部门'
            }
        }[type]
        this.setState({
            addDeptModal:true,
            dept_name:dept_name
        })
    }
    changeDeptName=(event)=>{
        const value=event.target.value;
        this.setState({
            dept_name:value
        })
    }
    closeModal=()=>{
        this.setState({
            addDeptModal:false
        })
    }
    verifyForm(dept_name){
        if(!dept_name){
            message.warning('请输入部门名称');
            return false;
        }else{
            return true;
        }
    }
    submit=()=>{
        if(this.modelType!=='del' && !this.verifyForm(this.state.dept_name.replace(/^\s+|\s+$/g,''))) return false;
        fetch(this.param.url,{body: JSON.stringify({...this.param.params,dept_name:this.state.dept_name.replace(/^\s+|\s+$/g,'')}),method:'POST'})
        .then((res)=>{
            const resData=res || {}
            if(resData.status===200){
                this.closeModal();
                updateDept();
            }else{
                message.error(resData.statusText);
            }
        })
    }
    render(){
        return <div className="m-deprTree">
            <div className="name">部门管理</div>
            <Dept pid={-1} level={1} changeDept={this.changeDept} selected_id={this.props.selected_id} selectDept={this.props.selectDept} depts={this.props.depts}/>
            {
                this.state.addDeptModal?<Modal visible={true} title={this.param.title} onOk={this.submit} onCancel={this.closeModal}>
                    {this.modelType!=='del'?<table>
                        <tbody>
                            <tr>
                                <td className="in-h">
                                    部门名称
                                    <span className="in-star"></span>
                                </td>
                                <td>
                                    <input type="text" value={this.state.dept_name} onChange={(e)=>{this.changeDeptName(e)}}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>:<p>部门中的职员也会被删除，确定删除该部门？</p>}
                </Modal>:null
            }
           
        </div>
    }
}
export default connect((state)=>{
    return {
        depts: (function(depts){
            return depts.map(dept=>{
                return {...dept,key:dept._id}
            })
        })(state.baseData.dept)
    }
})(DeptTree);