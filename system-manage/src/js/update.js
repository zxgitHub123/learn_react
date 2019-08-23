import store from "../store/index";
export const updateDept=()=>{
    const dispatch=store.dispatch;
    fetch("/api/dept/list",{method:'GET'}).then(res=>{
        if(res.status===200){
            res.text().then(result=>{
                dispatch({
                    type:'getDept',
                    param:JSON.parse(result)
                })
            })
        }
    })
}