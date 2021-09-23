import Vue from "vue";
import App from "./App";
import router from './router'
import store from './store';

Vue.use(store);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})