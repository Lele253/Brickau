import {createStore} from 'vuex'


const state = {
    user: null,

}
export default createStore({

    state,
    getters: {
        user: (state) => {
            return state.user
        },
        password: (state) => {
            return state.password
        }
    },
    actions: {
        user(context, user) {
            context.commit('user', user)
        },
        password(context, password) {
            context.commit('password', password)

        }
    },
    mutations: {
        user(state, user) {
            state.user = user;
        },
        password(state, password) {
            state.password = password;
        }
    },

    modules: {}
})

