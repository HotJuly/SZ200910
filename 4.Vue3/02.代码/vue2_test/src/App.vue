<template>
  <div id="app">
    <ul>
      <li v-for="item in arr" :key="item">{{item}}</li>
    </ul>
    <p>{{obj.name}}</p>
    <button @click="handleChange">修改</button>
    <button @click="handleDelete">删除</button>
    <button @click="handleDeleteName">删除name</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      arr:[1,2,3],
      obj:{
        name:"xiaoming"
      }
    }
  },
  methods:{
    handleChange(){
      /*
        数组
          1.使用下标操作内容,不会更新视图
          2.操作数组长度也不会更新视图
      */
      // this.arr[1]=4;
      this.arr.splice(1,1,4);
      this.obj.name++;
    },
    handleDelete(){
      this.arr.length=this.arr.length-1;
      console.log(this.arr)
    },
    handleDeleteName(){
      // 删除或者添加属性都不会更新视图
      delete this.obj.name;
      console.log(this.obj)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
