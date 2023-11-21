<script setup lang="ts">
import { contentLoaded } from "../mermaid";
import { onMounted } from "vue";

onMounted(() => {
    contentLoaded();
});
</script>

<template>
    <pre class="mermaid">
        <slot></slot>
    </pre>
</template>

<style>
.mermaid svg {
    margin: auto;
}
</style>