const {router,DB}=require("./common");
router.get('/dept/list', async (ctx, next)=>{
  let result=await DB.query(`select * from dept`);
  ctx.body=result;
})
router.get('/dept/add', async (ctx, next)=>{
  console.log(ctx.request.querystring);
  let result=await DB.query(`select * from dept where ${ctx.request.querystring}`);
  ctx.body=result;
})
router.get('/dept/edit', async (ctx, next)=>{
    // get方式接收参数
    console.log(ctx.request.querystring);
    // let result=await DB.query(`select * from staff where ${ctx.request.querystring}`);
    ctx.body='123';
  })
router.post('/dept/del', async (ctx, next)=>{
    // post方式接收参数
    const delId=JSON.parse(ctx.request.body).dept_id
    let result=await DB.query(`delete from dept where id=${delId}`);
    ctx.body=result;
})
module.exports = router