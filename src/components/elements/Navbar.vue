<script>
export default {
    name: "Navbar"
};
</script>

<template>
    <nav>
        <header class="pb-5">
            <router-link to="/predictions">
                <img
                    src="../../assets/img/logo/svg/Text-Logo-No-Background-Black.svg"
                    alt="Ayoda Logo"
                >
            </router-link>
        </header>
        <main
            class="
                is-flex is-flex-direction-column m-0 gap-15
            "
        >
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
        </main>
    </nav>
</template>

<style scoped>
.nav-option:hover {
    color: #E17324;
}
</style>