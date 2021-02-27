# Vuex复习

## 1.Vuex是什么东西

他是Vue的一个扩展JS库

管理多组件共享状态



## 2.Vuex的核心概念

### 1)store对象

​	用于管理state,mutation,action,getter,并向外提供一些操作的API

### 2)state

​	用于存放多个组件共享数据

### 3)mutation

​	数据类型:函数

​	用于直接修改state的数据(Mutation 必须是同步函数)

​	面试题:为什么mutation一定要是同步函数

​	解答:

​			1.官方语法规范

​			2.如果mutation是异步函数,Vue devTool无法去追踪state跟mutation之间变化关系

​	面试题:为什么mutation的名字要使用常量

​	解答:为了方便项目后期维护,防止同名mutation,后者覆盖前者的事情发生(因为重复定义常量的时候,会报错)

### 4)action

​	数据类型:函数

​	用于间接修改state的数据

​	面试题:action可不可以直接修改state数据(仅从技术上说)

​	解答:可以(因为action的第一个实参是store对象)

​	面试题:那为什么不这么做?

​	解答:

​			1.官方语法规范

​			2.如果mutation是异步函数,Vue devTool无法去追踪state跟mutation之间变化关系

### 5)getter

​	数据类型:函数

​	相当于是Vue组件中的计算属性,根据state中的数据,计算出一个新值

​	面试题:watch和computed的区别

​	解答:

​			computed:手上有数据,但是你要用的数据不存在,需要根据数据计算

​			computed注重返回值,watch注重过程

​			性能?

​			computed具有缓存,数据没有发生变化,computed会使用旧值不会重新计算

### 6)dispatch

​	用于触发action函数

​	面试题:action一定要用dispatch触发吗,能不能直接手动调用action

​	解答:	不行

### 7)commit

​	用于触发mutation函数

