import {createStore} from 'vuex'

export default createStore({
    state: {
        user: false,
    },
    getters: {
        user: (state) => {
            return state.user
        },
    },
    mutations: {
        user(state, user) {
            state.user = user
        },
    },
    actions: {
        user(context, user) {
            context.commit('user', user)
        },
    },
    modules: {}
})

