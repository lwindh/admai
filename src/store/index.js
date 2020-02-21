import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
    status:false,
    type:{
        id:0,
        name:'全部'
    },
    city:{
        name:'全部'
    },
    user:{}
}

const mutations = {
    checked(state){
        state.status = true;
    },
    changeType(type,params){
        type.type.id = params.id;
        type.type.name = params.name;
    },
    changeCity(city,params){
        city.type.name = params;
    },
    getUser:(state,params)=>{
        state.user = params;
    }
}

const actions = {
    checked:({commit}) => {
        commit('checked')
    },
    changeType:({commit}) => {
        commit('changeType')
    },
    getUser:({commit}) => {
        commit('getUser')
    },
    changeCity:({commit}) => {
        commit('changeCity')
    }
}

export default new Vuex.Store({state,mutations,actions})
