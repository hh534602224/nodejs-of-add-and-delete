const model = require('./04-model');
// 获取主页面
function getIndex(req,res){
  model.getAllHero((arr)=>{
    res.render('index',{arr});
  })
}

// 打开修改页面
function getedit(req,res){
  res.render('edit');
}
// 修改英雄的页面
function byiddata(req,res){
  let id =req.query.id;
  model.getAllHero(function(arr){
        arr.forEach( e=>{
          if (e.id==id){
            res.send(e)
          }
        });
      })
}
// 修改页面修改英雄完成
function changeherouser(req,res){
      let data=req.body;
      model.changedata(data)
      res.send({code:200,msg:'修改成功'})
}
// 添加英雄页面
function add (req,res){
  res.render('add');
  }


// 英雄列表删除英雄信息
function delherouser(req,res){
  // 接收id数据
  let id = req.query.id;
  // console.log(id);
// 删除数据库的数据
   model.delherouser(id,(hh)=>{
    //  判断数据库返回的数据
    if(hh.affectedRows===1){
      res.send({code:200,msg:'删除成功'})
    }else{
      res.send({code:404,msg:'删除失败，请联系管理员'})
    }
   })

}
// 添加英雄
function addherouser(req,res){
  // 接收数据
  let data=req.body
  //  写进去数据库
   model.writeFile(data);
   res.send({code:200,msg:'添加成功'})
}

const controller = {
  getIndex,getedit,byiddata,changeherouser,delherouser,addherouser,add
}

module.exports = controller;