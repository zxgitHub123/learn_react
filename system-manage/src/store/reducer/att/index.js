import {combineReducers} from 'redux';
const initGroup=[
    {
        id:1,
        group_name:'默认分组11',
        att_type:1,
        att_class:2,
        is_flex:0,
        ex_time:0,
        last_time:0,
        members:[{member_id:1,member_name:'秦玉琪'}],
        is_default:0
    }
]
const initClass=[
    {
        id:1,
        type:'考勤默认班次9:00-18:00'
    },
    {
        id:2,
        type:'休息'
    }
]
function att_group(group=initGroup,action){
    switch(action.type){
        case 'edit_att_group':
            if(!action.param.is_flex){
                action.param.ex_time=0;
                action.param.last_time=0;
            }
            return group.map(item=>{
                if(item.id===action.param.id){
                    return action.param
                }else{
                    return item;
                }
            })
        case 'add_att_group':
            if(!action.param.is_flex){
                action.param.ex_time=0;
                action.param.last_time=0;
            }
            return [...group,{...action.param,id:new Date().getTime()}];
        case "del_att_group":
            return group.filter(item=>{
                return item.id!==action.param.id
            })
        default:
            return group;
    }
}
function att_class(attClass=initClass,action){
    switch(action.type){
        default:
            return attClass;
    }
}
export default combineReducers({
    att_class,
    att_group
});