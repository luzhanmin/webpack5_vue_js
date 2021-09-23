const state = {
    subNav: []
}

const getters = {
    getSubNav(state) {
        return state.subNav
    }
}

const mutations = {
    mtSubNav(state, data) {
        state.subNav = data
    }
}

const actions = {
    acSubNav(state, data) {
        state.commit('mtSubNav', data)
    }
}

export default {
    state, getters, mutations, actions
}
