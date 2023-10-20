<script>
export default {
    name: "DiagramSettings",
    data() {
        return {
            settings: {
                aggregate: "monthly"
            }
        };
    },
};
</script>

<template>
    <section class="is-flex is-flex-direction-row">
        <div class="is-flex is-flex-direction-row gap-10">
            <span>Aggregate</span>
    
            <!-- <multiselect
                v-model="settings.aggregate"
                :options="['monthly', 'weekly', 'daily']"
            ></multiselect> -->
        </div>

    </section>
</template>
