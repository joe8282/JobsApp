<template>
	<view>
		<view class="u-m-t-30 u-m-l-30 u-m-r-30">
			<view class="u-font-12 u-type-info">最多选10个福利标签，选中的前4个福袋标签会出现在职位发布页 面,可吸引更多的求职者关注</view>
			<view class="u-m-t-20 u-m-b-20 u-p-b-20">
				<view class="u-font-16" style="font-weight: bold;">已选</view>
				<view class="u-m-t-15">
					<u-tag class="u-m-r-20 u-m-b-20" v-for="(item,index) in selectTags" :key="index" :text="item.name" type="success" :closeable="true" />
				</view>
			</view>
		</view>
		<u-line class="u-line" color="#ccc" length="100%"></u-line>
		<view class="u-m-t-30 u-m-l-30 u-m-r-30 u-m-b-20 u-p-b-20">
			<view class="u-font-16" style="font-weight: bold;">可选</view>
			<view class="u-m-t-15">
				<u-tag class="u-m-r-20 u-m-b-20" v-for="(item,index) in hasTags" :key="index" :text="item.name" :mode="item.isOn==true?'dark':'plain'" @click="toSelect(item)" type="success" />
			</view>
			<div class="u-m-t-30"><u-link color="#29B4E7" font-size="12" :under-line="false" href="#">自定义添加</u-link></div>
		</view>
		
		<view class="u-font-32" @click="toSend" style="font-weight: bold; width: 100%; position:fixed; bottom: 0; background-color: #FBEE6E;text-align: center; height: 80rpx; line-height: 80rpx;">确定</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectTags: [],
				hasTags: [{
						value: '股权激励',
						name: '股权激励',
						isOn: false
					},
					{
						value: '住房补贴',
						name: '住房补贴',
						isOn: false
					},
					{
						value: '五险一金',
						name: '五险一金',
						isOn: false
					},
					{
						value: '项目奖金',
						name: '项目奖金',
						isOn: false
					},
					{
						value: '周末双休',
						name: '周末双休',
						isOn: false
					},
{
						value: '股权激励',
						name: '股权激励',
						isOn: false
					},
					{
						value: '住房补贴',
						name: '住房补贴',
						isOn: false
					},
					{
						value: '五险一金',
						name: '五险一金',
						isOn: false
					},
					{
						value: '项目奖金',
						name: '项目奖金',
						isOn: false
					},
					{
						value: '周末双休',
						name: '周末双休',
						isOn: false
					},
				],
				des3: '',
			}
		},
		methods: {
			toSelect(e) {
				console.log(e)
				this.selectTags.push(e)
				e.isOn = true
			},
			toSend() {
				var _this = this;
				let pages = getCurrentPages(); // 当前页面
				let beforePage = pages[pages.length - 2]; // 前一个页面
				//console.log(beforePage.getDataList());
				uni.navigateBack({
					success: function() {
						beforePage.result.Welfares = _this.selectTags; // 执行前一个页面的onLoad方法
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
		padding: 10rpx;
		min-height: 300rpx;
		line-height: 150%;
		position: relative;

		&:after {
			content: attr(data-maxnum);
			position: absolute;
			right: 10rpx;
			bottom: 0rpx;
			font-size: 12rpx;
			color: #ccc;
		}
	}
</style>
