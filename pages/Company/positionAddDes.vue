<template>
	<view>
		<view class="wrap">
			<view class="u-m-b-20 u-p-b-20">
				<view class="u-font-14 u-type-info">任职要求</view>
				<view class="u-m-t-15">
					<textarea class="JTxtArea" v-model="des1" maxlength="800" :data-maxnum="des1.length+'/800字'" auto-height placeholder="详细具体的任职要求不仅能有效提高简历匹配度，更能提高面试效率" />
				</view>
			</view>
			<view class="u-m-b-20 u-p-b-20">
				<view class="u-font-14 u-type-info">工作内容</view>
				<view class="u-m-t-15">
					<textarea class="JTxtArea" v-model="des2" maxlength="1500" :data-maxnum="des2.length+'/1500字'" auto-height placeholder="详细清晰的工作内容能让求职者更熟悉工作" />
				</view>
			</view>
			<view class="u-m-b-20 u-p-b-20">
				<view class="u-font-14 u-type-info">职位亮点</view>
				<view class="u-m-t-15">
					<textarea class="JTxtArea" v-model="des3" maxlength="200" :data-maxnum="des3.length+'/200字'" auto-height placeholder="富有特色的职位亮点也是提高关注度的重要因素" />
				</view>
			</view>
		</view>
		
		<view class="u-font-32" @click="toSend" style="font-weight: bold; width: 100%; position:fixed; bottom: 0; background-color: #FBEE6E;text-align: center; height: 80rpx; line-height: 80rpx;">确定</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				des1:'',
				des2:'',
				des3:'',
			}
		},
		methods: {
			toSend() {
				var _this = this;
				let pages = getCurrentPages(); // 当前页面
				let beforePage = pages[pages.length - 2]; // 前一个页面
				//console.log(beforePage.getDataList());
				uni.navigateBack({
				    success: function() {
				        beforePage.result.des = _this.des1; // 执行前一个页面的onLoad方法
				    }
				});
			},
		}
	}
</script>

<style scoped lang="scss">
	page{background-color: #F7F7F7;}
	.wrap {
		padding: 30rpx 30rpx 120rpx 30rpx;
	}
	.JTxtArea {
		background-color: #fff;
		border-radius: 5rpx;
		width: calc(100% - 16px);
		// box-sizing: border-box;
		padding: 20rpx;
		min-height: 300rpx;
		line-height: 150%;
		position: relative;
		&:after{
			content: attr(data-maxnum);
			position: absolute;
			right: 10rpx;
			bottom: 0rpx;
			font-size: 12rpx;
			color: #ccc;
		}
	}
</style>

