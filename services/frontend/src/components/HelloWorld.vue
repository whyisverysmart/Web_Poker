<template>
  <div>
    <p>{{ msg }}</p>
    <el-button type="success">Success</el-button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  //name: 'Ping',
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    getMessage() {
      axios.get('/')
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    this.getMessage();
  },
};
</script>