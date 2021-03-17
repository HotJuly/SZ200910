const {resolve} = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/*
    缓存(cache):分为两种
        1.强缓存(太过于绝对,除非超时或者文件名称发生变化,或者用户手动清除,不然一直使用旧文件)
            响应头中会有maxAge(最大过期时间)
        2.协商缓存
            响应头中会有e-tag和last-modifined

    webpack打包方案:
        1.hash值(hash是每次构建项目的唯一标识)
            会导致一个文件发生变化,所有文件重新生成(缺点:明明有的文件内容没有发生变化,还被重新打包)
        
        2.chunkhash(chunkhash是每个入口文件和他之后的依赖文件打包的标识)
            一个入口内任意文件发生变化,该文件链中,所有的文件都会重新编译

        3.contenthash(contenthash是每个文件自己打包的标识)
            某个依赖文件发生变化,会导致引入他的文件也重新打包(由于依赖文件名称发生变化,contenthash也发生变化)
            解决:使用contenthash配合runtimeChunk
*/

module.exports={
    entry:"./src/main.js",
    output:{
        filename:"[name].[contenthash].js",
        path:resolve(__dirname,'./server/build')
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:"./public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
          })
    ],
    mode:"development",
    resolve:{
        alias:{
            "@":resolve(__dirname,'./src')
        },
        extensions:[".vue",'.js','.jsx','.json','.less']
    }
}