

<template>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container">
          <a ref="brand" class="navbar-brand" href="/">Our Website</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">\
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/game">Game</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/shoot">Shoot</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'NavBar',
  });
  </script>
  
  <style scoped>
  a {
    cursor: pointer;
  }
  </style>