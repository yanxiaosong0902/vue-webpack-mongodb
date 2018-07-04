import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './view/home.vue'


Vue.use(VueRouter);

const routes = [
	{
        path: '/', 
        redirect: '/home' 
    },
    {
        path:"/home",
        name:'home',
        component(resolve){
        	require(['./view/home.vue'],resolve)
    	}
    },
    {
        path: "/login",
        name:'login',
        component(resolve){
        	require(['./view/login.vue'],resolve)
    	}
    }
]
var router =  new VueRouter({
    routes,
    linkActiveClass:'',
    linExactActiveClass:''
})

export default router;
