require('./assets/reset.css');
require('./assets/common.scss');
require('./assets/css/app.sass');

import Vue from 'vue'
import App from './App.vue'       // vue-router路由
import router   from './router.js';          // 路由配置文件

window.vue = Vue;

new Vue({
  el: '#app',
  router,  // 注入到根实例中
  render: h => h(App)
})