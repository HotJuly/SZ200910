// import JQuery from 'jquery';
import {add} from '@/lodash';
console.log('add',add(1,2));


document.querySelector('#btn').addEventListener('click',function(){
    import(/* webpackChunkName:"JQuery" */'jquery').then((data)=>{
        console.log('data',data.default('#btn'))
    })
    // console.log('我是main.js',JQuery);
})
