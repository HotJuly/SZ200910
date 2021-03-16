<template>
    <div id="homeContainer">
        <h1>I'm Home Page</h1>
        <p>我Home组件是一级路由组件</p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:"Home"
}
</script>

<style>
#homeContainer{
    width:300px;
    height:300px;
    border: 1px solid;
}
</style>