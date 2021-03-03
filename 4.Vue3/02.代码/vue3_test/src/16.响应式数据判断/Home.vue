<template>
  <h2>App</h2>
</template>

<script lang="ts">

import {ref ,isRef} from 'vue'

export default {

  setup () {
    const color=ref(2);
    console.log(isRef(color))
    console.log(color)
  }
}

/* 
实现函数防抖的自定义ref
*/

</script>