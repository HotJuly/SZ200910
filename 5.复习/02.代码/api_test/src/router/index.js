import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import About from '../components/About';
import Xixi from '../components/Xixi';

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home,
            children:[
                {
                    path:"/home/xixi",
                    component:Xixi
                }
            ]
        },
        {
            path:"/about",
            component:About
        }
    ]
})
