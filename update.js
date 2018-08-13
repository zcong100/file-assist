const fs = require("fs")

function updateName(nowName,newName){
  return new Promise((resolve, reject) => {
    fs.rename(nowName,newName,()=>{
      console.log("修改成功");
      resolve();
    })
  })
}

module.exports = {

  // 修改单文件名
  file(nowName,newName){
    return updateName(nowName,newName)
  },

//  修改文件夹名字
  async folder(nowName,newName){
    return updateName(nowName,newName)
  }

}