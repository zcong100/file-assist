# file-assist
    nodejs 对文件或文件夹的增、删、改、查、操作通过异步处理，并都返回promise对象
    递归查找指定路径下全部文件
    源码地址：https://github.com/zcong100/file-assist.git

### 开发环境
    node v10.7.0
    windows 7 64位

### 使用说明
    代码采用es6+ 语法写成

```javascript
    npm install file-assist

    const path = require("path")
    const fsApi = require('file-assist')
    const schoolPath = path.join(__dirname,"school");

    // fsApi.add/update/del/find .具体函数直接看源码
    async function createSch() {
      await fsApi.add.folder("school")
      await fsApi.add.file(`${schoolPath}/student.js`);
      await fsApi.add.file(`${schoolPath}/teach.js`);
      await fsApi.update.file(`${schoolPath}/teach.js`,`${schoolPath}/teacher.js`)

      // find.folder()/file() 函数返回为 promise 对象
      fileApi.find.folder("school").then(res=>{
         console.log(1)
       },rej=>{
         console.log(2)
       })
    }

    createSch();
```






