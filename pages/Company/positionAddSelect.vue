<template>
	<view class="u-wrap">
		<view class="u-search-box">
			<view class="u-search-inner">
				<u-icon name="search" color="#909399" :size="28"></u-icon>
				<text class="u-search-text">快速搜索职位，如:java开发工程师</text>
			</view>
		</view>
		<view class="u-menu-wrap">
			<scroll-view scroll-y scroll-with-animation class="u-tab-view menu-scroll-view">
				<view v-for="(item,index) in type1" :key="index" class="u-tab-item" :class="[current==item.type ? 'u-tab-item-active' : '']"
				 :data-current="index" @tap.stop="swichMenu(item.type)">
					<text class="u-line-1">{{item.name}}</text>
				</view>
			</scroll-view>
			<scroll-view scroll-y class="right-box">
				<view class="page-view" v-for="(item,index) in type2" :key="index">
					<view class="class-item">
						<view class="item-title">
							<text>{{item.name}}</text>
						</view>
						<view class="item-container">
							<view class="thumb-box" v-for="(item1, index1) in type3" :key="index1">
								<view class="item-menu-name" @click="toSelect(item1.name)">{{item1.name}}</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	//import classifyData from "@/common/classify.data.js";
	export default {
		data() {
			return {
				allType: [],
				type1: [],
				type2: [],
				type3: [],
				current: '01', // 预设当前项的值
			}
		},
		onLoad() {
			this.getPosition() //获取职位
		},
		methods: {
			getPosition() {
				uni.request({
					url: this.$serverUrl + '/recOrderCenterT/query/position/list',
					method: 'POST',
					success: (res) => {
						console.log(res)
						uni.hideLoading()
						if (res.data.message == 'success') {
							this.allType = res.data.data
							var type1 = this.allType.filter(function(e) {
								return e.level == 1;
							});
							this.type1 = type1
							var type2 = this.allType.filter(function(e) {
								return e.parentType == type1[0].type
							});
							this.type2 = type2
							this.type3 = this.allType.filter(function(e) {
								return e.parentType == type2[0].type
							});
						}
					},
					fail: function(e) {
						console.log(e)
						uni.hideLoading()
						uni.showToast({
							title: '接口访问异常',
							icon: "none"
						});
					}
				});
			},

			// 点击左边的栏目切换
			async swichMenu(type) {
				if (type == this.current) return;
				this.current = type;
				var type2 = this.allType.filter(function(e) {
					return e.parentType == type
				});
				this.type2 = type2
				this.type3 = this.allType.filter(function(e) {
					return e.parentType == type2[0].type
				});
			},
			toSelect(name) {
				let pages = getCurrentPages(); // 当前页面
				let beforePage = pages[pages.length - 2]; // 前一个页面
				//console.log(beforePage.getDataList());
				uni.navigateBack({
					success: function() {
						beforePage.result.position = name; // 执行前一个页面的onLoad方法
					}
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.u-wrap {
		height: calc(100vh);
		/* #ifdef H5 */
		height: calc(100vh - var(--window-top));
		/* #endif */
		display: flex;
		flex-direction: column;
	}

	.u-search-box {
		padding: 18rpx 30rpx;
	}

	.u-menu-wrap {
		flex: 1;
		display: flex;
		overflow: hidden;
	}

	.u-search-inner {
		background-color: rgb(234, 234, 234);
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		padding: 10rpx 16rpx;
	}

	.u-search-text {
		font-size: 26rpx;
		color: $u-tips-color;
		margin-left: 10rpx;
	}

	.u-tab-view {
		width: 200rpx;
		height: 100%;
	}

	.u-tab-item {
		height: 110rpx;
		background: #f6f6f6;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		color: #444;
		font-weight: 400;
		line-height: 1;
	}

	.u-tab-item-active {
		position: relative;
		color: #000;
		font-size: 30rpx;
		font-weight: 600;
		background: #fff;
	}

	.u-tab-item-active::before {
		content: "";
		position: absolute;
		border-left: 4px solid #FBEE6E;
		height: 32rpx;
		left: 0;
		top: 39rpx;
	}

	.u-tab-view {
		height: 100%;
	}

	.right-box {
		background-color: rgb(250, 250, 250);
	}

	.page-view {
		padding: 16rpx;
	}

	.class-item {
		margin-bottom: 30rpx;
		background-color: #fff;
		padding: 16rpx;
		border-radius: 8rpx;
	}

	.item-title {
		font-size: 26rpx;
		color: $u-main-color;
		font-weight: bold;
	}

	.item-menu-name {
		font-weight: normal;
		font-size: 24rpx;
		color: $u-main-color;
	}

	.item-container {
		display: flex;
		flex-wrap: wrap;
	}

	.thumb-box {
		width: 33.333333%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 20rpx;
	}

	.item-menu-image {
		width: 120rpx;
		height: 120rpx;
	}
</style>
