<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 1=企业,2=求职者,默认1=企业
			// var userType = 2
			// if (userType == 1) {
			// 	uni.switchTab({
			// 		url: '/pages/Company/index'
			// 	});
			// }
			// if (userType == 2) {
			// 	uni.navigateTo({
			// 		url: '/pages/Worker/index'
			// 	})
			// 	uni.setTabBarItem({
			// 		index: 0,
			// 		text: '职位',
			// 		iconPath: '/static/images/tabBar1.png',
			// 		selectedIconPath: '/static/images/tabBar11.png',
			// 		pagePath: "pages/Worder/index"
			// 	})
			// 	uni.setTabBarItem({
			// 		index: 1,
			// 		text: '消息',
			// 		iconPath: '/static/images/tabBar2.png',
			// 		selectedIconPath: '/static/images/tabBar22.png',
			// 		pagePath: "pages/Worder/message"
			// 	})
			// 	uni.setTabBarItem({
			// 		index: 2,
			// 		text: '简历',
			// 		iconPath: '/static/images/tabBar7.png',
			// 		selectedIconPath: '/static/images/tabBar77.png',
			// 		pagePath: "pages/Worder/resume"
			// 	})
			// 	uni.setTabBarItem({
			// 		index: 3,
			// 		text: '个人中心',
			// 		iconPath: '/static/images/tabBar4.png',
			// 		selectedIconPath: '/static/images/tabBar44.png',
			// 		pagePath: "pages/Worder/my"
			// 	})
			// }
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";

	page {
		font-size: 20rpx;
		color: #000;
	}
</style>
