import store from "../store/index";
export const updateDept=()=>{
    const dispatch=store.dispatch;
    fetch("/api/dept/list",{method:'GET'}).then(res=>{
        if(res.status===200){
            res.text().then(result=>{
                dispatch({
                    type:'get_dept',
                    param:JSON.parse(result)
                })
            })
        }
    })
}
export const updateStaff=()=>{
    const dispatch=store.dispatch;
    fetch("/api/staff/list",{method:'GET'}).then(res=>{
        if(res.status===200){
            res.text().then(result=>{
                dispatch({
                    type:'get_member',
                    param:JSON.parse(result)
                })
            })
        }
    })
}