<template>
  <div class="home">
    <input ref="inputRef" value="name:123"/>
  </div>
</template>

<script lang="ts">
import { defineComponent , reactive , toRefs ,ref ,onMounted} from 'vue';

export default defineComponent({
  name: 'Home',
  setup(){
    // this.$refs
    const inputRef = ref<HTMLElement|null>(null);
    onMounted(()=>{
      // console.log(inputRef.value)
      inputRef.value&&inputRef.value.focus();
    })
    return {
      inputRef
    }
  },
  // mounted(){
  //   console.log(this.$refs.aaa)
  // }
});
</script>
