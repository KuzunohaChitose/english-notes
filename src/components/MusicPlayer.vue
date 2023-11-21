<script setup lang="ts">
import { ref, onMounted } from "vue";

defineProps<{
    path: string;
}>();

const audio = ref<HTMLAudioElement>();

onMounted(() => {
    
});
</script>

<template>
    <audio ref="audio" :src="path" controls loop autoplay></audio>
</template>

<style scoped>
</style>

