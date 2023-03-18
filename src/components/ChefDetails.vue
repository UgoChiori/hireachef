<template>
  <h4>Chef Details</h4>
  <div class="chef-details">
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
          <div class="list-items-deets">
            <p>{{ item.name.first }} {{ item.name.last }}</p>
            <p>{{ item.name.gender }}</p>
            <p>{{ item.location.city }}</p>
            <!-- <p>{{ item.email }}</p> -->
            <p>{{ item.phone }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="chef-button">
    <button v-on:click="onClickBookNow">Book Now</button>
    <button v-on:click="onClickMessage">Message</button>
  </div>
  <router-link to="/">Go to Home</router-link>
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
    onClickMessage() {
     
      console.log("Message");
      alert("Currently under construction!");
    },
    
  },
};
</script>

<style scoped>
.chef-details {
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: 400px;
  height: 200px;
  background-color: #e1dddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  /* border: 2px solid red; */
  margin-left: 500px;
}
h4 {
  text-align: center;
  margin-top: 100px;
}
.chef-details-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
}
.chef-details-name {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
}
.list-items-deets {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
}
.chef-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 650px;
  padding: 10px;
}

@media (max-width: 768px) {
  .chef-details {
    width: 300px;
    height: 200px;
    margin-left: 35px;
    margin-top: 50px;
  }
  .chef-details-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
  }
  .chef-details-name {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
  }
  .list-items-deets {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
  }
  .chef-button {
    /* display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 100px;
    padding: 10px; */
    display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 5px;
  width: 400px;
  }
  h4{
    margin-top: 300px;

  }
}
</style>
