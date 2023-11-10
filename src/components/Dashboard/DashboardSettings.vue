<script>
export default {
    name: "DiagramSettings",
    props: ["aggregateInterval", "diagramType"],
    data() {
        return {
            aggregateIntervalState: this.aggregateInterval,
            diagramTypeState: this.diagramType
        };
    },
    watch: {
        aggregateIntervalState(val) {
            this.$emit("update:aggregateInterval", val);
        },
        diagramTypeState(val) {
            this.$emit("update:diagramType", val);
        }
    }
};
</script>

<template>
    <section class="columns gap-20">
        <div class="column is-flex is-flex-direction-row is-align-items-center gap-10">
            <span>Aggregate</span>
    
            <multiselect
                v-model="aggregateIntervalState"
                :options="['annually', 'quarterly', 'monthly', 'weekly', 'daily']"
                :allow-empty="false"
                :searchable="false"
                select-label=""
                deselect-label=""
                selected-label=""
            ></multiselect>
        </div>

        <div class="column is-flex is-flex-direction-row is-align-items-center gap-10">
            <span class="nowrap">Diagram Type</span>
    
            <multiselect
                v-model="diagramTypeState"
                :options="['line', 'bar']"
                :allow-empty="false"
                :searchable="false"
                select-label=""
                deselect-label=""
                selected-label=""
            ></multiselect>
        </div>
    </section>
</template>
