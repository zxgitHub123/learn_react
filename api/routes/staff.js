const {router,DB}=require("./common")
router.get('/staff/list', async (ctx, next)=>{
  let result=await DB.query(`select * from staff`);
  // ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000'); //配置跨域资源共享
  // ctx.set('Access-Control-Allow-Credentials', 'true');
  ctx.body=result;
})
router.post('/staff/edit', async (ctx, next)=>{
  // post方式接收参数
  let param=JSON.parse(ctx.request.body);
  let result=await DB.query(`update staff set dept_id="${param.dept_id}",work_num="${param.work_num}",member_name="${param.member_name}" where id=${param.id}`);
  ctx.body=result;
})
router.post('/staff/add', async (ctx, next)=>{
  // post方式接收参数
  let param=JSON.parse(ctx.request.body);
  let result=await DB.query(`insert into staff (member_name,work_num,dept_id) values ('${param.member_name}','${param.work_num}','${param.dept_id}')`);
  ctx.body=result;
})
router.post('/staff/del', async (ctx, next)=>{
  // post方式接收参数
  let param=JSON.parse(ctx.request.body);
  let result=await DB.query(`delete from staff where id=${param.id}`);
  ctx.body=result;
})
module.exports = router
