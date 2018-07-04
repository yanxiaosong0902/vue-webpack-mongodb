import * as types from './mutations-type.js'
import axios from 'axios'

export default {
	setUserName(context,data){
	//debugger;
		context.commit('SET_USER_NAME',data)
	},
	setUserAge({commit},data){
		return new Promise((resolve,reject)=>{
			commit('SET_USER_AGE',data);
			resolve('修改成功:'+data)
		})
	},
	setAccountInfo({commit}){
		return new Promise((resolve,reject)=>{
			axios.get('/api/login/getAccount').then((res)=>{
				commit('SET_ACCOUNT_INFO',res.data);
				resolve('获取成功!')
			}).catch((error)=>{
				console.log(error);
			})
		})
	}
	
}