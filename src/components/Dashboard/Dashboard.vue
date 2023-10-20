<script>
import Chart from "./Chart";
import Navbar from "./Navbar";

export default {
    name: "Dashboard",
    components: {
        Chart,
        Navbar
    }
};
</script>

<template>
    <main class="box m-5 p-5 is-flex is-flex-direction-row gap-20">
        <Navbar />
        <section>
            <h1 class="title has-text-orange">Ayoda Dashboard</h1>
            <Chart />
        </section>
    </main>
</template>