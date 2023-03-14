<template>
  <h1>Chefs</h1>
  <div class="list-container">
    <div v-for="item in chefs" v-bind:key="item.id">
      <div class="list-items">
        <div class="chef-image">
          <img :src="item.picture.large" alt="chef image" />
        </div>
        <div class="list-items-deets">
          <p>{{ item.name.first }} {{ item.name.last }}</p>
          <p>{{ item.name.gender }}</p>
          <p>{{ item.location.city }}</p>
          <!-- <p>{{ item.email }}</p> -->
          <p>{{ item.phone }}</p>
        </div>
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
</template>
<script>
import axios from "axios";
import router from "@/router";
import { useRouter } from "vue-router";

import { ref } from "vue";

useRouter();

const chefs = ref([]);

export default {
  name: "ChefList",
  components: {},

  data() {
    return {
      chefs: [],
      pageNumber: 1,
    };
  },
  created() {
    axios.get("https://randomuser.me/api/?results=21").then((response) => {
      // console.log(response.data);
      this.item = response.data.results;
      this.chefs = response.data.results;

      // console.log(this.chefs + " pages: " + totalPages.value);
    }),
      (error) => {
        console.log(error);
      };
    return {
      chefs,
    };
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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  margin-top: 100px;
}
.list-items {
  border-radius: 8px;
  margin: 10px;
  /* padding: 10px; */
  width: 400px;
  height: 200px;
  background-color: #e1dddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.chef-image {
  margin-left: 10px;
}
.list-items-deets {
  margin-left: 10px;
  font-style: italic;
}
.chef-button {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  padding: 10px;
  width: 400px;
  height: 50px;
}

h1 {
  /* border: 1px solid black; */
  text-align: center;
  font-size: 2em;
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 100px;
}
 @media screen and (max-width: 768px) {
  .chef-image {
    /* border: 1px solid black; */
    margin: 0 2px;
  }
  .list-container{
  display: grid;
   grid-template-rows: repeat(2, 1fr);
   grid-gap: 5px;
  justify-items: center;
  align-items: center;
  /* margin: 10px; */
  padding: 5px;
  /* margin-top: 200px; */
  margin-bottom: 200px;
  }
  .list-items {
    border: 1px solid black;
    border-radius: 8px;
    margin: 15px;
    width: 200px;
    height: 200px;
    background-color: #e1dddd;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  .chef-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin: 5px; */
    padding: 5px;
    width: 210px;
    height: 50px;
  }
  h1 {
   
    text-align: center;
    font-size: 1.5em;
    font-style: italic;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 300px;
    font-weight: 200;
  }
}
</style>
