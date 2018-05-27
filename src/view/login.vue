<template>
	<div class="login">
		<app-header title="我的"></app-header>
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
		}
	}
</script>