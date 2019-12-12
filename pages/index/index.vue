<template>
	<view class="content">
		<uni-nav-bar class="app-bar" :title="title"
		status-bar
		:shadow="false"
		background-color="#f5222d"
		color="white"/>
		<view class="active">
			<text class="activity">[现金红包]全民红包倒计时</text>
			<text class="active-status">开抢中</text>
			<text class="active-action" selectable @click="openDetail">点击查看</text>
			<view class="active-content">
				<image class="active-corver" src="../../static/hongbao.svg"></image>
				<view class="fill flex">
					<text class="xx-large text-danger grow">2195元</text>
					<view class="brif flex small">
						<text class="text-gray">距红包池开抢还有</text>
						<text class="text-gray">开抢中,点击速抢</text>
					</view>
				</view>
			</view>
		</view>
		<scroll-view v-if="rank.length" scroll-y class="fill scroll-Y" @scroll="onScroll">
			<uni-load-more :status="loadmore"></uni-load-more>
			<view class="box row">
				<view class="fill user" v-for="rankItem of rank.slice(0,3)" :key="rankItem.user_id">
					<image class="avatar" :src="rankItem.avatar"></image>
					<text class="label">{{rankItem.nickname}}</text>
				</view>
			</view>
			<uni-list>
				<uni-list-item v-for="num in rank.slice(3,rank.length)" :key="num.user_id" :title="num.nickname" :note="num.label"></uni-list-item>
			</uni-list>
		</scroll-view>
	</view>
</template>
<script>
import {uniNavBar, uniLoadMore, uniList, uniListItem} from '@dcloudio/uni-ui'
import { mapState, mapActions } from 'vuex';

export default {
	components: {
		uniNavBar,
		uniLoadMore,
		uniList,
		uniListItem
	},
	data() {
		return {
			title: '现金牛',
			loadmore: 'more'
		}
	},
	computed:{
		...mapState('rank', ['rank'])
	},
	onLoad() {

	},
	methods: {
		openDetail () {
			console.log('openDetail');
		},
		onScroll(e) {
			console.log(e, 'onScroll');
		},
		...mapActions('rank', ['getRank'])
	},
	onReady(){
		this.getRank();
	}
}
</script>
<style lang="scss" scoped>
.content {
	height: -webkit-fill-available;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: flex-start;
	
	.active {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		background-color: var(--mdc-theme-primary, #f5222d);
		color: white;
		text-align: center;
		.activity{
		}
		.active-status{
			font-size: xx-large;
		}
	}
	.active-content{
		margin-top: 16px;
		display: flex;
		align-items: center;
		height: fit-content;
		background-color: white;
		padding: 0 8px;
		.active-corver{
			padding: 4px 8px;
			height: 45px;
			width: 45px;
		}
	}
	
	.brif{
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.scroll-Y{
		overflow-y: auto;
		border-top: 0.5px solid #C8C7CC;
	}
	
	.box{
		width: 100%;
	}
	
	.user{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding:16px 0;
		.avatar{
			width: 45px;
			height: 45px;
			border-radius: 50%;
		}
	}
}
</style>