<script>
import Graph from "./Graph";
import Navbar from "./Navbar";
import DashboardSettings from "./DashboardSettings";

export default {
    name: "Dashboard",
    data() {
        return {
            settings: {
                aggregateInterval: "monthly",
                diagramType: "line"
            }
        };
    },
    components: {
        Graph,
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
            <Graph
                :aggregateInterval="settings.aggregateInterval"
                :diagramType="settings.diagramType"
            />
            <DashboardSettings
                v-model:aggregateInterval="settings.aggregateInterval"
                v-model:diagramType="settings.diagramType"
            />
        </section>
    </main>
</template>