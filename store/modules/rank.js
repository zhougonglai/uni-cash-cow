export default {
	namespaced: true,
	state: () => ({
		rank: []
	}),
	getter: {},
	actions: {
		getRank({ commit }) {
			uni.request({
				url: 'https://storeserverapi.zhougonglai.now.sh/base/player',
				success: ({data}) => {
					if(data.status){
						commit('setRank', data.data);
					}
				}
			})
		},
	},
	mutations: {
		setRank(state, rank) {
			state.rank = rank;
		},
	},
};