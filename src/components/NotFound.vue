<!--404 error page-->

<template>
  <div class="not-found">
    <h1>Sorry</h1>
    <h2>Page not found</h2>
    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
    <router-link to="/">Go to Home</router-link>
  </div>
  </template>

  <script>
  export default {
    name: "NotFound",
    
  };
  </script>