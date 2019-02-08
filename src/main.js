import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App';

import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
