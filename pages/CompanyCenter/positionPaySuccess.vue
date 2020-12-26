<template>
	<view class="wrap">
		<view class="u-m-b-60 u-text-center">
			<u-icon class="u-m-b-30" name="checkbox-mark" color="#47d500" :size="120"></u-icon>
			<view class="u-font-18">支付成功！</view>
		</view>
		<view class="u-p-20">
			<view class="u-font-14 u-m-b-40">亲，恭喜你获得10分的积分， 希望再接再励哦，木木哒!!</view>
		</view>
		<view class="u-m-t-60 u-text-center">
			<u-button class="u-m-b-20" @click="toDetail" style="background-color: #FBEE6E; border: none;">完成</u-button>
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
			toDetail(e) {
				uni.navigateTo({
					url: '/pages/CompanyCenter/positionManage'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 30rpx;
	}

</style>
