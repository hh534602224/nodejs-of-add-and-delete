const express = require('express');
const router = express.Router();
const controller = require('./03-controller');

router.get('/index',(req,res)=>{
  controller.getIndex(req,res);
})

// 约定以  /edit  返回编辑页面
router.get('/edit',(req,res)=>{
  controller.getedit(req,res)
})
// ajax请求原数据页面加载
router.get('/byiddata',(req,res)=>{
  controller.byiddata(req,res)

})
// 修改英雄信息
router.post('/changeherouser',(req,res)=>{
controller.changeherouser(req,res)
})
// 删除英雄
router.get('/delherouser', (req, res) => {
  controller.delherouser(req, res);
})
// 添加英雄页面
router.get('/add',(req,res)=>{
controller.add(req,res)
})
// 添加英雄
router.post('/addherouser',(req,res)=>{
controller.addherouser(req,res)


})

module.exports = router;