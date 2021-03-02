(function(){
// 命名函数(函数提升)
function add(x, y) {
    return x + y
}
  
// 匿名函数,函数表达式(变量提升)
let myAdd = function(x, y) { 
return x + y;
}

function add1(x:number, y:number):number{
    return x + y
}


let myAdd1:(x:string,y:string)=>string =
function(x:string, y:string):string { 
    return x + y;
}


//?代表可传可不传
// 
function A(x:number,y:number,z?:number):void{
    console.log(x,y,z)
}
A(1,2,3);
A(1,2)

function B(x:number=1):void{
    console.log(x)
}
B(1);
B()

function C(a:number,...arg:number[]){
    console.log('C',a,arg)
}
C(1,2,3,4,5,6)


/*
    函数接受两个参数,
    如果两个参数都是字符串类型,就拼接返回
    如果两个参数都是数字类型,就相加返回
    要求:
        必须两个都是字符串,或者两个都是数字,禁止出现其他情况
*/
function D(a:string,b:string): string
function D(a:number,b:number): number
function D(a:number|string,b:number|string): number|string{
    if(typeof a === "string"&&typeof b === "string"){
        return a+b;
    }
    if(typeof a === "number"&&typeof b === "number"){
        return a+b;
    }
}

console.log(D(1,2));
console.log(D("1","2"));
// console.log(D("1",1));


})();