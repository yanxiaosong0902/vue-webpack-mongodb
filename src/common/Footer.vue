<template>
	<footer class="footer" id="footer">
		<ul>
			<!-- <router-link to="/home" tag="li">首页</router-link>
			<router-link to="/home" tag="li">分类</router-link>
			<router-link to="/home" tag="li">商品</router-link>
			<router-link to="/login" tag="li">我的</router-link> -->
			<input type="" name="" id="input-bottom">
		</ul>
	</footer>
</template>
<script>
	export default{
		data(){
			return{
			}
		},
		mounted(){
			document.getElementById("footer").addEventListener('touchmove',function(e){
				e.preventDefault();
			});
			document.getElementById('input-bottom').addEventListener('focus',function(e){
				setTimeout(function(){  
				    document.body.scrollTop = 0; 
				    document.getElementById("footer").style.bottom = '262px';
				},0);  
			});
			document.getElementById('input-bottom').addEventListener('blur',function(e){
				setTimeout(function(){  
				    document.body.scrollTop = 0; 
				    document.getElementById("footer").style.bottom = 0;
				},0);  
			})
		},
		methods:{
			
		}
	}
</script>
<style lang="scss">
	.footer{
		width:100vw;
		height:55px;
		position:absolute;
		bottom:0;
		z-index:9999;
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
		input{
			width:80vw;
			height:45px;
		}
		a{
			background:#f46f6f;
			color:#fff;
			//line-height:55px;
			padding:15px;
		}
	}
</style>