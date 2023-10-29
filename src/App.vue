<script>
import Navbar from "./components/elements/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  }
}
</script>

<template>
  <main class="box m-5 p-5 is-flex is-flex-direction-row gap-20">
        <Navbar />
        <router-view></router-view>
  </main>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
