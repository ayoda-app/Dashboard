<script>
export default {
    name: "Navbar"
};
</script>

<template>
    <nav
        class="
            is-flex is-flex-direction-column box is-shadowless
            m-0 has-background-light gap-15
        "
    >
        <router-link to="/dashboard/predictions" class="subtitle m-0">
            <font-awesome-icon :icon="['fas', 'chart-line']" />
            <label class="ml-3">Predictions</label>
        </router-link>
        <router-link to="/dashboard/insights" class="subtitle m-0">
            <font-awesome-icon :icon="['fas', 'magnifying-glass-chart']" />
            <label class="ml-3">Insights</label>
        </router-link>
        <router-link to="/dashboard/orders" class="subtitle m-0">
            <font-awesome-icon :icon="['fas', 'receipt']" />
            <label class="ml-3">Orders</label>
        </router-link>
        <router-link to="/dashboard/past-orders" class="subtitle m-0">
            <font-awesome-icon :icon="['fas', 'box-archive']" />
            <label class="ml-3">Past Orders</label>
        </router-link>
    </nav>
</template>