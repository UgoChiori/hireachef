<template>
  <div class="home">
    <div id="chef-image">
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
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
}
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

@media screen and (max-width: 768px) {
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 300px;
    font-style: italic;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
  }
  .home-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    font-style: italic;
    font-family: Arial, Helvetica, sans-serif;
    width: 50%;
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
 #chef-image
  
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
