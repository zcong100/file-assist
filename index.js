const Add = require('./add')
const Del = require('./del')
const Find = require('./find')
const Update = require('./update')

console.log(Add)
const fileApi={
  add:{
    file:async function(fileName){
      await Add.file(fileName)
    },
    folder:async function(fileName){
      await Add.folder(fileName)
    },
    write:async function(fileName,con){
      await Add.writer(fileName,con)
    }
  },
  del:{
    folderAll:async function(fileName){await Del.folderAll(fileName)},
    file:async function(fileName){ await Del.file(fileName)}
  },
  find:{
    find:async function(path){ await Find.file(path)}
  },
  update:{
    update:async function(nowName,newName){ await Update.folder(nowName,newName)}
  }
}

module.exports = fileApi