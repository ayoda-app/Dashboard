<script>
import Chart from "./Chart";
import Navbar from "./Navbar";
import DashboardSettings from "./DashboardSettings";

export default {
    name: "Dashboard",
    data() {
        return {
            settings: {
                aggregationPeriod: "monthly"
            }
        };
    },
    components: {
        Chart,
        Navbar,
        DashboardSettings
    }
};
</script>

<template>
    <main class="box m-5 p-5 is-flex is-flex-direction-row gap-20">
        <Navbar />
        <section>
            <h1 class="title has-text-orange">Ayoda Dashboard</h1>
            <Chart :aggregationPeriod="settings.aggregationPeriod" />
            <DashboardSettings />
        </section>
    </main>
</template>