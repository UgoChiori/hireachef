import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import './index.css'
// import store from "./data/store";

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDfWfmVw13x8skQ88GkxhqSvAD2b7cz-KY",
  authDomain: "hire-a-chef-1be2f.firebaseapp.com",
  projectId: "hire-a-chef-1be2f",
  storageBucket: "hire-a-chef-1be2f.appspot.com",
  messagingSenderId: "547914442421",
  appId: "1:547914442421:web:387caba66e7a7d55d1c0fc",
  measurementId: "G-QNCQBHN2F1",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);
// app.use(store);

app.mount("#app");
