<template>
	<view>
		<view class="u-flex u-p-l-30 u-p-r-20 u-p-t-10 u-p-b-30" style="background: #FBEE6E;">
			<view class="u-m-r-10">
				<image src="/static/images/logo.png" style="width: 150rpx; height: 120rpx;"  mode="aspectFit"></image>
			</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-p-b-20"><image src="/static/images/title.png" style="width: 360rpx; height: 20rpx;"  mode="aspectFit"></image></view>
				<view>
					<u-search v-model="value" @change="change" @custom="custom" @search="search" shape="square" :clearabled="true"
					:show-action="false" input-align="left" placeholder="请输入职位名称"></u-search>
				</view>
			</view>
		</view>
		<view class="u-flex u-p-l-30 u-p-r-30 u-p-t-30">
			<view class="u-flex-9">
				<text class="u-m-r-20 button">推荐</text>
				<text class="u-m-r-20 button">最新</text>
				<text class="button">深圳<u-icon name="arrow-down-fill" color="#909399" style="margin-left: 5rpx;"></u-icon></text>
			</view>
			<view class="u-flex-3" style="text-align: right;">
				<text class="button">筛选<u-icon name="arrow-down-fill" color="#909399" style="margin-left: 5rpx;"></u-icon></text>
			</view>
		</view>
		<view>
			<view class="box-card u-m-t-15 u-m-l-20 u-m-r-20">
				<view class="u-flex u-m-b-10" style="align-items: flex-start;">
					<view class="u-m-r-10">
						<image src="/static/images/header.png" style="width: 100rpx; height: 100rpx; border-radius: 50%;"  mode="aspectFit"></image>
					</view>
					<view class="u-flex-6">
						<view class="u-p-b-15 u-p-t-10">
							<text class="u-font-16" style="font-weight: bold;">周先生</text> 
							<u-rate v-model="rateValue" :count="5" active-color="#FBEE6E" :disabled="false"></u-rate>
							<u-icon name="arrow-down" size="10" color="#909399" style="margin-left: 5rpx;"></u-icon>
							<text class="u-font-12" style="color: #19C3B9;">1</text>
						</view>
						<view class="u-font-13" style="color: #4B4A4A;">3年 | 大专 | 15-18K | 28岁</view>
					</view>
					<view class="u-flex-3 u-m-t-20" style="text-align: right;">
						<text class="u-font-12" style="color: #4B4A4A;">离职-随时到岗</text>
					</view>
				</view>
				<view>
					<text class="u-font-13">软通动力</text>
					<text class="u-font-13" style="font-weight: bold;"> - JAVA开发工程师</text>
				</view>
				<view class="u-m-t-15">
					<text class="u-m-r-20 tag">消息队列</text>
					<text class="u-m-r-20 tag">高并发</text>
					<text class="u-m-r-20 tag">MVC</text>
				</view>
				<view class="u-flex u-m-t-15 u-font-12" style="color: #4B4A4A;justify-content: space-between;">
					<view>擅长数据库优化，尤其是针对高并发处理</view>
					<view>11月6日</view>
				</view>
			</view>
			<view class="box-card u-m-t-15 u-m-l-20 u-m-r-20">
				<view class="u-flex u-m-b-10" style="align-items: flex-start;">
					<view class="u-m-r-10">
						<image src="/static/images/header.png" style="width: 100rpx; height: 100rpx; border-radius: 50%;"  mode="aspectFit"></image>
					</view>
					<view class="u-flex-6">
						<view class="u-p-b-15 u-p-t-10">
							<text class="u-font-16" style="font-weight: bold;">周先生</text> 
							<u-rate v-model="rateValue" :count="5" active-color="#FBEE6E" :disabled="false"></u-rate>
							<u-icon name="arrow-down" size="10" color="#909399" style="margin-left: 5rpx;"></u-icon>
							<text class="u-font-12" style="color: #19C3B9;">1</text>
						</view>
						<view class="u-font-13" style="color: #4B4A4A;">3年 | 大专 | 15-18K | 28岁</view>
					</view>
					<view class="u-flex-3 u-m-t-20" style="text-align: right;">
						<text class="u-font-12" style="color: #4B4A4A;">离职-随时到岗</text>
					</view>
				</view>
				<view>
					<text class="u-font-13">软通动力</text>
					<text class="u-font-13" style="font-weight: bold;"> - JAVA开发工程师</text>
				</view>
				<view class="u-m-t-15">
					<text class="u-m-r-20 tag">消息队列</text>
					<text class="u-m-r-20 tag">高并发</text>
					<text class="u-m-r-20 tag">MVC</text>
				</view>
				<view class="u-flex u-m-t-15 u-font-12" style="color: #4B4A4A;justify-content: space-between;">
					<view>擅长数据库优化，尤其是针对高并发处理</view>
					<view>11月6日</view>
				</view>
			</view>
			<view class="box-card u-m-t-15 u-m-l-20 u-m-r-20">
				<view class="u-flex u-m-b-10" style="align-items: flex-start;">
					<view class="u-m-r-10">
						<image src="/static/images/header.png" style="width: 100rpx; height: 100rpx; border-radius: 50%;"  mode="aspectFit"></image>
					</view>
					<view class="u-flex-6">
						<view class="u-p-b-15 u-p-t-10">
							<text class="u-font-16" style="font-weight: bold;">周先生</text> 
							<u-rate v-model="rateValue" :count="5" active-color="#FBEE6E" :disabled="false"></u-rate>
							<u-icon name="arrow-down" size="10" color="#909399" style="margin-left: 5rpx;"></u-icon>
							<text class="u-font-12" style="color: #19C3B9;">1</text>
						</view>
						<view class="u-font-13" style="color: #4B4A4A;">3年 | 大专 | 15-18K | 28岁</view>
					</view>
					<view class="u-flex-3 u-m-t-20" style="text-align: right;">
						<text class="u-font-12" style="color: #4B4A4A;">离职-随时到岗</text>
					</view>
				</view>
				<view>
					<text class="u-font-13">软通动力</text>
					<text class="u-font-13" style="font-weight: bold;"> - JAVA开发工程师</text>
				</view>
				<view class="u-m-t-15">
					<text class="u-m-r-20 tag">消息队列</text>
					<text class="u-m-r-20 tag">高并发</text>
					<text class="u-m-r-20 tag">MVC</text>
				</view>
				<view class="u-flex u-m-t-15 u-font-12" style="color: #4B4A4A;justify-content: space-between;">
					<view>擅长数据库优化，尤其是针对高并发处理</view>
					<view>11月6日</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				rateValue: 4,
			};
		},
		methods: {
			change(value) {
				// 搜索框内容变化时，会触发此事件，value值为输入框的内容
				//console.log(value);
			},
			custom(value) {
				//console.log(value);
				this.$u.toast('输入值为：' + value)
			},
			search(value) {
				this.$refs.uToast.show({
					title: '搜索内容为：' + value,
					type: 'success'
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	page{background-color: #F7F7F7;}
	.button{
		display:inline-block;
		font-size: 20rpx;
		padding: 10rpx 20rpx;
		background-color: #e4e4e4;
		border-radius: 5rpx;
	}
	.tag{
		display:inline-block;
		font-size: 20rpx;
		padding: 8rpx 10rpx;
		background-color: #f1f1f1;
		border-radius: 5rpx;
		color: #19C3B9;
	}
	.box-card{
		background-color: #ffffff;
		box-sizing: border-box;
		border-radius: 16rpx;
		padding:20rpx
	}
</style>
