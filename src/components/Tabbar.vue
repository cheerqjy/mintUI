<template>
	<div id="Tabbar">
		<div class="tabBox">
			<div class="mint-tabbar is-fixed">
				<router-link to="/waimai" class="mint-tab-item">
					<div class="mint-tab-item-icon">
						<i class="el-icon-upload"></i>
					</div> 
					<div class="mint-tab-item-label">外卖</div>
	    		</router-link>
	    		<router-link to="/dingdan" class="mint-tab-item">
	    			<div class="mint-tab-item-icon">
	    				<i class="el-icon-document"></i>
	    			</div>
	    			<div class="mint-tab-item-label">订单</div>
	    		</router-link>
	    		<router-link to="/faxian" class="mint-tab-item">
	    			<div class="mint-tab-item-icon">
	    				<i class="el-icon-search"></i>
	    			</div> 
	    			<div class="mint-tab-item-label">发现</div>
	    		</router-link>
	    		<router-link to="/wode" class="mint-tab-item">
	    			<div class="mint-tab-item-icon">
	    				<i class="el-icon-menu"></i>
	    			</div>
	    			<div class="mint-tab-item-label">我的</div>
	    		</router-link>
	    	</div>
		</div>

	<router-view></router-view>
	</div>
</template>
<script>
	export default {
	  methods: {
	    handleClick: function() {
	      this.$toast('Hello world!')
	    }
	  }
	}
</script>
<style>
	.tabBox{
		width: 100%;
		height: 44px;
		position: fixed;
		bottom: 0;
		z-index: 99;
		color: white;
		background: rgba(0,0,0,0.7);
	}
	.mint-tabbar .router-link-active {
	    background-color: #eaeaea;
	    color: #26a2ff;
	}
	#Headerbar{
		width: 100%;
		height: 44px;
		position: fixed;
		top: 0;
		z-index: 99;
		color: white;
		background: #1a1f2a;
	}
	.bodyCont{
		margin-top: 70px;
	}
</style>