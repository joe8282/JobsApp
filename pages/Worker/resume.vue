<template>
	<view>
		<view class="u-flex u-row-around u-p-t-20 u-p-b-40" style="background-color: #FBEE6E;">
			<view class="u-text-center u-font-16">
				<view>28</view><view>已投递</view>
			</view>
			<view class="u-text-center u-font-16">
				<view>28</view><view>被查看</view>
			</view>
			<view class="u-text-center u-font-16">
				<view>28</view><view>不合适</view>
			</view>
		</view>
		<view class="u-m-t-30 u-font-16">
			<u-cell-item title="求职意向"><u-icon class="u-m-r-10" slot="icon" name="order" :size="40"></u-icon>JAVA开发工程师</u-cell-item>
			<u-cell-item title="求职状态"><u-icon class="u-m-r-10" slot="icon" name="account" :size="40"></u-icon> 离职-随时到岗</u-cell-item>
			<u-cell-item title="在线微简历"><u-icon class="u-m-r-10" slot="icon" name="bookmark" :size="40"></u-icon> </u-cell-item>
			<u-cell-item title="附近简历" @click="openPage('upload')" ><u-icon class="u-m-r-10" slot="icon" name="email" :size="40"></u-icon> 未上传</u-cell-item>
			<u-cell-item title="屏蔽公司"><u-icon class="u-m-r-10" slot="icon" name="eye-off" :size="40"></u-icon> </u-cell-item>
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
			openPage(which) {
				if(which=='upload'){
					uni.navigateTo({
						url: '/pages/Worker/resumeUpload'
					})
				}

			},
		}
	}
</script>

<style lang="scss" scoped>
	.u-cell-icon {
		width: 36rpx;
		height: 36rpx;
		margin-right: 8rpx;
	}
</style>
