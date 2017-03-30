<template>
	<div id="waimaiCont">
		<Headerbar></Headerbar>
		<div class="waimaiBox bodyCont">
			<h3>{{msg}}</h3>
		</div>
	</div>
</template>
<script>
import Headerbar from "./Headerbar.vue"
export default {
	data(){
		return {
			msg:"我是外卖"
		}
	},
	components:{
		Headerbar
	}
}
</script>