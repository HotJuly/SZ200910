<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ b }}</h1>
    <h2 @click="handleClick1">{{ a.name | myFilter}}</h2>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data(){
    return {
      a:{
        name:"123"
      }
    }
  },
  inject:["b"],
  // props: {
  //   msg: String,
  //   handleClick:Function
  // },
  props:['msg','handleClick'],
  my_option:3,
  mounted(){
    // console.log(this.$options.name)
      // console.log('option2',this,c)
      // this.num = this.$options.my_option;
      /*
        nextTick
        前言:Vue中,修改data中数据的操作,会同步修改data的数据,
            但是会异步更新视图(相当于更新视图有做防抖处理)
        用处:在下次 DOM 更新循环结束之后执行延迟回调
        原理:
            1.通过then方法,将回调函数在微任务中执行
            2.如果同时开启多个nextTick,只会开启一个.then(微任务)
            3.如果当前的微任务执行结束了,在调用nextTick才会开启下一个微任务

    
    更新data会触发的流程
      更新数据的时候,会调用update函数(用来更新视图)->queueWatcher()->nextTick
      由于更新数据一定会开启一个nextTick,作为nextTick队列中的第一人,
      所以Vue能够保证$nextTick的回调函数一定在DOM更新之后

      */
    //  this.$nextTick(fn1)=>.then
    //  this.$nextTick(fn2)=>
    //  this.$nextTick(fn3)
    //  this.$nextTick(fn4)
    //  this.$nextTick(fn5)
    //  console.log('主线程');
    //  this.$nextTick(()=>{
    //    console.log('$nextTick2');
    //  })

    //更新数据的时候,会调用update函数(用来更新视图)->queueWatcher()->nextTick
    // 由于更新数据一定会开启一个nextTick,作为nextTick队列中的第一人,
    // 所以Vue能够保证$nextTick的回调函数一定在DOM更新之后
    
    // this.$nextTick(()=>{
    //   console.log('$nextTick1');
    // })
    // this.a="我是修改之后的数据";
    // console.log('a',this.a)

    // // debugger
    // // 修改数据之后,nextTick似乎有提升作用
    
    // Promise.resolve().then(()=>{
    //   console.log('resolve')
    // })
    // this.$nextTick(()=>{
    //   console.log('$nextTick1');
    // })
    // this.$nextTick(()=>{
    //   console.log('$nextTick2');
    // })

    // delete this.a;
    // Vue.delete(this.a,"name")
    // console.log('name',this.a.name)
  },
  filters:{
    myFilter(value){
      console.log(value)
      return value+"666";
    }
  },
  methods:{
    handleClick1(){
      console.log("handleClick1",this)
      this.handleClick('999')
    }
  },
  mixins:[{
    created(){

    }
  }]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
