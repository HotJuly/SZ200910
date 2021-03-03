<template>
  <h2>App</h2>
  <input v-model="keyword" placeholder="搜索关键字"/>
  <p>{{keyword}}</p>
</template>

<script lang="ts">
/*
customRef:
  创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制

需求: 
  使用 customRef 实现 debounce 的示例
*/

import {
  customRef
} from 'vue'

function useDebounce(value: any,delay=200){
  let timer: number;
  return customRef((track,trigger)=>{
    return {
      get(){
        // 告知Vue该数据需要追踪
        track();
        return value;
      },
      set(newValue){
        clearTimeout(timer)
        timer = setTimeout(()=>{
          // 告知Vue需要更新视图
          trigger()
          value=newValue
        },delay)
      }
    }
  })
}

export default {

  setup () {
    const keyword = useDebounce('',500);
    console.log(keyword)
    return {
      keyword
    }
  },
}

/* 
实现函数防抖的自定义ref
*/

</script>