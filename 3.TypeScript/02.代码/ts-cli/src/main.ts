(function(){
    /* 
类的基本定义与使用
*/
class Greeter {
    // 声明属性
    message: string
    // state:object={}
  
    // 构造方法
    constructor (message: string) {
      this.message = message
    }
  
    // 一般方法
    //Greeter.prototype.greet=匿名函数
    greet (): string {
      return 'Hello ' + this.message
    }
  }
  
  // 创建类的实例
  const greeter = new Greeter('world')
  // 调用实例的方法
  console.log(greeter)
})();

(function(){
  //继承:为了让子类能够使用到父类的方法
  class Animal{
    static name1:string="123";
    constructor(name:string){
      // dog.name=name;
      // this.name=name;
    }
    eat(food:string):string{
      // return this.name+"正在吃:"+food
      return "正在吃:"+food
    }
  }

  class Dog extends Animal{
    constructor(name:string){
      // Animal.call(dog,name)
      super(name);
    }

    run():void{
      console.log('它正在跑')
    }
  }
  let dog = new Dog("小黑");
  /*
    dog.run
    1.寻找dog对象身上是否具有run
    2.如果对象身上没有,就dog.__proto__.run
  
  */
  dog.run();

  
  /*
    dog.run
    1.寻找dog对象身上是否具有eat
    2.如果对象身上没有,就dog.__proto__.eat==>Dog.prototype.eat
    3.dog.__proto__.__proto__.eat==>Dog.prototype.__proto__.eat
      extends=>
        let an = new Animal();
        Dog.prototype = an;
  
  */
  console.log(dog.eat("菠萝"));
  console.dir(Animal)

})();

(function(){
  /* 
    安全性的递增
    public  公共,所有人可见
    protected 只有当前类和子类内部可见
    private 只能自身类内部课件

    静态 static
    只读 readonly
  */
  class Person {
    public name: string
    protected sex:string;
    private age: number;
    readonly phone:number=166666666;
    
    constructor (name: string,age:number,sex:string) {
      this.name = name
      this.age = age
      this.sex = sex
    }
    sayAge(){
      console.log("年龄:"+this.age)
    }
  
  }

  class Man extends Person{
    constructor(name: string,age:number,sex:string){
      super(name,age,sex)
    }
    say(){
      console.log('我是'+this.name+"性别:"+this.sex)
    }
  }

  let p = new Man('xiaoming',22,'男');
  // console.log(p.name,p.age,p.sex)
  p.say();
  // p.phone=66666;

})();

(function(){
  class Person {
    firstName: string = 'A'
    lastName: string = 'B'
    // 使用到Object.defineProperty()
    get fullName () {
      return this.firstName + '-' + this.lastName
    }
    set fullName (value) {
      const names = value.split('-')
      this.firstName = names[0]
      this.lastName = names[1]
    }
  }
  
  const p = new Person()
  console.log(p.fullName)
  
  p.firstName = 'C'
  p.lastName =  'D'
  console.log(p.fullName)
  
  p.fullName = 'E-F'
  console.log(p.firstName, p.lastName)
})();

(function(){
  interface IAnimal{
    cry:()=>
  }

  // 抽象类,相当于是接口的升级版本,可以再约束子类的同时,给他提供一些方法
  abstract class Animal {

    //约束子类必须拥有该方法
    abstract cry ()
  
    //给子类提供一些方法
    run () {
      console.log('run()')
    }
  }

  class Dog extends Animal{
    cry(){

    }
  }

  let dog = new Dog();
  dog.run();
  console.log(new Animal());
})();