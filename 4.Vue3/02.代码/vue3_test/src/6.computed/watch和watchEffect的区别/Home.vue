<template>
  <div class="home">
    <div>
      firstName:<input type="text" v-model="firstName">
    </div>
    <div>
      lastName:<input type="text" v-model="lastName">
    </div>
    <div>
      name1:<input type="text" v-model="name1">
    </div>
    <div>
      name2:<input type="text" v-model="name2">
    </div>
    <div>
      name3:<input type="text" v-model="name3">
    </div>
    <button @click="changeLastName">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent ,  ref , computed , watch , watchEffect} from 'vue';

export default defineComponent({
  name: 'Home',
  setup(){

    const firstName = ref<string>("东方");
    const lastName = ref<string>("不败");
    const changeLastName = function(){
      lastName.value+="+";
    }

    const name1 = computed(()=>{
      return firstName.value+"_"+lastName.value
    })

    const name2 = computed({
      get(){
      return firstName.value+"----"+lastName.value
      },
      set(value: string){
        const names: string[] = value.split("----");
        firstName.value = names[0];
        lastName.value = names[1];
      }
    })

    const name3 = ref<any|string>(null);


    // watch([firstName,lastName],function(){
    //   // console.log('111')
    //   name3.value = firstName.value + "+"+ lastName.value
    // },{immediate:true})
    
    // 新增,可以不需要告诉他内部的依赖数据,他会自动追踪
    // 自带{immediate:true},首次渲染就是自动更新
    watchEffect(()=>{
      name3.value = firstName.value + "+"+ lastName.value
    })

    return {
      firstName,
      lastName,
      changeLastName,
      name1,
      name2,
      name3
    }
  },
  // computed:{
  //   doubleCount(){
  //     return this.count*2;
  //   }
      // threeCount:{
      //   get(){

      //   },
      //   set(){

      //   }
      // }
  // },
  // watch:{
  //   firstName(){

  //   }
  // }
});
</script>
