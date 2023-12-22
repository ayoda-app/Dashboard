<script>
export default {
    methods: {
        signIn() {
            localStorage.setItem("authToken", "todo");
            this.$router.push({ path: "/" });
        }
    }
};
</script>

<template>
   <section class="is-flex is-flex-direction-column gap-25">
        <h1 class="title m-0">Sign In</h1>
        <button @click="signIn" class="button">Sign in</button>
    </section>
</template>