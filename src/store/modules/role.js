
const state= {
    roleList: []
}

const getters = {
    getRoleList: state => state.roleList
}

const mutations = {
    setRoleList(state, data) {
        state.roleList = data
    }
}

const actions = {
    async actRoleList(state) {
        let roleList = (await $http.get(url+'role/queryRoleList', {
            params: {
                pageNum: 1,
                pageSize: 100
            }
        })).content.list
        state.commit('setRoleList', roleList)
    }
}

export default {
    state, getters, mutations, actions
}
