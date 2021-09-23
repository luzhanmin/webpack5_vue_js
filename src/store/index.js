import Vue from 'vue'
import Vuex from 'vuex'
import Screen from './modules/screen'
import Layout from './modules/layout'
import User from './modules/user'
import Role from './modules/role'
import Manage from './modules/manage'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Screen,
        Layout,
        User,
        Role,
        Manage
    }
})
