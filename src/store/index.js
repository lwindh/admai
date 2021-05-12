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
    id:'',
    order:{},
    time:'',
    city:{
        id:0,
        name:'全国'
    },
    orderId:'',
}

const mutations = {
    changeType:(state,params)=>{
        state.type.id = params.id;
        state.type.name = params.name;
        sessionStorage.setItem('store', JSON.stringify(state));
    },
    getUser:(state,params)=>{
        state.user = params;
        sessionStorage.setItem('sid', params);
        sessionStorage.setItem('store', JSON.stringify(state));
    },
    setCityList:(state,params)=>{
        state.cityList = params;
        sessionStorage.setItem('store', JSON.stringify(state));
    },
    setPath:(state,params)=>{
        state.path = params;
        sessionStorage.setItem('store', JSON.stringify(state));
    },
    changeUserName:(state,params)=>{
        state.user.nickName = params;
        sessionStorage.setItem('store', JSON.stringify(state));
    },
    changeEmail:(state,params)=>{
        state.user.email = params;
        sessionStorage.setItem('store', JSON.stringify(state));
    },
    changePhone:(state,params)=>{
        state.user.phoneNumber = params;
        sessionStorage.setItem('store', JSON.stringify(state));
    },
    changeIdCard:(state,params)=>{
        state.user.idNumber = params.id;
        state.user.actualName = params.name;
        sessionStorage.setItem('store', JSON.stringify(state));
    },
    getId:(state,params)=>{
        state.id = params;
        sessionStorage.setItem('store', JSON.stringify(state));
    },
    getOrder:(state,params)=>{
        state.order = params;
        sessionStorage.setItem('store', JSON.stringify(state));
    },
    getTime:(state,params)=>{
        state.time = params;
        sessionStorage.setItem('store', JSON.stringify(state));
    },
    getCity:(state,params)=>{
        state.city.id = params.id;
        state.city.name = params.name;
        sessionStorage.setItem('store', JSON.stringify(state));
    },
    getOrderId:(state,params)=>{
        state.orderId = params;
        sessionStorage.setItem('store', JSON.stringify(state));
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
    },
    changeEmail:({commit}) => {
        commit('changeEmail')
    },
    changePhone:({commit}) => {
        commit('changePhone')
    },
    changeIdCard:({commit}) => {
        commit('changeIdCard')
    },
    getId:({commit}) => {
        commit('getId')
    },
    getOrder:({commit}) => {
        commit('getOrder')
    },
    getTime:({commit}) => {
        commit('getTime')
    },
    getCity:({commit}) => {
        commit('getCity')
    },
    getOrderId:({commit}) => {
        commit('getOrderId')
    }
}

export default new Vuex.Store({state,mutations,actions})
