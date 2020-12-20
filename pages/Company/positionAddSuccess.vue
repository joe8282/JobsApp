<template>
	<view class="wrap">
		<view class="u-m-b-60 u-text-center">
			<u-icon class="u-m-b-30" name="checkbox-mark" color="#47d500" :size="120"></u-icon>
			<view class="u-font-18">恭喜！职位下单成功！</view>
		</view>
		<view class="u-p-20" style="background-color: #e4e4e4;color: #666;">
			<view class="u-font-14 u-m-b-40">快速完成招聘秘笈：</view>
			<view class="u-font-14"><u-icon class="u-m-b-30 u-m-r-10" name="arrow-right-double" color="#47d500" :size="26"></u-icon>分享职位到朋友圈</view>
			<view class="u-font-14"><u-icon class="u-m-b-30 u-m-r-10" name="arrow-right-double" color="#47d500" :size="26"></u-icon>提升招聘信用分</view>
			<view class="u-font-14"><u-icon class="u-m-b-30 u-m-r-10" name="arrow-right-double" color="#47d500" :size="26"></u-icon>及时回复求职者消息</view>
			<view class="u-font-14"><u-icon class="u-m-b-30 u-m-r-10" name="arrow-right-double" color="#47d500" :size="26"></u-icon>主动向求职者求简历</view>
			<view class="u-font-14"><u-icon class="u-m-b-30 u-m-r-10" name="arrow-right-double" color="#47d500" :size="26"></u-icon>加入315求职者保护计划获得更高曝光与信任</view>
		</view>
		<view class="u-m-t-60 u-text-center">
			<u-button class="u-m-b-20" @click="toDetail" style="background-color: #FBEE6E; border: none;">查看详细</u-button>
			<u-link class="u-p-t-20" color="#42D2DF" under-line="true"  font-size="28">保存职位模板</u-link>
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
					url: '/pages/Company/positionDetail'
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
