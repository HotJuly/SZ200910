<template>
  <h2>App</h2>
  <div>{{count}}</div>
  <Teleport to="body">
    <button @click="addCount">+</button>
  </Teleport>
</template>

<script lang="ts">

import {ref ,isRef} from 'vue'

export default {

  setup () {
    const count=ref(2);
    const addCount = function(){
      count.value++;
    }
    return {
      count,
      addCount
    }
  }
}

/* 
实现函数防抖的自定义ref
*/

</script>