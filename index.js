const path = require("path")

const fileApi={
  add:require('./add'),
  del:require('./del'),
  find:require('./find'),
  update:require('./update')
}

module.exports = fileApi