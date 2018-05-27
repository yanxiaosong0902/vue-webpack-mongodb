<template>
	<div class="home">
		<app-header title="首页"></app-header>
		<section class="container">
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>

			<h1>首页 内容</h1><h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1><h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1><h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>

			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1><h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>

			<h1>首页 内容</h1>
			<h1>首页 内容</h1><h1>首页 内容</h1>
		</section>
		<app-footer></app-footer>
	</div>
</template>
<script>
import appHeader from '../common/Header.vue'
import appFooter from '../common/Footer.vue'
	export default{
		data(){
			return{
				
			}
		},
		components:{
			appHeader,
			appFooter
		},
		mounted:function(){
			var el = document.getElementsByClassName('container')[0];
			el.addEventListener('touchmove',function(e){
				e.preventDefault();
				var scrolltop = 0;
				var touch = e.touches[0];
				if(el.scrollTop <= 0 && touch.pageY>100){
					el.style.top = '150px';
					el.style.transition = 'top 1.5s';
				}
			})
			el.addEventListener('touchend',function(e){
				console.log(el.style.top);
				e.preventDefault();
				el.style.top = '55px';
				el.style.transition = 'top 0.5s';
			})
		}
	}
</script>