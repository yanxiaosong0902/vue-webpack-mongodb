<template>
	<router-view></router-view>
</template>

<script>
	export default{
		data(){
			return{
				userName:'yanxiaosong'
			}
		},
		methods:{

		}
	}
</script>
<style lang="scss">
	@import './assets/css/app.sass';
	
	// .container{
	// 	position:relative;
	// 	top:55px;
	// 	height: calc(100vh - 110px);
	// 	overflow:hidden;
	// 	overflow-y:scroll;
	// 	background:#f1f1f1;
	// 	-webkit-overflow-scrolling:touch;
	// }
	.container{
		position:absolute;
		width:100%;
		//height:100%;
		top:55px;
		bottom:55px;
		overflow:hidden;
		overflow-y:scroll;
		-webkit-overflow-scrolling:touch;
	}
	.main{
		height:100%;
		width:100%;
	}
</style>