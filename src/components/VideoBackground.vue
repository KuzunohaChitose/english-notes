<script setup lang="ts">
defineProps<{
    path: string;
}>();
</script>

<template>
    <video class="video" :src="path" muted autoplay loop></video>
</template>

<style scoped>
.video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  z-index: -1;
  opacity: 1;
}
</style>
