<template>
	<view class="content">
		<button @click="toCompany">企业入口</button>
		<button @click="toWorker">求职者入口</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {
			toCompany: function() {
				uni.switchTab({
				    url: '/pages/Company/index'
				});
			},
			toWorker: function() {
				uni.switchTab({
				    url: '/pages/Worker/index'
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
