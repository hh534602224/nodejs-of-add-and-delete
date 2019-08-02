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
// 修改页面修改英雄信息接口
function changeherouser(req,res){
      let data=req.body;
      model.changedata(data)
      res.send({code:200,msg:'修改成功'})

}
// 英雄列表删除英雄信息
function delherouser(req,res){
  // 接收id数据
  let id = req.query.id;
  // console.log(id);
  // data=读取数据库的数据
  model.getAllHero((hh) => {
      // 根据id对读取的data的id遍历，当id相同slipe
      hh.forEach((e, i) => {
          if (e.id == id) {
              // 第i个开始删除一个数
              hh.splice(i, 1);
          }
      });
      // 把删除后的数据写入数据库
      model.writeFile(hh)
      // 返回删除成功的信息
      res.send({ code: 200, msg: '删除成功' })
  });
}
// 添加英雄页面
function add (req,res){
res.render('add');
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