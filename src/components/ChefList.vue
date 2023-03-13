<template>
  <div class="list-container">
    <h1>Chefs</h1>
    <div
      v-for="item in chefs" v-bind:key="item.id">
      
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
  components: {
   
  },

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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
 
  
}
.list-items {
  /* display: flex; */
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: 400px;
  height: 200px;
  background-color: #e1dddd;;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.chef-image {
 
  margin-left: 10px;

}
.list-items-deets {
  margin-left: 10px;
  font-style: italic;
}
.pagination-buttons {
  padding: 8px;
  margin: 2px;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
}
.pagination-row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
}
.list-container h1 {
  border: 1px solid black;
  color: black;
  
}
</style>



