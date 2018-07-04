require('./assets/reset.css');
require('./assets/common.scss');
require('./assets/css/app.sass');
require('./lib/yxs.js');
require('./lib/yxsCheck.js');
require('./lib/preventLouDi.js');

import Vue from 'vue'
import App from './App.vue'       // vue-router路由
import router   from './router.js';          // 路由配置文件
import store from './vuex/index.js' //vuex
import axios from 'axios'
import EventUtil from './lib/EventUtil.js'
import filter from './lib/filter.js'
import FastClick from 'fastclick'

if('addEventListener' in document){
	document.addEventListener('DOMContentLoad',function(){
		FastClick.attach(document.body)
	},false)
}
document.body.addEventListener('touchend',function(e){
	var els = document.getElementsByTagName('input');
	for(var i=0;i<els.length;i++){
		els[i].blur();
	}
})
Vue.prototype.$ajax = axios;
Vue.prototype.EventUtil = EventUtil;

Object.keys(filter).forEach(k => Vue.filter(k,filter[k]));
//console.log(Array.prototype);
window.vue = Vue;


new Vue({
  el: '#app',
  store,
  router,  // 注入到根实例中
  render: h => h(App),
})