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
        <input type="number" id="guests" v-model="guests" />
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