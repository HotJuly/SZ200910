import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

/*
    Vue.use(Vuex)
    Vue.use(VueRouter)
    new Vue({
        render:h=>h(App),
        store,
        router
    })
    vm.mount('#app')
*/