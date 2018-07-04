import Vuex from 'vuex'
import Vue from 'vue'
import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !=='production'

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
