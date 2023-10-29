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
  <main class="box m-5 p-25 is-flex is-flex-direction-row gap-20">
        <Navbar />
        <div class="is-flex sis-align-self-stretch has-background-white-ter has-width-4 has-rounded-edges" style="width: 2px;"></div>
        <div class="is-flex is-flex-1">
          <router-view></router-view>
        </div>
  </main>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
