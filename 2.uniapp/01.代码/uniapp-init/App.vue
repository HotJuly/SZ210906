<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
			wx.login({
				success:async ({code})=>{
					// console.log('code',code)
					const openId = await this.$myAxios('/getOpenId',{code});
					uni.setStorage({
						key:"openId",
						data:openId
					})
				}
			})
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="stylus">
	/*每个页面公共css */
	@import url('/static/iconfont/iconfont.styl');
	page
		height 100%
</style>
