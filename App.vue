<script>
	export default {
		globalData: {
			
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onError(error){
			console.log('App Error', error)
		},
		onUniNViewMessage() {
			console.log("onUniNViewMessage")
		}
	}
</script>
<style lang="scss">
	/*每个页面公共css */
	@import './styles/global.scss';
</style>
