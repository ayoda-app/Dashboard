<script>
import Navbar from "./components/elements/Navbar.vue";

const SIGN_IN_URL = "https://ayoda-app-login.auth.us-east-2.amazoncognito.com/login?client_id=30edmu1p20mm0pmjs4scmfuefl&response_type=code&scope=email+openid&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Forders";

export default {
  name: "App",
  moethods: {
    toRoot() {
      this.$router.push({ path: "/" });
    }
  },
  components: {
    Navbar
  }
}
</script>

<template>
  <main class="box m-5 p-25">
    <header class="is-flex is-flex-direction-row gap-15 is-align-items-center">
        <a @click="toRoot" class="is-flex">
          <img
              src="./assets/img/logo/svg/Text-Logo-No-Background-Black.svg"
              alt="Ayoda Logo"
              class="has-height-50"
          >
        </a>
    </header>
    <hr>
    <section class="columns">
      <div v-if="$route.name !== 'login' && $route.name !== 'page-not-found'" class="is-flex is-flex-0 column">
        <Navbar />
      </div>
      <div class="is-flex is-flex-1 column">
        <router-view></router-view>
      </div>
    </section>
  </main>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
