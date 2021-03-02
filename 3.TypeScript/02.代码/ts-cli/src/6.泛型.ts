// (function(){
//     function createArray(value: any, count: number): any[] {
//         const arr: any[] = []
//         for (let index = 0; index < count; index++) {
//           arr.push(value)
//         }
//         return arr
//       }
      
//       const arr1 = createArray(11, 3)
//       const arr2 = createArray('aa', 3)
//       console.log(arr1[0], arr2[0])
//     //   let num =11;
//     //   num.

//     //问题:函数定义的时候,进行类型约束,可是有些数据类型声明函数的时候,无法确定

// })();

(function(){
    //函数泛型
    //问题:函数定义的时候,进行类型约束,可是有些数据类型声明函数的时候,无法确定
    //泛型,给你提供一个传递类型的通道,在你调用函数的时候在传入,确定类型约束
    // 把泛型当作新类型的形参和实参就可以了,泛型的目的就是为了提高接口和class的复用性
    // function createArray<T>(value: T, count: number): T[] {
    //     const arr: T[] = []
    //     for (let index = 0; index < count; index++) {
    //       arr.push(value)
    //     }
    //     return arr
    //   }
      
    //   const arr1 = createArray<number>(11, 3)
    //   const arr2 = createArray<string>('aa', 3)
    //   console.log(arr1[0].toFixed(2),arr2[0].length)
    //   let num =11;
    //   num.


    // function swap <K, V> (a: K, b: V): [K, V] {
    //     return [a, b]
    //   }
    //   const result = swap<string, number>('abc', 123)
    //   console.log(result[0].length, result[1].toFixed())



    //接口泛型
    // interface IbaseCRUD<T> {
    //     data: T[]
    //     add: (t: T) => void
    //     getById: (id: number) => T
    //   }
      
    //   class User {
    //     id?: number; //id主键自增
    //     name: string; //姓名
    //     age: number; //年龄
      
    //     constructor (name, age) {
    //       this.name = name
    //       this.age = age
    //     }
    //   }
      
    //   class UserCRUD implements IbaseCRUD<User> {
    //     data: User[] = []
        
    //     add(user: User): void {
    //       user = {...user, id: Date.now()}
    //       this.data.push(user)
    //       console.log('保存user', user.id)
    //     }
      
    //     getById(id: number): User {
    //       return this.data.find(item => item.id===id)
    //     }
    //   }
      
      
    //   const userCRUD = new UserCRUD()
    //   userCRUD.add(new User('tom', 12))
    //   userCRUD.add(new User('tom2', 13))
    //   console.log(userCRUD)


    //泛型类
    // class GenericNumber<T>{
    //     zeroValue: T
    //     add: (x: T, y: T) => T
    //   }
      
    //   let myGenericNumber = new GenericNumber<number>()
    //   myGenericNumber.zeroValue = 0
    //   myGenericNumber.add = function(x, y) {
    //     return x + y 
    //   }
    //   console.log(myGenericNumber.add(1,2));
      
    //   let stringNumeric = new GenericNumber<string>()
    //   stringNumeric.zeroValue = 'abc'
    //   stringNumeric.add = function(x, y) { 
    //     return x + y
    //   }
      
    //   console.log(stringNumeric.add('hello ',"world"))


    //泛型约束
    interface Length{
      length:number;
    }
    function fn <T extends Length>(x: T): void {
      console.log(x.length);
    }
    fn<string>("abc");
})();