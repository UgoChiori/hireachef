<template>
  <nav class="route-buttons">
    <router-link to="/">Home</router-link>
    <router-link to="/chefs">Chefs</router-link>
    <router-link to="/signin">Signin</router-link>
    <router-link to="/register">Register</router-link>
    <button @click="handleSignOut" v-if="isLoggedIn" class="signout">
      Sign Out
    </button>
  </nav>
  <router-view />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
// import PaginationPage from './data/PaginationPage.vue'

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

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
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
  /* background: rgb(180, 106, 171); */
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  /* background: rgb(180, 106, 171); */
}
body {
  /* background: rgb(22, 22, 22) */
}
nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f1f1f1;
  padding: 20px;
}
nav a {
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  font-weight: 350;
  font-family: Work Sans, sans-serif;
  border: 0.1px solid rgb(173, 169, 169);
  padding: 10px;
  border-radius: 15px;
}
.route-buttons {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: #e1dddd;
  padding: 20px;
  border-bottom: 0.1px solid rgb(228, 224, 224);
}
nav a:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(43, 42, 42);
  transition: all 0.3s ease;
}
.signout {
  cursor: pointer;
  background-color: black;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 20px;
}
.signout:hover {
  background-color: grey;
  color: white;
  transition: all 0.3s ease;
}
/* media query */
@media screen and (max-width: 768px) {
  nav {
    flex-direction: column;
    position: absolute;
    /* border: 1px solid red; */
  }
  nav a {
    margin: 5px;

    padding: 7px;
  }
  .signout {
    margin: 5px;
    padding: 7px;
  }
}
</style>
