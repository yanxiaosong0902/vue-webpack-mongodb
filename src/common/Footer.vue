<template>
	<footer class="footer">
		<ul>
			<router-link to="/home" tag="li">首页</router-link>
			<router-link to="/home" tag="li">分类</router-link>
			<router-link to="/home" tag="li">商品</router-link>
			<router-link to="/login" tag="li">我的</router-link>
		</ul>
	</footer>
</template>
<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>
<style lang="scss">
	.footer{
		width:100vw;
		height:55px;
		position:fixed;
		bottom:0;
		z-index:9999;
		left:0;
		right:0;
		border-top:1px solid #d1d1d1;
		line-height:55px;
		background:#fff;
		color:#333;
		font-size:12px;
		ul{
			display:flex;
			align-items:center;
			justify-content:center;
			li{
				width:25vw;
				text-align:center;
			}
		}
	}
</style>