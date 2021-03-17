const express = require('express');
const {resolve} = require('path');

const app = express();

app.use(express.static(
    resolve(__dirname,"./build"),
    {
        maxAge:3600000
    }
    )
)


app.listen(6500,function(error){
    if(error)return;
    console.log('服务器启动成功')
})