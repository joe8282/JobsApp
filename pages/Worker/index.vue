<template>
	<view>
		<view class="u-flex u-p-l-30 u-p-r-20 u-p-t-10 u-p-b-30" style="background: #FBEE6E;">
			<view class="u-m-r-10">
				<image src="/static/images/logo.png" style="width: 150rpx; height: 120rpx;" mode="aspectFit"></image>
			</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-p-b-20">
					<image src="/static/images/title.png" style="width: 360rpx; height: 20rpx;" mode="aspectFit"></image>
				</view>
				<view>
					<u-search v-model="value" @change="change" @custom="custom" @search="search" shape="square" :clearabled="true"
					 :show-action="false" input-align="left" placeholder="心仪的工作/公司"></u-search>
				</view>
			</view>
		</view>
		<view class="u-flex u-p-l-30 u-p-r-30 u-p-t-30">
			<view class="u-flex-9">
				<text class="u-m-r-20 button">推荐</text>
				<text class="button">深圳<u-icon name="arrow-down-fill" color="#909399" style="margin-left: 5rpx;"></u-icon></text>
			</view>
			<view class="u-flex-3" style="text-align: right;">
				<text class="button">筛选<u-icon name="arrow-down-fill" color="#909399" style="margin-left: 5rpx;"></u-icon></text>
			</view>
		</view>
		<view>
			<view class="box-card u-m-t-15 u-m-l-20 u-m-r-20" style="background:url(/static/images/fire.png);background-repeat: no-repeat; background-position:left top; background-size: 60rpx 60rpx;background-color: #fff;">
				<view class="u-flex u-m-b-10">
					<view class="u-flex-7">
						<view class="u-p-b-15 u-p-t-10">
							<text class="u-font-16" style="font-weight: bold;">JAVA开发工程师</text>
							<image src="/static/images/first.png" class="u-m-l-10" style="width: 35rpx; height: 35rpx;" mode="aspectFit"></image>
						</view>
						<view class="u-font-14">
							<text class="u-m-r-20" style="color: #19C3B9;">五分钟洗车科技</text>
							<text class="u-m-r-20">生活服务</text>
							<text class="u-m-r-20">20-50人</text>
						</view>
					</view>
					<view class="u-flex-3 u-m-t-20" style="text-align: right;">
						<view class="u-font-14 u-m-b-5" style="color: #19C3B9;">15K-25K</view>
						<view class="u-font-12">
							<text class="u-m-r-20 tag">本科</text>
							<text class="tag">3-5年</text>
						</view>
					</view>
				</view>
				<view class="u-m-t-15 u-font-13" style="font-weight: bold;">
					<text class="u-m-r-20 tag">消息队列</text>
					<text class="u-m-r-20 tag">高并发</text>
					<text class="u-m-r-20 tag">MVC</text>
				</view>
				<view class="u-flex u-m-t-15 u-font-12" style="justify-content: space-between;">
					<view>
						<text class="u-m-r-20 tag">年度奖金</text>
						<text class="u-m-r-20 tag">加班补贴</text>
						<text class="u-m-r-20 tag">年度奖金</text>
						<text class="u-m-r-20 tag">年度奖金</text>
					</view>
					<view class="u-font-14">深圳</view>
				</view>
			</view>
			<view class="box-card u-m-t-15 u-m-l-20 u-m-r-20" style="background:url(/static/images/fire.png);background-repeat: no-repeat; background-position:left top; background-size: 60rpx 60rpx;background-color: #fff;">
				<view class="u-flex u-m-b-10">
					<view class="u-flex-7">
						<view class="u-p-b-15 u-p-t-10">
							<text class="u-font-16" style="font-weight: bold;">JAVA开发工程师</text>
							<image src="/static/images/first.png" class="u-m-l-10" style="width: 35rpx; height: 35rpx;" mode="aspectFit"></image>
						</view>
						<view class="u-font-14">
							<text class="u-m-r-20" style="color: #19C3B9;">五分钟洗车科技</text>
							<text class="u-m-r-20">生活服务</text>
							<text class="u-m-r-20">20-50人</text>
						</view>
					</view>
					<view class="u-flex-3 u-m-t-20" style="text-align: right;">
						<view class="u-font-14 u-m-b-5" style="color: #19C3B9;">15K-25K</view>
						<view class="u-font-12">
							<text class="u-m-r-20 tag">本科</text>
							<text class="tag">3-5年</text>
						</view>
					</view>
				</view>
				<view class="u-m-t-15 u-font-13" style="font-weight: bold;">
					<text class="u-m-r-20 tag">消息队列</text>
					<text class="u-m-r-20 tag">高并发</text>
					<text class="u-m-r-20 tag">MVC</text>
				</view>
				<view class="u-flex u-m-t-15 u-font-12" style="justify-content: space-between;">
					<view>
						<text class="u-m-r-20 tag">年度奖金</text>
						<text class="u-m-r-20 tag">加班补贴</text>
						<text class="u-m-r-20 tag">年度奖金</text>
						<text class="u-m-r-20 tag">年度奖金</text>
					</view>
					<view class="u-font-14">深圳</view>
				</view>
			</view>
			<view class="box-card u-m-t-15 u-m-l-20 u-m-r-20" style="background-color: #fff;">
				<view class="u-flex u-m-b-10">
					<view class="u-flex-7">
						<view class="u-p-b-15 u-p-t-10">
							<text class="u-font-16" style="font-weight: bold;">JAVA开发工程师</text>
							<image src="/static/images/first.png" class="u-m-l-10" style="width: 35rpx; height: 35rpx;" mode="aspectFit"></image>
						</view>
						<view class="u-font-14">
							<text class="u-m-r-20" style="color: #19C3B9;">五分钟洗车科技</text>
							<text class="u-m-r-20">生活服务</text>
							<text class="u-m-r-20">20-50人</text>
						</view>
					</view>
					<view class="u-flex-3 u-m-t-20" style="text-align: right;">
						<view class="u-font-14 u-m-b-5" style="color: #19C3B9;">15K-25K</view>
						<view class="u-font-12">
							<text class="u-m-r-20 tag">本科</text>
							<text class="tag">3-5年</text>
						</view>
					</view>
				</view>
				<view class="u-m-t-15 u-font-13" style="font-weight: bold;">
					<text class="u-m-r-20 tag">消息队列</text>
					<text class="u-m-r-20 tag">高并发</text>
					<text class="u-m-r-20 tag">MVC</text>
				</view>
				<view class="u-flex u-m-t-15 u-font-12" style="justify-content: space-between;">
					<view>
						<text class="u-m-r-20 tag">年度奖金</text>
						<text class="u-m-r-20 tag">加班补贴</text>
						<text class="u-m-r-20 tag">年度奖金</text>
						<text class="u-m-r-20 tag">年度奖金</text>
					</view>
					<view class="u-font-14">深圳</view>
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
	page {
		background-color: #F7F7F7;
	}

	.button {
		display: inline-block;
		font-size: 20rpx;
		padding: 10rpx 20rpx;
		background-color: #e4e4e4;
		border-radius: 5rpx;
	}

	.tag {
		display: inline-block;
		padding: 8rpx 10rpx;
		background-color: #f1f1f1;
		border-radius: 5rpx;
		color: #000;
	}

	.box-card {
		background-color: #ffffff;
		box-sizing: border-box;
		border-radius: 16rpx;
		padding: 20rpx
	}
</style>
