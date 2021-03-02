(function(){
    /*
        接口可以理解为对某个对象内部属性以及属性值的约束
        类似于Vue组件中的props以对象形式书写
        注意1:每条属性的约束后面必须跟;
        可选属性:?
        只读属性:readonly
        const vs readonly
            const用于定义常量(变量)
                const a = 123;
                const obj ={
                    name:"haha"
                }
                obj.name="xixi"
            readonly用于定义对象的属性是否可以修改

    */
    interface IObject{
        name:string;
        age:number;
        sex?:string;
        readonly phone:number;
    }
    let obj: IObject = {
        name:"小明",
        age:18,
        sex:"女",
        phone:1777777777
    }
    // obj.phone=18888888;
    console.log(obj);

    //函数接口
    interface SearchFunc {
        (source: string, subString: string): boolean
    }

    const mySearch: SearchFunc = function (source, sub): boolean {
        return source.search(sub) > -1
      }

    // 类接口

    interface IPerson{
        name:string;
        eat:(food:string)=>string
    }

    interface IPerson2{
        speak:(content:string)=>void
    }

    class Person implements IPerson,IPerson2{
        name:string;
        constructor(name: string){
            this.name=name
        }
        eat(food: string): string{
            return this.name+"正在吃"+food
        }
        speak(content: string):void{
            console.log(this.name+'正在说:'+content)
        }
    }
    
    let p = new Person("xiaohong");
    console.log('p',p)
    console.log(p.eat('苹果'))
    p.speak('爱上一匹野马,可我的家里没有草原')
    
})();

(function(){
    interface IPerson{
        name:string;
        eat:(food:string)=>string
    }

    interface IPerson2 extends IPerson{
        speak:(content:string)=>void
    }

    class Person implements IPerson2{
        name:string;
        constructor(name: string){
            this.name=name
        }
        eat(food: string): string{
            return this.name+"正在吃"+food
        }
        speak(content: string):void{
            console.log(this.name+'正在说:'+content)
        }
    }
    
    let p = new Person("xiaohong");
    console.log('p',p)
    console.log(p.eat('苹果'))
    p.speak('爱上一匹野马,可我的家里没有草原')
})();