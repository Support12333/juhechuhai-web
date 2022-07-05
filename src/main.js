import Vue from 'vue'
import 'normalize.css/normalize.css'
import App from './App.vue'
import router from './router/index'
import store from './store'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
