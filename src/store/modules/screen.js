const state = {
    channels: '',
    servicers: '',
    terminals: ''
}

const getters = {
    getChannel(state) {
        return state.channels
    },
    getServicer(state) {
        return state.servicers
    },
    getTerminal(state) {
        return state.terminals
    }
}

const mutations = {
    mtChannel(state, data) {
        state.channels = data
    },
    mtServicer(state, data) {
        state.servicers = data
    },
    mtTerminal(state, data) {
        state.terminals = data
    }
}

const actions = {
    channelAction(state, data) {
        state.commit('mtChannel', data)
    },
    servicerAction(state, data) {
        state.commit('mtServicer', data)
    },
    terminalAction(state, data) {
        state.commit('mtTerminal', data)
    }
}

export default {
    state, getters, mutations, actions
}
