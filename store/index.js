import Vue from 'vue'
import Vuex from 'vuex'
import rank from './modules/rank';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
		modules:{
			rank
		}
})

export default store;