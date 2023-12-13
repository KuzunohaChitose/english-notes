---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
    name: "English Notes"
    text: "一些英语语法知识"
    tagline: "记录学习英语语法的过程"
    # image:
    #     src: /resources/logo.png
    #     alt: Chitose
    #     style:
    #         box-shadow: "#3891ab 0 0 20px 5px"
    #         border-radius: 50%
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
import { onMounted, onUnmounted } from "vue";
const onClick = (event) => {
  event.preventDefault();
  const audio = document.querySelector("#msc");
  if (audio.paused) audio.play();
  else audio.pause();
};

onMounted(() => {
  const a = document.querySelectorAll("a.VPButton")[1];
  a.addEventListener("click", onClick);
  document.querySelector("header").style.visibility = "hidden";
  document.body.style.overflow = "hidden";
  document.lastChild.className = "dark";
  document.querySelector(".text").style.color = "#5b83a8";
});
onUnmounted(() => {
  document.querySelector("header").style.visibility = "visible";
  document.body.style.overflow = "auto";
  document.lastChild.className = "";
});
</script>

<VideoBackground path="/english-notes/resources/chise.mp4" />
<audio src="/english-notes/resources/1.ogg" loop id="msc" />