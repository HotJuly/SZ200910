<template>
  <h2>App</h2>
  <HelloWorld/>
</template>

<script lang="ts">

import {ref , provide} from 'vue'
import HelloWorld from '../components/HelloWorld.vue';

export default {

  setup () {
    const color=ref(2);
    provide('color',color);
  },
  components:{
    HelloWorld
  }
}

/* 
实现函数防抖的自定义ref
*/

</script>