---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
    name: "English Notes"
    text: "Some English grammar knowledge..."
    image:
        src: /resources/logo.png
        alt: Chitose
        style:
            box-shadow: "#3891ab 0 0 20px 5px"
            border-radius: 50%
    actions:
        - theme: brand
          text: Getting Start
          link: /md/quick-start
        - theme: alt
          text: Play Music
          link: "javascript:void(0)"
          id: player
# features:
#     - title: Future A
#       details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#     - title: Feature B
#       details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#     - title: Feature C
#       details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import VideoBackground from "./src/components/VideoBackground.vue";
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
});
onUnmounted(() => {
  document.querySelector("header").style.visibility = "visible";
  document.body.style.overflow = "auto";
  document.lastChild.className = "";
});
</script>

<VideoBackground path="/english-notes/resources/bg3.mp4" />
<audio src="/english-notes/resources/1.ogg" loop id="msc" />