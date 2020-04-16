import Vue from 'vue'
import './plugins/axios'
import axios from 'axios';
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import VueResource from 'vue-resource'
Vue.config.productionTip = false
Vue.use(VueResource)
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')