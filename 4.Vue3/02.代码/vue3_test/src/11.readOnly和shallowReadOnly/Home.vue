<template>
  <div class="home">
    <div>m1:{{m1}}</div>
    <div>m2:{{m2}}</div>
    <button  @click="changeLaowang">改变老王</button>
  </div>
</template>

<script lang="ts">
import { defineComponent , reactive, readonly, shallowReadonly} from 'vue';

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

      let m1 = reactive<any>(obj1);
      m1=readonly(m1);

      let m2 = reactive<any>(obj2);
      m2=shallowReadonly(m2);

      const changeLaowang=function(){
        //无论是readOnly还是shallowReadOnly,对象的直接属性都不能修改,只能看
        // m1.age=100;
        // m2.age=99;


        //readOnly代表整个对象以及内部所有属性都只能看不能改
        // shallowReadOnly只有直接属性不能修改,深层次属性都可以正常修改,并更新视图
        m1.wifes[0].age=66
        m2.wifes[0].age=80
      }

    return {
      m1,
      m2,
      changeLaowang
    }
  }
});
</script>
