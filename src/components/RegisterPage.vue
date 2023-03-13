<template>
  <div class="inner">
    <div class="photo">
      <img src="../assets/chef.png" alt="chef" />
    </div>
  </div>
  <div class="wrapper">
    <h1>Create an account</h1>

    <div class="details">
      <p>
        Already have an account? <router-link to="/signin">Sign in</router-link>
      </p>
    </div> 
    <!-- <form alt="input-field"> -->
      <input type="text" placeholder="Name" v-model="name" />
      <input type="text" placeholder="Email" v-model="email" />

      <input type="password" placeholder="Password" v-model="password" />

      <div class="button">
        <button @click="register">Submit</button>
        <button @click="signInWithGoogle">Sign in with Google</button>
      </div>
      <div class="footer">
        <p>
          By creating an account, you agree to our
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </p>
      </div>
    <!-- </form> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
// import firebase from "firebase/app"
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  
} from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
// const name = ref("");
const router = useRouter();
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully Registered", data);
      // console.log(currentUser);
      router.push("/chefs/");
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });
};

const signInWithGoogle = () => {
const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((data) => {
      console.log("Successfully Registered", data);
      router.push("/chefs");
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });
};
</script>
 <style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,600;0,700;1,500&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  /* background: rgb(180, 106, 171); */
}
body {
  background: #f5f5f5;
  padding: 0;
}
.inner {
  height: 100%;
  width: 100%;
  position: absolute;
  /* top: 50%; */
  left: 50%;
  /* transform: translate(-50%, -50%); */
  /* box-shadow: 10px 10px 60px rgba(0, 0, 0, 0.125); */
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
}
.photo {
  width: 50%;
  height: 100%;
  padding: 0 50px;
  display: flex;
}

.photo img {
  width: 100%;
  height: 100%;
  /* opacity: 0.6; */
}
.wrapper {
  /* background: black; */
  padding: 50px;
  width: 50%;
  height: 100%;
  border-radius: 0px 10px 10px 0px;
}
.wrapper label {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 5px;
  display: block;
}
.wrapper input {
  width: 100%;
  height: 40px;
  background: #fff;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 0 20px;
  margin-bottom: 20px;
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
  /* border: 1px solid black; */
  margin: 15px;
  /* background-color: #f5f5f5; */
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
  color:black;
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
.button button:last-child {
  margin-right: 0;
  /* color: black; */
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: black;
  border: 1px solid black;
}
.footer p {
  margin: 0;
  padding: 0;
  color: black;
  font-size: 12px;
  font-weight: 500;
}
.footer a {
  color: black;
  /* text-decoration: none; */
  font-weight: 600;
  margin-left: 5px;
}


</style> 
