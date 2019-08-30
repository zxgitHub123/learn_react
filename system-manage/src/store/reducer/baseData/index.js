import {combineReducers} from "redux";
const defaultDept=[
    {
        id:1,
        dept_pid:-1,
        dept_name:'网络营销部',
        leader_member_name:'曹总',
        leader_member_id:5

    },
    {
        id:2,
        dept_pid:1,
        dept_name:'研发部',
        leader_member_name:'肖九',
        leader_member_id:8
    },
    {
        id:3,
        dept_pid:1,
        dept_name:'产品部',
        leader_member_name:'张七',
        leader_member_id:6
    },
    {
        id:4,
        dept_pid:3,
        dept_name:'销售部',
        leader_member_name:'张三',
        leader_member_id:1
    },
    {
        id:5,
        dept_pid:2,
        dept_name:'web前端',
        leader_member_name:'',
        leader_member_id:''
    }
]
const defaultStaff=[
    {
        id:1,
        letter:'z',
        work_num:1,
        member_name:'张三',
        dept_id:5
    },
    {
        id:2,
        work_num:2,
        letter:'L',
        member_name:'李四',
        dept_id:4
    },
    {
        id:5,
        work_num:5,
        letter:'C',
        member_name:'曹总',
        dept_id:1
    },
    {
        id:6,
        work_num:6,
        letter:'Z',
        member_name:'张七',
        dept_id:4
    },
    {
        id:8,
        work_num:8,
        letter:'X',
        member_name:'肖九',
        dept_id:2
    }
]
function dept(dept=defaultDept,action){
    switch(action.type){
        case 'get_dept':
            return action.param;
        default:
            return dept;
    }
}
function staff(staff=defaultStaff,action){
    switch (action.type){
        case 'get_member':
            return action.param;
        case 'add':
            return [...staff,{...action.param,id:new Date().toString()}];
        case 'edit':
            return staff.map(item=>{
                if(item.id===action.param.id){
                    return action.param;
                }else{
                    return item;
                }
            });
        case 'del_member':
            return staff.filter(item=>{
                return item.id!==action.param.id;
            })
        default:
            return staff;
    }
}
export default combineReducers({
    dept,
    staff
})