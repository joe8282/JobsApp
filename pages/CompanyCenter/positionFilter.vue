<template>
	<view>
		<view class="u-m-t-30 u-m-l-30 u-m-r-30 u-m-b-20 u-p-b-20">
			<view class="u-font-16" style="font-weight: bold;">职位</view>
			<view class="u-m-t-20">
				<u-button class="u-m-r-20 u-m-b-20" v-for="(item,index) in hasPositions" :key="index" :type="item.isOn==true?'success':'default'"
				 size="mini" @click="toSelect(item,'position')">{{item.name}}</u-button>
			</view>
		</view>
		<u-line class="u-line" color="#ccc" length="100%"></u-line>

		<view class="u-m-t-30 u-m-l-30 u-m-r-30 u-m-b-20 u-p-b-20">
			<view class="u-font-16" style="font-weight: bold;">排序</view>
			<view class="u-m-t-20">
				<u-button class="u-m-r-20 u-m-b-20" v-for="(item,index) in hasSorts" :key="index" :type="item.isOn==true?'success':'default'"
				 size="mini" @click="toSelect(item,'sort')">{{item.name}}</u-button>
			</view>
		</view>
		<u-line class="u-line" color="#ccc" length="100%"></u-line>

		<view class="u-flex u-row-between" style="width: 100%; position:fixed; bottom: 0;">
			<text class="u-flex-1 btCancel" @click="toReset">重置</text>
			<text class="u-flex-1 btSubmit" @click="toSend">确定</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hasPositions: [{
						value: '全部',
						name: '全部',
						isOn: false
					},
					{
						value: 'JAVA工程师',
						name: 'JAVA工程师',
						isOn: false
					},
					{
						value: '运营专员',
						name: '运营专员',
						isOn: false
					},
					{
						value: 'JAVA工程师',
						name: 'JAVA工程师',
						isOn: false
					},
					{
						value: '运营专员',
						name: '运营专员',
						isOn: false
					},
				],
				hasSorts: [{
						value: '按最新时间',
						name: '按最新时间',
						isOn: false
					},
					{
						value: '按紧急程度',
						name: '按紧急程度',
						isOn: false
					},
					{
						value: '按能量大小',
						name: '按能量大小',
						isOn: false
					},
				],
				des3: '',
			}
		},
		methods: {
			toSelect(e, type) {
				console.log(e)
				if (type == 'position') {
					this.hasPositions = this.hasPositions.map(function(item) {
						item.isOn = false
						return item
					})
				}
				if (type == 'sort') {
					this.hasSorts = this.hasSorts.map(function(item) {
						item.isOn = false
						return item
					})
				}
				e.isOn = true
			},
			toReset() {
				this.hasPositions = this.hasPositions.map(function(item) {
					item.isOn = false
					return item
				})
				this.hasSorts = this.hasSorts.map(function(item) {
					item.isOn = false
					return item
				})
			},
			toSend() {
				var _this = this;
				let pages = getCurrentPages(); // 当前页面
				let beforePage = pages[pages.length - 2]; // 前一个页面
				//console.log(beforePage.getDataList());
				uni.navigateBack({
					success: function() {
						//beforePage.result.Skills = _this.selectTags; // 执行前一个页面的onLoad方法
					}
				});
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
