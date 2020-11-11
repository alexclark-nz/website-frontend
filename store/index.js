import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default function () {
    return new Vuex.Store({
        state: {
            darkMode: false,
            isContactModalActive: false
        },

        mutations: {
            TOGGLE_DARK_MODE (state, checked) {
                state.darkMode = checked;
                if (window && window !== 'undefined') {
                    localStorage.setItem('darkMode', JSON.stringify(checked));
                }
            },

            TOGGLE_CONTACT_MODAL (state, bool) {
                state.isContactModalActive = bool || !state.isContactModalActive;
            }
        },

        actions: {
            toggleDarkMode ({ commit }, checked) {
                commit('TOGGLE_DARK_MODE', checked);
            },

            toggleContactModal ({ commit }, bool) {
                commit('TOGGLE_CONTACT_MODAL', bool);
            }
        },

        getters: {

        },

        modules: {

        },

        plugins: [

        ]
    })
}
