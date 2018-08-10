const fs = require("fs")

module.exports = {

  // 删除指定文件夹，包含文件夹里面内容
  folderAll(path) {
    return new Promise((resolve, reject) => {
      if( fs.existsSync(path) ) {
        fs.readdirSync(path).forEach(function(file) {
          var curPath = path + "/" + file;
          if(fs.statSync(curPath).isDirectory()) { // recurse
            delFolder(curPath);
          } else { // delete file
            fs.unlinkSync(curPath);
            console.log(path+"删除成功")
            resolve();
          }
        });
        fs.rmdirSync(path);
      }
    })
  },

//  删除单文件
  file(fileName){
    return new Promise((resolve, reject) => {
      fs.unlink(fileName,(err)=>{
        console.log(`${fileName}删除成功`);
        resolve();
      })
    })
  }


}