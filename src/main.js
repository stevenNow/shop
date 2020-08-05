import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from "./store"
import routes from "./routes";
Vue.use(Antd);

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({routes, mode: "history"})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
