<template>
  <div>
    <h1>Chefs</h1>
    <li>Gender</li>
    <li>Name</li>
    <li>Location</li>
    <li>Rates</li>

    <ul v-for="item in chefs" v-bind:key="item.id">
      <li>
      
      </li>
      </ul>
  </div>
   

</template>

<script>
import axios from "axios";

export default {
  name: "ChefsPage",
  data() {
    return {
      chefs: [],
    };
  },
  created() {
    axios.get("https://randomuser.me/api/?results=200").then((response) => {
      console.log(response.data);
      this.chefs = response.data;
    });
  },
};
</script>
