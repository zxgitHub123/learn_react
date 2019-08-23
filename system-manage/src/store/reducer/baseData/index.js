import {combineReducers} from "redux";
const defaultDept=[
    {
        dept_id:1,
        dept_pid:-1,
        dept_name:'网络营销部'

    },
    {
        dept_id:2,
        dept_pid:1,
        dept_name:'研发部'
    },
    {
        dept_id:3,
        dept_pid:1,
        dept_name:'产品部'
    }
    // {
    //     dept_id:4,
    //     dept_pid:3,
    //     dept_name:'销售部'
    // },
    // {
    //     dept_id:5,
    //     dept_pid:2,
    //     dept_name:'web前端'
    // }
]
const defaultStaff=[
    {
        id:1,
        member_id:1,
        letter:'Q',
        member_name:'秦玉琪',
        dept_id:4
    },
    {
        id:2,
        member_id:2,
        letter:'Z',
        member_name:'张玉洁',
        dept_id:4
    },
    {
        id:3,
        member_id:3,
        letter:'D',
        member_name:'董宇环',
        dept_id:5
    },
    {
        id:4,
        member_id:4,
        letter:'D',
        member_name:'杜江',
        dept_id:5
    }
]
function dept(dept=defaultDept,action){
    switch(action.type){
        case 'getDept':
            console.log(action.param)
            return action.param;
        default:
            return dept;
    }
}
function staff(staff=defaultStaff,action){
    switch (action.type){
        case 'add_member':
            return [...staff,{...action.param,id:new Date().toString()}];
        case 'edit_member':
            return staff.map(item=>{
                if(item.id===action.param.id){
                    return action.param;
                }else{
                    return item;
                }
            });
        case 'del_member':
            return staff.filter(item=>{
                return item.member_id!==action.param.member_id;
            })
        default:
            return staff;
    }
}
export default combineReducers({
    dept,
    staff
})