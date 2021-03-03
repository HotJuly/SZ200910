<template>
  <div class="home">
    <p>name:{{name}}</p>
    <p>age:{{age}}</p>
    <p>car1:{{cars[0]}}</p>
    <p>car2:{{cars[1]}}</p>
    <p>car3:{{cars[2]}}</p>
    <button @click="addAge">打工一年</button>
    <button @click="addCar">买车</button>
  </div>
</template>

<script lang="ts">
import { defineComponent , reactive , toRefs ,ref } from 'vue';

export default defineComponent({
  name: 'Home',
  setup(){
    // toRefs,会将传入的对象中所有的属性都变成ref对象

    const obj ={
      name:"xiaowang",
      age:18,
      cars:["五菱宏光","QQ"]
    }

    const user = reactive(obj);

    const stateofRefs = toRefs(user);

    // const a = ref(0);
    // console.log(user.age,user.cars)
    // console.log(stateofRefs,a)

    const addCar = function(){
      user.cars.push("帕萨特");
    }

    const addAge = function(){
      user.age++;
    }

    return {
      ...stateofRefs,
      // ...user,
      addCar,
      addAge
    }
  }
});
</script>
