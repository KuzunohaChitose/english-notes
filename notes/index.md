---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
navbar: false
hero:
    name: "English Notes"
    text: "一些英语语法知识"
    actions:
        - theme: brand
          text: Getting Start
          link: /quick-start
        - theme: alt
          text: Play Music
          link: "javascript:void(0)"
          id: player
---

<script setup>
import VideoBackground from "../src/components/VideoBackground.vue";
import { onMounted } from "vue";

onMounted(() => {
  document.querySelectorAll("a.VPButton")[1].addEventListener("click", (event) => {
    event.preventDefault();
    const audio = document.querySelector("#msc");
    if (audio.paused) audio.play();
    else audio.pause();
  });
});
</script>

<VideoBackground path="/english-notes/resources/chise.mp4" />
<audio src="/english-notes/resources/1.ogg" loop id="msc" />
