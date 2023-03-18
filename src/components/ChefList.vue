<template>
  <h1>Chefs</h1>
  <h2 v-if="username">Hello, {{ username }}</h2>

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
        <!-- <button v-on:click="onClickMessage">Message</button> -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import router from "@/router";
import { useRouter } from "vue-router";
import {} from "vuex";
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
      user: null,
    };
  },
  created() {
    axios.get("https://randomuser.me/api/?results=21").then((response) => {
      // console.log(response.data);
      this.item = response.data.results;
      this.chefs = response.data.results;
      // this.user = response.data.name;
      console.log(this.user);

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
  width: 100%;
}
.list-items {
  width: 350px;
    height: 200px;
    margin-left: 35px;
    margin-top: 50px;
  /* border-radius: 8px;
  margin: 10px;
  width: 400px;
  height: 200px;
  background-color: #e1dddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); */
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
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 5px;
  width: 400px;
  /* height: 50px; */
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
  .list-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1px;
    padding: 5px;
    margin-top: 50px;
    margin-bottom: 200px;
    width: 100%;
    flex-wrap: nowrap;
  }
  .list-items {
    border-radius: 8px;
    margin: 25px;
    /* width: 150px; */
    height: 200px;
    background-color: #e1dddd;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  .list-items-deets {
    margin-left: 10px;
    font-style: italic;
  }
  h1 {
    text-align: center;
    font-size: 1.5em;
    font-style: italic;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 200px;
    font-weight: 200;
  }
  .chef-image {
    margin-left: 10px;
    border-radius: 50%;
  }
}
</style>
