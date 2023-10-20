<script>
import api from "./api";

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
