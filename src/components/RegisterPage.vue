<template>
  <div>
    <h1>Create an Account</h1>
    <p>
      <input type="text" placeholder="Email" v-model="email" />
    </p>
    <p>
      <input type="password" placeholder="Password" v-model="password" />
    </p>
    <button @click="register">Submit</button>
    <button @click="signInWithGoogle">Sign In With Google</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import firebase from "firebase/app"
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
 } from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const router = useRouter();
const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data)=>{
        console.log("successfully registered", data);
        router.push("/chefs/");
    }) 
    .catch((error)=>{
        console.log(error);
        alert(error.message);
    })

};

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result)=>{
     console.log(result.user)
     router.push("/chefs/");
    })
    .catch((error)=>{
        console.log(error);
    })
};
</script>
