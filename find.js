const fs = require("fs")

function find(path){
  return new Promise((resolve, reject) => {
    fs.stat(path,(err,res)=>{
      if(res == undefined){
        reject()
      }else{
        resolve()
      }
    })
  })
}

module.exports = {


  file(path){
    return find(path)
  },
  folder(path){
    return find(path)
  }
}