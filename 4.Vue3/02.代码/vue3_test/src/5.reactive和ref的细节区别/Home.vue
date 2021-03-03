<template>
  <div class="home">
    <ul>
      <li>姓名:{{user.name}}</li>
      <li>年龄:{{user.age}}</li>
      <li>性别:{{user.sex}}</li>
      <li>
        <ul>
          <li v-for="item in user.cars" :key="item">
            {{item}}
          </li>
        </ul>
      </li>
    </ul>
    <button @click="addAge">+1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent ,reactive  ,  ref} from 'vue';

export default defineComponent({
  name: 'Home',
  setup(){
    //ref底层也是用reactive实现的
    //ref如果发现内部数据是对象或者数组,他会自动调用reactive生成Proxy对象
    // ref只关注value的地址值,不关注你对value内部属性的修改
    // ref的value内部属性的修改,由对应的proxy对象去管理

    const obj = {
      name:"xiaoming",
      age:18,
      sex:"男",
      cars:["法拉利","玛莎拉蒂"]
    };
    const user = ref<any>(obj);
    const user2 = reactive<any>(obj);
    console.log(user,user2)

    const addAge=function(){
      // user.value.age++;
      user.value={
        name:"xiaoming222",
        age:22,
        sex:"男1",
        cars:["法拉利2","玛莎拉蒂++"]
      }
    }

    const addAge2=function(){
      user2.age++;
      // user2={
      //   name:"xiaoming222",
      //   age:22,
      //   sex:"男1",
      //   cars:["法拉利2","玛莎拉蒂++"]
      // }
    }
    return {
      user,
      addAge,
      user2,
      addAge2
    }
  }
});
</script>
