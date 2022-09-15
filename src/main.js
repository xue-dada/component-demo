import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";

Vue.use(ElementUI);
Vue.config.productionTip = false

// 配置请求根路径
axios.defaults.baseURL = "http://localhost:8088"

// 将axios作为全局的自定义属性，每个组件可以在内部直接访问
Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
