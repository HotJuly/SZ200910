const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*
    功能:tree-shaking
    目的:去除多余的无用代码
    实现:
        
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
    resolve:{
        alias:{
            "@":resolve(__dirname,"./src")
        },
        extensions:[".js",".jsx",".vue",".json",".ts",".tsx",".less"]
    },
    mode:"development"
}