<template>
	<view class="content">
		<uni-nav-bar :title="title"
		:status-bar="true"
		left-icon="person-filled"
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
			title: '现金牛'
		}
	},
	onLoad() {

	},
	methods: {
		minibarRightButtonClick () {
		}
	}
}
</script>
<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: center;
	
	.text-area {
		display: flex;
		justify-content: center;
	}
}
</style>
