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
  getAllHero,getHeroById,writeFile,changedata,
};
// 获取数据库的所有英雄信息
function getAllHero(callback){
  // 获取数据库的代码段
  let sql=`SELECT * FROM heros`
  conmo.query(sql,(err,result)=>{
    if (err)console.log(err);
    callback(result)
  })
}
function changedata(arr){
  let sql=`UPDATE heros SET \`name\`= '${arr.name}' ,gender='${arr.gender}',img='${arr.img}' WHERE id=${arr.id}`;
  conmo.query(sql,(err,result)=>{
    if (err)console.log(err);
  })
}


function getHeroById(id,callback){
  this.getAllHero((arr)=>{
    let target = arr.find(e=>{
      return e.id == id;
    });
    callback(target);
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
