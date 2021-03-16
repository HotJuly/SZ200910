<template>
  <div class="hello">
    <ul>
      <li v-for="(item,index) in arr" :key="index">
        <span>{{item}}</span><input type="text" />
      </li>
    </ul>
    <button @click="handleClick">插入</button>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data(){
    return {
      arr:[1,2,3,4,5]
    }
  },
  methods:{
    // handleInput(event){
    //   this.$emit('input666',event.target.value)
    // }
    handleClick(){
      this.arr.splice(2,0,this.arr.length+1)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
