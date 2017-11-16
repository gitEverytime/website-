var arr = require('../src/router.js')
var fullpath = ''
var htmlconfig = arr.map(function (value) {
  // fullpath = (value.path ? (value.path + '/') : '') + value.name
  return {
    filename: '' + value.name + '.html',
    template: 'src/pages/' + value.name + '.html',
    chunks: ['vendor', value.name],
    inject: true
  }
})
module.exports = htmlconfig
