<template>
  <div class="home">
    <h1>x:{{pageX}}</h1>
    <h1>y:{{pageY}}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import usePositionHook from '../hooks/usePositionHook';

export default defineComponent({
  name: 'Home',
  setup(){
    //监视用户鼠标点击操作,并将鼠标的x和y轴数据展示在页面上
    /*
      拆分:
        1.监视用户鼠标点击操作
          监视用户点击事件
          给document绑定click事件
        2.将鼠标的x和y轴数据展示在页面上
          问题一:如何知道鼠标点击的x和y轴位置
          问题二:如何展示在页面上
    */
    const {pageX,pageY} = usePositionHook();

    // onMounted(()=>{
    //   console.log('我是OnMounted2')
    // })

    // onMounted(()=>{
    //   console.log('我是OnMounted3')
    // })
    // console.log('setup')
    // onclick

    return {
      pageX,
      pageY
    }
  },
  beforeCreate(){
    // console.log('beforeCreate');
  },
  mounted(){
    // onMounted的回调函数,相当于放在mounted生命周期最开始执行
    // console.log('我是mounted')
  }
});
</script>
