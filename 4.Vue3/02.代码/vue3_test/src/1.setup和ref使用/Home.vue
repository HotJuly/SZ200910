<template>
  <div class="home">
    <div>{{count}}</div>
    <button @click="handleClick2">+1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent , ref } from 'vue';

export default defineComponent({
  name: 'Home',
  setup(){
    //setup是在组件实例创建之前调用
    //setup钩子函数,在beforeCreate之前执行,每次挂载只执行一次,更新不执行


    // 想要得到一个响应式数据使用ref(传入基本数据类型),类似Vue2中的set方法
    // ref()可以得到一个ref对象
    // ref对象,在setup中使用的时候,想修改值,必须加上.value
    //  除了setup以外,他会自动补齐.value
    const count  = ref(1);
    const handleClick2 = function(){
      count.value++;
    }

    console.log(count)

    console.log('setup');
    return{
      count,
      handleClick2
    }
  },
  beforeCreate(){
    console.log('beforeCreate');
  }
  // methods:{
  //   handleClick(){
  //     this.count++;
  //     // console.log(this.count)
  //   }
  // }
});
</script>
