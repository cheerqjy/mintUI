<template>
	<div id="faxianCont">
		<Headerbar></Headerbar>
		<div class="faxianBox bodyCont">
			<template>
			  <div class="block">
			    <el-carousel trigger="click" height="150px">
			      <el-carousel-item v-for="item in 4">
			        <h3>{{ item }}</h3>
			      </el-carousel-item>
			    </el-carousel>
			  </div>
			</template>
		</div>
		<el-row>
		  <el-col :xs="24" :sm="12" v-for="(o, index) in 8" >
		    <el-card :body-style="{ padding: '0px' }">
		      <img src="./../assets/logo.png" class="image">
		      <div style="padding: 14px;">
		        <span>好吃的汉堡</span>
		        <div class="bottom clearfix">
		          <time class="time">{{ currentDate }}</time>
				  <el-badge :value="12" class="item">
				  	<el-button size="small">评论</el-button>
				  </el-badge>
				  <el-badge :value="3" class="item">
				  	<el-button size="small">回复</el-button>
				  </el-badge>
		        </div>
		      </div>
		    </el-card>
		  </el-col>
		</el-row>
		<div class="block mb70">
		    <div class="flexBox">
				<el-pagination
			      layout="prev, pager, next"
			      :total="1000">
			    </el-pagination>
		    </div>
		</div>
	</div>
</template>
<script>
import Headerbar from "./Headerbar.vue"
export default {
	data(){
		return {
			msg:"我是发现",
			currentDate: new Date()
		}
	},
	components:{
		Headerbar
	}
}
</script>
<style>
  .mb70{
  	margin-bottom: 70px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .item {
  		float: right;
	  margin-top: 10px;
	  margin-right: 40px;
	}
  .flexBox{
  	  padding: 20px 0 0;
  	  display: flex;
  	  justify-content: space-around;
  }
</style>