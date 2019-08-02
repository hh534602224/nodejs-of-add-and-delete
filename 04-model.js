const fs = require('fs');
const mysql=require('mysql')
// 请求数据库
let conmo=mysql.createConnection({
  post:3306,
  host:'127.0.0.1',
  user:'root',
  password:'root',
  database:'ajax35'
})

module.exports = {
  getAllHero,writeFile,changedata,delherouser,
};

// 获取数据库的所有英雄信息
function getAllHero(callback){
  // 获取数据库的代码段
  let sql=`SELECT * FROM heros WHERE isdelete=0`
  conmo.query(sql,(err,result)=>{
    if (err)console.log(err);
    callback(result)
  })
}
// 数据库删除（软删除）
function delherouser(id,callback){
let sql=`update heros set isdelete=1 where id=${id}`
conmo.query(sql,(err,result)=>{
if(err)console.log(err);
// 数据库操作结果返回给上一层
callback(result)
})
}   

// 数据库数据修改
function changedata(arr,callback){
  let sql=`UPDATE heros SET \`name\`= '${arr.name}' ,gender='${arr.gender}',img='${arr.img}' WHERE id=${arr.id}`;
  conmo.query(sql,(err,result)=>{
    if (err)console.log(err);
    callback(result)
  })
}
// 写入数据库
function writeFile(arr){
  let content = JSON.stringify(arr);
  let sql=`INSERT INTO heros SET \`name\`= '${content.name}' ,gender='${content.gender}',img='${content.img}'`
  conmo.query(sql,(err,result)=>{
    if(err)console.log(err);
  })
}
