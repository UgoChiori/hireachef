<template>
  <div class="list-container">
    <h1>Chefs</h1>
    <div v-for="item in chefs" v-bind:key="item.id">
      <div class="list-items">
        <img
          v-bind:src="item.picture.large"
          alt="chef image"
          class="chef-image"
        />
        {{ item.name.gender }}
        {{ item.name.first }}
        {{ item.name.last }}
        {{ item.location.city }}
        {{ item.location.state }}
        {{ item.location.postcode }}
        {{ item.email }}
        <!-- {{ item.registered.age }} -->
        {{ item.phone }}
      </div>
      <div class="chef-button">
        <button v-on:click="onClickViewProfile" router.push="/chefs/:id">
          View Profile
        </button>
        <button v-on:click="onClickBookNow">Book Now</button>
        <button v-on:click="onClickMessage">Message</button>
      </div>
    </div>
  </div>
  <div>
    <button v-on:click="onClickPrev" v-bind:disabled="page === 1">Prev</button>
    <button v-on:click="onClickNext" v-bind:disabled="page === 10">Next</button>
  </div>
</template>
<script>
import axios from "axios";
import router from "@/router";
import { useRouter } from "vue-router";

useRouter();

export default {
  name: "ChefList",

  data() {
    return {
      chefs: [],
    };
  },
  created() {
    axios.get("https://randomuser.me/api/?results=200").then((response) => {
      console.log(response.data);
      this.item = response.data.results;
      this.chefs = response.data.results;
      // console.log(this.chefs[0]);
    });
  },
  methods: {
    onClickViewProfile() {
      console.log("View Profile");
      router.push("/chefs/:id");
    },

    onClickBookNow() {
      console.log("Book Now");
      router.push("/chefs/:id/bookingform");
    },
    onClickMessage() {
      console.log("Message");
      alert("Currently under construction!");
    },
  },
};
</script>
<style>
.list-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-gap: 20px;
  margin: 20px;
}
.list-items {
  border: 1px solid black;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: 450px;
  height: 200px;
  background-color: #f8f4f4;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.chef-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
