import{a as d,S as g,i as h}from"./assets/vendor-CC7y-xQd.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="54675250-921b736f026c47058d05b606e",p="https://pixabay.com/api/",L=t=>d.get(p,{params:{key:y,q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(i=>i.data.hits);let b=new g(".gallery a");function S(t){return t.map(({webformatURL:i,largeImageURL:o,tags:s,likes:e,views:r,comments:l,downloads:m})=>`<li class="gallery-list">
 <a class="gallery-link" href="${o}">
 <img class="gallery-img" src="${i}" alt ="${s}" width="360" height="200"/>
 </a>
 <ul class="info">
 <li class="info-list">
 <h3 class="gallery-item-title">Likes</h3>
 <p class="gallery-item-text">${e}</p>
 </li>
 <li class="info-list">
 <h3 class="gallery-item-title">Views</h3>
 <p class="gallery-item-text">${r}</p>
 </li>
 <li class="info-list">
 <h3 class="gallery-item-title">Comments</h3>
 <p class="gallery-item-text">${l}</p>
 </li>
 <li class="info-list">
 <h3 class="gallery-item-title">Downloads</h3>
 <p class="gallery-item-text">${m}</p>
 </li>
 </ul>
 </li>`).join("")}function x(t){n.innerHTML=S(t),b.refresh()}function $(){n.innerHTML=""}function q(){f.classList.remove("hide")}function u(){f.classList.add("hide")}function c(){h.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"})}const v=document.querySelector(".form"),w=document.querySelector("input"),n=document.querySelector(".gallery"),f=document.querySelector(".loader");v.addEventListener("submit",P);n.addEventListener("click",C);let a="";function P(t){if(t.preventDefault(),q(),$(),a=w.value.trim(),a===""){u();return}O()}function O(){L(a).then(t=>{t.length===0?c():x(t)}).catch(()=>{c()}).finally(()=>{u()})}function C(t){t.target.classList.contains("gallery-img")}
//# sourceMappingURL=index.js.map
