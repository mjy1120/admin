import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        isLogin: false
    },
    mutations: {
        SET_LOGIN_STATUS(state, newVal) {
            state.isLogin = newVal;
        }
    },
    actions: {

    }
});
export default store;