import {combineReducers} from "redux";
const initType=[
	{
		id:1,
		type:'年假',
		status:1,
		max_time:0,
		period:1,
		default:0,
		attachment:0,
	},
	{
		id:2,
		type:'调休',
		status:1,
		max_time:0,
		period:1,
		default:0,
		attachment:0,
	},
	{
		id:3,
		type:'奖励假',
		status:1,
		max_time:0,
		period:1,
		default:1,
		attachment:0,
	},
	{
		id:4,
		type:'test',
		status:1,
		max_time:0,
		period:1,
		default:1,
		attachment:0,
	}
]
const initDayoff=[
	{
		id:1,
		member_name:'哈哈',
		department_name:'web前端',
		work_num:12,
		remove_time:12
	},
	{
		id:2,
		member_name:'呵呵',
		department_name:'php开发',
		work_num:14,
		remove_time:12
	}
]
const initDayOffRule={
	type:1
}
const initAward=[
	{
		id:1,
		name:'11',
		department_name:'文案',
		work_num:'12',
		total_day:12,
		remove_day:2,
	},
	{
		id:2,
		name:'22',
		department_name:'教务',
		work_num:'13',
		total_day:12,
		remove_day:1
	},
	{
		id:3,
		name:'33',
		department_name:'吃干饭',
		work_num:'14',
		total_day:22,
		remove_day:10
	}
]
const initAnnual=[
	{
		id:1,
		name:'xz',
		department_name:'wjjw',
		work_num:5,
		total_day:10,
		remove_day:10
	},
	{
		id:2,
		name:'wyb',
		department_name:'yh',
		work_num:6,
		total_day:10,
		remove_day:5
	},
	{
		id:3,
		name:'hjh',
		department_name:'gr',
		work_num:7,
		total_day:10,
		remove_day:7
	}
]
const initAnnualRule={
	type:1,
	rules:[]
}
function type(type=initType,action){
	switch(action.type){
		case 'add_type':
			return [...type,{...action.params,id:new Date().getTime(),status:1}];
		case 'edit_type':
			return type.map((item)=>{
				if(item.id===action.params.id){
					return action.params;
				}else{
					return item;
				}
			});
		case 'del_type':
			console.log(action.params);
			return type.filter((item)=>{
				return item.id!==action.params
			});
		case 'stop_type':
			console.log("停用类型");
			return type.map((item)=>{
				if(item.id===action.params){
					return Object.assign({},item,{status:0})
				}else{
					return item
				}
			});
		case 'start_type':
			console.log("启用类型");
			return type.map((item)=>{
				if(item.id===action.params){
					return Object.assign({},item,{status:1})
				}else{
					return item
				}
			});
		default:
			return type;
	}
}
function dayoff(dayoff=initDayoff,action){
	switch(action.type){
		case 'add_dayoff':
			return [...dayoff,{...action.params,id:new Date().getTime()}];
		case 'del_dayoff':
			return dayoff.filter((item)=>{
				return item.id!==action.params.id
			})
		case 'edit_dayoff':
			return dayoff.map((item)=>{
				if(item.id===action.params.id){
					return Object.assign(item,action.parsms);
				}else{
					return item;
				}
			})
		case "selectedAll_dayoff":
			return dayoff.map(item=>{
				return {...item,checked:action.params}
			})
		case "selectedOne_dayoff":
			return dayoff.map((item)=>{
				if(item.id===action.params.id){
					return {...item,checked:action.params.checked};
				}else{
					return item;
				}
			})
		case "batchDel_dayoff":
			return dayoff.filter((item)=>{
				return !item.checked
			})
		default:
			return dayoff;
	}
}
function dayoffRule(rule=initDayOffRule,action){
	switch(action.type){
		case 'editDayoffRule':
			return action.params;
		default:
			return rule;
	}
}
function award(award=initAward,action){
	switch(action.type){
		case 'add_award':
			return [...award,{...action.params,id:new Date().getTime()}];
		case "edit_award":
			return award.map(item=>{
				if(item.id===action.params.id){
					return Object.assign(item,action.params);
				}else{
					return item;
				}
			});
		case 'del_award':
			return award.filter(item=>{
				return item.id!==action.params.id
			});
		case 'batchDel_award':
			return award.filter(item=>{
				return !item.checked;
			})
		case 'selectedAll_award':
			return award.map(item=>{
				return {...item,checked:action.params}
			});
		case 'selectedOne_award':
				return award.map(item=>{
					if(item.id===action.params.id){
						return {...item,checked:action.params.checked}
					}else{
						return item;
					}
				});
		default:
			return award;
	}
}
function annual(annual=initAnnual,action){
	switch(action.type){
		case 'add_annual':
			return [...annual,{...action.params,id:new Date().getTime()}];
		case 'del_annual':
			return annual.filter(item=>{
				return item.id!==action.params.id
			});
		case 'edit_annual':
			return annual.map(item=>{
				if(item.id===action.params.id){
					return {...item,...action.params}
				}else{
					return item
				}
			});
		default:
			return annual;
	}
}
function annualRule(rule=initAnnualRule,action){
	switch(action.type){
		case 'edit_annualRule':
			return {
				type:action.params.type,
				rules:action.params.rules
			}
		default:
			return rule;
	}
}
export default combineReducers({
	type,
	dayoff,
	dayoffRule,
	award,
	annual,
	annualRule
})