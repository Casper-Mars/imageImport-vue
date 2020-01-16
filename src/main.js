import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from './api/api'
import Axios from "axios";

Vue.prototype.$api = api;
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
