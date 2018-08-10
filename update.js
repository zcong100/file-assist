const fs = require("fs")

module.exports = {

  updateName(nowName,newName){
    return new Promise((resolve, reject) => {
      fs.rename(nowName,newName,()=>{
        console.log("修改成功");
        resolve();
      })
    })
  },
  // 修改单文件名
  file(nowName,newName){
    return this.updateName(nowName,newName)
  },

//  修改文件夹名字
  async folder(nowName,newName){
    return this.updateName(nowName,newName)
  }


}