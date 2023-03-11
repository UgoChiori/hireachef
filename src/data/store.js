import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        chefs: [],
        chef: {},
    },
    mutations: {
        SET_CHEFS(state, chefs) {
            state.chefs = chefs;
        },
        actions: {
            loadChefs(context) {
                axios.get("https://randomuser.me/api/?results=200/vue_pagination/db")
                .then((response) => {
                    let reversed = response.data.results.reverse();
                    context.commit("SET_CHEFS", reversed);
                    })
                    
                }
            },
        },
        getters: {
            chefs(state) {
                return state.chefs;
            }
        }
});
