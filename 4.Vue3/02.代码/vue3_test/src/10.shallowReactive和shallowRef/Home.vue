<template>
  <div class="home">
    <div>m1:{{m1}}</div>
    <div>m2:{{m2}}</div>
    <div>m3:{{m3}}</div>
    <div>m4:{{m4}}</div>
    <button  @click="changeLaowang">改变老王</button>
  </div>
</template>

<script lang="ts">
import { defineComponent , reactive ,ref ,shallowReactive,shallowRef} from 'vue';

export default defineComponent({
  name: 'Home',
  setup(){
    const obj1 ={
      name:"laowang",
      age:38,
      wifes:[
          {
            name:"xiaohong"
          },
          {
            name:"gebixiaohong"
          }
        ]
      };

      
    const obj2 ={
      name:"laowang",
      age:38,
      wifes:[
          {
            name:"xiaohong"
          },
          {
            name:"gebixiaohong"
          }
        ]
      };

      
    const obj3 ={
      name:"laowang",
      age:38,
      wifes:[
          {
            name:"xiaohong"
          },
          {
            name:"gebixiaohong"
          }
        ]
      };

      
    const obj4 ={
      name:"laowang",
      age:38,
      wifes:[
          {
            name:"xiaohong"
          },
          {
            name:"gebixiaohong"
          }
        ]
      };

      const m1 = ref(obj1);

      const m2 = shallowRef(obj2);

      const m3 = reactive(obj3);

      const m4 = shallowReactive(obj4);

      const changeLaowang=function(){
        //ref对象
        // m1.value.age=100;

        //shallowRef对象
        //ref的浅监听,仅到value就结束,他只会监视value内的数据是否发生变化
        // m2.value.age=100;
        // m2.value={
        //   name:"laowang4",
        //   age:100,
        //   wifes:[
        //       {
        //         name:"xiaohong"
        //       },
        //       {
        //         name:"gebixiaohong"
        //       }
        //     ]
        //   }
        // console.log('m2',m2)

        // //reactive对象
        // m3.age=100;
        // m3.wifes.pop();

        // //shallowReactive对象
        // Object.freeze()
        //data:{a:[]};this.a=[1,2,3]
        //  shallowReactive对象的浅监听,只能监视到直接属性的值变化,如果是属性值是对象或者数组,内部的变化无法监视
        // m4.age=100;
        // m4.wifes.pop();
      }

    return {
      m1,
      m2,
      m3,
      m4,
      changeLaowang
    }
  }
});
</script>
