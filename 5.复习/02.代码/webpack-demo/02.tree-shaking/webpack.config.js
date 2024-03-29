const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*
    问题一:webpack认识什么文件
        js,json
    问题二:webpack内部五大属性
        1.入口entry
        2.出口output
        3.module(配置文件解析规则以及loader)
        4.plugins(插件)
        5.mode(模式)
    问题三:loader和plugin的区别
        loader的用处:用于解析文件
            webpack只认识js代码,他有很多无法识别的代码,例如less
            less代码需要用less包解析,但是webpack没办法直接调用less包,所以需要一个中间者less-loader
        plugin的用处:扩展一些全新的功能
            例如:Html-webpack-plugin插件->会自动引入打包完的JS到页面中
*/
module.exports={
    entry:"./src/main.js",
    output:{
        filename:"[name].js",
        path:resolve(__dirname,"./build")
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
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        })
    ],
    devServer:{
        proxy:{
            "/api":{
                target:"http://www.baidu.com",
                changeOrigin:true,
                ws:true,
                pathRewrite:{
                    "^/api":""
                }
            }
        }
    },
    resolve:{
        alias:{
            "@":resolve(__dirname,"./src")
        },
        extensions:[".js",".jsx",".vue",".json",".ts",".tsx",".less"]
    },
    mode:"production"
}