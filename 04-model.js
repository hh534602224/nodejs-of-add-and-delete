const fs = require('fs');

module.exports = {
  getAllHero,getHeroById,writeFile,maxdataid
};

function getAllHero(callback){
  fs.readFile('./data/heros.json','utf-8',(err,data)=>{
    if(err) console.log(err);
    let arr = JSON.parse(data);
    callback(arr);
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

function writeFile(arr){
  let content = JSON.stringify(arr);
  fs.writeFile('./data/heros.json',content,'utf-8',err=>{
    if(err) {
      console.log(err);
    }
  })
}
// 最大id
function maxdataid (maxid) {
  this.getAllHero((arr)=>{
      let id = 0;
  // 遍历id
  arr.forEach(e => {
      if (e.id > id) {
          id = e.id
      }
  });
  maxid(id)
  })
}