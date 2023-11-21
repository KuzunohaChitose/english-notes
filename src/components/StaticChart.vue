<script setup lang="ts">
import { init } from "echarts";
import type { EChartsOption, EChartsType } from "echarts";
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps<{
    option: EChartsOption;
}>();

const div = ref<HTMLDivElement>();
let chart: EChartsType | null = null;

onMounted(() => {
    if (div.value !== undefined) {
        chart = init(div.value);
        chart.setOption(props.option);
    }
});

onUnmounted(() => {
    if (chart !== null) {
        chart.clear();
    }
});
</script>

<template>
    <div class="chart" ref="div"></div>
</template>

<style scoped>
.chart {
    width: 500px;
    height: 300px;
}
</style>
