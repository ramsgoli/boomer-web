// webpack.config.js
var path = require('path')

module.exports = {
  entry: ['./src/js/index'], // file extension after index is optional for .js files
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js'
  }
}
