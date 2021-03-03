<template>
  <div class="hello">
    <div>
      {{myColor}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent ,inject } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup(){
    const myColor = inject('color');
    console.log(myColor)
    return {
      myColor
    }
  }
});
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
