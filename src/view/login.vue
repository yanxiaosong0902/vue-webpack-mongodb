<template>
	<div class="login">
		<app-header title="我的"></app-header>
		<div class="container">
			<router-link :to="{name:'home',params:{name:'login'}}" tag="li">首页</router-link>
			<section>
			<ul>
				<li>用户名:{{userName}}</li>
				<li>年龄:{{thisUserAge}}</li>
				<li>用户名:{{userInfo.userName}}</li>
				<li>年龄:{{userInfo.userAge}}</li>
			</ul>
			<div>
				<input type="text" name="userAge" v-model="userAge" />
				<button @click="changeUserAge()" :value='userAge'>submit</button>
			</div>
		</section>
		<section>
				<label name="account">账号</label><input type="email" name="account" v-model="account">
				<br/>
				<label name="password">密码</label><input type="password" name="password" v-model="password">
				<button @click="submitRegister">注册</button>
		</section>
		<section>
			<ul>
				<li v-for="item in accountInfo">
					<span>账号:{{item.account}}</span>
					<span>------密码:{{item.password}}</span>
				</li>
			</ul>
		</section>
		</div>
		<app-footer></app-footer>
	</div>
</template>
<script>
import appHeader from '../common/Header.vue'
import appFooter from '../common/Footer.vue'
import {mapGetters,mapActions,mapMutations,mapState} from 'vuex'
import * as types from '../vuex/mutations-type.js'
	export default{
		data(){
			return{
				userAge:'',
				account:'',
				password:''
			}
		},
		computed:{
			/*...mapGetters({
		      userName: 'getUserName',
		      userAge: 'getUserAge',
		    })*/
		    userName:{
		    	get(){
		    		return this.$store.state.userInfo.userName
		    	},
		    	set(val){
		    		this.$store.dispatch('setUserName',val)
		    	}
		    },
		    ...mapGetters({
		    	thisUserAge:'getUserAge'
		    }),
		    ...mapState([
		    	'userInfo',
		    	'accountInfo'
		    ])
		},
		components:{
			appHeader,
			appFooter
		},
		created(){
			//console.log(this.$store);
			//this.userName = this.$store.getters.getUserName;
			//this.userAge = this.$store.getters.getUserAge;
			this.$store.dispatch('setAccountInfo').then((res)=>console.log(res));
		},
		methods:{
			...mapActions({
				changeUserAAge:'setUserAge'
			}),
			...mapMutations({
	            changeUserName: 'SET_USER_NAME',
	            //setUserAge: 'SET_USER_AGE'
	        }),
	        changeUserAge(){
	        	this.changeUserAAge(this.userAge).then((result)=>console.log(result));
	        },
	        submitRegister(){
	        	var data = {
	        		account:this.account,
	        		password:this.password
	        	};
	        	this.$ajax({
	        		method:'post',
	        		url:'/api/login/createAccount',
	        		data:data,
	        	}).then((res)=>console.log(res)).catch((error)=>console.log(error))
	        }
		}
	}
</script>