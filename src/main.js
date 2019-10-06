import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import global from './common/Global';

Vue.config.productionTip = false
Vue.use(VueAxios, axios);

Vue.use(ElementUI);

Vue.prototype.GLOBAL = global

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
