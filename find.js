const fs = require("fs")

module.exports = {
  find(path){
    return new Promise((resolve, reject) => {
      fs.stat(path,(err,res)=>{
        if(res == undefined){
          reject()
        }else{
          resolve()
        }
      })
    })
  },

  file(path){
    return this.find(path)
  },
  folder(path){
    return this.find(path)
  }
}