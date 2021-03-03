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
    <button @click="addAge">过年又老了一岁</button>
    <button @click="changeCar">过年又有钱了,改车改车</button>
  </div>
</template>

<script lang="ts">
import { defineComponent , reactive } from 'vue';

export default defineComponent({
  name: 'Home',
  setup(){
    /*
      reactive方法,可以将一个普通对象,变成响应式对象
      reactive是一个Proxy对象(代理对象),身上没有原数据,他只有原数据的引用
      reactive是深度响应式,如果发现内部数据值是非基本数据类型,进行reactive操作
    */


    const obj = {
      name:"xiaoming",
      age:18,
      sex:"男",
      cars:["法拉利","玛莎拉蒂"]
    };
    const user = reactive(obj);

    console.log(obj,user)
    console.log(obj,user.cars)

    const addAge = function(){
      user.age++;
    }

    const changeCar = function(){
      user.cars[0]+="+";
    }

    return {
      user,
      addAge,
      changeCar
    }
  }
});
</script>
