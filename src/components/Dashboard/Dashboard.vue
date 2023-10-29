<script>
import Graph from "./Graph";
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
        DashboardSettings
    }
};
</script>

<template>
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
        <br><br>
        <h1 class ="subtitle">The model is accurate within 24 orders on average</h1>
    </section>
</template>