<template>
	<view>
		<view class="u-m-t-30 u-m-l-30 u-m-r-30 u-m-b-20 u-p-b-20">
			<view class="u-font-16">需要消耗能量：</view>
			<view class="u-m-t-20 u-text-center">
				<text style="font-size: 60rpx; font-weight: bold; color: #FA3534;">600</text>
			</view>
		</view>
		
		<view class="u-m-t-60 u-m-l-30 u-m-r-30 u-m-b-20 u-p-b-20">
			<view class="u-font-16">选择支付方式：</view>
			<view class="u-m-t-20">
				<radio-group>
					<u-section class="u-m-t-40" title="蚕豆余额" :bold="false">
						<radio slot="right" checked color="#18B566"></radio>
					</u-section>
					<u-section class="u-m-t-40" title="微信支付" :bold="false">
						<radio slot="right" color="#18B566"></radio>
					</u-section>
				</radio-group>

			</view>
		</view>
		
		<view class="u-m-t-60 u-m-l-30 u-m-r-30 u-m-b-20 u-p-b-20">
			<view class="u-font-16">备注：</view>
			<view class="u-m-t-20 u-font-14">
				<view class="u-m-t-20">1、付费即表示认可<text style="color: #19BFC1;">《唯才是举客户有偿服务协议》</text></view>
				<view class="u-m-t-20">2、支付成功即表示入职成功</view>
				<view class="u-m-t-20">3、1颗蚕豆=1元人民币</view>
			</view>
		</view>

		<view class="u-flex u-row-between" style="width: 100%; position:fixed; bottom: 0;">
			<text class="u-flex-1 btSubmit" @click="toSend">确认支付</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			toSend() {
				uni.navigateTo({
					url: '/pages/CompanyCenter/positionPaySuccess'
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	// page {
	// 	background-color: #F7F7F7;
	// }

	.wrap {
		padding: 30rpx 30rpx 120rpx 30rpx;
	}

	.btSubmit {
		font-size: 30rpx;
		font-weight: bold;
		background-color: #FBEE6E;
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;
	}

	.btCancel {
		font-size: 30rpx;
		background-color: #eee;
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;
	}
</style>
