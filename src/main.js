import Vue from 'vue'
import store from "./store";
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(ElementUI);

new Vue({
  router,
  store
}).$mount('#app')
