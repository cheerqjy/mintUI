<template>
	<div id="dingdanCont">
		<Headerbar></Headerbar>
		<div class="dingdanBox bodyCont">
			<div class="flexBox">
				<el-steps :space="100" :active="1">
				  <el-step title="步骤 1" icon="edit"></el-step>
				  <el-step title="步骤 2" icon="upload"></el-step>
				  <el-step title="步骤 3" icon="picture"></el-step>
				</el-steps>
			</div>
		</div>
	</div>
</template>
<script>
import Headerbar from "./Headerbar.vue"
export default {
	data(){
		return {
			msg:"我是订单"
		}
	},
	components:{
		Headerbar
	}
}
</script>
<style>
	.flexBox{
		padding: 20px 0 0;
		display: flex;
		justify-content: space-around;
	}
</style>