<template>
	<view class="content">
		<uni-nav-bar :title="title"
		:status-bar="true"
		background-color="#f5222d"
		color="white"/>
	</view>
</template>
<script>
	import {uniNavBar} from '@dcloudio/uni-ui'
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				title: "user"
			};
		}
	}
</script>
<style lang="scss">
.content{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
