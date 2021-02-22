const express =require('express');
const cors =require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/user',{},function(err){
    console.log('连接数据库成功')
});

const usersScheam = new mongoose.Schema({
    username:String,
    password:String
})

const usersModel = mongoose.model("users",usersScheam);

// userModel.create([
//     {username:"admin1",password:"123456"},
//     {username:"admin2",password:"654321"}
// ]).then((res)=>console.log(res))

const app = express();


app.use(express.json())
    .use(express.urlencoded())
    .use(cors())


app.post('/register',async function(req,res){
    let {username,password} = req.body;
    // console.log(username,password)
    console.log('/register post success');
    //后端表单验证
    //用户名必须大于等于6位
    const reg = new RegExp(/[a-zA-Z0-9]{6}/);
    const result = reg.test(username);
    // console.log(result)
    if(result){
        //1.查询是否已存在该用户名
        let findResult = await usersModel.findOne({username})
        if(findResult){
            res.send('该用户名已存在')
        }else{
            let createResult = await usersModel.create({username,password})
            // if(createResult){
            res.send('注册成功')
            // }
        }

    }
})

app.get('/jsonp',function(req,res){
    let {callback} = req.query;
    let data = 123;
    console.log('/register post success');
    res.send(`${callback}(${data})`);//getData(123)
})


app.listen(5000,function(error){
    if(error){
        console.log(error)
    }else{
        console.log('服务器启动成功,启动于http://localhost:5000');
    }
})