const {router,DB}=require("./common")
router.get('/staff', async (ctx, next)=>{
  console.log(123);
  console.log(ctx.request.querystring);
  let result=await DB.query(`select * from staff where ${ctx.request.querystring}`);
  // ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000'); //配置跨域资源共享
  // ctx.set('Access-Control-Allow-Credentials', 'true');
  ctx.body=result;
})
module.exports = router
