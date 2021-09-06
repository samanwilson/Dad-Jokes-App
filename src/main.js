import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import VueRouter from 'vue-router'
import {Routes} from "./Routes";


Vue.use(VueRouter)
const router = new VueRouter({
routes:Routes,
  mode:'history'

})
Vue.use(Axios)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
