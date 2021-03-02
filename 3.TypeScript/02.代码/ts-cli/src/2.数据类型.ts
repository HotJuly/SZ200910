let flag: boolean = true;
flag = false;
flag = undefined;
flag = null;

let num: number = 11;

let str: string = "str";

//在非格模式下,undefined和null算是所有类型的子类
let un:undefined =undefined;

let nu:null =null;

/*
    数组内部存放数字
        1.number[]
        2.Array<number>
*/
let arr:number[] = [1,2,3];

// 元组:已知长度,已知类型
let arr1:[number,string,boolean] = [1,"str",true];

arr1[0].toFixed();
arr1[1].indexOf("t");

enum Color {
    Red,
    Green,
    Blue
}

let myColor:Color = Color.Green;
console.log('Color',Color)


// let arr3 = ["广东省","福建省"];


enum Provide{
    "广东省" = 1,
    "福建省"
}

let obj ={
    name:"xiaoming",
    provide:0
}

console.log(Provide,Provide[obj.provide],Provide['福建省'])

// 除非真的迫不得已,不然不推荐使用
let a1: any =1;
a1="str";

// void代表没有任何值,一般用于函数返回值
let a2:void;

function fn1(): void{
    console.log(123);
    // return 123;
}

// object类型.js中一切皆对象,object代表所有非基本数据源类型
let obj1: object = {};
obj1=[];
// obj1=2;

// 联合类型,相当于是类型的逻辑或,允许多种情况
let arr3:[number|string] = [1];
arr3[0]='str';


// 类型断言,不需要ts检测,按照你说的指定标准
function fn2(data: string|number){
    // 如果data是数字,我就输出他
    // 如果data是字符串,就输出他的length
    if((data as string).length){
        return (<string>data).length;
    }else{
        return data;
    }
}
console.log(fn2("123111aaa"));

// 类型推断,根据声明变量时候的赋值结果,推断当前变量可存放数据类型
let num2 = 2;
// num2=true;