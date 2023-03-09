import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfWfmVw13x8skQ88GkxhqSvAD2b7cz-KY",
  authDomain: "hire-a-chef-1be2f.firebaseapp.com",
  projectId: "hire-a-chef-1be2f",
  storageBucket: "hire-a-chef-1be2f.appspot.com",
  messagingSenderId: "547914442421",
  appId: "1:547914442421:web:387caba66e7a7d55d1c0fc",
  measurementId: "G-QNCQBHN2F1"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = createApp(App)

app.use(router)

app.mount('#app')