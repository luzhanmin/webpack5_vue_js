
const state = {
    xaToken: '',
    userInfo: null,
    deptTree: null,
    expireTime: 0,
    xaScene: 'inner' // inner, sub, primary
}
const getters = {
    getToken: state => state.xaToken || localStorage.getItem('xa_token'),
    getUserInfo: state => state.userInfo || localStorage.getItem('xa_userInfo'),
    getDeptTree: state => state.deptTree,
    getExpireTime: state => state.expireTime || localStorage.getItem('xa_expireTime'),
    getScene: state => state.xaScene || localStorage.getItem('xa_scene')
}

const mutations = {
    setToken(state, token) {
        state.xaToken = token
        localStorage.setItem('xa_token', token)
    },
    setUserInfo(state, userInfo) {
        state.userInfo = userInfo
        localStorage.setItem('xa_userInfo', userInfo)
    },
    setDept(state, data) {
        state.deptTree = data
    },
    setExpireTime(state, time) {
        state.expireTime = time
        localStorage.setItem('xa_expireTime', time)
    },
    setScene(state, context) {
        state.xaScene = context
        localStorage.setItem('xa_scene', context)
    }
}

const actions = {
    actToken(state, token) {
        state.commit('setToken', token)
    },
    async actUserInfo(state, flag) {
        let userInfo = null
        flag ? userInfo = (await $http.get(url+'authUser/getUserInfo')).content : userInfo=null
        state.commit('setUserInfo', JSON.stringify(userInfo))
        let parentId = userInfo ? userInfo.parentId : null,
            partnerId = userInfo ? userInfo.partnerId : null
        let scene = (parentId && partnerId) ? 'sub' : ((!parentId && partnerId) ? 'primary' : 'inner')
        state.commit('setScene', scene)
        return userInfo
    },
    actExpireTime(state, time) {
        state.commit('setExpireTime', time)
    },
    actAuthId(state, id) {
        state.commit('setAuthId', id)
    },
    async refreshToken(state) {
        await $http.get(url+'authUser/refreshToken').then(res => {
            state.commit('setToken', res.content.token)
            state.commit('setExpireTime', res.content.expireTime)
        })
    },
    async updateUserInfo(state) {
        let userInfo = (await $http.get(url+'authUser/getUserInfo')).content
        state.commit('setUserInfo', JSON.stringify(userInfo))
    }
}

export default {
    state, getters, mutations, actions
}
