<template>
  <div class="hello">
    <h1 @click="handleClick">{{ a.name }}</h1>
    <h1 v-once>msg:{{ msg }}</h1>
    <slot name="default"></slot>
    <slot name="juming"></slot>
    <slot name="scope" :msg1="msg1"></slot>
    <!-- <input type="text" v-model="value"> -->
    <!-- <input type="text" @input="handleInput" :value="msg123"> -->
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data(){
    return {
      a:{
        name:"123"
      },
      msg1:"作用域"
      // b:3,
      // c:3,
      // name1:"watch"
    }
  },
  props:["msg"],
  methods:{
    // handleInput(event){
    //   this.$emit('input666',event.target.value)
    // }
  },
  // model:{
  //   prop:"msg123",
  //   event:"input666"
  // },
  mounted(){
    // console.log('$el',this.$parent)
    // console.log(this.$listeners)
    // this.$watch(function(){
    //   return this.name1+this.b
    // })
  },
  methods:{
    handleClick(){
      // this.$emit('handleEmit',"666")
      this.$emit('update:msg',"666");
      // this.$destroy();
    }
  }
  // watch:{
    // msg123(){
    //   ....
    // }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
