<script>
import Navbar from "./components/elements/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  },
  computed: {
    signedIn() {
      return this.$store.state.authKey !== null;
    }
  }
}
</script>

<template>
  <main class="box m-5 p-25">
    <header class="is-flex is-flex-direction-row gap-15 is-align-items-center">
        <img
            src="./assets/img/logo/svg/Text-Logo-No-Background-Black.svg"
            alt="Ayoda Logo"
            class="has-height-50"
        >
    </header>

    <hr>

    <!-- Authenticated screen -->
    <div v-if="true/*signedIn*/" class="columns">
      <div class="is-flex is-flex-0 column">
        <Navbar />
      </div>
      <div class="is-flex is-flex-1 column">
        <router-view></router-view>
      </div>
    </div>

    <!-- Sign in Screen -->
    <div v-else class="is-flex is-flex-direction-column is-align-items-center gap-15">
      <h1 class="title m-0">Sign in</h1>
      <h2>Email</h2>
      <input type="text" placeholder="email" class="input">
      <h2>Password</h2>
      <input type="password" placeholder="password" class="input">
      <button class="button">Sign in</button>
      <span>or</span>
      <button class="button">Sign in with Google</button>
    </div>
  </main>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
