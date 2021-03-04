<template>
  <div class="home">
    <p>name:{{ user.name }}</p>
    <p>age:{{ user.age }}</p>
    <p>car1:{{ user.cars[0] }}</p>
    <p>car2:{{ user.cars[1] }}</p>
    <p>car3:{{ user.cars[2] }}</p>
    <button @click="addAge">打工一年</button>
    <button @click="addCar">买车</button>
  </div>
</template>


<script setup>
import { reactive,watch} from 'vue';

const user = reactive({
          name: "xiaowang",
          age: 18,
          cars: ["五菱宏光", "QQ"],
        }
);

// const {name,age,cars} =  user;


const addCar = function () {
  user.cars.push("帕萨特");
};

const addAge = function () {
  user.age++;
};

</script>
