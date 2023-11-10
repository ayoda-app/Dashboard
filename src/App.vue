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
  <main class="box m-5 p-25 columns">
      <div class="is-flex is-flex-0 column">
        <Navbar />
      </div>
      <div class="is-flex is-flex-1 column">
        <router-view></router-view>
      </div>
  </main>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
