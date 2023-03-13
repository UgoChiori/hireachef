<!-- Create Booking form -->

<template>
  <div class="booking-form">
    <h2>Book a Chef</h2>
    <form @submit.prevent="createBooking">
      <div class="form-group">
        <label for="date">Date</label>
        <input type="date" id="date" v-model="date" />
      </div>
      <div class="form-group">
        <label for="time">Time</label>
        <input type="time" id="time" v-model="time" />
      </div>
      <div class="form-group">
        <label for="guests">Guests</label>
        <input type="number" id="guests" v-model="guests" placeholder="Number Of Guests" />
      </div>
      <div class="form-group">
        <label for="location">Location</label>
        <input type="text" id="location" v-model="location" />
      </div>
      <div class="form-group">
        <label for="special-requests">Special Requests</label>
        <textarea id="special-requests" v-model="specialRequests"></textarea>
      </div>
      <div class="form-group">
        <button type="submit" 
        v-on:click="onClickBook"

        >Book</button>
      </div>
    </form>
  </div>
</template>

<script>


export default {
  name: "BookingForm",
  data() {
    return {
      date: "",
      time: "",
      guests: "",
      location: "",
      specialRequests: "",
    };
  },
  methods: {
    createBooking() {
      console.log("Create Booking");
      console.log(this.date);
      console.log(this.time);
      console.log(this.guests);
      console.log(this.location);
      console.log(this.specialRequests);
    },
     onClickBook() {
      alert("Booking Confirmed, " + this.date + " " + this.time + " " + this.guests + " " + this.location + " " + this.specialRequests + " Thank you for booking with Hire a Chef! ");
      
  },
  },
   

};
</script>

<style>
.booking-form {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: rgb(189, 186, 186);
}
.booking-form h2 {
  text-align: center;
  color: whitesmoke;
}
.booking-form form {
  display: flex;
  flex-direction: column;
}
.booking-form form .form-group {
  margin-bottom: 20px;
}
.booking-form form .form-group label {
  display: block;
  margin-bottom: 5px;
  color: whitesmoke;
  font-weight: 500;
}
.booking-form form .form-group input,
.booking-form form .form-group textarea {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.booking-form form .form-group textarea {
  height: 100px;
}
.booking-form form .form-group button {
  width: 50%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ccc;
  color: black;
  cursor: pointer;
}
.booking-form form .form-group button:hover {
  background-color: #eee;
  transition: 0.3s;
}
</style>