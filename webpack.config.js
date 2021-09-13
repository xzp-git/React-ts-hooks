const webpack = require('webpack')
const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  mode:isProduction ? 'production' : 'development',
  entry:'./src/index.tsx',
  output:{
    path:path.join(__dirname, 'dist'),//打包后的输出目录
    filename:'main.js'//打包后的JS文件名
  },
  devtool:isProduction ? 'source-map' : false, //生成单独的完整的source-map文件
  devServer:{
    port:8000,//开发服务器的端口号
    hot:true, //启动热更新
    contentBase:path.join(__dirname, 'public'),//静态文件根目录
  }
}