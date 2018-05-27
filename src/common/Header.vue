<template>
	<header class="header">
		<p>{{title}}</p>
	</header>
</template>
<script>
	export default{
		data(){
			return{	
			}
		},
		props:{
			bgColor:String,
			title:String,

		}
	}
</script>
<style lang="scss">
@import '../assets/common.scss';
	.header{
		position:fixed;
		height:55px;
		width:100vw;
		top:0;
		background:#f46f6f;
		text-align:center;
		z-index:9999;
		p{
			color:$nav-color;
			color:#fff;
			line-height:55px;
		}
	}
</style>