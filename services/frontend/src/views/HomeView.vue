<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>This is the online Poker website I am building</p>
    <p>{{ text }}</p>
    <button @click="getdata">Click</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      text: '0',
    }
  },
  methods: {
    async getdata() {
      const response = await axios.post('search', {});
      //console.log(response);
      this.text = response.data;
      return;
    }
  }
}
</script>
