import {combineRedccers} from "redux";
const initType=[
	{
		id:1,
		type:'年假',
		status：1,
		max_time:0,
		period:1,
		default:1,
		attachment:0,
	},
	{
		id:2,
		type:'调休',
		status：1,
		max_time:0,
		period:1,
		default:1,
		attachment:0,
	},
	{
		id:3,
		type:'奖励假',
		status：1,
		max_time:0,
		period:1,
		default:1,
		attachment:0,
	},
	{
		id:4,
		type:'test',
		status：1,
		max_time:0,
		period:1,
		default:1,
		attachment:0,
	}
]
function type(type=initType,action){
	switch(action.type){
		case 'add_type':
			return type;
		case 'edit_type':
			return type;
		case 'del_type':
			return type;
		case 'change_status':
			return type;
		default:
			return type;
	}
}
export default combineRedccers({
	type;
})