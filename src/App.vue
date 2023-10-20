<script>
import api from "./api";
// import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      response: ""
    };
  },
  methods: {
    async getApi() {
      const response = await api.root.get();
      // const response = await axios.get("http://127.0.0.1:5001");
      this.response = response.data;
    }
  },
}
</script>

<template>
  <h1>Hello World</h1>
  <button @click="getApi">get api</button>
  <p>{{ response }}</p>
</template>
