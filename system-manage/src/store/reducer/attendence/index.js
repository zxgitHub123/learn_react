import {combineReducers} from "redux";
const initStaff=[
    {
        member_id:1,
        member_name:'Zc',
        phone:'18201266134',
        leader:false,
        letter:'Z',
        position:'前端开发人员',
        like:0,
        dpart_name:'web'
    },
    {
        member_id:2,
        member_name:'Wxc',
        phone:'18201266124',
        leader:false,
        letter:'W',
        position:'PHP开发人员',
        like:0,
        dpart_name:'web'
    },
    {
        member_id:3,
        member_name:'Xx',
        phone:'18201266135',
        leader:true,
        letter:'X',
        position:'运维开发人员',
        like:0,
        dpart_name:'web'
    }
]
const initCommon=[];
const initExter=[
    {
        member_id:8,
        member_name:'连连',
        like:0,
        phone:['18201266166']
    }
]
function staff(staff=initStaff,action){
    switch(action.type){
        case 'changeLike':
            return staff.map(item=>{
                if(item.member_id===action.member_id){
                    item.like=action.flag
                }
                return item;
            });
        default:
            return staff;
    }
}
function common(common=initCommon,action){
    switch(action.type){
        case 'delCommon':
            return common.filter(item=>{
                return item.member_id !==action.member.member_id
            });
        case 'addCommon':
            return [...common,Object.assign({},action.member,{like:1})];
    
        default:
            return common;
    }
}
function external(external=initExter,action){
    switch(action.type){
        case 'editExternal':
            return external.map(item=>{
                if(item.member_id===action.param.member_id){
                    item={...item,...action.param}
                }
                return item;
            });
        case 'addExternal':
            external.push({...action.param,...{member_id:new Date().getTime()}});
            return external;
        case 'delExternal':
            return external.filter(item=>{
                return item.member_id!==action.param;
            })
        default:
            return external;
    }
}
function curMember(curMember,action){
    switch(action.type){
        case 'changeCur':
            return {...curMember,...action.param};
        default:
            return{
                member_id:1,
                member_name:'哈哈',
                phone:'123456'
            }
    }
}
export default combineReducers({
    staff,
    common,
    external,
    curMember
})