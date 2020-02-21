import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
    status:false,
    type:{
        id:0,
        name:'全部'
    },
}

const mutations = {
    checked(state){
        state.status = true;
    },
    changeType(type,params){
        type.type.id = params.id;
        type.type.name = params.name;
    }
}

const actions = {
    checked:({commit}) => {
        commit('checked')
    },
    changeType:({commit}) => {
        commit('changeType')
    }
}

export default new Vuex.Store({state,mutations,actions})
