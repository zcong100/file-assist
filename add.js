const fs = require("fs")


module.exports = {

  // 在当前调用的路径下面创建文件夹

  folder(packFileName){
    return new Promise((resolve , reject) => {
      fs.mkdir(packFileName,res=>{
        console.log(`${packFileName}文件夹创建`);
        resolve();
      })
    })
  },

//   创建单文件
  file(fileName){
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName,'',(err)=>{
        if (err) throw reject;
        console.log(fileName+"创建成功");
        resolve()
      });
    })
  },

//  写入文件内容
  writer(fileName,con){
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName,con,(err)=>{
        if (err) throw reject;
        console.log(fileName+"写入成功");
        resolve();
      });
    })
  }

}
