<template>
	<view>
		<view class="u-m-t-30 u-m-l-30 u-m-r-30">
			<view class="u-m-t-15">
				<textarea class="JTxtArea" v-model="address" auto-height placeholder="请填写详细工作地点" />
			</view>
			<view class="u-font-12 u-m-t-30 u-type-info">请确保工作地点与营业执照上的地址一致</view>
		</view>
		
		<view class="u-font-32" @click="toSend" style="font-weight: bold; width: 100%; position:fixed; bottom: 0; background-color: #FBEE6E;text-align: center; height: 80rpx; line-height: 80rpx;">确定</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address: '',
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
						beforePage.result.address = _this.address; // 执行前一个页面的onLoad方法
					}
				});
			},
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #F7F7F7;
	}

	.wrap {
		padding: 30rpx 30rpx 120rpx 30rpx;
	}

	.JTxtArea {
		background-color: #fff;
		border-radius: 5rpx;
		width: calc(100% - 16px);
		// box-sizing: border-box;
		padding: 20rpx;
		min-height: 200rpx;
		line-height: 150%;
		position: relative;
	}
</style>
