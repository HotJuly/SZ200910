import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home.js';

Vue.use(Vuex);


export default new Vuex.Store({
	modules:{
		home
	}
})