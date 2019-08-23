import ApiUrl from "./common";
export const getStaffData=(param)=>{
    return new Promise((resolve,reject)=>{
        fetch(`${ApiUrl.staffList}?id=${param}`).then((res)=>{
                res.json().then((res)=>{
                resolve(res);
            })
        })
    })
  
}