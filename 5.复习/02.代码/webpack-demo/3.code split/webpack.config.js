const {resolve} = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

/*
    代码分割
        1.多入口文件
            场景:模块A和模块B同时依赖于模块C,如果不作任何处理,直接打包,模块C会被打包多份
            效果:将模块C单独分割出来,作为一个共享依赖
            实现:
                1.配置optimization.splitChunks.chunks="all",可以将多个入口文件的公共依赖单独打包为一个文件
                2.为了防止文件过小被忽略,需要配置optimization.splitChunks.minSize=文件大小
        2.单入口文件
            需要使用import函数,当webpack打包代码的时候,遇到import(),会将内部的文件单独拆分出来
                默认拆分文件的文件名是按序号命名,自定义命名方法:详情参考main.js

*/

module.exports={
    // entry:"./src/main.js",
    entry:{
        main:"./src/main.js"
        // home:"./src/home.js"
    },
    output:{
        filename:"[name].js",
        path:resolve(__dirname,'./build')
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:"./public/index.html"
        })
    ],
    mode:"development",
    resolve:{
        alias:{
            "@":resolve(__dirname,'./src')
        },
        extensions:[".vue",'.js','.jsx','.json','.less']
    },
    optimization:{
        splitChunks:{
            chunks:"all",
            minSize:1
        }
    }
}