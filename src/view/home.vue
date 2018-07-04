<template>
	<div class="home main">
		<app-header title="首页" titleColor="#fff" bgColor="#f46f6f" :show="acitveHeader"></app-header>
		<!--<header class="home-header">
			<ul class="li-item">
				<li>价格</li>
				<li>地区</li>
				<li>热度</li>
				<li>新旧</li>
			</ul>
		</header>-->
		<section class="container" id="container">
			<h1>时间{{time | dateFormat('yyyy:MM:dd hh:mm:ss')}}</h1>
			<h1>首页 {{routerData}}</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<input type="" name="">
			<h1>首页 内容</h1>
			<router-link :to="{name:'login',params:{name:'home'}}" tag="a">登录12312</router-link>

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
			<input type="" name="">
			<h1>首页 内容</h1>
			<h1>首页 内容</h1><h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>
			<h1>首页 内容</h1>

			<h1>首页 内容</h1>
			<h1>首页 内容</h1><h1>首页 内容11111111</h1>
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
				routerData:'123',
				acitveHeader:true,
				time:''
			}
		},
		components:{
			appHeader,
			appFooter
		},
		created(){
			this.getRoute();
			this.time = Date.parse(new Date());
		},
		beforeRouteEnter(to,from,next){
			//var self = this;
			next(function(){
				//console.log(to.params.name)
				}
			)
		},
		beforeRouteUpdate(to,from,next){
			console.log('要走了');
			//next();
		},
		watch:{
			'$route':'getRoute'
		},
		mounted:function(){
			console.log("123");
			$checkVariable.checkPhone('152585566445');
			webLayout.preventLouDi('container');
			/*var el = document.getElementsByClassName('container')[0];
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
			var el = document.getElementsByClassName('container')[0];
			var self = this;
			this.EventUtil.addHandler(el,'scroll',function(e){
				var headerElement = document.getElementsByClassName('header')[0];
				var _headerElement = document.getElementsByClassName('home-header')[0];
				if(e.target.scrollTop>10){
					console.log("12");
					headerElement.style.transition = 'height 1s';
					headerElement.style.height = 0;
					setTimeout(function(){
						//_headerElement.style.transition = 'height 1s';
						_headerElement.style.height = '55px';
					},500)

				}
				else{
					headerElement.style.height = '55px';
					_headerElement.style.height = 0;
				}
			})*/
		},
		methods:{
			getRoute(){
				//console.log(this.$route.params.name)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.home{
		.home-header{
			background:#f46f6f;
			height:0;
			transition:all 0.5s;
			.li-item{
				display:flex;
				align-items:center;
				justify-content:center;
				height:55px;
				li{
					float:left;
					width:25%;
					text-align:center;
					color:#fff;
				}
			}
		}
	}
</style>