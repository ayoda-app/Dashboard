<script>
export default {
    name: "Navbar",
    methods: {
        signOut() {
            localStorage.removeItem("authToken");
            this.$router.push({ path: "/" });
        }
    }
};
</script>

<template>
    <nav class="is-flex is-flex-direction-column m-0 gap-15">
        <router-link to="/predictions" class="nav-option subtitle m-0 nowrap">
            <font-awesome-icon :icon="['fas', 'chart-line']" />
            <label
                class="ml-3"
                :class="{ 'is-underlined': $route.name === 'predictions' }"
            >Predictions</label>
        </router-link>
        <router-link to="/insights" class="nav-option subtitle m-0 nowrap">
            <font-awesome-icon :icon="['fas', 'magnifying-glass-chart']" />
            <label
                class="ml-3"
                :class="{ 'is-underlined': $route.name === 'insights' }"
            >Insights</label>
        </router-link>
        <router-link to="/orders" class="nav-option subtitle m-0 nowrap">
            <font-awesome-icon :icon="['fas', 'receipt']" />
            <label
                class="ml-3"
                :class="{ 'is-underlined': $route.name === 'orders' }"
            >Orders</label>
        </router-link>
        <router-link to="/past-orders" class="nav-option subtitle m-0 nowrap">
            <font-awesome-icon :icon="['fas', 'box-archive']" />
            <label
                class="ml-3"
                :class="{ 'is-underlined': $route.name === 'past-orders' }"
            >Past Orders</label>
        </router-link>
        <a @click="signOut" class="nav-option subtitle m-0 nowrap">
            <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" />
            <label
                class="ml-3"
            >Sign Out</label>
        </a>
    </nav>
</template>

<style scoped>
.nav-option:hover {
    color: #E17324;
}
</style>