const router = require('koa-router')();
const DB = require('../config/mysqlDB');
router.prefix('/api');
module.exports={
  router,
  DB
}