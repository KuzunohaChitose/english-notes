import{d,o as s,c as a,_ as c,j as r,z as l,H as i,k as u}from"./chunks/framework.4871ade1.js";const _=["src"],m=d({__name:"VideoBackground",props:{path:{}},setup(n){return(o,e)=>(s(),a("video",{class:"video",src:o.path,muted:"",autoplay:"",loop:""},null,8,_))}});const p=c(m,[["__scopeId","data-v-8d6d60a4"]]),h=u("audio",{src:"/english-notes/resources/1.ogg",loop:"",id:"msc"},null,-1),v=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"English Notes","text":"Some English grammar knowledge...","image":{"src":"/resources/logo.png","alt":"Chitose","style":{"box-shadow":"#3891ab 0 0 20px 5px","border-radius":"50%"}},"actions":[{"theme":"brand","text":"Getting Start","link":"/md/quick-start"},{"theme":"alt","text":"Play Music","link":"javascript:void(0)","id":"player"}]}},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),y={name:"index.md"},f=Object.assign(y,{setup(n){const o=e=>{e.preventDefault();const t=document.querySelector("#msc");t.paused?t.play():t.pause()};return r(()=>{document.querySelectorAll("a.VPButton")[1].addEventListener("click",o),document.querySelector("header").style.visibility="hidden",document.body.style.overflow="hidden",document.lastChild.className="dark"}),l(()=>{document.querySelector("header").style.visibility="visible",document.body.style.overflow="auto",document.lastChild.className=""}),(e,t)=>(s(),a("div",null,[i(p,{path:"/english-notes/resources/bg3.mp4"}),h]))}});export{v as __pageData,f as default};
