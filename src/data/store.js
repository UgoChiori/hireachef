// import Vue from "vue";
import {createStore} from "vuex";
import axios from "axios";



const store = createStore({
  state() {
    return {
      username: '',
      loggedIn: false,
    }
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    }
  },
  actions: {
    fetchUsername({commit}) {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(res => {
        commit('setUsername', res.data.username);
      })
      .catch(err => {
        console.log(err);
      })
    }
    }
});
export default store;
// use(Vuex);
// //set state using firebase

// export default new Vuex.Store({
//   state: {
//     loggedIn: false,
//   },
//   mutations: {
//     login(state) {
//       state.loggedIn = true;
//     },
//     logout(state) {
//       state.loggedIn = false;
//     },
//   },
//   actions: {
//     login({ commit }) {
//       commit("login");
//     },
//     logout({ commit }) {
//       commit("logout");
//     },
//   },
//   modules: {
//     // auth, // auth: auth
//   },

//   getters: 
//   { isLoggedIn: (state) => state.loggedIn },
//   fetchUser({ commit }, user) {
//     commit("setUser", user);
//   },
//   setUser(state, user) {
//     state.user = user;
//   },
//   // fetch data from axios
//   axios.
//   })
// });

// export default new Vuex.Store({
//   state: {
//     loggedIn: false,
//   },
//   mutations: {
//     login(state) {
//       state.loggedIn = true;
//     },
//     logout(state) {
//       state.loggedIn = false;
//     },
//     cleanAuth(state) {
//       state.chef.isUserLoggedIn = false;
//       localStorage.removeItem("token");
//     },

//   },

// });
