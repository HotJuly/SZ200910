<template>
  <div id="app" class="test">
    <!-- <h1>App</h1> -->
    <HelloWorld/>
    <!-- <HelloWorld ref="helloWorld" a='a333' ccc='ccc333' v-model="msg"/> -->
    
    <!-- <HelloWorld :msg.sync="msg">
      <template v-slot:default>
        <div>我是默认插槽</div>
      </template>
      <template v-slot:juming>
        <div>我是具名插槽</div>
      </template>
      <template v-slot:scope="slotScoped" >
        <div>我是{{slotScoped.msg1}}插槽</div>
      </template>
    </HelloWorld> -->

    <!-- <component :is="component"/> -->

    <!-- .sync原理 -->
    <!-- <HelloWorld :msg="msg" @update:msg="value=>msg=value"/> -->
    <!-- <p ref="haha1">haha</p> -->
    <!-- v-model原理 -->
    <!-- <HelloWorld :value="msg" @input="value=>msg=value"/> -->

    <!-- <input type="text" v-model="msg"> -->
    <!-- <input type="text" :value="msg" @input="event=>msg=event.target.value"> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  data(){
    return{
      msg:"heihei",
      component:HelloWorld
    }
  },
  beforeCreate(){
    // console.log('-----------beforeCreate----------',undefined?,undefined,this.$el)
    console.log('-----------beforeCreate----------',this._data,this.msg,this.$el)
  },
  created(){
    // console.log('-----------created----------',true,true,true)
    console.log('-----------created----------',this._data.msg,this.msg,this.$el)
  },
  beforeMount(){
    // console.log('-----------beforeMount----------',true,true,true)
    console.log('-----------beforeMount----------',this._data.msg,this.msg,this.$el)
  },
  mounted(){
    // console.log('-----------mounted----------',true,true,true)
    console.log('-----------mounted----------',this._data.msg,this.msg,this.$el)
    // console.log('App',this)
    // console.log('$children',this.$children)
    // console.log(this.$refs.haha1,this.$refs.helloWorld)
    // this.$refs.helloWorld.$on('handleEmit',this.handleEmit)
  },
  methods:{
    handleEmit(value){
      console.log('handleEmit',value)
    }
  }
}
</script>

<style>
</style>
