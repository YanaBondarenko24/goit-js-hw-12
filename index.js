import{S as P,i as h,a as q}from"./assets/vendor-CctE18Lr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();let $=new P(".gallery a");function E(t){return t.map(({webformatURL:r,largeImageURL:i,tags:n,likes:e,views:o,comments:a,downloads:C})=>`<li class="gallery-item">
     <a class="gallery-link" href="${i}">
     <img class="gallery-img" src="${r}" alt="${n}" width="360" height="200"/>
     </a>
     <ul class="gallery-info">
     <li class="gallery-info-item">
     <h3 class="gallery-info-title">Likes</h3>
     <p class="gallery-info-text">${e}</p>
     </li>
     <li class="gallery-info-item">
     <h3 class="gallery-info-title">Views</h3>
     <p class="gallery-info-text">${o}</p>
     </li>
     <li class="gallery-info-item">
     <h3 class="gallery-info-title">Comments</h3>
     <p class="gallery-info-text">${a}</p>
     </li>
     <li class="gallery-info-item">
     <h3 class="gallery-info-title">Downloads</h3>
     <p class="gallery-info-text">${C}</p>
     </li>
     </ul>
    </li>`).join("")}function m(t){S.insertAdjacentHTML("beforeend",E(t)),$.refresh()}function A(){S.innerHTML=""}function y(){x.classList.remove("hide")}function u(){x.classList.add("hide")}function p(){l.classList.remove("hide")}function f(){l.classList.add("hide")}function O(){v.classList.remove("hide")}function k(){v.classList.remove("hide")}function d(){h.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"})}function z(){h.error({message:"Please enter the correct name!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"})}function b(){h.error({message:"We're sorry, but you've reached the end of search results",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"})}const B="54675250-921b736f026c47058d05b606e",I="https://pixabay.com/api/",L=15,w=async(t,r=1)=>(await q.get(I,{params:{key:B,q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:L}})).data,M=document.querySelector(".form"),S=document.querySelector(".gallery"),x=document.querySelector(".loader"),l=document.querySelector(".gallery-btn"),v=document.querySelector(".nav-btn");M.addEventListener("submit",H);l.addEventListener("click",R);let c="",s=1,g=0;async function H(t){if(t.preventDefault(),f(),c=t.target.elements["search-text"].value.trim(),!c.length)return z();A(),y();try{s=1;const r=await w(c,s);if(!r.hits.length)return d();m(r.hits),p(),g=r.totalHits/L,s>=g&&(f(),b())}catch{d()}finally{u(),t.target.reset()}}async function R(){y(),f(),l.disabled=!0,k();try{s+=1;const t=await w(c,s);s>=g&&(f(),b()),O(),m(t.hits),u(),p(),l.disabled=!1;const i=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:`${i*2}`,behavior:"smooth"})}catch{d()}finally{u()}}
//# sourceMappingURL=index.js.map
