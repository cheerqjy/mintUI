<template>
	<div id="Headerbar">
		<i class="el-icon-edit pull-left"></i>
		<h1 class="title">头部{{$route.path}}</h1>
		<i class="el-icon-more pull-right" @click="open2"></i>
	</div>
</template>
<script>
	export default{
		methods: {
	      open2() {
	        this.$prompt('请输入邮箱', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
	          inputErrorMessage: '邮箱格式不正确'
	        }).then(({ value }) => {
	          this.$message({
	            type: 'success',
	            message: '你的邮箱是: ' + value
	          });
	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: '取消输入'
	          });       
	        });
	      }
	    }
	}
</script>
<style>
	.pull-left{
		float: left;
	}
	.pull-right{
		float: right;
	}
	.el-icon-edit{
		position: relative;
		z-index: 101;
		padding-top: 13px;
    	padding-bottom: 13px;
    	margin-left: 10px;
    	font-size: 18px;
	}
	.el-icon-more{
		position: relative;
		z-index: 101;
		padding-top: 13px;
    	padding-bottom: 13px;
    	margin-right: 10px;
    	font-size: 18px;
	}
	.title{
		position: absolute;
		top: 0;
		z-index: 100;
	    display: block;
	    width: 100%;
	    padding: 0;
	    margin: 0 -10px;
	    font-size: 17px;
	    font-weight: 500;
	    line-height: 44px;
	    color: #fff;
	    text-align: center;
	    white-space: nowrap;
	}
</style>