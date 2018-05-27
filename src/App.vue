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
	.container{
		position: $version-fixed;
		top:55px;
		bottom:55px;
        width: 100%;
        height: calc(100vh - #{$top-total-height} - 55px);
        overflow-y: auto;
        overflow-x: hidden;
        background: white;
        transform: translate3d(0, 0, 0);
        -webkit-overflow-scrolling: touch;
	}
</style>