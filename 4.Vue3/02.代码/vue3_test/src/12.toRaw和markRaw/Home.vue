<template>
  <div class="home">
    <div>m1:{{m1}}</div>
    <div>m2:{{m2}}</div>
    <button  @click="changeLaowang">改变老王</button>
  </div>
</template>

<script lang="ts">
import { defineComponent , markRaw, reactive,toRaw,} from 'vue';

export default defineComponent({
  name: 'Home',
  setup(){
    const obj1 ={
      name:"laowang",
      age:38,
      wifes:[
          {
            name:"xiaohong",
            age:22
          },
          {
            name:"gebixiaohong",
            age:22
          }
        ]
      };

      
    const obj2 ={
      name:"laowang",
      age:38,
      wifes:[
          {
            name:"xiaohong",
            age:18
          },
          {
            name:"gebixiaohong",
            age:18
          }
        ]
      };

      const m1 = reactive<any>(obj1);
      // 获取代理之前的源对象
      // toRaw相当于临时读取原对象的结果,给你使用
      //不会影响到原来的Proxy对象
      // m1=toRaw(m1);
      console.log(toRaw(m1),m1);

      const m2 = reactive<any>(obj2);

      const changeLaowang=function(){
        // console.log('124')
        // m1.age=999;
        m2.wifes[0]=markRaw({
          name:"xiaolv",
          age:17.99
        })
        console.log('wifes',m2.wifes[0])
        setTimeout(()=>{
          m2.wifes[0].age++;
        },2000)
      }

    return {
      m1,
      m2,
      changeLaowang
    }
  }
});
</script>
