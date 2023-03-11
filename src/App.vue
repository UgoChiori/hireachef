<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/chefs">Chefs</router-link>
    <router-link to="/signin">Signin</router-link>
    <router-link to="/register">Register</router-link>
    <!-- <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button> -->
    
  </nav>
  <router-view />
</template>

<script>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
// import Pagination from "@/data/PaginationPage.vue";
// import { mapActions, mapGetters} from "vuex";

const isLoggedIn = ref(false);
const router = useRouter();

let auth;

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

let handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
export default {
  setup() {
    return {
      handleSignOut,
      isLoggedIn,
    };
  },
};

// export default {
//   name: `app`,
//   methods: {
//     ...mapActions([`setChef`]),
//     onPageChange(page){
//       this.currentPage = page;
//     },
//     },
//     computed: {
//       ...mapGetters([`getChef`]),
//     },

//   components: {
//     Pagination,

//   },

//   setup() {
//       return {
//         handleSignOut,
//         isLoggedIn,
//       };

// }
// };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  background: rgb(180, 106, 171);
}
nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: #f1f1f1; */
  padding: 20px;
}
nav a {
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 350;
  font-family: Work Sans, sans-serif;
  border: 0.1px solid rgb(228, 224, 224);
  padding: 10px;
  border-radius: 15px;
}
nav a:hover {
  background-color: rgb(162, 53, 150);
  color: #fff;
  transition: all 0.3s ease;
}
</style>
