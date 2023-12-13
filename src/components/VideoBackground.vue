<script setup lang="ts">
import { ref } from "vue";

defineProps<{
    path: string;
}>();

const video = ref<HTMLVideoElement>();
const show = ref(false);
</script>

<template>
    <video
        ref="video"
        class="video"
        :style="show ? { animation: 'fadeIn 1.5s' } : { opacity: '0' }"
        @canplaythrough="() => (show = true)"
        :src="path"
        muted
        autoplay
        loop
    ></video>
</template>

<style scoped>
.video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 65% 50%;
    z-index: -1;
}
</style>
