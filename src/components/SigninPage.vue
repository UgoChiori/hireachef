<template>
  <div class="inner">
    <div class="photo">
      <img src="../assets/chef.png" alt="chef" />
    </div>
  </div>

  <div class="wrapper">
    <h1>Sign In</h1>
    <div class="details">
      <p>
        Don't have an account?
        <router-link to="/register">Sign up</router-link>
      </p>
    </div>
    <div alt="input-field">
      <input type="text" placeholder="Name" v-model="name" />
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <p class="forgot-password">
        <a href="#">Forgot Password?</a>
      </p>

      <p v-if="errMsg">{{ errMsg }}</p>

      <div class="button">
        <button @click="signInWithGoogle">
          Sign In
        </button>

        <!-- <button @click="signOut">Sign Out</button> -->

        <!-- <button @click="signInWithGoogle">Sign In with Google</button> -->

      
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  // signOut as signOutUser,
} from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const errMsg = ref();
const isAuthenticated = ref(false);
const router = useRouter();

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider).then((result) => {
    isAuthenticated.value = true;
    console.log(result.user);
    localStorage.setItem("user", "loggedIn");
    router.push("/chefs");
  });
};

// const signOut = () => {
//   signOutUser(getAuth()).then(() => {
//     isAuthenticated.value = false;
//     router.push("/");
//     console.log("Signed out");
//   });
// };
</script>
<style>
.inner {
  width: 100%;
  height: 100%;
  left: 50%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
}
.photo {
  width: 50%;
  height: 100%;
  padding: 0 50px;
  border-radius: 10px 0px 0px 10px;
}
.photo img {
  width: 100%;
  height: 100%;
  /* opacity: 0.6; */
  border-radius: 10px 0px 0px 10px;
}
.wrapper {
  /* background: black; */
  padding: 50px;
  width: 50%;
  height: 100%;
  border-radius: 0px 10px 10px 0px;
  margin-top: 150px;
}
.wrapper label {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  display: block;
}

.wrapper input {
  width: 100%;
  height: 40px;
  border: 1px solid rgb(74, 69, 69);
  border-radius: 5px;
  background: #fff;
  padding: 0 20px;
  margin-bottom: 20px;
  outline: none;
}
h1 {
  font-size: 24px;
  font-weight: 600;
  color: black;
  margin-bottom: 25px;
  text-transform: capitalize;
  text-align: center;
}
.details {
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -0.04em;
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 27px;
}
.details p {
  margin: 0;
  padding: 0;
  color: black;
}
.details a {
  color: black;
  font-weight: 600;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.button button {
  width: 100%;
  height: 40px;
  background: black;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 0 20px;
  margin-bottom: 20px;
  margin-right: 10px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: whitesmoke;
  cursor: pointer;
}
.button button:hover {
  color: black;
  background-color: white;
  transition: all 0.3s ease;
}
.forgot-password a {
  color: black;
}
@media screen and (max-width: 768px) {
  .inner {
    display: none;
  }
  .wrapper {
    width: 100%;
    border-radius: 10px;
    margin-top: 200px;
  }
  .wrapper input {
    width: 80%;
    height: 30px;
    /* border: 1px solid rgb(74, 69, 69);; */
    border-radius: 5px;
    background: #fff;
    padding: 0 10px;
    margin-bottom: 10px;
    outline: none;
  }
  .button button {
    width: 100px;
    height: 40px;
    background: black;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 0 5px;
    margin-bottom: 10px;
    margin-right: 10px;
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: whitesmoke;
  }
  .forgot-password a {
    color: black;
    font-size: 14px;
  }
  h1 {
    font-size: 20px;
    margin-bottom: 10px;
  }
}
</style>
