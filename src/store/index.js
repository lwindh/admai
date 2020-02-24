import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
    type:{
        id:0,
        name:'全部'
    },
    user:{},
    cityList:{},
    path:'MyInfo',
}

const mutations = {
    changeType(type,params){
        type.type.id = params.id;
        type.type.name = params.name;
    },
    getUser:(state,params)=>{
        state.user = params;
    },
    setCityList:(state,params)=>{
        state.cityList = params;
    },
    setPath:(state,params)=>{
        state.path = params;
    },
    changeUserName:(state,params)=>{
        state.user.nickName = params;
    }
}

const actions = {
    changeType:({commit}) => {
        commit('changeType')
    },
    getUser:({commit}) => {
        commit('getUser')
    },
    setCityList:({commit}) => {
        commit('setCityList')
    },
    setPath:({commit}) => {
        commit('setPath')
    },
    changeUserName:({commit}) => {
        commit('changeUserName')
    }
}

export default new Vuex.Store({state,mutations,actions})
