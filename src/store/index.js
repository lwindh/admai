import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
    status:false
}

const mutations = {
    checked(state){
        state.status = true;
    }
}

const actions = {
    checked:({commit}) => {
        commit('checked')
    }
}

export default new Vuex.Store({state,mutations,actions})
