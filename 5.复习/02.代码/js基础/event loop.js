const fs = require('fs');
const path = require('path');
setTimeout(()=>{
    console.log('setTimeout1')
},0);

setImmediate(()=>{
    console.log('setImmediate1')
})

// setTimeout(()=>{
//     // console.log('setTimeout2')
// },1000);

fs.readFile(path.resolve(__dirname,"./04_this.html"),function(){
    setTimeout(()=>{
        console.log('setTimeout3')
    },0);
    setImmediate(()=>{
        console.log('setImmediate2')
    })
})