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
    <section class="is-flex is-flex-direction-column gap-25">
        <h1 class="title has-text-orange">Dashboard</h1>
        <Graph
            :aggregateInterval="settings.aggregateInterval"
            :diagramType="settings.diagramType"
        />
        <DashboardSettings
            v-model:aggregateInterval="settings.aggregateInterval"
            v-model:diagramType="settings.diagramType"
        />
        <p>
            *Note: The following chart displays sample restaurant data. This model, on average, is accurate within 24 orders.
        </p>
    </section>
</template>