export const state = () => ({
    isCollapsed: null
})

export const mutations = {
    toggleCollapse (state, value) {
        state.isCollapsed = value
    }
}

export const actions = {
    async getCollapse({commit}) {
        const response = await this.$axios.$get('settings/sidebar/getopened')
        commit('toggleCollapse', response.data.opened)
    },
    async toggleCollapse({commit, state}) {
        let value = state.isCollapsed ? false : true

        const response = await this.$axios.$post('settings/sidebar/setopened', {
            opened: value
        }, {
            progress: false,
        })

        commit('toggleCollapse', value)
    }
}

export const getters = {
    isCollapsed: state => {
        return state.isCollapsed
    },

}
