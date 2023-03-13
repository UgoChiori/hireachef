<template>
  <div class="home">
    <div class="chef-image">
      <img src="../assets/chef.png" alt="chef" />
    </div>
    <div class="home-text">
      <h1>Find the best chefs in your area</h1>

      <router-link to="/register">
        <button class="home-button">Find a Chef</button>
      </router-link>
    </div>
  </div>
</template>

<script></script>
<style scoped>
.home-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
}
.home-button {
  cursor: pointer;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 20px;
}
.home-button:hover {
  background-color: grey;
  color: white;
  transition: all 0.3s ease;
}
.chef-image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
</style>
