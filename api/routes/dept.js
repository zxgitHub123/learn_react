const {router,DB}=require("./common");
router.get('/dept/list', async (ctx, next)=>{
  let result=await DB.query(`select * from dept`);
  ctx.body=result;
})
router.post('/dept/add', async (ctx, next)=>{
  let param=JSON.parse(ctx.request.body);
  console.log(param);
  let result=await DB.query(`insert into dept (dept_name,leader_member_name,leader_member_id,dept_pid) values ('${param.dept_name}','','','${param.id}')`);
  ctx.body=result;
})
router.post('/dept/edit', async (ctx, next)=>{
    // post方式接收参数
    let param=JSON.parse(ctx.request.body);
    let result=await DB.query(`update dept set dept_name="${param.dept_name}" where id=${param.id}`);
    ctx.body=result;
  })
router.post('/dept/editLeader', async (ctx, next)=>{
    // post方式接收参数
    let param=JSON.parse(ctx.request.body);
    let result=await DB.query(`update dept set leader_member_name="${param.member_name}",leader_member_id="${param.id}" where id=${param.dept_id}`);
    ctx.body=result;
})
router.post('/dept/del', async (ctx, next)=>{
    // post方式接收参数
    const delId=JSON.parse(ctx.request.body).id
    let result=await DB.query(`delete from dept where id=${delId}`);
    ctx.body=result;
})
module.exports = router