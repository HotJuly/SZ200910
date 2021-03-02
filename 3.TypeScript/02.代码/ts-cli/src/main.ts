// import JQuery from 'jquery';
// console.log(JQuery);
// JQuery()

// Boolean
// Number
// String
// Date
// RegExp
// Error

(function(){
    // let num:number =new Number();
    let num:Number =123;

    // let str:string =new String();
    let str:String ="123";

    // let flag:boolean =new Boolean();
    let flag:Boolean =false;

    // let date:Date = Date.now();//error
    let date:Date = new Date();

    // let reg:RegExp = "/^1\d{10}$/" //error
    let reg:RegExp = /^1\d{10}$/;

    // Window
    // Document
    // HTMLElement
    // DocumentFragment
    // Event
    // NodeList(静态伪数组)
    //  HTMLCollection(动态伪数组)
    let win:Window = window;
})();