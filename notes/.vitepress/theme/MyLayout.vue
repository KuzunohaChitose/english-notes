<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { computed, onMounted, ref, watch } from "vue";

const { Layout } = DefaultTheme;
const { isDark, page } = useData();

const show = ref(true);

const res = computed(
    () => page.value.filePath !== "index.md" && !isDark.value && show.value
);

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
    <div class="asumi" v-if="res"></div>
    <Layout></Layout>
</template>
