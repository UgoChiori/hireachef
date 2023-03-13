<template class="chef-details">
  <div class="chef-details">
    <h1>Chef Details</h1>
    <div v-for="item in chefs" v-bind:key="item.id.value">
      <div class="chef-details-image">
        <img
          v-bind:src="item.picture.large"
          alt="chef image"
          class="chef-image"
        />
      </div>
      <div class="chef-details-info">
        <div class="chef-details-name">
          <h2>{{ item.name.first }} {{ item.name.last }}</h2>
        </div>
        <p>{{ item.name.gender }}</p>
        <div class="chef-details-location">
          <h3>{{ item.location.city }}, {{ item.location.state }}</h3>
        </div>
        <div class="chef-details-email">
          <h3>{{ item.email }}</h3>
        </div>
        <div class="chef-details-phone">
          <h3>{{ item.phone }}</h3>
        </div>
        <div class="chef-button">
          <button v-on:click="onClickBookNow">Book Now</button>
          <button>Message</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
// import BookingForm from "@/components/BookingForm.vue";

export default {
  name: "ChefDetails",
  data() {
    return {
      chefs: [],
    };

  },
  created() {
    axios.get("https://randomuser.me/api/?results=1").then((response) => {
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

  },
};
</script>

<style scoped>
.chef-details {
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 400px;
  background-color: rgb(197, 194, 194);
  /* height: 200px; */
  /* background-color: #f5f5f5; */
}
</style>