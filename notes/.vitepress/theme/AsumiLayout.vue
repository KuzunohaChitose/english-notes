<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { CSSProperties, computed, onMounted, ref, watch } from "vue";

const { page } = useData();
const index = ref(1);
const getCssProp: (num: number) => CSSProperties = (num) => ({
    position: "fixed",
    bottom: "0",
    right: "0",
    height: "75%",
    opacity: "0.75",
});

watch(page, () => {
    if (index.value >= 5) index.value = 1;
    else index.value++;
});

const show = ref(true);

const res = computed(() => page.value.filePath !== "index.md" && show.value);

onMounted(() => {
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 1200 && window.innerHeight >= 550) {
            show.value = true;
        } else {
            show.value = false;
        }
    });
});
</script>

<template>
    <img
        v-for="i in [1, 2, 3, 4, 5]"
        :key="i === index ? `${i}-show` : `${i}-hide`"
        :src="`/english-notes/resources/asumi/${i}.png`"
        :style="getCssProp(i)"
        v-show="i === index && res"
    />
    <DefaultTheme.Layout />
</template>
