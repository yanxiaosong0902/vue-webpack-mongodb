<template>
	<header class="header" :style="{background:bgColor,color:titleColor}" v-if="show" id="header">
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
			titleColor:String,
			show:{
				type:Boolean,
				default:true
			}
		},
		mounted(){
			document.getElementById('header').addEventListener('touchstart',function(e){
				e.preventDefault();
			})
		}
	}
</script>
<style lang="scss">
@import '../assets/common.scss';
	.header{
		position:absolute;
		top:0;
		left:0;
		height:55px;
		width:100vw;
		//background:#f46f6f;
		text-align:center;
		z-index:9999;
		overflow:hidden;
		transform:translateY(0);
		p{
			//color:$nav-color;
			//color:#fff;
			line-height:55px;
		}
	}
</style>