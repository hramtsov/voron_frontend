export const state = () => ({
	cars: {}
})

export const mutations = {
	changeSelected(state, cars) {
		state.cars = cars
	}
}

export const actions = {

	async getList({ commit }) {
		const response = await this.$axios.$get('cars/get_selected', {
			progress: false,
		})
		commit('changeSelected', response.data)
	},
	async changeSelected({ commit, state }, car) {

		const response = await this.$axios.$post('cars/update_selected/' + car.id, {
			active: car.active
		}, {
			progress: false,
		})

		if (response.data.update) {
			commit('changeSelected', response.data.cars)
		}

	}
}

export const getters = {
	get: state => {
		return state.cars
	},
	getList: state => {
		let list = [];
		for (var key in state.cars) {
			list.push(key);
		}
		return list
	},

}
