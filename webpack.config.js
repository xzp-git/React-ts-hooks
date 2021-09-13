const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
    historyApiFallback:{ //因为我们可能会使用浏览器路由，刷新的时候需要重定向到根文件
      index:'./index.html'
    },
    open: true,
  },
  resolve:{
    alias:{//配置解析的别名，方便我们编写引入的路径
      '@':path.resolve(__dirname,'src'),
      '~':path.resolve(__dirname,'node_modules')
    },
    //查找模块时的扩展名
    extensions:['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module:{
    rules:[
      {
        test:/\.(j|t)sx?$/,
        loader:'babel-loader',//ts-loader 性能比较差
        options:{
          presets:[
            "@babel/preset-env",//解析es+
            "@babel/preset-react",//解析React JSX 语法
            "@babel/preset-typescript"//解析typescript
          ],
          plugins:[ //babel-plugin-import 可以实现按需加载的babel插件
            ['import', {libraryName:'antd', style:'css'}]
          ]
        },
        include:path.resolve('src'),
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        use:[
          isProduction? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader:'css-loader'
          }
        ]
      },
      {
        test:/\.less$/,
        use:[
          isProduction? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader:'css-loader',
            options:{importLoaders:3} //处理import 和 url import的文件在导入之前需要经过几个文件处理
          },
          {
            loader:'postcss-loader',//假如厂商的兼容性前缀
            options:{
              postcssOptions:{
                plugins:['autoprefixer']
              }
            }
          },
          {
            loader:'px2rem-loader', //可以把px单位变成rem单位
            options:{
              remUnit:75, // 1rem 对应的是75px
              remPrecesion:8 //计算后的小数精度
            }
          },
          "less-loader" //把less编译成css
        ]
      },
      {
        test:/\.(jpg|png|gif|gif|svg|jpeg)/,
        type:'asset' //以前url-loader 或者 file-loader 现在不需要
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./public/index.html'
    })
  ]
}