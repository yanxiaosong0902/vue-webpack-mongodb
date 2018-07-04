import * as types from './mutations-type.js'
/*export default {
	[types.SET_USER_NAME](state,name){
		state.userInfo.userName = name;
	},
	[types.SET_USER_AGE](state,age){
		state.userInfo.userAge = age;
	},
}*/
export default{
	SET_USER_AGE(state,age){
		state.userInfo.userAge = age;
	},
	SET_USER_NAME(state,name){
		state.userInfo.userName = name
	},
	SET_ACCOUNT_INFO(state,data){
		//console.log(data);
		//console.log(new Set(data));
		state.accountInfo  = data;
	}
}